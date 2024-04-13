import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <>
      <section>
        <div className="   py-8  sm:py-12  lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 ">
            <div className="lg:py-24 px-12">
              <h2 className="text-3xl font-normal sm:text-5xl">
                Lorem ipsum dolor sit amet consectetur. Pharetra est viverra
              </h2>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                qui hic atque tenetur quis eius quos ea neque sunt, accusantium
                soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                repellat.
              </p>

              <Link
                href="#"
                className="mt-8 inline-block rounded bg-primary-5 px-12 py-3 text-sm font-medium text-white transition hover:bg-primary-6 focus:outline-none focus:ring focus:ring-primary-4"
              >
                Sign up
              </Link>
            </div>
            <div className="lg:py-24  px-12 bg-primary-1">
              <h2 className="text-3xl font-normal sm:text-5xl">
                Lorem ipsum dolor sit amet consectetur. Pharetra est viverra
              </h2>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                qui hic atque tenetur quis eius quos ea neque sunt, accusantium
                soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                repellat.
              </p>

              <Link
                href="#"
                className="mt-8 inline-block rounded bg-primary-5 px-12 py-3 text-sm font-medium text-white transition hover:bg-primary-6 focus:outline-none focus:ring focus:ring-primary-4"
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

export default CTA;
