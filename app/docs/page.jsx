export const metadata = {
  title: "Documentation | NorthSky",
  description:
    "NorthSky developer documentation for AI agents, APIs, automation, and integrations.",
};

export default function DocsPage() {
  return (
    <main>

      {/* HERO */}

      <section className="hero">

        <h1>
          NorthSky Documentation
        </h1>

        <p>
          Learn how to connect, build, and deploy AI-powered business
          systems using the NorthSky platform.
        </p>

      </section>



      {/* GETTING STARTED */}

      <section className="section">

        <h2>
          Getting Started
        </h2>


        <div className="grid">


          <div className="card">

            <h3>
              1. Create Your Account
            </h3>

            <p>
              Register your NorthSky workspace and access your AI
              infrastructure dashboard.
            </p>

          </div>



          <div className="card">

            <h3>
              2. Create API Keys
            </h3>

            <p>
              Generate secure API credentials to connect your
              applications with NorthSky services.
            </p>

          </div>



          <div className="card">

            <h3>
              3. Deploy AI Agents
            </h3>

            <p>
              Configure AI assistants that can communicate,
              automate workflows, and complete tasks.
            </p>

          </div>



          <div className="card">

            <h3>
              4. Monitor Performance
            </h3>

            <p>
              Track conversations, automation results, usage,
              and business analytics.
            </p>

          </div>


        </div>

      </section>




      {/* API */}

      <section className="section">

        <h2>
          API Reference
        </h2>


        <div className="card">


          <h3>
            Authentication
          </h3>


          <p>
            Every request requires an API key passed through the
            authorization header.
          </p>


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

{`Authorization: Bearer NORTHSKY_API_KEY`}

          </pre>


        </div>


      </section>




      {/* ENDPOINTS */}

      <section className="section">

        <h2>
          Core API Services
        </h2>


        <div className="grid">


          <div className="card">

            <h3>
              AI Agents
            </h3>

            <p>
              Create and manage intelligent AI agents.
            </p>


            <pre
              style={{
                marginTop:"15px",
                background:"rgba(0,0,0,.35)",
                padding:"15px",
                borderRadius:"10px"
              }}
            >

POST /api/agents

            </pre>


          </div>




          <div className="card">

            <h3>
              Leads
            </h3>

            <p>
              Capture and manage customer opportunities.
            </p>


            <pre
              style={{
                marginTop:"15px",
                background:"rgba(0,0,0,.35)",
                padding:"15px",
                borderRadius:"10px"
              }}
            >

GET /api/leads

            </pre>


          </div>




          <div className="card">

            <h3>
              Automations
            </h3>

            <p>
              Trigger workflows and business actions.
            </p>


            <pre
              style={{
                marginTop:"15px",
                background:"rgba(0,0,0,.35)",
                padding:"15px",
                borderRadius:"10px"
              }}
            >

POST /api/workflows

            </pre>


          </div>




          <div className="card">

            <h3>
              Analytics
            </h3>

            <p>
              Retrieve usage and performance metrics.
            </p>


            <pre
              style={{
                marginTop:"15px",
                background:"rgba(0,0,0,.35)",
                padding:"15px",
                borderRadius:"10px"
              }}
            >

GET /api/analytics

            </pre>


          </div>


        </div>


      </section>




      {/* AI AGENTS */}

      <section className="section">


        <h2>
          Building AI Agents
        </h2>


        <div className="card">


          <p className="story">

            NorthSky AI agents can be configured with specific goals,
            tools, knowledge sources, and business actions. Agents can
            answer customers, qualify leads, schedule appointments,
            update CRMs, and automate repetitive operations.

          </p>


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
              API Guides
            </h3>

            <p>
              Step-by-step tutorials for connecting your applications.
            </p>

          </div>



          <div className="card">

            <h3>
              Examples
            </h3>

            <p>
              Sample projects and implementation patterns.
            </p>

          </div>



          <div className="card">

            <h3>
              Integrations
            </h3>

            <p>
              Connect CRM systems, payments, communication tools,
              and business platforms.
            </p>

          </div>



          <div className="card">

            <h3>
              Support
            </h3>

            <p>
              Get assistance building and deploying your AI systems.
            </p>

          </div>


        </div>


      </section>




      {/* CTA */}

      <section className="cta">


        <h2>
          Start Building Today
        </h2>


        <p>
          Create powerful AI applications using NorthSky infrastructure.
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
