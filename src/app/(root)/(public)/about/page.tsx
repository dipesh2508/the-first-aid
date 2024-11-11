import AboutHero from "@/components/pages/about/AboutHero";
import Features from "@/components/pages/about/Features";
import Team from "@/components/pages/about/Team";
import Values from "@/components/pages/about/Values";
import Brand from "@/components/pages/about/Brand";
import Disclaimer from "@/components/pages/about/Disclaimer";

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
