export const metadata = {
  title: "About | NorthSky",
  description:
    "Learn about NorthSky and our mission to build AI infrastructure for modern businesses.",
};

export default function AboutPage() {
  return (
    <main>

      {/* Hero */}

      <section className="hero">

        <h1>About NorthSky</h1>

        <p>
          NorthSky is an AI software company building intelligent
          infrastructure that helps businesses automate operations,
          improve customer experiences, and grow revenue through
          modern technology.
        </p>

      </section>

      {/* Mission */}

      <section className="section">

        <h2>Our Mission</h2>

        <p className="story">
          We believe businesses should spend less time managing
          software and more time serving customers.
          Our mission is to simplify business operations by bringing
          artificial intelligence, automation, customer management,
          communications, and revenue systems together into one
          connected platform.
        </p>

      </section>

      {/* Values */}

      <section className="section">

        <h2>What We Believe</h2>

        <div className="grid">

          <div className="card">
            <h3>Innovation</h3>
            <p>
              We build practical AI solutions that solve real business
              problems rather than adding unnecessary complexity.
            </p>
          </div>

          <div className="card">
            <h3>Automation</h3>
            <p>
              Every repetitive task is an opportunity to automate and
              help businesses operate more efficiently.
            </p>
          </div>

          <div className="card">
            <h3>Reliability</h3>
            <p>
              Businesses depend on software every day. Our systems are
              designed to be secure, scalable, and dependable.
            </p>
          </div>

          <div className="card">
            <h3>Growth</h3>
            <p>
              Every feature we build is designed to help our customers
              generate more opportunities and grow sustainably.
            </p>
          </div>

        </div>

      </section>

      {/* Vision */}

      <section className="section">

        <h2>Our Vision</h2>

        <p className="story">
          We envision a future where AI becomes an essential part of
          every business. NorthSky is building the platform that
          connects intelligent agents, customer relationships,
          workflows, communications, and revenue systems into one
          seamless operating environment.
        </p>

      </section>

      {/* CTA */}

      <section className="cta">

        <h2>Building the Future of Business</h2>

        <p>
          NorthSky is creating the next generation of AI-powered
          software to help organizations work smarter, respond faster,
          and grow with confidence.
        </p>

      </section>

    </main>
  );
}
