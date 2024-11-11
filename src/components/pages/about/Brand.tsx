import React from "react";
import Image from "next/image";
import MotionDiv from "@/components/animations/MotionDiv";
import Logo from '@/assets/about/TNT.png'

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Brand = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white">
      
      <MotionDiv
        variants={fadeInVariants}
        initial="hidden"
        transition={{
          delay: 0.3,
          ease: "easeInOut",
          duration: 0.4,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col items-end justify-center px-8 pb-24 md:flex-row md:gap-4 md:px-28"
      >
        <Image src={Logo} alt="Try N Test" className="mx-auto w-96" />
        <MotionDiv
          variants={fadeInVariants}
          initial="hidden"
          transition={{
            delay: 0.5,
            ease: "easeInOut",
            duration: 0.4,
          }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto mb-8 h-0.5 w-48 bg-primary-6 md:h-1 md:w-96"
        />
        <MotionDiv
          variants={fadeInVariants}
          initial="hidden"
          transition={{
            delay: 0.5,
            ease: "easeInOut",
            duration: 0.4,
          }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mb-6 flex flex-col gap-4 text-center text-xl md:text-left md:text-4xl"
        >
          <h3>The Project is Made under the Organisation Try N&#39; Test</h3>
          <h3 className="font-semibold italic text-primary-6">
            Exploring, Innovating, Perfecting
          </h3>
        </MotionDiv>
      </MotionDiv>
    </section>
  );
};

export default Brand; 