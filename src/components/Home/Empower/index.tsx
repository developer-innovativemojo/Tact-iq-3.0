import React from "react";
import Image from "next/image";

import chart from "@/public/images/home/chart-line.svg";
import contarct from "@/public/images/home/contract.svg";
import userdata from "@/public/images/home/data-user.svg";
import userCheck from "@/public/images/home/checkbox-person.svg";

import Text from "@/components/ui/Text";
const Empower = () => {
  return (
    <div className="w-full h-full relative mt-[155px]">
      <div className="w-full h-full max-w-[1200px] mx-auto">
        <div className="w-full h-full relative">
          <Text as="h2" className="text-center mb-[72px]">
            Empowering <span className="text-secondary">Federal Missions</span>{" "}
            Through Collaboration
          </Text>
          <Text as="h3" className="text-center mb-[20px] text-secondary">
            Who We Are
          </Text>
          <Text as="p" className="text-center text-primary mt-[20px] mb-[65px]">
            <span className="font-bold text-secondary">TactIQ + </span>{" "}
            <span className="font-bold text-accent mb-[65px]">Bizzell</span> is
            a strategic partnership combining TactIQ’s expertise in agile
            workforce solutions and logistics innovation with Bizzell’s
            extensive experience in public health, strategic communications, and
            federal program management. As an SBA-approved 8(a) Joint Venture,
            we offer streamlined contracting and scalable solutions specifically
            designed to meet complex federal requirements.
          </Text>

          {/*  */}

          <Text as="h3" className="text-center mb-[20px] text-secondary">
            Our Mission
          </Text>
          <Text as="p" className="text-center text-primary mt-[20px] mb-[65px]">
            Delivering innovative and integrated solutions that enable federal
            agencies to achieve mission success efficiently and effectively
          </Text>

          {/*  */}

          <Text as="h3" className="text-center mb-[20px] text-secondary">
            Core Differentiators
          </Text>
          <div className="flex flex-wrap gap-x-[291px] gap-y-[65px] justify-center mb-[48px]">
            {/* 1 */}
            <div className="w-full max-w-[382px]">
              <Image src={chart} alt="icon" className="mb-[30px] mx-auto" />

              <Text as="p" className="font-semibold">
                Rapid Scalability: Ability to swiftly respond and scale to
                federal project requirements
              </Text>
            </div>
            {/* 2 */}
            <div className="w-full max-w-[382px]">
              <Image src={contarct} alt="icon" className="mb-[30px] mx-auto" />

              <Text as="p" className="font-semibold">
              Simplified Contracting: Leveraging SBA-approved 8(a) contracting pathways
              </Text>
            </div>
            {/* 3 */}
            <div className="w-full max-w-[382px]">
              <Image src={userdata} alt="icon" className="mb-[30px] mx-auto" />

              <Text as="p" className="font-semibold">
              Technology-Driven Solutions: Utilizing proprietary AI-driven platforms and data analytics tools
              </Text>
            </div>
            {/* 4 */}
            <div className="w-full max-w-[382px]">
              <Image src={userCheck} alt="icon" className="mb-[30px] mx-auto" />

              <Text as="p" className="font-semibold">
              Proven Federal Success: Extensive past performance with major federal agencies
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empower;
