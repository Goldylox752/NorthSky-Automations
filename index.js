// index.js
// NorthSky Enterprise Pipeline Platform Backend

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

/* =========================================
   MIDDLEWARE
========================================= */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* =========================================
   STATIC FRONTEND
========================================= */
app.use(express.static(path.join(__dirname, "public")));

/* =========================================
   MEMORY DATABASE (temporary)
========================================= */
const analytics = {
  pageViews: 0,
  vipRequests: [],
  events: [],
};

/* =========================================
   GLOBAL VISITOR TRACKING
========================================= */
app.use((req, res, next) => {
  analytics.pageViews++;

  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("🌐 VISITOR");
  console.log("URL:", req.originalUrl);
  console.log("IP:", req.headers["x-forwarded-for"] || req.socket.remoteAddress);
  console.log("TIME:", new Date().toISOString());

  next();
});

/* =========================================
   HEALTH CHECK
========================================= */
app.get("/health", (req, res) => {
  res.json({
    success: true,
    app: "NorthSky Elite",
    uptime: process.uptime(),
    pageViews: analytics.pageViews,
    timestamp: Date.now(),
  });
});

/* =========================================
   ANALYTICS EVENT TRACKING
========================================= */
app.post("/api/track", (req, res) => {
  try {
    const event = {
      ...req.body,
      ip:
        req.headers["x-forwarded-for"] ||
        req.socket.remoteAddress,
      userAgent: req.headers["user-agent"],
      createdAt: new Date().toISOString(),
    };

    analytics.events.push(event);

    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("📊 EVENT TRACKED");
    console.log(JSON.stringify(event, null, 2));

    res.json({
      success: true,
    });

  } catch (err) {
    console.error("Tracking error:", err);

    res.status(500).json({
      success: false,
      error: "Tracking failed",
    });
  }
});

/* =========================================
   VIP DEMO REQUESTS
========================================= */
app.post("/api/demo-request", (req, res) => {
  try {
    const { name, email, company } = req.body;

    if (!name || !email || !company) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields",
      });
    }

    const lead = {
      name,
      email,
      company,
      ip:
        req.headers["x-forwarded-for"] ||
        req.socket.remoteAddress,
      userAgent: req.headers["user-agent"],
      createdAt: new Date().toISOString(),
      leadScore: "HIGH VALUE",
      source: "northsky_elite",
    };

    analytics.vipRequests.push(lead);

    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("💎 VIP LEAD CAPTURED");
    console.log(JSON.stringify(lead, null, 2));

    // Future integrations:
    // - Supabase
    // - HubSpot
    // - Salesforce
    // - Slack alerts
    // - Discord webhook
    // - Email automation
    // - AI scoring engine

    res.json({
      success: true,
      message: "VIP request submitted",
    });

  } catch (err) {
    console.error("VIP request error:", err);

    res.status(500).json({
      success: false,
      error: "Submission failed",
    });
  }
});

/* =========================================
   LIVE DASHBOARD DATA
========================================= */
app.get("/api/stats", (req, res) => {
  res.json({
    success: true,
    stats: {
      pageViews: analytics.pageViews,
      vipRequests: analytics.vipRequests.length,
      trackedEvents: analytics.events.length,
      latestLead:
        analytics.vipRequests[
          analytics.vipRequests.length - 1
        ] || null,
    },
  });
});

/* =========================================
   FALLBACK ROUTE
========================================= */
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "index.html")
  );
});

/* =========================================
   START SERVER
========================================= */
app.listen(PORT, () => {
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("🚀 NORTHSKY ELITE ACTIVE");
  console.log(`🌍 PORT: ${PORT}`);
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━");
});