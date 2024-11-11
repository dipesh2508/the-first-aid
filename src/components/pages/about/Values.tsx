import React from "react";
import MotionDiv from "@/components/animations/MotionDiv";
import Image from "next/image";

const slideInLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const slideInRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const Values = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <MotionDiv
            variants={slideInLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop"
              fill
              className="object-cover"
              alt="Medical professionals"
            />
          </MotionDiv>

          <MotionDiv
            variants={slideInRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-8"
          >
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-gray-900">
              Our Values
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary-6 pl-4">
                <h3 className="text-xl font-semibold text-gray-900">Speed</h3>
                <p className="mt-2 text-gray-600">
                  Every second counts in emergencies. We ensure the fastest possible response times.
                </p>
              </div>

              <div className="border-l-4 border-primary-6 pl-4">
                <h3 className="text-xl font-semibold text-gray-900">Reliability</h3>
                <p className="mt-2 text-gray-600">
                  Trust is crucial. Our network of medical professionals is thoroughly vetted.
                </p>
              </div>

              <div className="border-l-4 border-primary-6 pl-4">
                <h3 className="text-xl font-semibold text-gray-900">Accessibility</h3>
                <p className="mt-2 text-gray-600">
                  Emergency care should be available to everyone, anywhere, anytime.
                </p>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default Values; 