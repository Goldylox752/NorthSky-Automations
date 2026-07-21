export const metadata = {
  title: "NorthSky Dashboard | AI Operations Platform",
  description:
    "Manage AI agents, leads, workflows, customers, and revenue from the NorthSky platform.",
};

const stats = [
  {
    title: "Active AI Agents",
    value: "12",
    description: "Running automation systems",
  },
  {
    title: "New Leads",
    value: "248",
    description: "Captured this month",
  },
  {
    title: "Appointments",
    value: "86",
    description: "Scheduled by AI",
  },
  {
    title: "Revenue",
    value: "$24,850",
    description: "Generated this month",
  },
];


const agents = [
  {
    name: "Sales Assistant",
    status: "Active",
    task: "Qualifying incoming leads",
  },
  {
    name: "Customer Support Agent",
    status: "Active",
    task: "Answering customer questions",
  },
  {
    name: "Appointment Scheduler",
    status: "Training",
    task: "Booking customer appointments",
  },
];


const activities = [
  "New roofing lead qualified",
  "Customer appointment scheduled",
  "Follow-up email sent",
  "AI agent completed workflow",
];


export default function AppDashboard() {

  return (

    <main>


      {/* HEADER */}

      <section className="hero">

        <h1>
          NorthSky Operations Center
        </h1>

        <p>
          Manage your AI agents, customer conversations,
          workflows, and revenue systems from one intelligent dashboard.
        </p>

      </section>




      {/* STATS */}

      <section className="section">


        <h2>
          Business Overview
        </h2>


        <div className="grid">


          {stats.map((stat) => (

            <div
              className="card"
              key={stat.title}
            >

              <h3>
                {stat.value}
              </h3>

              <p>
                {stat.title}
              </p>

              <small>
                {stat.description}
              </small>


            </div>

          ))}


        </div>


      </section>





      {/* AI AGENTS */}

      <section className="section">


        <h2>
          AI Agents
        </h2>


        <div className="grid">


          {agents.map((agent) => (

            <div
              className="card"
              key={agent.name}
            >

              <h3>
                {agent.name}
              </h3>


              <p>
                Status:
                {" "}
                {agent.status}
              </p>


              <br />


              <p>
                {agent.task}
              </p>


              <br />


              <button className="btn">
                Manage Agent
              </button>


            </div>

          ))}


        </div>


      </section>





      {/* LEADS */}

      <section className="section">


        <h2>
          Lead Intelligence
        </h2>


        <div className="grid">


          <div className="card">

            <h3>
              Hot Leads
            </h3>

            <p>
              42 qualified opportunities ready for follow-up.
            </p>

            <br />

            <button className="btn">
              View Leads
            </button>

          </div>




          <div className="card">

            <h3>
              AI Qualification
            </h3>

            <p>
              NorthSky automatically scores customers based on
              buying intent and engagement.
            </p>

            <br />

            <button className="btn">
              Analytics
            </button>

          </div>


        </div>


      </section>





      {/* WORKFLOWS */}

      <section className="section">


        <h2>
          Automation Workflows
        </h2>


        <div className="grid">


          <div className="card">

            <h3>
              New Lead Workflow
            </h3>

            <p>
              Lead captured → AI response → Qualification →
              Appointment booking.
            </p>

          </div>



          <div className="card">

            <h3>
              Customer Follow-Up
            </h3>

            <p>
              Automated messages, reminders, and customer
              engagement sequences.
            </p>

          </div>



          <div className="card">

            <h3>
              Revenue Workflow
            </h3>

            <p>
              Payments, subscriptions, invoices, and reporting
              automation.
            </p>

          </div>


        </div>


      </section>





      {/* ACTIVITY */}

      <section className="section">


        <h2>
          Recent Activity
        </h2>


        <div className="card">


          {activities.map((activity) => (

            <p
              key={activity}
              style={{
                padding:"12px 0",
                borderBottom:
                  "1px solid rgba(255,255,255,.08)"
              }}
            >
              ✓ {activity}
            </p>

          ))}


        </div>


      </section>





      {/* SIDEBAR STYLE */}

      <section className="section">


        <h2>
          Platform Modules
        </h2>


        <div className="grid">


          <div className="card">
            <h3>AI Agents</h3>
            <p>Create and manage intelligent assistants.</p>
          </div>


          <div className="card">
            <h3>CRM</h3>
            <p>Manage customers and sales pipelines.</p>
          </div>


          <div className="card">
            <h3>Analytics</h3>
            <p>Monitor performance and revenue data.</p>
          </div>


          <div className="card">
            <h3>Settings</h3>
            <p>Configure integrations and account settings.</p>
          </div>


        </div>


      </section>



    </main>

  );
}
