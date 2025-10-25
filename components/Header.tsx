"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLink = (hash: string) => (pathname === "/" ? hash : `/${hash}`);

  // ✅ Toggle dropdown manual + delay hilang
  const handleMouseEnter = () => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimer.current = setTimeout(() => setIsDropdownOpen(false), 200);
  };

  const handleToggleClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-transparent backdrop-blur-0"
      }`}
    >
      <nav className="container mx-auto px-5 lg:px-10 py-4 flex items-center justify-between">
        {/* === LOGO === */}
        <Link href="/" className="flex items-center space-x-2 group">
          <Image
            src="/images/katalis-logo-blue-web.png"
            alt="KATALIS Logo"
            width={130}
            height={40}
            priority
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* === DESKTOP MENU === */}
        <div className="hidden md:flex items-center space-x-8 font-medium relative">
          <NavLink href={getLink("#home")} label="Home" />

          {/* Dropdown Layanan Kami */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={handleToggleClick}
              className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-all duration-200"
            >
              <span>Layanan Kami</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180 text-primary" : "rotate-0"
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-md shadow-xl rounded-xl py-3 px-4 min-w-[220px] animate-fadeIn border border-gray-100">
                <DropdownLink href="/services/landing-page" label="Landing Page" />
                <DropdownLink href="/services/e-commerce" label="E-Commerce" />
                <DropdownLink href="/services/erp" label="ERP & Sistem Lainnya" />
                <DropdownLink href="/services/custom-website" label="Website Custom" />
              </div>
            )}
          </div>

          <NavLink href="/why-choose-us" label="Mengapa Memilih Kami" />
          <NavLink href={getLink("#tentang-kami")} label="Tentang Kami" />
          <NavLink href={getLink("#portfolio")} label="Portfolio" />

          <Link
            href="https://wa.me/6285189897289"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-inner-soft"
          >
            <Phone size={16} />
            <span>Hubungi Kami</span>
          </Link>
        </div>

        {/* === MOBILE MENU BUTTON === */}
        <button
          className="md:hidden text-gray-700 hover:text-primary transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* === MOBILE MENU === */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t shadow-lg animate-fadeIn">
          <div className="container mx-auto px-6 py-6 flex flex-col space-y-5 text-gray-700 font-medium">
            <MobileNavLink href={getLink("#home")} label="Home" closeMenu={() => setIsMenuOpen(false)} />

            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none hover:text-primary">
                <span>Layanan Kami</span>
                <ChevronDown className="transition-transform group-open:rotate-180" size={18} />
              </summary>
              <div className="mt-3 pl-3 flex flex-col space-y-2 text-gray-600">
                <MobileDropdownLink href="/services/landing-page" label="Landing Page" closeMenu={() => setIsMenuOpen(false)} />
                <MobileDropdownLink href="/services/e-commerce" label="E-Commerce" closeMenu={() => setIsMenuOpen(false)} />
                <MobileDropdownLink href="/services/erp" label="ERP & Sistem Lainnya" closeMenu={() => setIsMenuOpen(false)} />
                <MobileDropdownLink href="/services/custom-website" label="Website Custom" closeMenu={() => setIsMenuOpen(false)} />
              </div>
            </details>

            <MobileNavLink href="/why-choose-us" label="Mengapa Memilih Kami" closeMenu={() => setIsMenuOpen(false)} />
            <MobileNavLink href={getLink("#tentang-kami")} label="Tentang Kami" closeMenu={() => setIsMenuOpen(false)} />
            <MobileNavLink href={getLink("#portfolio")} label="Portfolio" closeMenu={() => setIsMenuOpen(false)} />

            <Link
              href="https://wa.me/6285189897289"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition flex items-center justify-center space-x-2 shadow-inner-soft"
            >
              <Phone size={16} />
              <span>Hubungi Kami</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

/* === SUB COMPONENTS === */

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="relative text-gray-700 hover:text-primary transition-all duration-200 group"
    >
      {label}
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

function DropdownLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-primary/10 hover:text-primary transition"
    >
      {label}
    </Link>
  );
}

function MobileNavLink({
  href,
  label,
  closeMenu,
}: {
  href: string;
  label: string;
  closeMenu: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={closeMenu}
      className="hover:text-primary transition-colors"
    >
      {label}
    </Link>
  );
}

function MobileDropdownLink({
  href,
  label,
  closeMenu,
}: {
  href: string;
  label: string;
  closeMenu: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={closeMenu}
      className="pl-2 text-sm hover:text-primary transition-colors"
    >
      {label}
    </Link>
  );
}
