"use client";

import { Phone } from "lucide-react";

export default function CallToAction() {
  return (
    <section
      id="cta"
      className="relative bg-gradient-to-b from-[#f0f4ff] to-white py-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Mari Wujudkan{" "}
          <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Website Impian
          </span>{" "}
          Anda
        </h2>

        {/* Description */}
        <p className="text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed text-lg md:text-xl">
          Tim ahli <span className="font-semibold">Katalis</span> siap membantu
          membangun kehadiran online yang kuat untuk bisnis Anda. Konsultasi{" "}
          <span className="font-semibold">gratis</span>, transparan, dan tanpa
          komitmen.
        </p>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/6285189897289"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <Phone size={20} />
          <span className="text-lg">Diskusikan Sekarang</span>
        </a>
      </div>
    </section>
  );
}
