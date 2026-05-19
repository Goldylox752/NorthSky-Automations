import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export const config = {
  api: { bodyParser: false },
};

export default async function handler(req, res) {
  const sig = req.headers["stripe-signature"];

  let event;

  try {
    const rawBody = await buffer(req);

    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature error:", err.message);
    return res.status(400).send("Invalid webhook");
  }

  try {
    switch (event.type) {

      // ✅ MAIN ENTRY POINT
      case "checkout.session.completed": {
        const session = event.data.object;

        if (!session.metadata?.user_id) break;

        await supabase.from("subscriptions").upsert({
          user_id: session.metadata.user_id,
          stripe_customer_id: session.customer,
          plan: session.metadata.plan,
          status: "active",
          updated_at: new Date().toISOString(),
        });

        break;
      }

      // 🔄 SUBSCRIPTION CREATED / UPDATED (more reliable than invoices)
      case "customer.subscription.created":
      case "customer.subscription.updated": {
        const sub = event.data.object;

        await supabase
          .from("subscriptions")
          .update({
            status: sub.status,
            updated_at: new Date().toISOString(),
          })
          .eq("stripe_customer_id", sub.customer);

        break;
      }

      // ❌ CANCELLATION (correct source of truth)
      case "customer.subscription.deleted": {
        const sub = event.data.object;

        await supabase
          .from("subscriptions")
          .update({
            status: "canceled",
            updated_at: new Date().toISOString(),
          })
          .eq("stripe_customer_id", sub.customer);

        break;
      }

      default:
        break;
    }

    return res.json({ received: true });

  } catch (err) {
    console.error("Webhook processing error:", err);
    return res.status(500).json({ error: "Webhook failed" });
  }
}

// raw body buffer helper
async function buffer(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  return Buffer.concat(chunks);
}