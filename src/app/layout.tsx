import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FlowingLines from "./components/FlowingLines";
import { FirebaseProvider } from "../lib/FirebaseProvider";
import { Inter, Space_Grotesk } from "next/font/google";
import ConditionalLayout from "./components/ConditionalLayout";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "FalconGene - Genetik Araştırmalarında Devrim",
  description: "Geleceğin teknolojisi ile genetik araştırmalarında devrim yaratıyoruz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#0D1B2A] text-white`}>
        <FirebaseProvider>
          <ConditionalLayout>{children}</ConditionalLayout>
        </FirebaseProvider>
      </body>
    </html>
  );
}
