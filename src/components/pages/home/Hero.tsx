import React from "react";
import heroDoctor from "@/assets/heroDoctor.png";
import Image from "next/image";
import Link from "next/link";
import twofoursever from "@/assets/24_7 1.png";
import dr from "@/assets/dr.png";
import { GoChevronRight } from "react-icons/go";
import { Button } from "../../ui/button";
import MotionDiv from "@/components/animations/MotionDiv";
import "@/app/globals.css";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-10">
        <div className="grid grid-cols-1 justify-items-center lg:grid-cols-2 ">
          <div className="h-full rounded-lg ">
            <div className="z-50 w-full "></div>
          </div>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=""
          >
            <h2 className="text-3xl text-center text-gray-950 md:text-left font-bold sm:text-5xl">
              Connecting you to care, when it matters most.
            </h2>

            <p className="mt-8 text-center md:text-left text-gray-600">
              Turn panic into peace of mind. The First Aid app empowers you with
              fast, efficient emergency response and keeps your loved ones
              informed. We bridge the gap between critical moments and expert
              care. Get connected to the right people, instantly, for peace of
              mind when it matters most. Be prepared. Be in control.
            </p>

            <div className="mx-auto flex justify-center md:justify-start">
              <Link href="/sign-up">
                <Button className="mt-8 mx-auto inline-block rounded bg-primary-5 px-12 text-sm font-medium text-white transition hover:bg-primary-6 focus:outline-none focus:ring focus:ring-primary-4">
                  Sign Up
                </Button>
              </Link>
            </div>
          </MotionDiv>
        </div>
      </div>
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-6 py-8 lg:relative bg-primary-6 grid grid-cols-1 lg:grid-cols-5 text-gray-50 lg:mx-12 mx-8 rounded-3xl"
      >
        <MotionDiv
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative w-64 lg:absolute lg:w-[475px] lg:left-24 lg:bottom-0 mx-auto"
        >
          <Image alt="" src={heroDoctor} className="w-full" />
        </MotionDiv>
        <div className="col-span-1 lg:col-span-2"></div>
        <div className="container mx-auto col-span-3">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className=" text-start py-2 lg:py-0 flex flex-col gap-3"
            >
              <h2 className=" text-2xl lg:text-3xl text-center md:text-left tracking-tighter font-bold">
                Empowering you during emergencies
              </h2>
              <p className="text-base text-center lg:text-left lg:text-lg font-normal">
                The First Aid app equips you with the tools and information{" "}
                <br></br>to navigate emergencies confidently.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <div className="bg-primary-7 rounded">
                  <Image
                    alt="247"
                    src={twofoursever}
                    className="object-cover size-16"
                  />
                </div>
                <div className="bg-primary-7 rounded">
                  <Image alt="247" src={dr} className="size-16 object-cover" />
                </div>
              </div>
            </MotionDiv>
            <MotionDiv
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="#" rel="noreferrer noopener">
                <div className="shine-effect px-6 mt-4 lg:mt-0 py-6 rounded-xl border-2 bg-primary-9 text-gray-50 border-primary-7/30 flex flex-col items-center justify-center gap-3 transition-all duration-300 ease-in-out shadow-lg hover:shadow-primary-8/20 focus:outline-none focus:ring-2 focus:ring-primary-4">
                  <GoChevronRight className="text-center size-16 font-light text-primary-2" />
                  <h3 className="font-semibold tracking-wide">Emergency</h3>
                </div>
              </Link>
            </MotionDiv>
          </div>
        </div>
      </MotionDiv>
    </section>
  );
};

export default Hero;
