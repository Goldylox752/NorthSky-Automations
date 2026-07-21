export const metadata = {
  title: "Pricing | NorthSky",
  description:
    "NorthSky AI pricing plans for businesses looking to automate operations, increase revenue, and scale with artificial intelligence.",
};

const plans = [
  {
    name: "Starter",
    price: "$499",
    description:
      "For small businesses starting with AI automation.",
    features: [
      "AI Customer Assistant",
      "Lead Capture Automation",
      "Basic CRM Tools",
      "Workflow Automation",
      "Email Support",
    ],
  },

  {
    name: "Growth",
    price: "$999",
    description:
      "For businesses ready to scale their AI operations.",
    popular: true,
    features: [
      "Everything in Starter",
      "AI Voice Agent",
      "Advanced CRM Automation",
      "Lead Qualification",
      "Revenue Analytics",
      "Priority Support",
    ],
  },

  {
    name: "Enterprise",
    price: "Custom",
    description:
      "Custom AI infrastructure for larger organizations.",
    features: [
      "Dedicated AI Systems",
      "Custom Integrations",
      "API Access",
      "Enterprise Security",
      "Custom Workflows",
      "Dedicated Support",
    ],
  },
];


export default function PricingPage() {

  return (

    <main>


      {/* HERO */}

      <section className="hero">

        <h1>
          Simple Pricing. Powerful AI.
        </h1>


        <p>
          Choose the NorthSky plan that fits your business.
          Start automating today and scale your AI infrastructure
          as you grow.
        </p>


      </section>



      {/* PRICING */}

      <section className="section">


        <h2>
          Plans & Pricing
        </h2>


        <div className="grid">


          {plans.map((plan) => (

            <div
              className="card"
              key={plan.name}
            >


              {plan.popular && (

                <div>
                  <strong>
                    Most Popular
                  </strong>
                </div>

              )}



              <h3>
                {plan.name}
              </h3>



              <h1>
                {plan.price}
                {plan.price !== "Custom" && (
                  <span>
                    /month
                  </span>
                )}
              </h1>



              <p>
                {plan.description}
              </p>



              <br />



              <ul>

                {plan.features.map((feature) => (

                  <li key={feature}>
                    ✓ {feature}
                  </li>

                ))}

              </ul>



              <br />



              <a href="/app">

                <button className="btn">
                  Get Started
                </button>

              </a>


            </div>

          ))}


        </div>


      </section>




      {/* FEATURES */}

      <section className="section">


        <h2>
          Every Plan Includes
        </h2>



        <div className="grid">


          <div className="card">

            <h3>
              AI Infrastructure
            </h3>

            <p>
              Access intelligent automation systems built to improve
              customer communication and business operations.
            </p>

          </div>



          <div className="card">

            <h3>
              Cloud Platform
            </h3>

            <p>
              Secure cloud-based software designed for reliability,
              performance, and scalability.
            </p>

          </div>



          <div className="card">

            <h3>
              Business Analytics
            </h3>

            <p>
              Track leads, customers, workflows, and revenue from
              one centralized dashboard.
            </p>

          </div>



          <div className="card">

            <h3>
              Continuous Improvements
            </h3>

            <p>
              New AI features and platform improvements added as
              NorthSky evolves.
            </p>

          </div>


        </div>


      </section>




      {/* FAQ */}

      <section className="section">


        <h2>
          Frequently Asked Questions
        </h2>



        <div className="grid">


          <div className="card">

            <h3>
              Can I customize my AI system?
            </h3>

            <p>
              Yes. Enterprise customers can create custom AI agents,
              integrations, and workflows.
            </p>

          </div>



          <div className="card">

            <h3>
              Does NorthSky integrate with existing tools?
            </h3>

            <p>
              NorthSky is designed to connect with modern business
              software through integrations and APIs.
            </p>

          </div>



          <div className="card">

            <h3>
              Can I upgrade later?
            </h3>

            <p>
              Yes. Start small and upgrade as your business and
              automation needs grow.
            </p>

          </div>



          <div className="card">

            <h3>
              Do you offer enterprise deployments?
            </h3>

            <p>
              Yes. NorthSky provides custom AI infrastructure for
              organizations requiring advanced solutions.
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
          Deploy AI systems that help your business operate faster,
          smarter, and more efficiently.
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
