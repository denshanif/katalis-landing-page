import Image from "next/image";

export default function About() {
  const stats = [
    { number: "10+", label: "Proyek Diselesaikan" },
    { number: "5+", label: "Tahun Pengalaman" },
    { number: "24/7", label: "Dukungan Teknis" },
  ];

  return (
    <section id="tentang-kami" className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Tentang Kami
        </h2>
        <p className="text-gray-600 mb-10 text-base md:text-lg">
          Kami Bukan Sekadar Developer, Kami Mitra Transformasi Digital Anda
        </p>

        {/* Card utama */}
        <div className="bg-secondary rounded-3xl shadow-inner-custom p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
          {/* Left Content */}
          <div className="flex-1 text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-relaxed text-center md:text-left">
              Di Katalis, kami percaya bahwa teknologi adalah{" "}
              <span className="text-primary">katalis yang mempercepat</span>{" "}
              pertumbuhan bisnis.
            </h3>

            <p className="text-gray-700 leading-relaxed mb-10 text-center md:text-left text-base md:text-lg">
              Kami membantu perusahaan Anda beradaptasi di era digital melalui
              solusi perangkat lunak yang dirancang dengan efisiensi,
              skalabilitas, dan keandalan sebagai prioritas utama.
            </p>

            {/* Statistik */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 sm:p-5 md:p-6 text-center shadow-inner-soft w-full sm:w-auto sm:flex-1"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-700 text-sm md:text-base font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Logo */}
          <div className="flex justify-center md:justify-end flex-shrink-0 w-full md:w-auto">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60">
              <Image
                src="/images/katalis-logo-about.png"
                alt="Katalis Logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 160px, (max-width: 1024px) 200px, 240px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
