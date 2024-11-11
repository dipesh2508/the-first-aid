import ContactHero from "@/components/pages/contact/ContactHero";
import ContactForm from "@/components/forms/ContactForm";
import ContactInfo from "@/components/pages/contact/ContactInfo";

const ContactPage = () => {
  return (
    <main className="bg-white">
      <ContactHero />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
