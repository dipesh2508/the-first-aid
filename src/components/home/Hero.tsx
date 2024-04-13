import React from "react";
import heroDoctor from "@/assets/heroDoctor.png";
import Image from "next/image";
import Link from "next/link";
import twofoursever from "@/assets/24_7 1.png";
import dr from "@/assets/dr.png";
import { GoChevronRight } from "react-icons/go";

const Hero = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="  h-full rounded-lg ">
              <div className="z-50 w-full "></div>
            </div>

            <div className="">
              <h2 className="text-3xl font-bold sm:text-5xl">
                Connecting you to care, when it matters most.
              </h2>

              <p className="mt-8 text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Mattis montes
                suspendisse urna urna sit. Consectetur donec sapien vestibulum
                fermentum amet suspendisse arcu. Quam dictum adipiscing viverra
                facilisis nec. Adipiscing molestie nibh egestas molestie aenean
                dignissim ac pellentesque.
              </p>

              <Link
                href="#"
                className="mt-8 inline-block rounded bg-primary-5 px-12 py-3 text-sm font-medium text-white transition hover:bg-primary-6 focus:outline-none focus:ring focus:ring-primary-4"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
        <div className="p-6 py-12 relative bg-red-600 grid grid-cols-5 text-gray-50 mx-12 rounded-3xl">
          <div className="absolute w-[475px] left-24 bottom-0 ">
            <Image alt="" src={heroDoctor} className="w-full left-0" />
          </div>
          <div className="col-span-2"></div>
          <div className="container mx-auto col-span-3">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className=" text-start py-2 lg:py-0">
                <h2 className=" text-3xl tracking-tighter font-bold">
                  Lorem ipsum dolor sit amet
                </h2>
                <p className="text-lg font-normal">
                  Lorem ipsum dolor sit amet consectetur. Mattis montes
                  <br />
                  suspendisse urna urna sit. Consectetur donec sapien vestibulum
                  :
                </p>
                <div className="flex gap-4">
                  <div className="bg-primary-7 rounded">
                    <Image
                      alt="247"
                      src={twofoursever}
                      className="object-cover size-16"
                    />
                  </div>
                  <div className="bg-primary-7 rounded">
                    <Image
                      alt="247"
                      src={dr}
                      className="size-16 object-cover"
                    />
                  </div>
                </div>
              </div>
              <Link
                href="#"
                rel="noreferrer noopener"
                className="px-5 mt-4 lg:mt-0 py-6 rounded-md border block bg-primary-9 text-gray-50 border-gray-600"
              >
                <GoChevronRight className="text-center size-16 font-light" />
                Emergency
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
