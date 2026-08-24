import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Slab, Bebas_Neue, Josefin_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CyberQuest | CTF Challenge | Excel 2026",
  description: "Excel 2026’s flagship tech event — a high-octane CTF where skill meets strategy. Team up, hack through challenges, and claim your glory",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${robotoSlab.variable} ${bebasNeue.variable} ${josefinSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
