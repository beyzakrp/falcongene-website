"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FlowingLines from "./FlowingLines";

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  
  // Hide navbar and footer on auth and dashboard pages
  const isAuthPage = pathname?.startsWith('/auth');
  const isDashboardPage = pathname?.startsWith('/dashboard');
  
  if (isAuthPage || isDashboardPage) {
    return (
      <>
        <FlowingLines />
        <main className="relative z-10">{children}</main>
      </>
    );
  }

  return (
    <>
      <FlowingLines />
      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
    </>
  );
}