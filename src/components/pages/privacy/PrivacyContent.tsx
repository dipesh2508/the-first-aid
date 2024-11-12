import React from "react";
import MotionDiv from "@/components/animations/MotionDiv";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const PrivacySection = ({ title, content }: { title: string; content: string | string[] }) => (
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

const PrivacyContent = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionDiv
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="space-y-8">
            <PrivacySection 
              title="1. Introduction" 
              content="At The First Aid, your privacy is a top priority. This Privacy Policy outlines how we collect, use, share, and protect your personal data when you use our services. By using our website and application, you agree to the terms outlined in this policy."
            />
            
            <PrivacySection 
              title="2. Data We Collect" 
              content={[
                "Account Information: Information you provide during registration, including your name, email address, phone number, MPIN, and nominee details.",
                "Medical Data: Information regarding your medical appointments, medications, and related records provided or accessed through our HRMS feature.",
                "Device Information: Information about your device, including IP address, browser type, and operating system.",
                "Usage Data: Data about how you interact with our website and app, including features used, pages visited, and duration of visits."
              ]}
            />

            <PrivacySection 
              title="3. How We Use Your Data" 
              content={[
                "Providing Services: To facilitate consent-granting during medical emergencies and manage HRMS-related functionalities.",
                "Communication: To send notifications, alerts, and updates related to your use of the application and its features.",
                "Improving Our Services: To enhance and personalize your user experience and to analyze usage trends.",
                "Security and Compliance: To protect against unauthorized access, ensure security, and comply with applicable laws and regulations."
              ]}
            />

            <PrivacySection 
              title="4. Sharing Your Data" 
              content={[
                "With Healthcare Providers: When necessary to facilitate remote consent or other medical processes as authorized by you.",
                "With Nominees: As designated by you, nominees may access specific information related to consent processes.",
                "With Service Providers: We may share data with trusted service providers who assist us with our operations, under strict data protection agreements.",
                "Legal Compliance: We may disclose your data if required by law, regulation, legal process, or enforceable governmental request."
              ]}
            />

            <PrivacySection 
              title="5. Data Security" 
              content="We implement industry-standard measures to safeguard your personal data. This includes encryption, secure access controls, and periodic security assessments. However, no online system is completely secure, and we cannot guarantee absolute security."
            />

            <PrivacySection 
              title="6. Your Rights" 
              content={[
                "Access and Correction: Request access to or corrections of your personal data.",
                "Data Deletion: Request the deletion of your data, subject to certain conditions.",
                "Withdraw Consent: Withdraw your consent for data processing, where applicable."
              ]}
            />

            <PrivacySection 
              title="7. Retention of Data" 
              content="We retain your personal data for as long as it is necessary to fulfill the purposes for which it was collected or as required by applicable laws and regulations."
            />

            <PrivacySection 
              title="8. Children's Privacy" 
              content="The First Aid is not intended for use by individuals under the age of 18 without parental or legal guardian consent. If we become aware that personal data from a minor has been collected without such consent, we will take steps to delete it."
            />

            <PrivacySection 
              title="9. Third-Party Links" 
              content="Our services may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites."
            />

            <PrivacySection 
              title="10. Changes to the Privacy Policy" 
              content="We may update this Privacy Policy periodically. Any changes will be posted with an updated 'Effective Date' at the top of the policy. Continued use of our services after changes are made constitutes acceptance of the revised policy."
            />

            <PrivacySection 
              title="11. Contact Us" 
              content="If you have questions, concerns, or requests related to this Privacy Policy, please contact us at support@firstaid.com or through our contact form."
            />
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default PrivacyContent; 