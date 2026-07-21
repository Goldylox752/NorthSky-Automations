export const metadata = {
  title: "Products | NorthSky",
  description:
    "Explore NorthSky AI products including automation, AI agents, CRM systems, and revenue platforms.",
};

export default function ProductsPage() {
  return (
    <main>

      {/* HERO */}

      <section className="hero">

        <h1>
          AI Products Built for Business Growth
        </h1>

        <p>
          NorthSky creates intelligent software systems that help
          businesses automate operations, capture opportunities,
          and increase revenue.
        </p>

      </section>


      {/* PRODUCTS */}

      <section className="section">

        <h2>
          NorthSky Platform
        </h2>


        <div className="grid">


          <div className="card">

            <h3>
              NorthSky AI Agents
            </h3>

            <p>
              Deploy intelligent AI assistants that communicate with
              customers, answer questions, qualify opportunities,
              and complete business tasks automatically.
            </p>

          </div>



          <div className="card">

            <h3>
              RoofFlow AI
            </h3>

            <p>
              A complete AI sales system for roofing companies.
              Capture leads, qualify homeowners, schedule estimates,
              and manage the sales pipeline.
            </p>

          </div>



          <div className="card">

            <h3>
              CleanFlow AI
            </h3>

            <p>
              AI-powered receptionist and automation software for
              cleaning companies. Manage calls, bookings, customers,
              and follow-ups.
            </p>

          </div>



          <div className="card">

            <h3>
              NorthSky CRM
            </h3>

            <p>
              Customer relationship management powered by AI.
              Track conversations, opportunities, customers,
              and business performance.
            </p>

          </div>



          <div className="card">

            <h3>
              NorthSky Automations
            </h3>

            <p>
              Connect your tools and automate repetitive workflows
              with intelligent triggers, actions, and AI decisions.
            </p>

          </div>



          <div className="card">

            <h3>
              Revenue Engine
            </h3>

            <p>
              Subscription billing, payments, analytics, and revenue
              management built into one powerful platform.
            </p>

          </div>


        </div>

      </section>



      {/* PLATFORM */}

      <section className="section">

        <h2>
          One Connected AI Platform
        </h2>


        <p className="story">

          Instead of managing dozens of disconnected applications,
          businesses can use NorthSky to manage customer interactions,
          automate operations, and monitor growth from one unified
          intelligent system.

        </p>


      </section>



      {/* FEATURES */}

      <section className="section">


        <h2>
          Platform Features
        </h2>


        <div className="grid">


          <div className="card">

            <h3>
              AI Communication
            </h3>

            <p>
              Voice, chat, and automated messaging systems that
              respond instantly.
            </p>

          </div>



          <div className="card">

            <h3>
              Lead Intelligence
            </h3>

            <p>
              AI scoring and qualification to identify the best
              opportunities.
            </p>

          </div>



          <div className="card">

            <h3>
              Business Analytics
            </h3>

            <p>
              Real-time insights into customers, revenue,
              and automation performance.
            </p>

          </div>



          <div className="card">

            <h3>
              API Infrastructure
            </h3>

            <p>
              Flexible systems designed to integrate with modern
              business software.
            </p>

          </div>


        </div>


      </section>



      {/* CTA */}

      <section className="cta">

        <h2>
          Build With NorthSky
        </h2>

        <p>
          Deploy AI systems that work around the clock and help
          your business operate faster.
        </p>


        <br />


        <a href="/app">
          <button className="btn">
            Launch Platform
          </button>
        </a>


      </section>


    </main>
  );
}
