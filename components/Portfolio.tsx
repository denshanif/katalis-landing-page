"use client";

import { useState } from "react";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Semua");

  const tabs = ["Semua", "Landing Page", "ERP & Sistem Lainnya"];

  const portfolioItems = [
    {
      title: "Landing Page Jaccoo",
      tags: ["Next.js", "Tailwind CSS"],
      category: "Landing Page",
    },
    {
      title: "Sistem Absensi PT XYZ",
      tags: ["Next.js", "Laravel", "Face Recognition"],
      category: "ERP & Sistem Lainnya",
    },
  ];

  // === Filter berdasarkan tab aktif ===
  const filteredItems =
    activeTab === "Semua"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Portfolio Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Karya-karya digital kami, dari berbagai industri dan skala bisnis
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-inner-soft">
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
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-inner-soft border border-gray-100"
              >
                {/* Thumbnail (Placeholder) */}
                <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
                  <div className="text-center space-x-3">
                    <button className="bg-primary text-white px-6 py-2 rounded-lg shadow-inner-soft hover:bg-primary-dark transition">
                      Live Preview
                    </button>
                    <button className="bg-gray-600 text-white px-6 py-2 rounded-lg shadow-inner-soft hover:bg-gray-700 transition">
                      Detail
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-primary text-white text-sm px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-2">
              Belum ada proyek di kategori ini.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
