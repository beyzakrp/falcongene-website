import type { Metadata } from "next";
import "./globals.css";
import ConditionalLayout from "./components/ConditionalLayout";
import EnvironmentIndicator from "./components/EnvironmentIndicator";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

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
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
        <EnvironmentIndicator />
        <Analytics />
      </body>
    </html>
  );
}
