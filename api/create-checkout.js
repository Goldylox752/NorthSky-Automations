import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Safe whitelist (IMPORTANT for SaaS)
const PLANS = {
  starter: process.env.STRIPE_PRICE_STARTER,
  growth: process.env.STRIPE_PRICE_GROWTH,
  domination: process.env.STRIPE_PRICE_DOMINATION,
};

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { plan, userId } = req.body;

    // Validate input
    if (!plan || !PLANS[plan]) {
      return res.status(400).json({ error: "Invalid plan" });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],

      line_items: [
        {
          price: PLANS[plan],
          quantity: 1,
        },
      ],

      metadata: {
        user_id: userId || "guest",
        plan,
      },

      success_url: `${process.env.DOMAIN}/dashboard?success=1`,
      cancel_url: `${process.env.DOMAIN}/pricing`,
    });

    if (!session?.url) {
      return res.status(500).json({ error: "Failed to create session" });
    }

    return res.status(200).json({ url: session.url });

  } catch (err) {
    console.error("Stripe checkout error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}