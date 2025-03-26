import LogoTicker from "@/Sections/LogoTicker";
import Header from "../Sections/Header";
import Hero from "../Sections/Hero";
import ProductShowcase from "@/Sections/ProductShowcase";
import { Pricing } from "@/Sections/Pricing";
import { Testimonials } from "@/Sections/Testimonials";
import CallToAction from "@/Sections/CallToAction";
import Footer from "@/Sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
