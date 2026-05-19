<script type="module">

async function startCheckout(plan, btn) {
  let originalText = "";

  try {
    if (btn) {
      btn.disabled = true;
      originalText = btn.innerText;
      btn.innerText = "Creating secure session...";
    }

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ plan })
    });

    if (!res.ok) {
      throw new Error(`Server error: ${res.status}`);
    }

    const data = await res.json();

    if (!data?.url) {
      throw new Error("Invalid checkout session response");
    }

    // small UX delay feels more "enterprise SaaS"
    setTimeout(() => {
      window.location.assign(data.url);
    }, 400);

  } catch (err) {
    console.error("Checkout error:", err);

    alert("Unable to start checkout. Please try again or contact support.");

    if (btn) {
      btn.disabled = false;
      btn.innerText = originalText || "Start Plan";
    }
  }
}

window.startCheckout = startCheckout;

</script>