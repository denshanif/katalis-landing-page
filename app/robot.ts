import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Aturan umum untuk semua bot
      {
        userAgent: "*",
        allow: "/",              // izinkan semua konten publik
        disallow: ["/private/"], // blok halaman sensitif
        // crawlDelay: 10,       // opsional, delay 10 detik
      },
      // Aturan khusus Googlebot (opsional)
      {
        userAgent: "Googlebot",
        allow: "/",
      },
    ],
    sitemap: "https://katalisdev.my.id/sitemap.xml",
  };
}
