"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  title: string;
  content: string;
}

const terms: AccordionItem[] = [
  {
    title: "1. Penggunaan Layanan",
    content:
      "Anda setuju menggunakan layanan kami sesuai hukum yang berlaku dan tidak melakukan tindakan yang merugikan pihak lain.",
  },
  {
    title: "2. Konten",
    content:
      "Semua konten di website ini adalah milik kami. Anda tidak diperbolehkan menyalin, mendistribusikan, atau menggunakan konten tanpa izin.",
  },
  {
    title: "3. Pembatasan Tanggung Jawab",
    content:
      "Kami tidak bertanggung jawab atas kerugian langsung maupun tidak langsung akibat penggunaan website atau layanan kami.",
  },
  {
    title: "4. Perubahan",
    content:
      "Kami berhak mengubah syarat dan ketentuan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Pastikan Anda selalu memeriksa halaman ini.",
  },
];

export default function TermsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <main className="pt-28 pb-20 bg-gradient-to-b from-[#f9fafb] to-[#ffffff] min-h-screen">
        <div className="container mx-auto px-6 md:px-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">
            Terms & Conditions
          </h1>

          <div className="space-y-4">
            {terms.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border rounded-xl shadow-sm"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex justify-between items-center px-6 py-4 font-semibold text-left text-gray-900 hover:bg-gray-50 rounded-xl focus:outline-none"
                >
                  {item.title}
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} />
                  </motion.span>
                </button>

                {/* Accordion Content */}
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 text-gray-700 text-base md:text-lg"
                  >
                    {item.content}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
