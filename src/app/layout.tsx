import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AWAN D-WAN Private Limited | Vehicle Rental, Business Facilitation & Agriculture",
  description:
    "AWAN D-WAN Private Limited — Premium vehicle rental with professional drivers, business facilitation, and agriculture & livestock services. Based in Burewala, Pakistan with international operations in Dubai, UAE through Zawar Group.",
  keywords: [
    "AWAN D-WAN",
    "car rental Pakistan",
    "vehicle rental Burewala",
    "business facilitation",
    "agriculture Pakistan",
    "livestock",
    "Zawar Group UAE",
    "cargo transport Dubai",
    "heavy trucks Dubai",
  ],
  openGraph: {
    title: "AWAN D-WAN Private Limited",
    description:
      "Premium vehicle rental, business facilitation, and agriculture services in Pakistan. Heavy cargo transport in Dubai, UAE.",
    url: "https://awandwan.com",
    siteName: "AWAN D-WAN Private Limited",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AWAN D-WAN Private Limited",
    description:
      "Premium vehicle rental, business facilitation, and agriculture services in Pakistan.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
