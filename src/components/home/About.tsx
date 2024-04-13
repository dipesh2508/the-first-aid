import React from "react";
import { Card, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import imgLink from "@/assets/heroDoctor.png";
import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="lg:my-24 ">
        <div className="mx-auto  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 content-center lg:grid-cols-2 lg:gap-16">
            <Card className="relative max-h-96  border-none shadow-none">
              <Image
                src="https://images.unsplash.com/photo-1631217871099-88310a909a32?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={520}
                height={442}
                className="-z-10  object-contain size-full"
                alt="logo"
              />
              <CardFooter className="w-full absolute bottom-0">
                <div className="grid w-full grid-cols-1 justify-items-center">
                  <p className="text-3xl rounded-sm  px-4 py-3  bg-gray-900/30 text-center text-white">
                    Lorem ipsum dolor sit amet
                  </p>
                  <div className="flex mt-4 justify-center">
                    <Button className="bg-primary-6 hover:bg-primary-7">
                      Lorem
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>

            <div className="">
              <h2 className="text-3xl font-normal sm:text-5xl">
                Lorem ipsum dolor sit amet consectetur. Pharetra est viverra
                diam et ac sit.
              </h2>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                qui hic atque tenetur quis eius quos ea neque sunt, accusantium
                soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                repellat.
              </p>

              <Link
                href="#"
                className="mt-8 inline-block rounded bg-primary-6 px-12 py-3 text-sm font-medium text-white transition hover:bg-primary-7 focus:outline-none focus:ring focus:ring-primary-4"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
