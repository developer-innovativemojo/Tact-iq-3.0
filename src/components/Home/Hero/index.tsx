import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { Globe } from "@/components/magicui/globe";


import shadow from "@/public/images/home/home-shadow.svg";
import mobileshadow from "@/public/images/home/Rectangle.png";

const Hero = () => {
  return (
    <div className="w-full h-full relative">
      {/* Background Grid Pattern */}
      <AnimatedGridPattern
        width={100}
        height={100}
        maxOpacity={0.1}
        className="absolute inset-0 z-0 min-h-[800px] md:block hidden"
      />

      {/* Foreground Text */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center relative z-10 text-center px-4">
        <Text as="h1" className="mt-[65px] mb-[47px]">
          Where <span className="text-accent">Innovation</span> Meets Proven{" "}
          <span className="text-secondary">Federal Expertise</span>
        </Text>
        <Text as="p" className="">
          <span className="font-bold text-secondary">TactIQ +</span>{" "}
          <span className="font-bold text-accent mb-[20px]">Bizzell</span> is an
          SBA-approved 8(a) Joint Venture providing innovative solutions in
          workforce management, logistics, health communications, strategic
          consulting, and advanced technology tailored specifically for federal
          agencies.
        </Text>
      </div>
        <div className="relative">
        {/* <div className="perspective">
  <Image src={globe} alt="globe" className="spin-3d mx-auto" />
</div> */}

          <Globe className="relative" />
          <Image
            src={shadow}
            alt="shadow"
            className="mt-0 md:mt-[-350px] w-screen md:block hidden relative z-10 bottom-0 left-0"
          />
           <Image
            src={mobileshadow}
            alt="shadow"
            className="mt-[-220px] w-screen md:hidden block relative z-10 bottom-0 left-0"
          />
          <ul className=" list-disc mb-[34px] md:pl-0 pl-7 md:pr-0 pr-4 md:text-left text-center space-y-1 absolute font-montserrat top-[25%] md:top-[30%] left-1/2 -translate-x-1/2 z-20 w-full max-w-[605px] mx-auto h-full flex flex-col items-center justify-center">
            <li className="text-primary font-bold text-[13px] md:text-[18px] text-white leading-[24px] mx-auto">
              SBA-Approved 8(a) Joint Venture
            </li>
            <li className="text-primary font-bold text-[13px] md:text-[18px] text-white leading-[24px] mx-auto">
              HUBZone Certified
            </li>
            <li className="text-primary font-bold text-[13px] md:text-[18px] text-white leading-[24px] mx-auto">
              Proven Performance with Major Federal Agencies
            </li>
            <li className="text-primary font-bold text-[13px] md:text-[18px] text-white leading-[24px] mx-auto">
              $250M+ in Combined Federal Contracting Experience
            </li>
            <li className="text-primary font-bold text-[13px] md:text-[18px] text-white leading-[24px] mx-auto">
              Compliance with Federal Security and Contracting Standards
            </li>
          <Button className="w-full max-w-[325px] h-[45px] mt-[34px] mx-auto md:flex hidden">
          Schedule a Capability Briefing Today
          </Button>
          </ul>
        </div>
        <Button className="w-full max-w-[325px] h-[45px] mt-[34px] mx-auto md:hidden block">
          Schedule a Capability Briefing Today
          </Button>
    </div>
  );
};

export default Hero;
