import PrivacyHero from "@/components/pages/privacy/PrivacyHero";
import PrivacyContent from "@/components/pages/privacy/PrivacyContent";
import Disclaimer from "@/components/pages/about/Disclaimer";

const PrivacyPage = () => {
  return (
    <main className="bg-white">
      <PrivacyHero />
      <PrivacyContent />
      <Disclaimer />
    </main>
  );
};

export default PrivacyPage;
