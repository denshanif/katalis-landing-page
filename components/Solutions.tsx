"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Solutions() {
  const solutions = [
    {
      image: "/images/landing-page-illustration.png",
      title: "Landing Page yang Menjual",
      slug: "landing-page",
    },
    {
      image: "/images/e-commerce-illustration.png",
      title: "E-Commerce untuk Bisnis Anda",
      slug: "e-commerce",
    },
    {
      image: "/images/erp-illustration.png",
      title: "Sistem ERP Terintegrasi",
      slug: "erp",
    },
    {
      image: "/images/custom-system-illustration.png",
      title: "Sistem Kustom Lainnya",
      slug: "custom-website",
    },
  ];

  return (
    <section
      id="solutions"
      className="relative py-20 bg-gradient-to-br from-[#f9fbff] via-[#f6f9ff] to-[#eef3ff]"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Solusi Website untuk Setiap Kebutuhan
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Kami hadir dengan berbagai layanan digital yang bisa disesuaikan
            untuk mendukung pertumbuhan bisnis Anda.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Link
                href={`/services/${solution.slug}`}
                className="group bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl p-10 flex flex-col items-center text-center shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:bg-white"
              >
                <motion.div
                  className="relative w-full h-56 mb-6 overflow-hidden rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-contain transition-transform duration-500"
                  />
                </motion.div>
                <motion.h3
                  className="text-xl font-semibold text-gray-900"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  {solution.title}
                </motion.h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
