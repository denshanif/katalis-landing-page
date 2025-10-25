"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "Apa layanan utama Katalis?",
      answer:
        "Katalis menyediakan jasa pengembangan software custom, termasuk website, landing page, e-commerce, dan sistem ERP yang terintegrasi untuk berbagai industri.",
    },
    {
      question: "Berapa lama waktu pengerjaan proyek?",
      answer:
        "Durasi proyek tergantung kompleksitas. Website sederhana seperti landing page biasanya selesai dalam 1-3 minggu, sementara sistem ERP bisa memakan waktu beberapa bulan.",
    },
    {
      question: "Apakah Katalis menyediakan konsultasi sebelum proyek?",
      answer:
        "Ya, kami menyediakan konsultasi gratis untuk memahami kebutuhan bisnis Anda dan memberikan solusi teknologi yang tepat.",
    },
    {
      question: "Bagaimana metode pembayaran untuk proyek?",
      answer:
        "Kami fleksibel dengan metode pembayaran, biasanya melalui transfer bank. Pembayaran bisa dilakukan bertahap sesuai milestone proyek.",
    },
    {
      question: "Apakah Katalis mendukung maintenance setelah proyek selesai?",
      answer:
        "Tentu. Kami menawarkan paket maintenance dan dukungan teknis agar software Anda tetap optimal dan update dengan kebutuhan bisnis.",
    },
    {
      question: "Apakah data klien aman?",
      answer:
        "Katalis menjamin kerahasiaan data klien. Semua proyek dijalankan dengan protokol keamanan modern, termasuk backup dan enkripsi data.",
    },
    {
      question: "Bagaimana cara menghubungi tim Katalis?",
      answer:
        "Anda bisa menghubungi tim kami melalui tombol WhatsApp di website, email di admin@katalisdev.my.id atau bisa juga DM Instagram kami di @katalis.dev.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pt-20 pb-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() => toggleIndex(index)}
                className={`w-full flex justify-between items-center px-6 py-4 font-semibold text-left rounded-2xl focus:outline-none transition-colors duration-300
                  ${openIndex === index ? "bg-gradient-to-r from-primary to-blue-600 text-white" : "hover:bg-gray-100 text-gray-900"}
                `}
              >
                {item.question}
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={22} />
                </motion.span>
              </button>

              {/* Content */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="px-6 py-4 text-gray-700 text-base md:text-lg bg-gray-50 rounded-b-2xl"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
