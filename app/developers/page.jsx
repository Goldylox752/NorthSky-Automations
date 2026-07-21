export const metadata = {
  title: "Developers | NorthSky",
  description:
    "Build with NorthSky AI infrastructure, APIs, integrations, and developer tools.",
};

export default function DevelopersPage() {
  return (
    <main>

      {/* HERO */}

      <section className="hero">

        <h1>
          Build With NorthSky AI Infrastructure
        </h1>

        <p>
          Powerful APIs, intelligent automation tools, and developer
          resources that help you build the next generation of AI-powered
          applications.
        </p>

      </section>



      {/* PLATFORM */}

      <section className="section">

        <h2>
          Developer Platform
        </h2>


        <div className="grid">


          <div className="card">

            <h3>
              AI Agent API
            </h3>

            <p>
              Create, deploy, and manage intelligent AI agents that can
              communicate with customers, complete tasks, and automate
              business workflows.
            </p>

          </div>



          <div className="card">

            <h3>
              Automation API
            </h3>

            <p>
              Connect NorthSky with your existing applications and build
              custom automated workflows using powerful APIs.
            </p>

          </div>



          <div className="card">

            <h3>
              Data Platform
            </h3>

            <p>
              Access business intelligence, customer data, analytics,
              and automation insights through secure infrastructure.
            </p>

          </div>



          <div className="card">

            <h3>
              Integration Hub
            </h3>

            <p>
              Connect CRMs, payment systems, communication platforms,
              and business applications into one ecosystem.
            </p>

          </div>


        </div>

      </section>




      {/* CODE */}

      <section className="section">

        <h2>
          Simple Developer Experience
        </h2>


        <div className="card">


          <h3>
            Create Your First AI Agent
          </h3>


          <br />


          <pre
            style={{
              background: "rgba(0,0,0,.35)",
              padding: "20px",
              borderRadius: "12px",
              overflowX: "auto",
              color: "#38f2a5"
            }}
          >

{`const agent = await northsky.agents.create({
  name: "Sales Assistant",
  purpose: "Qualify customer leads",
  actions: [
    "answer_questions",
    "schedule_meetings",
    "update_crm"
  ]
});`}

          </pre>


        </div>


      </section>




      {/* FEATURES */}

      <section className="section">


        <h2>
          Built For Developers
        </h2>


        <div className="grid">


          <div className="card">

            <h3>
              Secure Infrastructure
            </h3>

            <p>
              Enterprise-ready authentication, permissions, and scalable
              cloud systems designed for production applications.
            </p>

          </div>



          <div className="card">

            <h3>
              Flexible APIs
            </h3>

            <p>
              Build custom applications with simple APIs designed for
              developers and businesses.
            </p>

          </div>



          <div className="card">

            <h3>
              Real-Time Systems
            </h3>

            <p>
              Create applications with live events, notifications,
              conversations, and automation updates.
            </p>

          </div>



          <div className="card">

            <h3>
              Scalable Architecture
            </h3>

            <p>
              Build small applications or enterprise systems on the
              same AI infrastructure.
            </p>

          </div>


        </div>


      </section>




      {/* RESOURCES */}

      <section className="section">


        <h2>
          Developer Resources
        </h2>


        <div className="grid">


          <div className="card">

            <h3>
              Documentation
            </h3>

            <p>
              Learn how to integrate NorthSky APIs and build AI-powered
              applications.
            </p>

          </div>



          <div className="card">

            <h3>
              API Reference
            </h3>

            <p>
              Explore endpoints, authentication methods, and available
              platform features.
            </p>

          </div>



          <div className="card">

            <h3>
              SDKs & Tools
            </h3>

            <p>
              Use developer libraries and tools to accelerate building
              with NorthSky.
            </p>

          </div>



          <div className="card">

            <h3>
              Community
            </h3>

            <p>
              Connect with builders creating the future of AI-powered
              business software.
            </p>

          </div>


        </div>


      </section>




      {/* CTA */}

      <section className="cta">

        <h2>
          Start Building With NorthSky
        </h2>

        <p>
          Create intelligent applications and automation systems
          powered by NorthSky AI infrastructure.
        </p>


        <br />


        <a href="/docs">

          <button className="btn">
            View Documentation
          </button>

        </a>


      </section>


    </main>
  );
}
