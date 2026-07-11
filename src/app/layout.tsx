import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QIERA — E-commerce Growth Intelligence",
  description:
    "QIERA is an e-commerce growth intelligence platform that helps businesses discover opportunities, diagnose root causes, architect solutions, build capabilities, de-risk projects, and measure impact.",
  icons: {
    icon: [{ url: "/images/qiera-logo.webp", type: "image/webp" }],
    apple: [{ url: "/images/qiera-logo.webp", type: "image/webp" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-shell)] text-[var(--color-text-primary)] font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
