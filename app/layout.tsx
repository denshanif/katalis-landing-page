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
  keywords: ["software house", "web development", "landing page", "ERP", "e-commerce"],
  authors: [{ name: "Katalis Dev" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Katalis - Pemicu Pertumbuhan Digital Bisnis Anda",
    description: "Solusi website untuk pertumbuhan bisnis digital Anda",
    url: "https://katalis.dev",
    siteName: "Katalis",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Katalis - Pemicu Pertumbuhan Digital Bisnis Anda",
    description: "Solusi website untuk pertumbuhan bisnis digital Anda",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${openSans.className} bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
