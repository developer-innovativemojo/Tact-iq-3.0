"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Text from "@/components/ui/Text";
import disease from "@/public/images/home/disease.png";
import project2 from "@/public/images/home/project-2.png";
import project3 from "@/public/images/home/project-3.png";
import project4 from "@/public/images/home/project-4.png";
import project5 from "@/public/images/home/project-5.png";
import project6 from "@/public/images/home/project-6.png";
import project7 from "@/public/images/home/project-7.png";
import project8 from "@/public/images/home/project-8.png";
import project9 from "@/public/images/home/project-9.png";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    image: disease,
    heading: "Centers for Disease Control and Prevention (CDC)",
    items: [
      "Public health education, crisis response, and community engagement",
    ],
  },
  {
    image: project2,
    heading: "National Institutes of Health (NIH)",
    items: [
      "Health communications, scientific research dissemination, and strategic outreach",
    ],
  },
  {
    image: project3,
    heading: "U.S. Department of Energy (DOE)",
    items: [
      "Workforce development, technical assistance, and training",
    ],
  },
  {
    image: project4,
    heading: "Health Resources and Services Administration (HRSA)",
    items: [
      "Program management and strategic communications support",
    ],
  },
  {
    image: project5,
    heading: "Substance Abuse and Mental Health Services Administration (SAMHSA)",
    items: [
      "Technical assistance, program evaluation, and support services",
    ],
  },
  {
    image: project6,
    heading: "Centers for Medicare & Medicaid Services (CMS)",
    items: [
      "Comprehensive training, communications programs, and policy support",
    ],
  },
  {
    image: project7,
    heading: "Administration for Community Living (ACL)",
    items: [
      "Health promotion and outreach initiatives",
    ],
  },
  {
    image: project8,
    heading: "Department of Labor (DOL)",
    items: [
      "Workforce innovation, talent pipeline management, and community outreach",
    ],
  },
  {
    image: project9,
    heading: "NASA Jet Propulsion Laboratory (JPL) ",
    items: [
      "Warehouse management, logistics, and materials procurement",
    ],
  },
 
];

const Process = () => {
  useEffect(() => {
    const cardsContainer = document.querySelector(
      ".cards"
    ) as HTMLElement | null;
    const cards = document.querySelectorAll(".card") as NodeListOf<HTMLElement>;

    if (!cardsContainer || cards.length === 0) return;

    cardsContainer.style.setProperty("--cards-count", `${cards.length}`);
    cardsContainer.style.setProperty(
      "--card-height",
      `${cards[0].clientHeight}px`
    );

    const triggers: ScrollTrigger[] = [];

    cards.forEach((card, index) => {
    //   const offsetTop = 20 + index * 20;
    //   card.style.paddingTop = `${offsetTop}px`;

      if (index === cards.length - 1) return;

      const minScale = 0.85;
      const toScale = minScale;
      const nextCard = cards[index + 1];
      const cardInner = card.querySelector(
        ".card__inner"
      ) as HTMLElement | null;

      if (!cardInner || !nextCard) return;

      const trigger = ScrollTrigger.create({
        trigger: nextCard,
        start: "top top",
        end: `+=${cards[0].clientHeight}`,
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const scale = 1 - (1 - toScale) * progress;
          const brightness = 1 - (1 - 0.6) * progress;

          gsap.to(cardInner, {
            scale,
            filter: `brightness(${brightness})`,
            overwrite: "auto",
            duration: 0.1,
          });
        },
      });

      triggers.push(trigger);
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* <div className="space space--small"></div> */}
      <div className="cards mt-5">
        {cards.map((card, index) => (
          <div className="card max-w-[1200px] bg-[#ffffff] mx-auto  w-full rounded-[16px] mb-[100px]" data-index={index} key={index}>
            <div className="card__inner bg-[#1D272F] min-h-[475px] pt-[68px] px-[35px] rounded-[16px] flex justify-between items-start">
              <Image src={card.image} alt={card.heading} className="w-full max-w-[591px]" />
              <div className="w-full max-w-[472px]">
                <Text as="h4" className="text-secondary text-left mb-[16px]">
                  {card.heading}
                </Text>
               <ul className="list-disc font-bold font-montserrat text-[18px] text-[#F3F7F8]">
                  {card.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="space"></div>
    </>
  );
};

export { Process };
