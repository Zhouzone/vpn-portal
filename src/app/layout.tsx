import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NaikoCloud JP Portal",
  description: "Public guide page for a small shared JP node, with status snapshots and import instructions.",
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
