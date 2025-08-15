"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function ReportPreview() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#0D1B2A]">Örnek Rapor</h2>
          <p className="mt-2 text-[#0D1B2A]/70">Rapor yapımızı incelemek için önizlemeye tıklayın.</p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => setOpen(true)}
            className="group relative overflow-hidden rounded-xl border border-[#0D1B2A]/10 bg-gradient-to-br from-white via-[#00C9FF]/5 to-white p-2 shadow-sm hover:shadow-[0_10px_30px_rgba(0,201,255,0.2)] hover:border-[#00C9FF]/20 transition-all duration-300"
          >
            <div className="relative h-56 w-40">
              <Image src="/file.svg" alt="Rapor önizleme" fill className="object-contain" />
            </div>
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-[#0D1B2A] px-3 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
              Tam ekran gör
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-6 sm:inset-10 rounded-2xl bg-white p-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-full w-full">
                <Image src="/file.svg" alt="Örnek rapor" fill className="object-contain" />
              </div>
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 rounded-full bg-[#0D1B2A] px-3 py-1 text-sm text-white"
              >
                Kapat
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


