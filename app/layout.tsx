import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Katalis - Pemicu Pertumbuhan Digital Bisnis Anda",
  description: "Solusi website untuk pertumbuhan bisnis digital Anda",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      {/* Terapkan font global */}
      <body className={`${openSans.className} bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
