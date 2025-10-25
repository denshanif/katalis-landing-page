"use client";

import Link from "next/link";
import {
  Crosshair,
  Users,
  ChartNoAxesCombined,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      icon: <Crosshair size={32} />,
      title: "Solusi Tepat, Bukan Sekedar Website",
      description:
        "Website yang dirancang untuk benar-benar menjawab kebutuhan bisnis Anda.",
    },
    {
      icon: <Users size={32} />,
      title: "Tim Berpengalaman & Adaptif",
      description:
        "Profesional yang selalu mengikuti perkembangan tren dan teknologi digital terbaru.",
    },
    {
      icon: <ChartNoAxesCombined size={32} />,
      title: "Fokus pada Hasil Nyata",
      description:
        "Kami mengukur keberhasilan dari pertumbuhan nyata bisnis Anda di dunia digital.",
    },
  ];

  return (
    <section
      id="keunggulan"
      className="relative py-20 bg-gradient-to-br from-[#f9fbff] via-[#f6f9ff] to-[#eef3ff] overflow-hidden"
    >
      {/* Background Glow */}
      <motion.div
        className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-3xl rounded-full opacity-50"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-blue-200/40 blur-3xl rounded-full opacity-50"
        animate={{ scale: [1, 1.05, 1], rotate: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Keunggulan Kami
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Kami hadir bukan hanya sebagai developer, tetapi sebagai mitra
            transformasi digital yang memahami visi bisnis Anda.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group bg-white/80 backdrop-blur-lg border border-white/40 rounded-2xl p-10 text-center shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:bg-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary group-hover:from-primary/20 group-hover:to-blue-500/20 transition-all duration-500"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {feature.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>

              <Link
                href="/why-choose-us"
                className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all duration-300"
              >
                Pelajari lagi <ArrowRight size={16} className="ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
