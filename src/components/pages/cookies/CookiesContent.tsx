import React from "react";
import MotionDiv from "@/components/animations/MotionDiv";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CookiesSection = ({ title, content }: { title: string; content: string | string[] }) => (
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

const CookiesContent = () => {
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
            <CookiesSection 
              title="1. Introduction" 
              content="This Cookie Policy explains how The First Aid uses cookies and similar technologies to recognize you when you visit our website or use our application. It explains what these technologies are and why we use them, as well as your rights to control their use."
            />
            
            <CookiesSection 
              title="2. What Are Cookies?" 
              content="Cookies are small data files placed on your device when you visit a website. They are widely used to 'remember' you and your preferences, either for a single visit (using a session cookie) or for multiple repeat visits (using a persistent cookie). They ensure a consistent and efficient experience for visitors and perform essential functions, such as allowing users to remain logged in."
            />

            <CookiesSection 
              title="3. Types of Cookies We Use" 
              content={[
                "Essential Cookies: These cookies are necessary for the website to function and cannot be switched off. They are set in response to actions made by you, such as setting your privacy preferences, logging in, or filling in forms.",
                "Performance Cookies: These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This data helps us improve the performance and design of our website.",
                "Functionality Cookies: These cookies allow the website to remember choices you make (such as language preferences) and provide enhanced, personalized features.",
                "Targeting/Advertising Cookies: We do not currently use advertising cookies. If this changes, we will update our policy accordingly."
              ]}
            />

            <CookiesSection 
              title="4. How We Use Cookies" 
              content={[
                "Authentication: To help us verify your account and determine when you're logged in.",
                "Security: To protect user data and prevent fraud, abuse, and unauthorized access.",
                "Preferences: To remember your settings and preferences, such as language or cookie consent choices.",
                "Analytics: To analyze trends, track user movements around the site, and gather demographic information to better understand our user base."
              ]}
            />

            <CookiesSection 
              title="5. How to Control Cookies" 
              content={[
                "Browser Settings: Most browsers allow you to refuse or accept cookies. The options to do this are usually found in the 'Options' or 'Preferences' menu of your browser. Please note that disabling cookies may impact your user experience.",
                "Cookie Consent Banner: When you first visit our site, you will see a cookie consent banner that provides you the option to accept or manage your cookie preferences."
              ]}
            />

            <CookiesSection 
              title="6. Third-Party Cookies" 
              content="Some cookies may be set by third-party providers who provide services on our website, such as analytics services (e.g., Google Analytics). These third parties may have access to certain information about your browsing activity. We do not control these third-party cookies, and their use is governed by their respective privacy policies."
            />

            <CookiesSection 
              title="7. Updates to This Policy" 
              content="We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any updates will be posted on our website with an updated 'Effective Date' at the top of this policy."
            />

            <CookiesSection 
              title="8. Contact Us" 
              content="If you have any questions or concerns about our use of cookies, please contact us at tnt.tryntest@gmail.com"
            />
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default CookiesContent; 