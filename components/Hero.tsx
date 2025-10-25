"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageSquareText } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-br from-[#f9fbff] via-[#f5f7ff] to-[#edf1ff]"
    >
      {/* Background Glow */}
      <motion.div
        className="absolute -top-20 -right-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-70"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -left-32 w-[400px] h-[400px] bg-blue-200/40 rounded-full blur-3xl opacity-60"
        animate={{ scale: [1, 1.05, 1], rotate: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative">
        {/* Card Wrapper */}
        <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] shadow-lg p-8 md:p-14 border border-white/30 transition-all duration-500 hover:shadow-xl">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* Left Text */}
            <div className="space-y-6">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Pemicu
                </span>{" "}
                Pertumbuhan Bisnis Anda
              </motion.h1>

              <motion.p
                className="text-gray-600 text-lg leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Kami membantu bisnis Anda beradaptasi dan berkembang di era
                digital melalui solusi perangkat lunak yang efisien, scalable,
                dan dirancang khusus untuk kebutuhan Anda.
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {/* Konsultasi Gratis */}
                <Link
                  href="https://wa.me/6285189897289?text=Halo%20Katalis!%20Saya%20ingin%20berkonsultasi%20tentang%20layanan%20Anda."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-primary to-blue-600 text-white font-semibold shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.05]"
                >
                  <MessageSquareText
                    size={18}
                    className="mr-2 transition-transform duration-300 group-hover:rotate-6"
                  />
                  Konsultasi Gratis
                  <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>

                {/* Lihat Portfolio Kami */}
                <Link
                  href="#portfolio"
                  className="relative inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-blue-600 hover:text-white hover:shadow-lg text-center"
                >
                  Lihat Portfolio Kami
                </Link>
              </motion.div>
            </div>

            {/* Right Illustration */}
            <motion.div
              className="relative h-80 md:h-96 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-blue-300/10 blur-2xl rounded-full animate-pulse-slow"></div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full"
              >
                <Image
                  src="/images/hero-illustration.png"
                  alt="Hero Illustration"
                  fill
                  className="object-contain drop-shadow-lg transition-transform duration-700 hover:scale-105"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
