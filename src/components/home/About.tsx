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
            <Card className="relative max-h-96 border-none shadow-none">
              <Image
                src="https://images.unsplash.com/photo-1631217871099-88310a909a32?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={520}
                height={442}
                className="-z-10  object-contain size-full"
                alt="logo"
              />
              <CardFooter className="w-full absolute bottom-0">
                <div className="grid w-full grid-cols-1 justify-items-center">
                  <p className="hidden lg:block text-3xl rounded-sm  px-4 py-3  bg-gray-900/30 text-center text-white">
                  Skip the wait!
                  </p>
                  <div className="flex mt-4 justify-center">
                    <Button className="bg-primary-6 hover:bg-primary-7">
                      Let's Go  
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>

            <div className="">
              <h2 className="text-3xl font-bold sm:text-5xl">
              Time is critical. Grant consent remotely, instantly
              </h2>

              <p className="mt-4 text-gray-600">
              The First Aid app cuts through delays and paperwork in emergencies. With a single click, you can grant remote consent for procedures, allowing doctors to begin treatment faster. This translates to quicker recovery and peace of mind for you and your loved ones. Every second counts. Be prepared and at ease. 
              </p>

              <Link
                href="#"
                className="mt-8 inline-block rounded bg-primary-6 px-12 py-3 text-sm font-medium text-white transition hover:bg-primary-7 focus:outline-none focus:ring focus:ring-primary-4"
              >
                Consent
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
