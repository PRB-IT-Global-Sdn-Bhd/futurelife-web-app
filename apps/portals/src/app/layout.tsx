import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FutureLife Vendor Portals",
  description:
    "Next.js vendor portals and admin panel (FL-VPAP-2026). Prototypes remain on GitHub Pages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}