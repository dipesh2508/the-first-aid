import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Separator } from "../ui/separator";

const Stats = () => {
  return (
    <section className="bg-primary-6 mx-14 rounded-lg">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl text-white font-normal sm:text-4xl">
              Lorem ipsum dolor sit amet consectetur. Pharetra est viverra diam{" "}
            </h2>

            <p className="mt-4 text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
              hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
              minus veniam tempora deserunt? Molestiae eius quidem quam
              repellat.
            </p>

            <div className="flex h-5 items-center text-white mt-11  space-x-4 text-xl">
              <div className="flex flex-col ">
                <p className="">234</p>
                <p className="text-xs ">Lorem</p>
              </div>
              <Separator orientation="vertical" className="h-12 bg-black" />
              <div className="flex flex-col ">
                <p className="">234</p>
                <p className="text-xs ">Lorem</p>
              </div>
              <Separator orientation="vertical" className="h-12 bg-black" />
              <div className="flex flex-col ">
                <p className="">234</p>
                <p className="text-xs ">Lorem</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
