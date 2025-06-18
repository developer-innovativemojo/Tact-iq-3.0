import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import capacilities1 from "@/public/images/home/capabilities4.png";
import capacilities2 from "@/public/images/home/capabilities3.png";
import capacilities3 from "@/public/images/home/capabilities2.png";
import capacilities4 from "@/public/images/home/capabilities1.png";

const Capabilities = () => {
  return (
    <div className="w-full h-full relative mt-[45px] px-5 md:block hidden" id="capabilities">
      <div className="w-full h-full max-w-[1200px] mx-auto">
        <div className="w-full h-full relative">
          <Text as="h2" className="text-center text-secondary mb-[15px]">
            Capabilities
          </Text>
          <Text as="h4" className="mb-[69px]">
            Tailored Solutions for Federal Government Challenges
          </Text>

          {/* 1st section */}
          <div className="w-full flex md:flex-row flex-col-reverse justify-between items-center mb-[50px] gap-[30px]">
            <div className="w-full max-w-[513px]">
              <Text as="h4" className="text-secondary mb-[20px]">
                Workforce & Logistics
              </Text>
              <ul className="list-disc list-inside text-primary font-montserrat text-[18px]">
                <li>Warehouse and supply chain management</li>
                <li>Federal workforce recruitment and management</li>
                <li>Facilities operations and support</li>
                <li>Workforce automation using AI and machine learning</li>
              </ul>
            </div>

            <div className="w-full max-w-[591px]">
              <Image src={capacilities1} alt="capabilities" />
            </div>
          </div>
          {/* 2nd section */}
          <div className="w-full flex md:flex-row-reverse flex-col justify-between items-center mb-[50px]">
            <div className="w-full max-w-[513px]">
              <Text as="h4" className="text-secondary mb-[20px]">
              Health & Scientific Communications
              </Text>
              <ul className="list-disc list-inside text-primary font-montserrat text-[18px]">
               <li>
               Public health outreach and education campaigns
               </li>
               <li>
               Scientific communication and research dissemination
               </li>
               <li>
               Strategic communications planning and execution
               </li>
               <li>
               Crisis communication strategies
               </li>
              </ul>
            </div>

            <div className="w-full max-w-[591px]">
              <Image src={capacilities2} alt="capabilities" />
            </div>
          </div>

          {/* 3rd section */}
          <div className="w-full flex justify-between items-center mb-[50px]">
            <div className="w-full max-w-[513px]">
              <Text as="h4" className="text-secondary mb-[20px]">
              Strategic Program Management
              </Text>
              <ul className="list-disc list-inside text-primary font-montserrat text-[18px]">
              <li>
              Federal program design, execution, and oversight
              </li>
              <li>
              Needs assessment and gap analysis
              </li>
              <li>
              Training and technical assistance for federal programs
              </li>
              <li>
              Operational support and logistics planning
              </li>
              </ul>
            </div>

            <div className="w-full max-w-[591px]">
              <Image src={capacilities3} alt="capabilities" />
            </div>
          </div>

          {/* 4th section */}
          <div className="w-full flex flex-row-reverse justify-between items-center mb-[122px]">
            <div className="w-full max-w-[513px]">
              <Text as="h4" className="text-secondary mb-[20px]">
              Technology & Innovation
              </Text>
              <ul className="list-disc list-inside text-primary font-montserrat text-[18px]">
             <li>
             AI-driven workforce optimization platforms
             </li>
             <li>
             Data analytics and decision-support systems
             </li>
             <li>
             Systems integration and federal process automation
             </li>
             <li>
             Secure, compliant custom software solutions
             </li>
              </ul>
            </div>

            <div className="w-full max-w-[591px]">
              <Image src={capacilities4} alt="capabilities" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
