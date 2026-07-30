import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { LenisProvider } from "@/components/LenisProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ryuyjg.github.io/atelier-noir"),
  title: {
    default: "Atelier Noir | Architecture & Interior Design Studio",
    template: "%s | Atelier Noir"
  },
  description:
    "Atelier Noir is a fictional luxury architecture and interior design studio crafting cinematic homes, hospitality spaces, galleries, and private worlds.",
  keywords: [
    "Atelier Noir",
    "architecture studio",
    "interior design",
    "luxury interiors",
    "residential architecture",
    "hospitality design"
  ],
  openGraph: {
    title: "Atelier Noir",
    description: "Dark luxury architecture, interiors, and cinematic private worlds.",
    url: "https://ryuyjg.github.io/atelier-noir",
    siteName: "Atelier Noir",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=86",
        width: 1200,
        height: 630,
        alt: "Dark luxury architecture interior by Atelier Noir"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Atelier Noir",
    description: "Dark luxury architecture, interiors, and cinematic private worlds."
  },
  alternates: {
    canonical: "https://ryuyjg.github.io/atelier-noir"
  }
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
