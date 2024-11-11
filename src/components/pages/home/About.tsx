import React from "react";
import Image from "next/image";
import MotionDiv from "@/components/animations/MotionDiv";
import { Button } from "../../ui/button";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const slideInLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const slideInRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const About = () => {
  return (
    <section className="lg:mb-24 lg:mt-36 my-16 mx-auto max-w-7xl">
      <div className="px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <MotionDiv
            variants={slideInLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center max-h-96"
          >
            <Image
              src="https://images.unsplash.com/photo-1631217871099-88310a909a32?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={520}
              height={442}
              className="object-contain size-full"
              alt="logo"
            />
          </MotionDiv>

          <MotionDiv
            variants={slideInRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <MotionDiv
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-center md:text-left sm:text-5xl text-gray-900 leading-tight">
                Time is critical. Grant consent remotely, instantly
              </h2>
            </MotionDiv>

            <MotionDiv
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="mt-4 text-lg text-gray-600 text-center md:text-left leading-relaxed">
                The First Aid app cuts through delays and paperwork in
                emergencies. With a single click, you can grant remote consent
                for procedures, allowing doctors to begin treatment faster. This
                translates to quicker recovery and peace of mind for you and
                your loved ones. Every second counts. Be prepared and at ease.
              </p>
            </MotionDiv>

            <MotionDiv
              variants={slideUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="mx-auto md:mx-0 h-fit w-fit"
            >
              <Button className="bg-primary-6 text-white">Consent</Button>
            </MotionDiv>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default About;
