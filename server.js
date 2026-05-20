const express = require("express");
const Stripe = require("stripe");

const app = express();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

/* ===============================
   SIMPLE STORE (replace with DB later)
=============================== */
const store = {
  subscriptions: {},
  events: [],
};

/* ===============================
   STRIPE WEBHOOK (RAW BODY REQUIRED)
=============================== */
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
      console.error("Webhook signature failed:", err.message);
      return res.status(400).send("Invalid signature");
    }

    try {
      const data = event.data?.object;

      switch (event.type) {
        case "checkout.session.completed": {
          const session = data;

          const amount = session.amount_total || 0;

          const plan =
            amount >= 99900
              ? "elite"
              : amount >= 29900
              ? "pro"
              : "starter";

          store.subscriptions[session.id] = {
            email: session.customer_email || null,
            plan,
            active: true,
            createdAt: Date.now(),
          };

          break;
        }

        case "customer.subscription.deleted": {
          const sub = data;
          if (store.subscriptions[sub.id]) {
            store.subscriptions[sub.id].active = false;
          }
          break;
        }

        default:
          console.log("Unhandled event:", event.type);
          break;
      }

      store.events.push({
        id: event.id,
        type: event.type,
        createdAt: Date.now(),
      });

      return res.json({ received: true });
    } catch (err) {
      console.error("Webhook handling error:", err);
      return res.status(500).json({ error: "Webhook handler failed" });
    }
  }
);

/* ===============================
   JSON MIDDLEWARE (AFTER WEBHOOK)
=============================== */
app.use(express.json());

/* ===============================
   VERIFY SESSION
=============================== */
app.post("/api/verify-session", (req, res) => {
  const { session_id } = req.body;

  if (!session_id) {
    return res.status(400).json({
      valid: false,
      error: "Missing session_id",
    });
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

/* ===============================
   EVENT TRACKING ENDPOINT
=============================== */
app.post("/api/event", (req, res) => {
  const event = {
    ...req.body,
    time: Date.now(),
  };

  store.events.push(event);

  console.log("EVENT:", event);

  res.json({ ok: true });
});

/* ===============================
   DEBUG ROUTES
=============================== */
app.get("/api/debug/subscriptions", (req, res) => {
  res.json(store.subscriptions);
});

app.get("/api/debug/events", (req, res) => {
  res.json(store.events);
});

/* ===============================
   START SERVER
=============================== */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});