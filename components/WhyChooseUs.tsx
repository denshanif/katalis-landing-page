import { Crosshair, Users, ChartNoAxesCombined, Clock } from "lucide-react";
import Image from "next/image";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Crosshair size={28} />,
      title: "Solusi Tepat, Bukan Sekedar Website",
      desc: "Kami tidak hanya membuat website, tetapi solusi digital yang disesuaikan dengan kebutuhan bisnis Anda.",
    },
    {
      icon: <Users size={28} />,
      title: "Tim Berpengalaman dan Adaptif",
      desc: "Tim kami terdiri dari profesional berpengalaman yang selalu mengikuti tren teknologi terbaru.",
    },
    {
      icon: <ChartNoAxesCombined size={28} />,
      title: "Fokus pada Hasil Nyata",
      desc: "Kami berkomitmen memberikan hasil yang dapat diukur dan berdampak positif pada bisnis Anda.",
    },
    {
      icon: <Clock size={28} />,
      title: "Dukungan Pelanggan 24/7",
      desc: "Kami menyediakan dukungan pelanggan sepanjang waktu agar bisnis Anda berjalan lancar tanpa hambatan.",
    },
  ];

  return (
    <section id="why-us" className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Mengapa Memilih Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Inilah alasan mengapa banyak klien mempercayakan proyek digital
            mereka kepada Katalis
          </p>
        </div>

        {/* Timeline Section */}
        <div className="relative max-w-3xl mx-auto">
          {/* Garis vertikal */}
          <div className="absolute left-1/2 top-0 w-1 bg-primary/20 h-full transform -translate-x-1/2"></div>

          <div className="space-y-12 relative z-10">
            {reasons.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } md:justify-between`}
              >
                {/* Card Reason */}
                <div className="bg-white shadow-inner-soft rounded-2xl p-8 w-full md:w-5/12 text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-primary">{item.icon}</span>
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>

                {/* Titik di tengah garis */}
                <div className="relative flex items-center justify-center w-6 h-6 bg-primary rounded-full border-4 border-white shadow-md z-20 md:mx-4 my-6 md:my-0"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Image
            src="/images/why-us-illustration.png"
            alt="Mengapa Memilih Kami"
            width={500}
            height={320}
            className="mx-auto mb-10"
          />

          <p className="text-gray-600 mt-4">
            Ikuti kami di{" "}
            <a
              href="https://www.instagram.com/katalis.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              @katalis.dev
            </a>{" "}
            untuk melihat update terbaru kami 🚀
          </p>
        </div>
      </div>
    </section>
  );
}
