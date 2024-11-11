import TermsHero from "@/components/pages/terms/TermsHero";
import TermsContent from "@/components/pages/terms/TermsContent";
import Disclaimer from "@/components/pages/about/Disclaimer";

const TermsPage = () => {
  return (
    <main className="bg-white">
      <TermsHero />
      <TermsContent />
      <Disclaimer />
    </main>
  );
};

export default TermsPage;
