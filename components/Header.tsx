"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white fixed w-full z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src="/images/katalis-logo-blue-web.png"
            alt="KATALIS Logo"
            width={130}
            height={40}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#home" className="text-gray-700 hover:text-primary">
            Home
          </Link>
          <Link
            href="#tentang-kami"
            className="text-gray-700 hover:text-primary"
          >
            Tentang kami
          </Link>
          <Link href="#portfolio" className="text-gray-700 hover:text-primary">
            Portfolio
          </Link>
          <Link
            href="https://wa.me/6285189897289"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition flex items-center space-x-2 shadow-inner-soft"
          >
            <Phone size={16} />
            <span>Hubungi Kami</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="#home" className="text-gray-700 hover:text-primary">
              Home
            </Link>
            <Link
              href="#tentang-kami"
              className="text-gray-700 hover:text-primary"
            >
              Tentang kami
            </Link>
            <Link
              href="#portfolio"
              className="text-gray-700 hover:text-primary"
            >
              Portfolio
            </Link>
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition flex items-center justify-center space-x-2">
              <Phone size={16} />
              <span>Hubungi Kami</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
