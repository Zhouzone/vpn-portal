import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JP Shared Node Guide",
  description:
    "Public guide page for a small shared Japan VPS node, with real setup notes and anonymized activity snapshots.",
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
