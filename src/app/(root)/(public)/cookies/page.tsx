import CookiesHero from "@/components/pages/cookies/CookiesHero";
import CookiesContent from "@/components/pages/cookies/CookiesContent";
import Disclaimer from "@/components/pages/about/Disclaimer";

const CookiesPage = () => {
  return (
    <main className="bg-white">
      <CookiesHero />
      <CookiesContent />
      <Disclaimer />
    </main>
  );
};

export default CookiesPage;
