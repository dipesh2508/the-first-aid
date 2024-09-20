"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Separator } from "../ui/separator";
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
    >
      <motion.span>{rounded}</motion.span>
    </motion.span>
  );
};

const Stats = () => {
  return (
    <section className="bg-primary-6 lg:mx-12 md:rounded-lg">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-16 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <MotionDiv
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="relative h-64 overflow-hidden rounded-lg sm:h-80 order-last lg:h-full"
          >
            <Image
              width="443"
              height="520"
              alt=""
              src="https://images.unsplash.com/photo-1631217872822-1c2546d6b864?q=80&w=1491&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="absolute inset-0 h-full rounded-3xl w-full object-cover"
            />
          </MotionDiv>

          <MotionDiv
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:py-24"
          >
            <h2 className="text-3xl font-bold text-center md:text-left text-white lg:font-normal sm:text-4xl">
              Connecting you to the right care, wherever you are{" "}
            </h2>

            <p className="mt-4 text-white text-center md:text-left">
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
              className="flex h-5 items-start flex-1 justify-evenly text-white max-sm:my-4 lg:mt-11 text-3xl"
            >
              <div className="flex flex-col justify-start">
                <CountUp end={34} />
                <p className="text-xs ">Ambulance</p>
              </div>
              <Separator orientation="vertical" className="h-12 bg-black" />
              <div className="flex flex-col ">
                <CountUp end={56} />
                <p className="text-xs ">Doctor</p>
              </div>
              <Separator orientation="vertical" className="h-12 bg-black" />
              <div className="flex flex-col ">
                <CountUp end={13} />
                <p className="text-xs ">Hospital</p>
              </div>
            </MotionDiv>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default Stats;
