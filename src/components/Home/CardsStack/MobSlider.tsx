"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import Text from "@/components/ui/Text";
import { cards } from "./index";

import "swiper/css";
import "swiper/css/pagination";

const ProjectsSlider = () => {
  return (
    <div className="md:hidden block">
      {/* <Text as="h2" className="text-center text-secondary mb-[15px] mt-[46px]">
        Projects
      </Text> */}
      <div className="w-full max-w-[500px] mx-auto md:hidden block px-5">
        <Swiper
          slidesPerView={1}
          loop={true}
          spaceBetween={40}
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[Pagination]}
          className="mySwiper h-[457px]"
        >
          {cards.map((card, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center">
                <Image src={card.image} alt={card.heading} className="w-full rounded-md" />
                <div className="w-full bg-[#1D272F] rounded-b-[24px] rounded-t-none mt-[-10px] p-6 flex flex-col items-start">
                  <Text as="h4" className="text-secondary mb-4 text-left">
                    {card.heading}
                  </Text>
                  <ul className="list-disc list-inside space-y-2 text-white font-bold text-[16px] text-left">
                    {card.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <style jsx global>{`
          .swiper-pagination-bullet {
            width: 16px;
            height: 16px;
            border: 2px solid #56AD37;
            background: transparent;
            opacity: 1;
            margin-bottom: 52px !important;
            margin: 0 6px !important;
            border-radius: 50%;
            transition: background 0.2s, border 0.2s;
          }
          .swiper-pagination-bullet-active {
            background: #56AD37;
            border: 2px solid #56AD37;
          }
        `}</style>
      </div>
    </div>
  );
};

export default ProjectsSlider;