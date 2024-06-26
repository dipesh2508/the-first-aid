import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Separator } from "../ui/separator";

const Stats = () => {
  return (
    <section className="bg-primary-6 lg:mx-12 rounded-lg">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-16 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 order-last lg:h-full">
            <Image
              width="443"
              height="520"
              alt=""
              src="https://images.unsplash.com/photo-1631217872822-1c2546d6b864?q=80&w=1491&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="absolute inset-0 h-full  rounded-3xl w-full object-cover"
            />
          </div>

          <div className="lg:py-24 ">
            <h2 className="text-3xl font-bold text-white lg:font-normal sm:text-4xl">
            Connecting you to the right care, wherever you are{" "}
            </h2>

            <p className="mt-4  text-white">
            Our extensive network of highly-qualified doctors and hospitals allows you to choose the care that best suits your needs, wherever you are, ensuring you receive the best possible care.
            </p>

            <div className="flex  h-5 items-start flex-1 justify-evenly text-white max-sm:my-4 lg:mt-11   text-3xl">
              <div className="flex flex-col justify-start">
                <p className="">34</p>
                <p className="text-xs ">Ambulance</p>
              </div>
              <Separator orientation="vertical" className="h-12 bg-black" />
              <div className="flex flex-col ">
                <p className="">56</p>
                <p className="text-xs ">Doctor</p>
              </div>
              <Separator orientation="vertical" className="h-12 bg-black" />
              <div className="flex flex-col ">
                <p className="">13</p>
                <p className="text-xs ">Hospital</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
