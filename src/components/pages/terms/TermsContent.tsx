import React from "react";
import MotionDiv from "@/components/animations/MotionDiv";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const TermsSection = ({ title, content }: { title: string; content: string | string[] }) => (
  <div className="border-l-4 border-primary-6 pl-4 space-y-2">
    <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    {Array.isArray(content) ? (
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-600">{content}</p>
    )}
  </div>
);

const TermsContent = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionDiv
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="space-y-8">
            <TermsSection 
              title="1. Introduction" 
              content="Welcome to The First Aid, a Next.js application designed for healthcare consent management and HRMS services. By accessing or using our services, you agree to these Terms of Service ('Terms'). If you do not agree to these Terms, please do not use our services."
            />
            
            <TermsSection 
              title="2. Services Provided" 
              content={[
                "Consent-Granting Mechanism: Enables remote consent granting during medical emergencies when a patient cannot provide consent and no guardian is present.",
                "Healthcare Resource Management System (HRMS): Facilitates appointment scheduling, access to medication records, and other critical medical data."
              ]}
            />

            <TermsSection 
              title="3. User Responsibilities" 
              content={[
                "Register and maintain an active user account.",
                "Add and keep updated a list of nominees who can act on your behalf in emergencies.",
                "Provide accurate and current information for registration and use.",
                "Maintain confidentiality and security of your MPIN and login details."
              ]}
            />

            <TermsSection 
              title="4. Consent Process" 
              content={[
                "The registered user's nominees will receive a detailed notification outlining the medical situation.",
                "The nominee can grant consent remotely via the app by providing MPIN confirmation.",
                "Once granted, the consent is shared with the requesting healthcare unit."
              ]}
            />

            <TermsSection 
              title="5. Eligibility" 
              content="By using The First Aid, you affirm that you are at least 18 years old or have the legal capacity to enter into these Terms. Guardians or legal representatives may use the services on behalf of minors or incapacitated individuals."
            />

            <TermsSection 
              title="6. Limitations of Use" 
              content={[
                "For unlawful purposes.",
                "To share inaccurate or unauthorized medical data.",
                "To impersonate another individual or misrepresent any aspect of your identity.",
                "For any actions that may compromise the security or functionality of our services."
              ]}
            />

            <TermsSection 
              title="7. Data Management and Privacy" 
              content="The First Aid uses secure protocols to manage, store, and protect personal data. User data, including medical records and nominee information, are handled in compliance with applicable privacy laws and regulations. For more details, refer to our Privacy Policy."
            />

            <TermsSection 
              title="8. Liability and Disclaimers" 
              content={[
                "Any delays, failures, or legal complications arising from a nominee's inability or refusal to grant consent.",
                "Misuse of user information by third parties or healthcare providers.",
                "Inaccuracies or omissions in medical data shared via the application."
              ]}
            />

            <TermsSection 
              title="9. Modifications to the Service" 
              content="We reserve the right to modify or discontinue the services offered by The First Aid at any time without prior notice."
            />

            <TermsSection 
              title="10. Contact Us" 
              content="If you have any questions or concerns about these Terms, please contact us at support@firstaid.com or through our contact form."
            />
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default TermsContent; 