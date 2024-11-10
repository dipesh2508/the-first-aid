import AboutHero from "@/components/about/AboutHero";
import Mission from "@/components/about/Mission";
import Features from "@/components/about/Features";
import Team from "@/components/about/Team";
import Values from "@/components/about/Values";
import Brand from "@/components/about/Brand";
import Disclaimer from "@/components/about/Disclaimer";

const AboutPage = () => {
  return (
    <main className="bg-white">
      <AboutHero />
      <Features />
      <Values />
      <Team />
      <Brand />
      <Disclaimer />
    </main>
  );
};

export default AboutPage;
