import React from "react";
import MotionDiv from "@/components/animations/MotionDiv";
import { FaHospital, FaUserMd, FaCalendarCheck, FaFileSignature, FaChartLine } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const FeatureCard = ({ icon: Icon, title, description }: any) => (
  <MotionDiv
    variants={fadeInVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="p-4 bg-primary-1 rounded-full">
      <Icon className="size-8 text-primary-6" />
    </div>
    <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
    <p className="mt-2 text-center text-gray-600">{description}</p>
  </MotionDiv>
);

const Features = () => {
  const features = [
    {
      icon: FaHospital,
      title: "Hospital Network",
      description: "Access to our extensive network of certified hospitals.",
    },
    {
      icon: FaUserMd,
      title: "Expert Care",
      description: "Qualified medical professionals available 24/7.",
    },
    {
      icon: MdSupportAgent,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all medical emergencies.",
    },
    {
      icon: FaCalendarCheck,
      title: "Remote Appointments",
      description: "Schedule and manage medical consultations from anywhere, anytime.",
    },
    {
      icon: FaFileSignature,
      title: "Digital Consent",
      description: "Securely grant medical procedure approvals with just one click.",
    },
    {
      icon: FaChartLine,
      title: "Treatment Tracking",
      description: "Monitor your ongoing treatments and medical procedures in real-time.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionDiv
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-gray-900">
            Features that save lives
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of features ensures that help is always within reach,
            making emergency response faster and more efficient than ever.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 