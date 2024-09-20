import About from "@/components/home/About";
import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Slider from "@/components/home/Slider";
import Stats from "@/components/home/Stats";
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
