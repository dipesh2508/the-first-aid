import About from "@/components/home/About";
import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Slider from "@/components/home/Slider";
import Stats from "@/components/home/Stats";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Slider />
      <Stats />
      <CTA />
    </main>
  );
}
