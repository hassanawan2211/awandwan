import type { Metadata } from "next";
import DubaiPageContent from "./DubaiPageContent";

export const metadata: Metadata = {
  title: "Zawar Group Dubai | Heavy Cargo & Machinery Transport — AWAN D-WAN",
  description:
    "Zawar Group Dubai — All kinds of cargo transportation, heavy machinery, trailers, cranes, forklifts, and 24/7 pickup services across the United Arab Emirates. Zawar Ali Transport, Muftah Al Khair, Al Diwan Al Jadeda Transport.",
  keywords: [
    "Zawar Group Dubai",
    "cargo transport Dubai",
    "heavy trucks UAE",
    "crane services Dubai",
    "forklift Dubai",
    "trailer transport UAE",
    "Zawar Ali Transport",
  ],
  openGraph: {
    title: "Zawar Group Dubai — Heavy Cargo & Machinery Transport",
    description: "All kinds of cargo transportation and heavy machinery transport in Dubai, UAE.",
    url: "https://awandwan.com/dubai",
    siteName: "AWAN D-WAN Private Limited",
    type: "website",
  },
};

export default function DubaiPage() {
  return <DubaiPageContent />;
}
