import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jagathenterprises.lk"),
  title: "Jagath Enterprises - Reliable Gully Bowser & Waste Disposal Services.",
  description: "Professional waste disposal solutions for homes, hotels, businesses, and industries.",
  openGraph: {
    title: "Jagath Enterprises - Reliable Gully Bowser & Waste Disposal Services.",
    description: "Professional waste disposal solutions for homes, hotels, businesses, and industries.",
    url: "https://jagathenterprises.lk",
    siteName: "Jagath Enterprises",
    images: [
      {
        url: "https://jagathenterprises.lk/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Jagath Enterprises",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jagath Enterprises - Reliable Gully Bowser & Waste Disposal Services.",
    description: "Professional waste disposal solutions for homes, hotels, businesses, and industries.",
    images: ["https://jagathenterprises.lk/twitter-image.png"],
  },
  formatDetection: {
    telephone: false,
    date: false,
    email: false,
    address: false,
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
        className={`${inter.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
