import express from "express";
import Stripe from "stripe";

const app = express();

/* ─────────────────────────────
   STRIPE SETUP
───────────────────────────── */

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

/* ─────────────────────────────
   SIMPLE IN-MEMORY STORE (swap with DB later)
───────────────────────────── */

const store = {
  subscriptions: new Map(),
  events: []
};

/* ─────────────────────────────
   STRIPE WEBHOOK (RAW BODY REQUIRED)
───────────────────────────── */

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
      console.error("❌ Stripe signature failed:", err.message);
      return res.status(400).send("Invalid signature");
    }

    try {
      const data = event?.data?.object;

      switch (event.type) {
        /* ===============================
           CHECKOUT COMPLETED
        =============================== */
        case "checkout.session.completed": {
          const session = data;

          const amount = Number(session.amount_total || 0);

          const plan =
            amount >= 99900
              ? "elite"
              : amount >= 29900
              ? "pro"
              : "starter";

          store.subscriptions.set(session.id, {
            email: session.customer_email || null,
            plan,
            active: true,
            createdAt: Date.now()
          });

          break;
        }

        /* ===============================
           SUBSCRIPTION CANCELLED
        =============================== */
        case "customer.subscription.deleted": {
          const sub = data;

          const existing = store.subscriptions.get(sub.id);

          if (existing) {
            existing.active = false;
            store.subscriptions.set(sub.id, existing);
          }

          break;
        }

        default:
          console.log("Unhandled Stripe event:", event.type);
      }

      store.events.push({
        id: event.id,
        type: event.type,
        createdAt: Date.now()
      });

      return res.json({ received: true });
    } catch (err) {
      console.error("❌ Webhook handler error:", err);
      return res.status(500).json({ error: "Webhook processing failed" });
    }
  }
);

/* ─────────────────────────────
   JSON MIDDLEWARE (AFTER WEBHOOK)
───────────────────────────── */

app.use(express.json());

/* ─────────────────────────────
   VERIFY SESSION
───────────────────────────── */

app.post("/api/verify-session", (req, res) => {
  const { session_id } = req.body;

  if (!session_id) {
    return res.status(400).json({
      valid: false,
      error: "Missing session_id"
    });
  }

  const sub = store.subscriptions.get(session_id);

  if (!sub || !sub.active) {
    return res.json({ valid: false });
  }

  return res.json({
    valid: true,
    plan: sub.plan
  });
});

/* ─────────────────────────────
   EVENT TRACKING
───────────────────────────── */

app.post("/api/event", (req, res) => {
  const event = {
    ...req.body,
    time: Date.now()
  };

  store.events.push(event);

  console.log("📊 EVENT:", event);

  res.json({ ok: true });
});

/* ─────────────────────────────
   DEBUG ROUTES
───────────────────────────── */

app.get("/api/debug/subscriptions", (req, res) => {
  res.json(Object.fromEntries(store.subscriptions));
});

app.get("/api/debug/events", (req, res) => {
  res.json(store.events);
});

/* ─────────────────────────────
   START SERVER
───────────────────────────── */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});