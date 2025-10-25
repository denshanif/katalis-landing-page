"use client";

import { useState } from "react";
import { ExternalLink, Info } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Semua");

  const tabs = ["Semua", "Landing Page", "ERP & Sistem Lainnya"];

  const portfolioItems = [
    {
      title: "Landing Page Car Rental XYZ",
      tags: ["Next.js", "Tailwind CSS"],
      category: "Landing Page",
      image: "/images/landing-page-illustration.png",
      live: "#",
      detail: "#",
    },
    {
      title: "Sistem Absensi PT XYZ",
      tags: ["Next.js", "Laravel", "Face Recognition"],
      category: "ERP & Sistem Lainnya",
      image: "/images/erp-illustration.png",
      live: "#",
      detail: "#",
    },
  ];

  const filteredItems =
    activeTab === "Semua"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-white to-[#f5f8ff] relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-3xl rounded-full opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-300/20 blur-3xl rounded-full opacity-50"></div>

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Portfolio Kami
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Beberapa proyek yang telah kami bangun untuk membantu bisnis berkembang secara digital.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white border border-gray-200 rounded-xl p-1 shadow-sm backdrop-blur-md">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg transition font-medium ${
                  activeTab === tab
                    ? "bg-primary text-white shadow-inner-soft"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="group bg-white/80 backdrop-blur-lg border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  {/* Thumbnail */}
                  <motion.div
                    className="relative w-full h-64 bg-gray-100 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                        Gambar Belum Tersedia
                      </div>
                    )}
                  </motion.div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <motion.a
                        href={item.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-2 rounded-lg font-medium hover:bg-primary-dark transition shadow-inner-soft"
                      >
                        <ExternalLink size={16} />
                        <span>Live Preview</span>
                      </motion.a>
                      <motion.a
                        href={item.detail}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-5 py-2 rounded-lg font-medium hover:border-primary hover:text-primary transition"
                      >
                        <Info size={16} />
                        <span>Detail</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-2">Belum ada proyek di kategori ini.</p>
          )}
        </div>
      </div>
    </section>
  );
}
