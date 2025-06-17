import React from "react";
// import Image from "next/image";

import Text from "@/components/ui/Text";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";

// import disease from "@/public/images/home/disease.png";

const PastPerformance = () => {
  return (
    <div>
      <div className="w-full h-full relative md:mt-0 mt-[50px]">
        {/* Background Grid Pattern */}
        <AnimatedGridPattern
          width={100}
          height={100}
          maxOpacity={0.1}
          className="absolute inset-0 z-0 min-h-[650px] md:min-h-[500px] opacity-80"
        />

        {/* Foreground Text */}
        <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center relative z-10 text-center px-4">
          <Text
            as="h2"
            className="text-center text-secondary mb-[56px] md:mb-[15px] mt-[64px]"
          >
            Past Performance
          </Text>
          <Text as="h4" className="mb-[33px]">
            Demonstrated Federal Contracting Excellence
          </Text>
          <Text as="p" className="text-center text-primary font-bold mb-[58px]">
            As an SBA-approved 8(a) Joint Venture, TactIQ + Bizzell leverages
            extensive combined experience delivering impactful results for
            federal clients.
          </Text>
          <Text as="h3" className="text-center md:mb-[97px] mb-[80px]">
            Featured Federal Projects
          </Text>
        </div>
      </div>

     
    </div>
  );
};

export default PastPerformance;
