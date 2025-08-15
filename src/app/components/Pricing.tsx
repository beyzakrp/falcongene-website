"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const individualPlans = [
  {
    name: "Başlangıç",
    price: "₺1.990",
    features: ["Temel analiz", "PDF rapor", "E-posta desteği"],
    highlighted: false,
  },
  {
    name: "Plus",
    price: "₺3.490",
    features: ["Geniş kapsamlı analiz", "Detaylı rapor", "Uzman görüşmesi"],
    highlighted: true,
  },
  {
    name: "Pro",
    price: "₺4.990",
    features: ["Tüm modüller", "Rapor sunumu", "1 yıl güncelleme"],
    highlighted: false,
  },
];

const clinicPlans = [
  {
    name: "Klinik Starter",
    price: "Özel",
    features: ["10+ kit", "Toplu raporlama", "API erişimi"],
    highlighted: true,
  },
  {
    name: "Klinik Enterprise",
    price: "Özel",
    features: ["50+ kit", "Beyaz etiket", "Özel entegrasyon"],
    highlighted: false,
  },
];

export default function Pricing() {
  const [tab, setTab] = useState<"individual" | "clinic">("individual");

  const plans = tab === "individual" ? individualPlans : clinicPlans;

  return (
    <section id="pricing" className="relative bg-[#0D1B2A] py-16 sm:py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold">Fiyatlandırma</h2>
          <p className="mt-2 text-white/70">Bireysel ve klinik çözümler</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex rounded-full border border-white/20 p-1">
            <button
              onClick={() => setTab("individual")}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                tab === "individual" ? "bg-white text-[#0D1B2A]" : "text-white/80 hover:text-white"
              }`}
            >
              Bireysel
            </button>
            <button
              onClick={() => setTab("clinic")}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                tab === "clinic" ? "bg-white text-[#0D1B2A]" : "text-white/80 hover:text-white"
              }`}
            >
              Klinikler
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 [&>*:nth-child(1)]:lg:-rotate-1 [&>*:nth-child(2)]:lg:scale-105 [&>*:nth-child(2)]:lg:-translate-y-4 [&>*:nth-child(3)]:lg:rotate-1">
          <AnimatePresence mode="popLayout">
            {plans.map((plan) => (
              <motion.div
                key={plan.name + tab}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                              className={`relative rounded-2xl p-6 ring-1 ring-white/10 ${
                plan.highlighted ? "bg-white text-[#0D1B2A] shadow-[0_0_30px_rgba(214,245,227,0.3)]" : "bg-white/5"
              }`}
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-xl font-semibold">{plan.name}</h3>
                  <div className={`text-2xl font-bold ${plan.highlighted ? "text-[#0D1B2A]" : "text-white"}`}>{plan.price}</div>
                </div>
                <ul className={`mt-4 space-y-2 text-sm ${plan.highlighted ? "text-[#0D1B2A]/80" : "text-white/80"}`}>
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className={`inline-block h-1.5 w-1.5 rounded-full ${plan.highlighted ? "bg-[#0D1B2A]" : "bg-white"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-semibold ${
                    plan.highlighted
                      ? "bg-[#0D1B2A] text-white hover:bg-[#13283c]"
                      : "bg-[#D6F5E3] text-[#0D1B2A] hover:shadow-[0_0_20px_2px_rgba(214,245,227,0.25)]"
                  }`}
                >
                  Hemen Başla
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* animated gradient band behind */}
      <div className="pointer-events-none absolute inset-x-0 -z-10 h-40 -translate-y-12 bg-[linear-gradient(90deg,#00C9FF_0%,#9A00FF_50%,#00FFF0_100%)] opacity-20 blur-3xl" />
    </section>
  );
}


