import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Cinzel } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B0D0C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "WAYSTAR — Exceptional Residences | Dubai & New York",
  description:
    "An ultra-luxury architectural real estate flagship. Exceptional residential architecture in Dubai and New York City.",
  keywords: [
    "WAYSTAR",
    "Luxury Real Estate",
    "Dubai Marina",
    "Manhattan Penthouses",
    "New York Real Estate",
    "Dubai Ultra Luxury",
    "Architectural Residences",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} ${cinzel.variable} scroll-smooth antialiased selection:bg-[#C1AD91] selection:text-[#0B0D0C]`}
    >
      <body className="min-h-screen bg-[#0B0D0C] text-[#F4F1EB] font-sans overflow-x-hidden flex flex-col">
        {children}
      </body>
    </html>
  );
}
