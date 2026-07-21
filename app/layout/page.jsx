import "./globals.css";

export const metadata = {
  title: "NorthSky | AI Infrastructure for Modern Business",
  description:
    "NorthSky builds AI software that helps businesses automate operations, manage customers, and accelerate growth with intelligent automation.",
  keywords: [
    "NorthSky",
    "AI",
    "Artificial Intelligence",
    "CRM",
    "Automation",
    "Business Software",
    "SaaS",
    "Revenue",
    "AI Agents",
    "Workflow Automation",
  ],
  authors: [{ name: "NorthSky Technologies" }],
  creator: "NorthSky",
  publisher: "NorthSky Technologies",
  metadataBase: new URL("https://northsky.ai"),
  openGraph: {
    title: "NorthSky",
    description:
      "AI Infrastructure for Modern Business",
    url: "https://northsky.ai",
    siteName: "NorthSky",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NorthSky",
    description:
      "AI Infrastructure for Modern Business",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <header className="navbar">

          <div className="container">

            <a href="/" className="logo">
              North<span>Sky</span>
            </a>

            <nav>

              <a href="/">Home</a>

              <a href="/products">Products</a>

              <a href="/solutions">Solutions</a>

              <a href="/pricing">Pricing</a>

              <a href="/about">About</a>

              <a href="/contact">Contact</a>

            </nav>

            <a href="/app" className="btn">
              Launch Platform
            </a>

          </div>

        </header>

        {children}

        <footer className="footer">

          <div className="container">

            <h3>NorthSky</h3>

            <p>
              AI Infrastructure for Modern Business.
            </p>

            <div className="footer-links">

              <a href="/products">Products</a>

              <a href="/solutions">Solutions</a>

              <a href="/pricing">Pricing</a>

              <a href="/developers">Developers</a>

              <a href="/docs">Documentation</a>

              <a href="/contact">Contact</a>

            </div>

            <p className="copyright">
              © {new Date().getFullYear()} NorthSky Technologies. All rights reserved.
            </p>

          </div>

        </footer>

      </body>
    </html>
  );
}
