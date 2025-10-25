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

const privacySections: AccordionItem[] = [
  {
    title: "1. Informasi yang Dikumpulkan",
    content:
      "Kami mengumpulkan informasi yang Anda berikan secara langsung, seperti nama, email, atau data yang terkait dengan penggunaan layanan kami.",
  },
  {
    title: "2. Penggunaan Informasi",
    content:
      "Informasi yang dikumpulkan digunakan untuk meningkatkan layanan, komunikasi, dan tujuan administrasi lainnya.",
  },
  {
    title: "3. Keamanan Data",
    content:
      "Kami mengambil langkah-langkah keamanan untuk melindungi data Anda, namun tidak ada sistem yang sepenuhnya aman.",
  },
  {
    title: "4. Perubahan Kebijakan",
    content:
      "Kami dapat memperbarui kebijakan privasi ini sewaktu-waktu. Harap periksa halaman ini secara berkala.",
  },
];

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>

          <div className="space-y-4">
            {privacySections.map((item, index) => (
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
