"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingWhatsApp() {
  const [showBubble, setShowBubble] = useState(false);

  // Tampilkan bubble setelah 3 detik
  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end justify-end">
      {/* Bubble Chat */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-4 mr-4 bg-white border border-gray-200 rounded-2xl shadow-lg px-4 py-2 text-gray-900 text-sm max-w-xs"
          >
            <p>Hai! Ingin konsultasi tentang website atau software? 💬</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.a
        href="https://wa.me/6285189897289?text=Halo%20Katalis!%20Saya%20ingin%20berkonsultasi%20tentang%20layanan%20Anda."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi Kami via WhatsApp"
        className="relative flex items-center justify-center w-16 h-16 rounded-full shadow-lg bg-green-500"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setShowBubble(true)}
        onHoverEnd={() => setShowBubble(false)}
      >
        {/* Pulsing Glow */}
        <motion.span
          className="absolute inset-0 rounded-full bg-green-400/50"
          animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0.1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        {/* Icon */}
        <Phone className="text-white relative z-10" size={28} />
      </motion.a>
    </div>
  );
}
