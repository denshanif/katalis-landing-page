"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone } from "lucide-react";

interface ServiceContentProps {
  service: {
    title: string;
    description: string;
    image: string;
    techStack: string[];
  };
}

export default function ServiceContent({ service }: ServiceContentProps) {
  return (
    <div className="container mx-auto px-6 md:px-10 flex flex-col-reverse md:flex-row items-center gap-12">
      {/* Konten */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          {service.title}
        </h1>
        <p className="text-gray-700 mb-8 text-lg md:text-xl leading-relaxed">
          {service.description}
        </p>

        {/* Teknologi */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-primary mb-4">
            Teknologi yang Kami Gunakan:
          </h3>
          <ul className="flex flex-wrap gap-3">
            {service.techStack.map((tech, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-primary/10 text-primary px-5 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {tech}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <motion.a
          href="https://wa.me/6285189897289?text=Halo%20Katalis!%20Saya%20ingin%20berkonsultasi%20tentang%20layanan%20Anda."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Phone size={20} />
          Diskusikan dengan Kami Sekarang
        </motion.a>

      </motion.div>

      {/* Gambar */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
          <Image
            src={service.image}
            alt={service.title}
            width={600}
            height={400}
            className="rounded-3xl object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}
