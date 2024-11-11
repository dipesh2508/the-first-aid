import React from "react";
import MotionDiv from "@/components/animations/MotionDiv";
import Image from "next/image";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const slideInVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const TermsHero = () => {
  return (
    <section className="relative bg-gradient-to-b from-primary-1 to-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <MotionDiv
            variants={slideInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left space-y-8"
          >
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl xl:text-5xl">
              Terms of Service
              <span className="block text-primary-6 mt-2">Your Trust, Our Priority</span>
            </h1>
            <p className="text-lg leading-8 text-gray-600">
              Please read these terms carefully as they govern your use of our services. 
              We are committed to transparency and ensuring you understand your rights and responsibilities.
            </p>
          </MotionDiv>

          <MotionDiv
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl group"
          >
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1470&auto=format&fit=crop"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Legal Documents"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default TermsHero; 