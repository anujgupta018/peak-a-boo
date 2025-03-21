import LogoTicker from "@/Sections/LogoTicker";
import Header from "../Sections/Header";
import Hero from "../Sections/Hero";
import ProductShowcase from "@/Sections/ProductShowcase";
import { Pricing } from "@/Sections/Pricing";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing/>
    </>
  );
}
