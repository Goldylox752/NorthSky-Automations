import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NorthSky | Pipeline Intelligence for Roofing Teams",
  description: "AI-powered roofing pipeline intelligence platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}