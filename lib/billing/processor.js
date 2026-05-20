import { supabase } from "@/lib/supabase";

export async function processStripeEvent(event) {
  const type = event.type;
  const data = event.data.object;

  try {
    switch (type) {
      case "checkout.session.completed":
        console.log("Checkout completed:", data.id);
        break;

      case "invoice.paid":
        console.log("Invoice paid:", data.customer);
        break;

      case "customer.subscription.created":
        console.log("Subscription created:", data.id);
        break;

      case "customer.subscription.deleted":
        console.log("Subscription canceled:", data.id);
        break;

      default:
        console.log("Unhandled event:", type);
    }

    await supabase.from("billing_events").insert({
      stripe_event_id: event.id,
      type,
      payload: data,
      status: "processed",
      created_at: new Date().toISOString(),
    });
  } catch (err) {
    console.error("Stripe event error:", err);

    await supabase.from("billing_events").insert({
      stripe_event_id: event.id,
      type,
      payload: data,
      status: "failed",
      error: err.message,
      created_at: new Date().toISOString(),
    });

    throw err;
  }
}