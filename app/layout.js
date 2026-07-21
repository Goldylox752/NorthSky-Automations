import "./globals.css";

export const metadata = {
  title: "NorthSky Automations",
  description:
    "AI-powered automation systems, pipeline intelligence, and business growth tools.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
