import Link from "next/link";

export const metadata = {
  title: "NorthSky Automations | AI Business Operating System",
  description:
    "NorthSky builds AI automation systems, voice agents, CRM platforms, and revenue tools for modern businesses.",
};

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="hero">

        <h1>
          Build Smarter Businesses With AI
        </h1>

        <p>
          NorthSky builds intelligent business infrastructure using AI agents,
          automation, CRM systems, customer communications, and revenue
          platforms designed for the modern economy.
        </p>

        <div className="mt-8">
          <Link href="/app" className="btn">
            Launch Platform
          </Link>
        </div>

      </section>


      {/* TRUST */}
      <section className="section">

        <h2>
          Built For Modern Businesses
        </h2>

        <p className="story">
          Companies use NorthSky to automate operations, improve customer
          experiences, and increase revenue through intelligent AI software.
        </p>

      </section>


      {/* FEATURES */}
      <section className="section">

        <h2>
          AI Products That Work Together
        </h2>

        <div className="grid">

          <Feature
            title="AI Voice Agents"
            text="Answer calls, qualify leads, schedule appointments, and support customers 24/7."
          />

          <Feature
            title="CRM Automation"
            text="Manage customers, automate follow-ups, organize sales pipelines, and track opportunities."
          />

          <Feature
            title="Workflow Automation"
            text="Connect your business tools and eliminate repetitive tasks using AI."
          />

          <Feature
            title="Revenue Platform"
            text="Manage subscriptions, payments, analytics, and customer billing."
          />

        </div>

      </section>


      {/* WHY */}
      <section className="section">

        <h2>
          Why Businesses Choose NorthSky
        </h2>

        <div className="grid">

          <Feature
            title="AI First"
            text="Built around artificial intelligence from the foundation."
          />

          <Feature
            title="Automate Operations"
            text="Let AI handle communication, scheduling, and qualification."
          />

          <Feature
            title="Increase Revenue"
            text="Convert more customers with intelligent workflows."
          />

          <Feature
            title="Enterprise Ready"
            text="Secure infrastructure designed to scale."
          />

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section className="section">

        <h2>
          How It Works
        </h2>

        <div className="grid">

          <Feature
            title="1. Capture"
            text="Collect leads from websites, calls, forms, and campaigns."
          />

          <Feature
            title="2. Qualify"
            text="AI responds instantly and determines customer intent."
          />

          <Feature
            title="3. Convert"
            text="Schedule meetings, send estimates, and close opportunities."
          />

          <Feature
            title="4. Grow"
            text="Automate follow-ups and optimize operations."
          />

        </div>

      </section>


      {/* PRODUCTS */}
      <section className="section">

        <h2>
          Featured Products
        </h2>

        <div className="grid">

          <Feature
            title="RoofFlow AI"
            text="AI sales automation platform for roofing contractors."
          />

          <Feature
            title="CleanFlow AI"
            text="AI receptionist and booking automation for cleaning companies."
          />

          <Feature
            title="NorthSky Operator"
            text="Control AI agents, workflows, analytics, and conversations."
          />

          <Feature
            title="Revenue Engine"
            text="Subscription billing, payments, and revenue management."
          />

        </div>

      </section>


      {/* STORY */}
      <section className="section">

        <h2>
          Why NorthSky Exists
        </h2>

        <p className="story">
          Businesses lose revenue because their software is disconnected.
          NorthSky combines AI, automation, CRM, communications, and payments
          into one intelligent operating system.
        </p>

      </section>


      {/* CTA */}
      <section className="cta">

        <h2>
          Build The Future Of Your Business
        </h2>

        <p>
          Replace repetitive work with AI systems that communicate, automate,
          and grow your business around the clock.
        </p>

        <div className="mt-8">

          <Link href="/app" className="btn">
            Launch Platform
          </Link>

        </div>

      </section>


    </main>
  );
}



function Feature({ title, text }) {

  return (

    <div className="card">

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

    </div>

  );

}
