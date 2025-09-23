"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useFirebase } from "../../lib/FirebaseProvider";
import { AuthService } from "../../lib/authService";

const navItems = [
  { label: "Anasayfa", href: "/" },
  { label: "Testler", href: "/testler" },
  { label: "Nasıl Çalışır", href: "/nasil-calisir" },
  { label: "Klinikler", href: "/klinikler" },
  { label: "Blog", href: "/blog" },
  { label: "SSS", href: "/sss" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user, loading } = useFirebase();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuOpen) {
        const target = event.target as Element;
        if (!target.closest('[data-user-menu]')) {
          setUserMenuOpen(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [userMenuOpen]);

  const handleSignOut = async () => {
    await AuthService.signOut();
    setUserMenuOpen(false);
  };

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
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo-falcongene.svg" alt="FalconGene" width={140} height={32} className="h-6 w-auto" />
            </Link>

            {/* Center: Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <NavDNAButton 
                  key={item.label} 
                  href={item.href} 
                  label={item.label} 
                  isActive={pathname === item.href}
                />
              ))}
            </nav>

            {/* Right: CTA & User Menu */}
            <div className="hidden md:flex items-center gap-3">
              {!loading && (
                <>
                  {user ? (
                    // User Menu
                    <div className="relative" data-user-menu>
                      <button
                        onClick={() => setUserMenuOpen(!userMenuOpen)}
                        className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        <div className="w-8 h-8 bg-[#D6F5E3] rounded-full flex items-center justify-center">
                          <span className="text-[#0D1B2A] font-semibold text-sm">
                            {user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email?.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <span className="hidden lg:block">
                          {user.displayName || user.email?.split('@')[0]}
                        </span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* User Dropdown */}
                      {userMenuOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                          <div className="px-4 py-2 border-b border-gray-100">
                            <p className="text-sm font-medium text-gray-900">{user.displayName || 'Kullanıcı'}</p>
                            <p className="text-xs text-gray-500">{user.email}</p>
                          </div>
                          <Link
                            href="/dashboard"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            onClick={() => setUserMenuOpen(false)}
                          >
                            Dashboard
                          </Link>
                          <Link
                            href="/dashboard/profile"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            onClick={() => setUserMenuOpen(false)}
                          >
                            Profil
                          </Link>
                          <Link
                            href="/dashboard/orders"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            onClick={() => setUserMenuOpen(false)}
                          >
                            Siparişlerim
                          </Link>
                          <button
                            onClick={handleSignOut}
                            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                          >
                            Çıkış Yap
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    // Login/Register buttons
                    <div className="flex items-center gap-2">
                      <Link
                        href="/auth"
                        className="rounded-full px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        Giriş Yap
                      </Link>
                      <Link
                        href="/klinikler"
                        className="rounded-full px-4 py-2 text-sm font-semibold text-[#0D1B2A] bg-[#D6F5E3] shadow-[0_0_0_0_rgba(214,245,227,0.6)] hover:shadow-[0_0_24px_4px_rgba(214,245,227,0.35)] transition-shadow"
                      >
                        Kiti Satın Al
                      </Link>
                    </div>
                  )}
                </>
              )}
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
              
              {/* Mobile User Menu */}
              {!loading && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  {user ? (
                    <div className="space-y-2">
                      <div className="px-3 py-2">
                        <p className="text-white font-medium">{user.displayName || 'Kullanıcı'}</p>
                        <p className="text-white/60 text-sm">{user.email}</p>
                      </div>
                      <Link
                        href="/dashboard"
                        className="block text-white/90 hover:text-white px-3 py-2 rounded-md"
                        onClick={() => setMenuOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <Link
                        href="/dashboard/profile"
                        className="block text-white/90 hover:text-white px-3 py-2 rounded-md"
                        onClick={() => setMenuOpen(false)}
                      >
                        Profil
                      </Link>
                      <Link
                        href="/dashboard/orders"
                        className="block text-white/90 hover:text-white px-3 py-2 rounded-md"
                        onClick={() => setMenuOpen(false)}
                      >
                        Siparişlerim
                      </Link>
                      <button
                        onClick={() => {
                          handleSignOut();
                          setMenuOpen(false);
                        }}
                        className="block w-full text-left text-red-400 hover:text-red-300 px-3 py-2 rounded-md"
                      >
                        Çıkış Yap
                      </button>
                      <Link
                        href="/klinikler"
                        className="block mt-2 rounded-full px-4 py-2 text-sm font-semibold text-[#0D1B2A] bg-[#D6F5E3] text-center"
                        onClick={() => setMenuOpen(false)}
                      >
                        Kiti Satın Al
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Link
                        href="/auth"
                        className="block text-white/90 hover:text-white px-3 py-2 rounded-md"
                        onClick={() => setMenuOpen(false)}
                      >
                        Giriş Yap
                      </Link>
                      <Link
                        href="/klinikler"
                        className="block mt-2 rounded-full px-4 py-2 text-sm font-semibold text-[#0D1B2A] bg-[#D6F5E3] text-center"
                        onClick={() => setMenuOpen(false)}
                      >
                        Kiti Satın Al
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </motion.header>
  );
}

function NavDNAButton({ href, label, isActive }: { href: string; label: string; isActive?: boolean }) {
  const id = useId();
  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-full px-3 py-2 text-sm transition-colors ${
        isActive 
          ? 'text-[#D6F5E3] bg-[#D6F5E3]/10 border border-[#D6F5E3]/30' 
          : 'text-white/80 hover:text-white'
      }`}
    >
      <span className="relative z-10">{label}</span>
      {/* Active state glow */}
      {isActive && (
        <span className="absolute inset-0 rounded-full bg-[#D6F5E3]/5 ring-1 ring-[#D6F5E3]/20" />
      )}
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
      <span className={`absolute inset-0 rounded-full transition-colors ${
        isActive 
          ? 'bg-[#D6F5E3]/5' 
          : 'bg-[#D6F5E3]/0 group-hover:bg-[#D6F5E3]/10'
      }`} />
      <span className={`absolute inset-0 rounded-full transition-[ring] ${
        isActive 
          ? 'ring-1 ring-[#D6F5E3]/30' 
          : 'ring-0 ring-[#D6F5E3]/0 group-hover:ring-1'
      }`} />
    </Link>
  );
}

