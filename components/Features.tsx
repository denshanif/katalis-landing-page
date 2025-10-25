import { Crosshair, Users, ChartNoAxesCombined } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Crosshair size={32} />,
      title: "Solusi Tepat, Bukan Sekedar Website",
      description: "Website yang dirancang sesuai kebutuhan bisnis Anda",
      link: "Pelajari lagi",
    },
    {
      icon: <Users size={32} />,
      title: "Tim Berpengalaman & Adaptif",
      description: "Profesional yang memahami tren dan teknologi terkini",
      link: "Pelajari lagi",
    },
    {
      icon: <ChartNoAxesCombined size={32} />,
      title: "Fokus pada Hasil Nyata",
      description: "Meningkatkan kehadiran digital dan pertumbuhan bisnis Anda",
      link: "Pelajari lagi",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Keunggulan Kami
          </h2>
          <p className="text-gray-600 text-lg">
            Kami hadir dengan solusi terbaik untuk mengembangkan bisnis digital Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-inner-soft rounded-xl p-12"
            >
              <div className="w-16 h-16 bg-primary bg-opacity-10 text-primary flex items-center justify-center rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <a href="#" className="text-primary font-medium hover:underline">
                {feature.link} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}