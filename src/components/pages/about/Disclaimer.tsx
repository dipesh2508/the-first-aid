import React from "react";
import MotionDiv from "@/components/animations/MotionDiv";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Disclaimer = () => {
  return (
    <section className="bg-white py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionDiv
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm text-gray-600">
            <span className="font-medium">Disclaimer:</span> The statistics, features, and network information presented on this page are for demonstration purposes only. Actual service availability and capabilities may vary.
          </p>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Disclaimer; 