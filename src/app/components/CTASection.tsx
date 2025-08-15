"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl rounded-3xl border border-white/20 bg-gradient-to-br from-white/15 via-[#1976D3]/10 to-white/5 px-6 py-14 text-center text-[#0D1B2A] backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.15),0_0_30px_rgba(154,0,255,0.2)] ring-1 ring-white/10"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,201,255,0.25), rgba(187,222,250,0.25), rgba(0,255,240,0.25))",
        }}
      >
        <h3 className="font-display text-2xl sm:text-3xl font-semibold">Genetik yolculuğunuza bugün başlayın</h3>
        <p className="mt-2 text-[#0D1B2A]/80">Bilimsel doğruluk, şeffaf süreç ve uzman desteği ile yanınızdayız.</p>
        <div className="mt-6 flex justify-center">
          <Link href="#pricing" className="rounded-full bg-[#0D1B2A] px-5 py-3 text-sm font-semibold text-white">
            Hemen Başla
          </Link>
        </div>
      </motion.div>

      {/* subtle animated gradient background */}
      <motion.div
        aria-hidden
        animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,#00C9FF,#122339,#00FFF0)] opacity-20"
        style={{ backgroundSize: "200% 100%" }}
      />
      
      {/* Animated pulse rings */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-[#D6F5E3]/20"
            animate={{
              scale: [1, 2.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1,
            }}
            style={{
              width: '200px',
              height: '200px',
            }}
          />
        ))}
      </div>
    </section>
  );
}


