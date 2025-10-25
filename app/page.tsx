import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Solutions from "@/components/Solutions";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import FloatingWhatsApp from "@/components/FloatingWA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Solutions />
      <About />
      <Portfolio />
      <FAQ />
      <CallToAction />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}