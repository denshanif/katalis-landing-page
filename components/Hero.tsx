import Image from "next/image";
import Link from "next/link";
import { MessageSquareText } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Card Wrapper */}
        <div className="bg-secondary rounded-3xl shadow-inner-custom p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Text */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-primary">Pemicu</span>{" "}
                Pertumbuhan Bisnis Anda
              </h1>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Kami membantu bisnis Anda beradaptasi dan berkembang di era
                digital melalui solusi perangkat lunak yang efisien, scalable,
                dan dirancang khusus untuk kebutuhan Anda.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Konsultasi Gratis */}
                <Link
                  href="https://wa.me/6285189897289?text=Halo%20Katalis!%20Saya%20ingin%20berkonsultasi%20tentang%20layanan%20Anda."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition font-medium flex items-center justify-center space-x-2 shadow-inner-soft"
                >
                  <MessageSquareText size={16} />
                  <span>Konsultasi Gratis</span>
                </Link>

                {/* Lihat Portfolio Kami */}
                <Link
                  href="#portfolio"
                  className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition font-medium shadow-inner-soft text-center"
                >
                  Lihat Portfolio Kami
                </Link>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative h-80 md:h-96 flex items-center justify-center">
              <Image
                src="/images/hero-illustration.png"
                alt="Hero Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
