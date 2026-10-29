import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Cinzel } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#20211F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "WAYSTAR — Exceptional Residences | Luxury Real Estate Flagship",
  description:
    "An international luxury real estate development flagship. Discover world-class residences curated for discerning collectors of architecture.",
  keywords: [
    "WAYSTAR",
    "Luxury Real Estate",
    "Architectural Residences",
    "Penthouse",
    "Monaco",
    "Lake Como",
    "London",
    "Kyoto",
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
      className={`${cormorant.variable} ${plusJakarta.variable} ${cinzel.variable} scroll-smooth antialiased selection:bg-[#B9A994] selection:text-[#20211F]`}
    >
      <body className="min-h-screen bg-[#F7F6F2] text-[#20211F] font-sans overflow-x-hidden flex flex-col">
        {children}
      </body>
    </html>
  );
}
