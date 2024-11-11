import About from "@/components/pages/home/About";
import CTA from "@/components/pages/home/CTA";
import Hero from "@/components/pages/home/Hero";
import Slider from "@/components/pages/home/Slider";
import Stats from "@/components/pages/home/Stats";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <About />
      <Slider />
      <Stats />
      <CTA />
    </main>
  );
}
