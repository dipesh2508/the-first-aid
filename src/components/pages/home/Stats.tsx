"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Separator } from "../../ui/separator";
import MotionDiv from "@/components/animations/MotionDiv";
import { motion, useSpring, useTransform } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CountUp = ({ end }: { end: number }) => {
  const [isInView, setIsInView] = useState(false);
  const count = useSpring(0, { duration: 2000 });
  const rounded = useTransform(count, (latest) => Math.min(Math.round(latest), end));

  useEffect(() => {
    if (isInView) {
      count.set(end);
    }
  }, [count, end, isInView]);

  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onViewportEnter={() => setIsInView(true)}
      className="text-4xl font-bold text-white"
    >
      <motion.span>{rounded}</motion.span>
    </motion.span>
  );
};

const StatsItem = ({ label, value }: { label: string; value: number }) => (
  <div className="flex flex-col items-center">
    <CountUp end={value} />
    <p className="mt-2 text-sm font-medium tracking-wider text-white/80 uppercase">
      {label}
    </p>
  </div>
);

const Stats = () => {
  return (
    <section className="bg-gradient-to-br from-primary-6 to-primary-7 lg:mx-12 md:rounded-2xl">
      <div className="mx-auto max-w-screen-xl px-6 py-12 sm:px-8 lg:px-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <MotionDiv
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:py-12 flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold text-center md:text-left text-white lg:text-4xl xl:text-5xl leading-tight">
              Connecting you to the right care, wherever you are
            </h2>

            <p className="mt-6 text-lg text-white/90 text-center md:text-left leading-relaxed">
              Our extensive network of highly-qualified doctors and hospitals
              allows you to choose the care that best suits your needs, wherever
              you are, ensuring you receive the best possible care.
            </p>

            <MotionDiv
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-evenly mt-12 lg:mt-16"
            >
              <StatsItem label="Ambulance" value={34} />
              <Separator orientation="vertical" className="h-16 bg-white/20" />
              <StatsItem label="Doctor" value={56} />
              <Separator orientation="vertical" className="h-16 bg-white/20" />
              <StatsItem label="Hospital" value={13} />
            </MotionDiv>
          </MotionDiv>

          <MotionDiv
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="relative h-72 overflow-hidden rounded-2xl sm:h-80 lg:h-full shadow-xl"
          >
            <Image
              width="443"
              height="520"
              alt="Medical professional"
              src="https://images.unsplash.com/photo-1631217872822-1c2546d6b864?q=80&w=1491&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="absolute inset-0 h-full w-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default Stats;
