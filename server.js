const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

// In-memory store (swap with DB later)
const store = {
  subscriptions: {},
  events: [],
};

/**
 * Stripe webhook MUST use raw body
 */
app.post(
  "/api/stripe/webhook",
  express.raw({ type: "application/json" }),
  (req, res) => {
    const signature = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        signature,
        endpointSecret
      );
    } catch (err) {
      console.error("Webhook signature verification failed:", err.message);
      return res.status(400).send("Invalid webhook signature");
    }

    try {
      switch (event.type) {
        case "checkout.session.completed": {
          const session = event.data.object;

          const plan =
            session.amount_total >= 99900
              ? "elite"
              : session.amount_total >= 29900
              ? "pro"
              : "starter";

          store.subscriptions[session.id] = {
            email: session.customer_email,
            plan,
            active: true,
            createdAt: Date.now(),
          };

          break;
        }

        default:
          break;
      }

      return res.json({ received: true });
    } catch (err) {
      console.error("Webhook handling error:", err);
      return res.status(500).json({ error: "Webhook handler failed" });
    }
  }
);

/**
 * IMPORTANT:
 * Stripe webhook route uses raw body, so JSON middleware must come AFTER
 */
app.use(express.json());

/**
 * VERIFY SESSION
 */
app.post("/api/verify-session", (req, res) => {
  const { session_id } = req.body;

  if (!session_id) {
    return res.status(400).json({ valid: false, error: "Missing session_id" });
  }

  const sub = store.subscriptions[session_id];

  if (!sub || !sub.active) {
    return res.json({ valid: false });
  }

  return res.json({
    valid: true,
    plan: sub.plan,
  });
});

/**
 * EVENT LOGGER
 */
app.post("/api/event", (req, res) => {
  const event = {
    ...req.body,
    time: Date.now(),
  };

  store.events.push(event);

  console.log("EVENT:", event);

  res.json({ ok: true });
});

/**
 * DEBUG ENDPOINTS
 */
app.get("/api/debug/subscriptions", (req, res) => {
  res.json(store.subscriptions);
});

app.get("/api/debug/events", (req, res) => {
  res.json(store.events);
});

/**
 * START SERVER
 */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`NorthSky backend running on :${PORT}`);
});