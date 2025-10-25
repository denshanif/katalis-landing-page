"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { number: "10+", label: "Proyek Diselesaikan" },
    { number: "5+", label: "Tahun Pengalaman" },
    { number: "24/7", label: "Dukungan Teknis" },
  ];

  return (
    <section
      id="tentang-kami"
      className="bg-gradient-to-b from-white via-[#f7faff] to-[#eef4ff] py-24 relative overflow-hidden"
    >
      {/* Background Glow */}
      <motion.div
        className="absolute top-1/3 left-1/2 w-[600px] h-[600px] bg-primary/5 blur-3xl rounded-full -translate-x-1/2"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative container mx-auto px-6 md:px-10 text-center z-10">
        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Tentang Kami
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg font-medium">
            Kami bukan sekadar developer — kami{" "}
            <span className="text-primary font-semibold">
              mitra transformasi digital
            </span>{" "}
            bisnis Anda.
          </p>
        </motion.div>

        {/* Content Card */}
        <motion.div
          className="bg-secondary backdrop-blur-sm border border-gray-100 rounded-3xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 md:gap-16 transition-all duration-300 hover:shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Left Text Content */}
          <motion.div
            className="flex-1 text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-relaxed">
              Di Katalis, kami percaya bahwa teknologi adalah{" "}
              <span className="text-primary">katalis yang mempercepat</span>{" "}
              pertumbuhan bisnis Anda.
            </h3>

            <p className="text-gray-700 leading-relaxed mb-10 text-base md:text-lg">
              Kami membantu perusahaan beradaptasi di era digital dengan solusi
              perangkat lunak yang dirancang untuk efisiensi, skalabilitas, dan
              keandalan tinggi — agar Anda bisa fokus pada hal yang paling
              penting: pertumbuhan bisnis Anda.
            </p>

            {/* Statistik */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-5 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-b from-white to-[#f8faff] border border-gray-100 rounded-2xl p-5 md:p-6 text-center shadow-sm hover:shadow-md transition w-full sm:w-auto sm:flex-1"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                >
                  <div className="text-3xl md:text-4xl font-extrabold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-700 text-sm md:text-base font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Logo */}
          <motion.div
            className="flex justify-center md:justify-end w-full md:w-auto"
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64">
              <Image
                src="/images/katalis-logo-about.png"
                alt="Katalis Logo"
                fill
                className="object-contain drop-shadow-md"
                sizes="(max-width: 768px) 160px, (max-width: 1024px) 200px, 256px"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
