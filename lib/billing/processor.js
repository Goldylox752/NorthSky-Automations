import { supabase } from "@/lib/supabase/client";

export async function processStripeEvent(event) {
  const eventId = event.id;
  const type = event.type;
  const data = event.data?.object;

  try {
    /* ===============================
       ROUTER
    =============================== */
    switch (type) {
      case "checkout.session.completed":
        console.log("Checkout completed:", data?.id);
        break;

      case "invoice.paid":
        console.log("Invoice paid:", data?.customer);
        break;

      case "customer.subscription.created":
        console.log("Subscription created:", data?.id);
        break;

      case "customer.subscription.updated":
        console.log("Subscription updated:", data?.id);
        break;

      case "customer.subscription.deleted":
        console.log("Subscription canceled:", data?.id);
        break;

      default:
        console.log("Unhandled event:", type);
        break;
    }

    /* ===============================
       LOG SUCCESS EVENT
    =============================== */
    await supabase.from("billing_events").insert({
      stripe_event_id: eventId,
      type,
      payload: data,
      status: "processed",
      created_at: new Date().toISOString(),
    });

    return { success: true };
  } catch (err) {
    console.error("Stripe event error:", err);

    /* ===============================
       LOG FAILURE EVENT
    =============================== */
    await supabase.from("billing_events").insert({
      stripe_event_id: eventId,
      type,
      payload: data,
      status: "failed",
      error: err?.message || "UNKNOWN_ERROR",
      created_at: new Date().toISOString(),
    });

    return { success: false, error: err?.message };
  }
}