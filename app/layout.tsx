import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PhishSense",
  description:
    "PhishSense is a comprehensive security research platform designed for simulating and analyzing phishing attempts in a controlled environment. It combines modern web technologies with powerful analysis tools to help security professionals understand phishing tactics and improve defense strategies.",
  icons: {
    icon: "/public/phishsense-logo.png",
    apple: "/public/phishsense-logo.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    title: "PhishSense",
    description:
      "PhishSense is a comprehensive security research platform designed for simulating and analyzing phishing attempts in a controlled environment. It combines modern web technologies with powerful analysis tools to help security professionals understand phishing tactics and improve defense strategies.",
    url: "https://phish-sense-site.vercel.app/",
    siteName: "PhishSense",
    images: [
      {
        url: "/phishsense-logo.png",
        width: 1200,
        height: 630,
        alt: "PhishSense Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PhishSense",
    description:
      "PhishSense is a comprehensive security research platform designed for simulating and analyzing phishing attempts in a controlled environment. It combines modern web technologies with powerful analysis tools to help security professionals understand phishing tactics and improve defense strategies.",
    images: ["/phishsense-logo.png"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
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
