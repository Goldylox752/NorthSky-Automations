export const metadata = {
  title: "Contact | NorthSky",
  description:
    "Contact NorthSky to learn how AI automation can help your business grow.",
};

export default function ContactPage() {
  return (
    <main>

      {/* HERO */}

      <section className="hero">

        <h1>
          Let's Build Something Smarter
        </h1>

        <p>
          Talk with the NorthSky team about AI automation,
          business software, and custom solutions designed
          around your goals.
        </p>

      </section>



      {/* CONTACT */}

      <section className="section">

        <div className="grid">


          {/* FORM */}

          <div className="card">

            <h3>
              Request a Demo
            </h3>

            <p>
              Tell us about your business and we will help
              identify where AI can create the biggest impact.
            </p>


            <br />


            <form>


              <input
                type="text"
                placeholder="Full Name"
                className="input"
              />


              <br /><br />


              <input
                type="email"
                placeholder="Business Email"
                className="input"
              />


              <br /><br />


              <input
                type="text"
                placeholder="Company Name"
                className="input"
              />


              <br /><br />


              <textarea
                placeholder="How can NorthSky help?"
                className="input"
                rows="5"
              />


              <br /><br />


              <button
                type="submit"
                className="btn"
              >
                Submit Request
              </button>


            </form>


          </div>




          {/* INFO */}

          <div className="card">


            <h3>
              Contact NorthSky
            </h3>


            <p>
              Our team works with businesses looking to
              automate operations, improve customer
              experiences, and scale using AI.
            </p>



            <br />



            <h3>
              Solutions
            </h3>


            <p>
              AI Agents
              <br />
              CRM Automation
              <br />
              Revenue Systems
              <br />
              Custom AI Development
            </p>



            <br />



            <h3>
              Availability
            </h3>


            <p>
              Monday - Friday
              <br />
              Business Hours
              <br />
              Remote Support Available
            </p>


          </div>


        </div>


      </section>




      {/* PROCESS */}

      <section className="section">


        <h2>
          What Happens Next
        </h2>



        <div className="grid">


          <div className="card">

            <h3>
              1. Discovery
            </h3>

            <p>
              We learn about your business, challenges,
              and automation opportunities.
            </p>

          </div>



          <div className="card">

            <h3>
              2. Strategy
            </h3>

            <p>
              We design an AI solution based on your
              workflows and business goals.
            </p>

          </div>



          <div className="card">

            <h3>
              3. Deployment
            </h3>

            <p>
              Your AI systems are configured,
              integrated, and launched.
            </p>

          </div>



          <div className="card">

            <h3>
              4. Growth
            </h3>

            <p>
              We continuously improve your systems
              as your business expands.
            </p>

          </div>


        </div>


      </section>




      {/* CTA */}

      <section className="cta">


        <h2>
          Ready to Automate?
        </h2>


        <p>
          Start building your AI-powered business
          infrastructure with NorthSky.
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
