import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceContent from "@/components/ServiceContent";

const services = {
  "landing-page": {
    title: "Landing Page yang Mengonversi",
    description:
      "Kami merancang landing page yang cepat, responsif, dan berorientasi pada hasil. Fokus kami pada UX dan CTA memastikan pengunjung berubah menjadi pelanggan.",
    image: "/images/landing-page-illustration.png",
    techStack: ["Next.js", "Tailwind CSS", "Vercel", "Framer Motion"],
  },
  "e-commerce": {
    title: "E-Commerce untuk Bisnis Anda",
    description:
      "Bangun toko online modern dengan sistem pembayaran aman dan dashboard yang mudah digunakan. Kami bantu bisnis Anda berkembang di ranah digital.",
    image: "/images/e-commerce-illustration.png",
    techStack: ["Next.js", "Laravel", "Midtrans", "Tailwind CSS"],
  },
  erp: {
    title: "Sistem ERP Terintegrasi",
    description:
      "Optimalkan alur bisnis Anda dengan ERP custom untuk HR, produksi, dan inventory. Terhubung dengan sistem internal Anda secara real-time.",
    image: "/images/erp-illustration.png",
    techStack: ["Laravel", "React", "MySQL", "Docker"],
  },
  "custom-website": {
    title: "Website Custom Sesuai Kebutuhan Anda",
    description:
      "Kami bantu Anda merancang dan membangun website custom sesuai kebutuhan unik bisnis atau organisasi Anda.",
    image: "/images/custom-system-illustration.png",
    techStack: ["Next.js", "Express", "Tailwind CSS", "MongoDB"],
  },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const service = services[slug as keyof typeof services];

  if (!service) return notFound();

  return (
    <>
      <Header />
      <main className="pt-28 pb-20 bg-gradient-to-b from-[#f0f4ff] to-[#ffffff] min-h-screen">
        <ServiceContent service={service} />
      </main>
      <Footer />
    </>
  );
}
