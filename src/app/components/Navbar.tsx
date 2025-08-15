"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Testler", href: "#tests" },
  { label: "Nasıl Çalışır", href: "#how" },
  { label: "Klinikler", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "İletişim", href: "#footer" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <motion.div
        animate={{
          backgroundColor: isScrolled ? "rgba(13,27,42,0.7)" : "rgba(13,27,42,0)",
        }}
        transition={{ duration: 0.3 }}
        className="backdrop-blur-sm border-b border-white/10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Left: Logo */}
            <Link href="#home" className="flex items-center gap-2">
              <Image src="/logo-falcongene.svg" alt="FalconGene" width={140} height={32} className="h-6 w-auto" />
            </Link>

            {/* Center: Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <NavDNAButton key={item.label} href={item.href} label={item.label} />
              ))}
            </nav>

            {/* Right: CTA */}
            <div className="hidden md:flex items-center">
              <Link
                href="#pricing"
                className="rounded-full px-4 py-2 text-sm font-semibold text-[#0D1B2A] bg-[#D6F5E3] shadow-[0_0_0_0_rgba(214,245,227,0.6)] hover:shadow-[0_0_24px_4px_rgba(214,245,227,0.35)] transition-shadow"
              >
                Kiti Satın Al
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              aria-label="Menü"
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white hover:bg-white/10"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#0D1B2A]/90 backdrop-blur">
            <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white/90 hover:text-white px-3 py-2 rounded-md"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#pricing"
                className="mt-2 rounded-full px-4 py-2 text-sm font-semibold text-[#0D1B2A] bg-[#D6F5E3]"
                onClick={() => setMenuOpen(false)}
              >
                Kiti Satın Al
              </Link>
            </div>
          </div>
        )}
      </motion.div>
    </motion.header>
  );
}

function NavDNAButton({ href, label }: { href: string; label: string }) {
  const id = useId();
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-full px-3 py-2 text-sm text-white/80 transition-colors hover:text-white"
    >
      <span className="relative z-10">{label}</span>
      {/* DNA animated background on hover */}
      {/*
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-[160%] -left-[30%] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        viewBox="0 0 400 100"
        preserveAspectRatio="none"
      >
       <defs>
          <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#072441" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#4a7ba8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.6" />
          </linearGradient>
          <path
            id={`dna-${id}`}
            d="M0,70 C50,45 100,95 150,70 C200,45 250,95 300,70 C350,45 400,95 450,70"
          />
        </defs>
        two counter-moving dots like a DNA helix 
       
      </svg>
       */}
      {/* glowing ring */}
      <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-[1]">
        <svg
          className="h-full w-full animate-[spin_6s_linear_infinite] [filter:drop-shadow(0_0_12px_rgba(214,245,227,0.35))]"
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id={`ring-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D6F5E3" stopOpacity="0.0" />
              <stop offset="50%" stopColor="#D6F5E3" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#D6F5E3" stopOpacity="0.0" />
            </linearGradient>
          </defs>
         {/* <rect
            x="1.5"
            y="1.5"
            width="97"
            height="37"
            rx="18"
            fill="none"
            stroke={`url(#ring-${id})`}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <animate attributeName="stroke-dasharray" values="8 10; 14 12; 8 10" dur="3s" repeatCount="indefinite" />
          </rect>*/}
        </svg>
      </span>
      {/* subtle glow */}
      <span className="absolute inset-0 rounded-full bg-[#D6F5E3]/0 group-hover:bg-[#D6F5E3]/10 transition-colors" />
      <span className="absolute inset-0 rounded-full ring-0 ring-[#D6F5E3]/0 group-hover:ring-1 transition-[ring]" />
    </Link>
  );
}

