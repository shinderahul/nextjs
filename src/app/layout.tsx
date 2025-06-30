import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ArchitectKit - Elevate Your Frontend Game",
  description: "Production-grade architecture using Next.js App Router with SSR, CSR, and a11y best practices.",
  openGraph: {
    title: "ArchitectKit - Elevate Your Frontend Game",
    description: "Built with Next.js 15 App Router, featuring SSR, CSR fallback, accessibility, and SEO optimization.",
    // url: "https://architectkit.vercel.app",
    siteName: "ArchitectKit",
    // images: [
    //   {
    //     url: "https://architectkit.vercel.app/og-image.png", // ✅ Make sure this image exists and is public
    //     width: 1200,
    //     height: 630,
    //     alt: "ArchitectKit Open Graph Preview",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ArchitectKit - Elevate Your Frontend Game",
    description: "Best practices with SSR, CSR, SEO, and a11y built in Next.js",
    // images: ["https://architectkit.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
