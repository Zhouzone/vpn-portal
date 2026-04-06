import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NaikoCloud JP Portal",
  description: "Private account portal for Clash subscriptions, usage, and node cleanliness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
