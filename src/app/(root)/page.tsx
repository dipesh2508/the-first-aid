import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Slider from "@/components/home/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Slider />
      <CTA />
    </main>
  );
}
