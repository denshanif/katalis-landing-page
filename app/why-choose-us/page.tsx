// app/why-choose-us/page.tsx
import WhyChooseUs from "@/components/WhyChooseUs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mengapa Memilih Kami | Katalis",
  description: "Alasan mengapa banyak bisnis mempercayakan proyek digital mereka kepada Katalis.",
};

export default function WhyChooseUsPage() {
  return (
    <>
      <Header />
      <WhyChooseUs />
      <Footer />
    </>
  );
}
