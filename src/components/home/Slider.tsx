"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { sliderImage } from "@/constant/image";

const Slider = () => {
  return (
    <section>
      <div className="mx-auto  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 justify-items-center gap-y-2 gap-x-16  ">
          <div className="w-[845px] h-[541px]   overflow-hidden rounded-lg  order-last  ">
            <Swiper
              modules={[Autoplay, Pagination]}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
              }}
              className="mySwiper "
            >
              {sliderImage.map((menu, index) => {
                return (
                  <SwiperSlide key={menu.title}>
                    <Image
                      width={500}
                      height={500}
                      src={menu.link}
                      className=" inset-0 size-64 object-cover"
                      alt="..."
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div className="lg:py-12">
            <h2 className="text-3xl text-center font-normal sm:text-5xl">
              Lorem ipsum dolor sit amet consectetur. Pharetra est viverra diam
              et ac sit.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
