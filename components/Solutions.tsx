import Image from "next/image";

export default function Solutions() {
  const solutions = [
    {
      image: "/images/landing-page-illustration.png",
      title: "Landing Page yang Menjual",
    },
    {
      image: "/images/e-commerce-illustration.png",
      title: "E-Commerce untuk Bisnis Anda",
    },
    {
      image: "/images/erp-illustration.png",
      title: "Sistem ERP Terintegrasi",
    },
    {
      image: "/images/custom-system-illustration.png",
      title: "Sistem Kustom Lainnya",
    },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Solusi Website untuk Setiap Kebutuhan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami tawarkan solusi yang fleksibel dan scalable untuk bisnis Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-12 shadow-inner-soft flex flex-col items-center justify-center text-center"
            >
              <div className="relative w-full h-56 mb-6">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className="text-center text-xl font-bold text-primary">
                {solution.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}