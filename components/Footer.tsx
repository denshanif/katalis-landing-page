import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-primary text-white pt-16 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-primary"></div>
      <div className="absolute -top-20 left-1/2 w-[500px] h-[500px] bg-primary/20 blur-3xl rounded-full transform -translate-x-1/2"></div>

      <div className="relative container mx-auto px-6 md:px-8 z-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* === Left Section === */}
          <div>
            <div className="mb-6">
              <Link href="/" aria-label="Beranda Katalis">
                <Image
                  src="/images/katalis-logo-white-web.png"
                  alt="KATALIS Logo"
                  width={130}
                  height={40}
                  priority
                />
              </Link>
            </div>

            <h1 className="text-2xl md:text-3xl mb-4 font-semibold">
              Ingin berkonsultasi lebih lanjut?
            </h1>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-1">WhatsApp</h4>
                <Link
                  href="https://wa.me/6285189897289"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white transition"
                >
                  +62 851-8989-7289
                </Link>
              </div>
              <div>
                <h4 className="font-semibold mb-1">E-mail</h4>
                <Link
                  href="mailto:admin@katalisdev.my.id"
                  className="text-blue-200 hover:text-white transition"
                >
                  admin@katalisdev.my.id
                </Link>
              </div>
            </div>
          </div>

          {/* === Right Section === */}
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <h4 className="font-semibold mb-3">Layanan Kami</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <Link href="/services/landing-page" className="hover:text-white transition">
                    Landing Page
                  </Link>
                </li>
                <li>
                  <Link href="/services/e-commerce" className="hover:text-white transition">
                    E-Commerce
                  </Link>
                </li>
                <li>
                  <Link href="/services/erp" className="hover:text-white transition">
                    ERP
                  </Link>
                </li>
                <li>
                  <Link href="/services/custom-website" className="hover:text-white transition">
                    Website Kustom
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Informasi</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <Link href="/term-conditions" className="hover:text-white transition">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-white transition">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-blue-800 mt-12 pt-6 text-center text-blue-200 text-sm">
          <p>&copy; 2025 Katalis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
