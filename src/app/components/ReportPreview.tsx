"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function ReportPreview() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("/realBoxPhoto.jpeg");

  const images = [
    {
      src: "/realBoxPhoto.jpeg",
      alt: "FALCONGENE Test Kiti - Kapalı Kutu",
      title: "Test Kit Paketi"
    },
    {
      src: "/realOpenedBox.jpeg", 
      alt: "FALCONGENE Test Kiti - Açık Kutu İçeriği",
      title: "Kit İçeriği"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50/30 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#0D1B2A]">FALCONGENE Test Kiti</h2>
          <p className="mt-2 text-[#0D1B2A]/70 max-w-2xl mx-auto">
            Profesyonel ambalajımız ve kolay kullanım kılavuzlarımızla genetik testinizi evinizin konforunda yapın.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Sol taraf - Ana görsel */}
          <div className="flex justify-center">
            <motion.button
              onClick={() => setOpen(true)}
              className="group relative overflow-hidden rounded-2xl border border-[#0D1B2A]/10 bg-white p-4 shadow-lg hover:shadow-2xl hover:border-[#00C9FF]/20 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative h-80 w-72 md:w-80">
                <Image 
                  src={selectedImage} 
                  alt="FALCONGENE Test Kiti" 
                  fill 
                  className="object-cover rounded-lg" 
                  priority
                />
              </div>
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-[#0D1B2A]/90 backdrop-blur-sm px-4 py-2 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
                Büyütmek için tıklayın
              </span>
            </motion.button>
          </div>

          {/* Sağ taraf - Küçük görseller ve açıklama */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4">Kit İçeriği</h3>
              <div className="space-y-3 text-[#0D1B2A]/80">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>DNA numune alma çubukları (swap)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Detaylı kullanım kılavuzu</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Güvenli gönderim zarfı</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Kişiselleştirilmiş paket bilgileri</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedImage(image.src)}
                  className={`relative overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                    selectedImage === image.src 
                      ? 'border-[#0D1B2A] shadow-lg' 
                      : 'border-gray-200 hover:border-[#0D1B2A]/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative h-24 w-full">
                    <Image 
                      src={image.src} 
                      alt={image.alt} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-1 left-2 right-2">
                    <p className="text-white text-xs font-medium">{image.title}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-6 sm:inset-10 rounded-2xl bg-white p-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-full w-full flex items-center justify-center">
                <Image 
                  src={selectedImage} 
                  alt="FALCONGENE Test Kiti - Detay" 
                  fill 
                  className="object-contain" 
                />
              </div>
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 rounded-full bg-[#0D1B2A]/90 backdrop-blur-sm px-4 py-2 text-sm text-white hover:bg-[#0D1B2A] transition-colors"
              >
                ✕ Kapat
              </button>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-[#0D1B2A] font-semibold text-center">
                    {images.find(img => img.src === selectedImage)?.title}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


