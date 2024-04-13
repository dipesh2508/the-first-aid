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

const Slider = () => {
  return (
    <div>
      <section>
        <div className="mx-auto  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-y-2 gap-x-16  ">
            <div className=" h-64 overflow-hidden rounded-lg sm:h-80 order-last lg:h-3/4 ">
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
                <SwiperSlide>
                  <Image
                    width={500}
                    height={500}
                    src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                    className=" inset-0 size-64 object-cover"
                    alt="..."
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    width={500}
                    height={500}
                    src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    className=" inset-0 size-64 object-cover"
                    alt="..."
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    width={500}
                    height={500}
                    src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                    className=" inset-0 size-64 object-cover"
                    alt="..."
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="lg:py-12">
              <h2 className="text-3xl text-center font-bold sm:text-4xl">
                Lorem ipsum dolor sit amet consectetur. Pharetra est viverra
                diam et ac sit.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slider;
