// NorthSky UI + Interaction Engine
(() => {

  "use strict";

  // -----------------------------------
  // CONFIG
  // -----------------------------------
  const CONFIG = {
    demoUrl: "https://exchange-8gxt.onrender.com",
    animationDuration: 1600,
    revealThreshold: 0.12
  };

  // -----------------------------------
  // HELPERS
  // -----------------------------------
  const $ = (selector, scope = document) =>
    scope.querySelector(selector);

  const $$ = (selector, scope = document) =>
    [...scope.querySelectorAll(selector)];

  // -----------------------------------
  // SCROLL REVEALS
  // -----------------------------------
  const revealObserver = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) return;

        entry.target.classList.add("in");

        revealObserver.unobserve(entry.target);

      });

    },
    {
      threshold: CONFIG.revealThreshold
    }
  );

  $$("[data-reveal]").forEach((el, idx) => {

    el.style.transitionDelay =
      `${(idx % 5) * 70}ms`;

    revealObserver.observe(el);

  });

  // -----------------------------------
  // COUNT-UP STATISTICS
  // -----------------------------------
  const animateValue = ({
    el,
    target = 0,
    prefix = "",
    suffix = "",
    duration = CONFIG.animationDuration
  }) => {

    const start = performance.now();

    const update = (now) => {

      const progress =
        Math.min((now - start) / duration, 1);

      const eased =
        1 - Math.pow(1 - progress, 3);

      const current =
        Math.round(eased * target);

      el.textContent =
        `${prefix}${current}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      }

    };

    requestAnimationFrame(update);

  };

  const counterObserver = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) return;

        const el = entry.target;

        const target =
          parseFloat(el.dataset.count || 0);

        const prefix =
          el.dataset.prefix || "";

        const suffix =
          el.dataset.suffix || "";

        const display =
          el.dataset.display;

        // Static display value
        if (display) {

          el.textContent = display;

          counterObserver.unobserve(el);

          return;

        }

        animateValue({
          el,
          target,
          prefix,
          suffix
        });

        counterObserver.unobserve(el);

      });

    },
    {
      threshold: 0.45
    }
  );

  $$("[data-count]").forEach((el) => {
    counterObserver.observe(el);
  });

  // -----------------------------------
  // HERO METRIC ANIMATION
  // -----------------------------------
  const heroMetrics = [
    {
      id: "counter-close",
      target: 41,
      suffix: "%"
    },
    {
      id: "counter-leads",
      target: 127,
      suffix: ""
    }
  ];

  heroMetrics.forEach((metric, index) => {

    const el = document.getElementById(metric.id);

    if (!el) return;

    setTimeout(() => {

      animateValue({
        el,
        target: metric.target,
        suffix: metric.suffix,
        duration: 1800
      });

    }, 700 + (index * 180));

  });

  // -----------------------------------
  // FEATURE PANEL SWITCHING
  // -----------------------------------
  const featureItems = $$(".feat");

  const previewPanels =
    $$(".preview-panel");

  const switchFeature = (index) => {

    featureItems.forEach((item) => {
      item.classList.remove("active");
    });

    previewPanels.forEach((panel) => {
      panel.classList.remove("active");
    });

    const activeItem =
      $(`.feat[data-feat="${index}"]`);

    const activePanel =
      document.getElementById(`feat-${index}`);

    activeItem?.classList.add("active");

    activePanel?.classList.add("active");

  };

  featureItems.forEach((item) => {

    if (item.dataset.bound) return;

    item.dataset.bound = "true";

    item.addEventListener("click", () => {

      switchFeature(item.dataset.feat);

    });

  });

  // -----------------------------------
  // FAQ ACCORDION
  // -----------------------------------
  const faqItems =
    $$(".faq-item");

  const toggleFaq = (item) => {

    const isOpen =
      item.classList.contains("open");

    faqItems.forEach((faq) => {
      faq.classList.remove("open");
    });

    if (!isOpen) {
      item.classList.add("open");
    }

  };

  faqItems.forEach((item) => {

    const btn =
      $(".faq-btn", item);

    if (!btn || btn.dataset.bound) return;

    btn.dataset.bound = "true";

    btn.addEventListener("click", (e) => {

      e.preventDefault();

      toggleFaq(item);

    });

  });

  // Open first FAQ by default
  if (
    faqItems.length &&
    !$(".faq-item.open")
  ) {
    faqItems[0].classList.add("open");
  }

  // -----------------------------------
  // SMOOTH SCROLL
  // -----------------------------------
  $$('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (e) => {

      const id =
        link.getAttribute("href").slice(1);

      const target =
        document.getElementById(id);

      if (!target) return;

      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });

  // -----------------------------------
  // DEMO / CTA BUTTONS
  // -----------------------------------
  const openDemo = () => {

    window.open(
      CONFIG.demoUrl,
      "_blank",
      "noopener,noreferrer"
    );

  };

  const ctaButtons = $$(
    ".btn-primary, .btn-white, .nav-cta"
  );

  ctaButtons.forEach((btn) => {

    if (btn.dataset.bound) return;

    btn.dataset.bound = "true";

    btn.addEventListener("click", (e) => {

      e.preventDefault();

      openDemo();

    });

  });

  // -----------------------------------
  // NAVBAR SHADOW ON SCROLL
  // -----------------------------------
  const navbar =
    $("header");

  const updateNavbar = () => {

    if (!navbar) return;

    if (window.scrollY > 20) {

      navbar.classList.add(
        "border-white\\/10",
        "bg-black\\/80",
        "backdrop-blur-xl"
      );

    } else {

      navbar.classList.remove(
        "bg-black\\/80"
      );

    }

  };

  window.addEventListener(
    "scroll",
    updateNavbar
  );

  updateNavbar();

})();