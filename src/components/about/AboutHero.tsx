import React from "react";
import MotionDiv from "@/components/animations/MotionDiv";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight, Clock, Shield, Users } from "lucide-react";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const slideInVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const FeatureCard = ({ icon: Icon, title }: { icon: any; title: string }) => (
  <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-3 rounded-lg">
    <div className="p-2 bg-primary-1 rounded-lg">
      <Icon className="w-5 h-5 text-primary-6" />
    </div>
    <span className="text-sm font-medium text-gray-700">{title}</span>
  </div>
);

const AboutHero = () => {
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
              Revolutionizing
              <span className="block text-primary-6 mt-2">Emergency Response</span>
            </h1>
            <p className="text-lg leading-8 text-gray-600">
              The First Aid app bridges the critical gap between emergencies and professional care, 
              ensuring that help is always just a tap away. Our mission is to make emergency 
              response faster, smarter, and more accessible for everyone.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <MotionDiv
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <Button className="bg-primary-6 text-white w-full sm:w-auto">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </MotionDiv>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <FeatureCard icon={Clock} title="24/7 Emergency Response" />
              <FeatureCard icon={Shield} title="Secure & Private" />
              <FeatureCard icon={Users} title="Expert Medical Team" />
            </div>
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
              src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1470&auto=format&fit=crop"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Emergency Response Team"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;