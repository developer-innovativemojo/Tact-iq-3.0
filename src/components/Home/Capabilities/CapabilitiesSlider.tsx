"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import Text from "@/components/ui/Text";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import capacilities1 from "@/public/images/home/capabilities4.png";
import capacilities2 from "@/public/images/home/capabilities3.png";
import capacilities3 from "@/public/images/home/capabilities2.png";
import capacilities4 from "@/public/images/home/capabilities1.png";

const capabilitiesData = [
  {
    image: capacilities1,
    title: "Workforce & Logistics",
    items: [
      "Warehouse and supply chain management",
      "Federal workforce recruitment and management",
      "Facilities operations and support",
      "Workforce automation using AI and machine learning",
    ],
  },
  {
    image: capacilities2,
    title: "Health & Scientific Communications",
    items: [
      "Public health outreach and education campaigns",
      "Scientific communication and research dissemination",
      "Strategic communications planning and execution",
      "Crisis communication strategies",
    ],
  },
  {
    image: capacilities3,
    title: "Strategic Program Management",
    items: [
      "Federal program design, execution, and oversight",
      "Needs assessment and gap analysis",
      "Training and technical assistance for federal programs",
      "Operational support and logistics planning",
    ],
  },
  {
    image: capacilities4,
    title: "Technology & Innovation",
    items: [
      "AI-driven workforce optimization platforms",
      "Data analytics and decision-support systems",
      "Systems integration and federal process automation",
      "Secure, compliant custom software solutions",
    ],
  },
];

const CapabilitiesSlider = () => {
  return (
    <div className="md:hidden block">
      <Text as="h2" className="text-center text-secondary mb-[15px] mt-[46px]">
            Capabilities
          </Text>
          <Text as="h4" className="mb-[69px]">
            Tailored Solutions for Federal Government Challenges
          </Text>
    
    <div className="w-full max-w-[500px] mx-auto md:hidden block px-5 mt-[71px]">
      <Swiper
        slidesPerView={1}
        // navigation
        loop={true}
        pagination={{ clickable: true }}
        modules={[ Pagination]}
        className="mySwiper h-[557px]"
      >
        {capabilitiesData.map((cap, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col items-center bg-white rounded-[16px] slider-shadow-capa p-[10px]">
              <Image src={cap.image} alt={cap.title} className="mb-[30px] w-full h-auto rounded-md" />
              <Text as="h4" className="text-secondary mb-4 text-center">
                {cap.title}
              </Text>
              <ul className="list-disc list-inside space-y-2 text-primary font-montserrat text-[16px] pl-5 text-left">
                {cap.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
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

export default CapabilitiesSlider;