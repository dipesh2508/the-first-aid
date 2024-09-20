"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { sliderImage } from "@/lib/constant/image";
import MotionDiv from "@/components/animations/MotionDiv";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Slider = () => {
  return (
    <section>
      <div className="mx-auto  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:pb-16 lg:py-0">
        <div className="grid grid-cols-1 justify-items-center gap-y-2 gap-x-16">
          <MotionDiv
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="h-64 w-80 lg:w-[845px] lg:h-[541px] overflow-hidden rounded-lg  order-last"
          >
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
                  <SwiperSlide key={index} className="w-full px-16">
                    <Image
                      width={500}
                      height={500}
                      src={menu.link}
                      className=" inset-0 object-cover"
                      alt="..."
                      style={{ width: "100%", height: "auto" }}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </MotionDiv>

          <MotionDiv
            variants={slideUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:py-12"
          >
            <h2 className="text-2xl text-center font-bold md:font-semibold lg:text-5xl text-gray-950">
              Paperwork?
              <br />
              We got this. Use instant forms, and ditch the stress.
            </h2>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default Slider;
