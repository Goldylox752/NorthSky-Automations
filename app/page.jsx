import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="hero">

        <h1>Build Smarter Businesses with AI</h1>

        <p>
          NorthSky is an AI software company building intelligent infrastructure
          for modern businesses. Our platform combines AI agents, customer
          communications, CRM automation, workflow orchestration, and revenue
          systems into one connected operating platform.
        </p>

        <div style={{ marginTop: "32px" }}>
          <Link href="/app">
            <button className="btn">
              Launch Platform
            </button>
          </Link>
        </div>

      </section>

      {/* TRUST */}

      <section className="section">

        <h2>Built for Modern Businesses</h2>

        <p className="story">
          Trusted by companies looking to automate operations, improve customer
          experience, and generate more revenue through intelligent AI software.
        </p>

      </section>

      {/* FEATURES */}

      <section className="section">

        <h2>AI Products That Work Together</h2>

        <div className="grid">

          <div className="card">
            <h3>AI Voice Agents</h3>
            <p>
              Answer calls, qualify leads, schedule appointments, and provide
              customer support 24 hours a day.
            </p>
          </div>

          <div className="card">
            <h3>CRM Automation</h3>
            <p>
              Manage customers, automate follow-ups, organize your sales
              pipeline, and never lose another opportunity.
            </p>
          </div>

          <div className="card">
            <h3>Workflow Automation</h3>
            <p>
              Connect your business tools and eliminate repetitive work using
              AI-powered automation.
            </p>
          </div>

          <div className="card">
            <h3>Revenue Platform</h3>
            <p>
              Manage subscriptions, invoices, payments, analytics, and customer
              billing from one centralized platform.
            </p>
          </div>

        </div>

      </section>

      {/* WHY */}

      <section className="section">

        <h2>Why Businesses Choose NorthSky</h2>

        <div className="grid">

          <div className="card">
            <h3>AI-First Platform</h3>
            <p>
              Built from the ground up around artificial intelligence rather
              than adding AI as an afterthought.
            </p>
          </div>

          <div className="card">
            <h3>Automate Operations</h3>
            <p>
              Reduce manual work while AI handles customer communication,
              scheduling, and lead qualification.
            </p>
          </div>

          <div className="card">
            <h3>Increase Revenue</h3>
            <p>
              Convert more leads into customers using intelligent automation and
              data-driven workflows.
            </p>
          </div>

          <div className="card">
            <h3>Enterprise Ready</h3>
            <p>
              Secure cloud infrastructure, scalable architecture, and API
              integrations built for modern businesses.
            </p>
          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section className="section">

        <h2>How It Works</h2>

        <div className="grid">

          <div className="card">
            <h3>1. Capture</h3>
            <p>
              Collect leads from your website, phone calls, forms, and digital
              marketing campaigns.
            </p>
          </div>

          <div className="card">
            <h3>2. Qualify</h3>
            <p>
              AI instantly responds, answers questions, scores leads, and
              determines customer intent.
            </p>
          </div>

          <div className="card">
            <h3>3. Convert</h3>
            <p>
              Automatically schedule meetings, send estimates, and move
              prospects through your sales pipeline.
            </p>
          </div>

          <div className="card">
            <h3>4. Grow</h3>
            <p>
              Manage customers, automate follow-ups, track revenue, and optimize
              your operations.
            </p>
          </div>

        </div>

      </section>

      {/* PRODUCTS */}

      <section className="section">

        <h2>Featured Products</h2>

        <div className="grid">

          <div className="card">
            <h3>RoofFlow AI</h3>
            <p>
              AI-powered sales automation for roofing contractors that captures
              leads, books estimates, and manages customer pipelines.
            </p>
          </div>

          <div className="card">
            <h3>CleanFlow AI</h3>
            <p>
              AI receptionist and operations platform for cleaning companies,
              automating calls, bookings, and customer communication.
            </p>
          </div>

          <div className="card">
            <h3>NorthSky Operator</h3>
            <p>
              Monitor AI agents, workflows, customer conversations, analytics,
              and automation performance from one dashboard.
            </p>
          </div>

          <div className="card">
            <h3>Revenue Engine</h3>
            <p>
              Subscription billing, payments, reporting, and recurring revenue
              management in one unified platform.
            </p>
          </div>

        </div>

      </section>

      {/* STORY */}

      <section className="section">

        <h2>Why NorthSky Exists</h2>

        <p className="story">
          Most businesses lose opportunities because they rely on disconnected
          software, manual processes, and slow response times. NorthSky replaces
          fragmented tools with one intelligent operating platform that combines
          AI, automation, CRM, communications, and revenue systems into a single
          experience.
        </p>

      </section>

      {/* CTA */}

      <section className="cta">

        <h2>Build the Future of Your Business</h2>

        <p>
          Replace repetitive work with intelligent AI systems that answer
          customers, automate operations, and help your business grow around the
          clock.
        </p>

        <div style={{ marginTop: "32px" }}>
          <Link href="/app">
            <button className="btn">
              Launch Platform
            </button>
          </Link>
        </div>

      </section>

    </main>
  );
}
