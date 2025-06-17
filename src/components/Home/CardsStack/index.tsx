"use client";

// import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image, { StaticImageData } from "next/image";
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

interface Card {
  image: StaticImageData;
  heading: string;
  items: string[];
}

export const cards: Card[] = [
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
  // useEffect(() => {
  //   const cardsContainer = document.querySelector(".cards") as HTMLElement;
  //   const cards = document.querySelectorAll(".card") as NodeListOf<HTMLElement>;

  //   if (!cardsContainer || cards.length === 0) return;

  //   cardsContainer.style.setProperty("--cards-count", `${cards.length}`);
  //   cardsContainer.style.setProperty("--card-height", `${cards[0].clientHeight}px`);

  //   const triggers: ScrollTrigger[] = [];

  //   cards.forEach((card, index) => {
  //     const offsetTop = 20 + index * 20;
  //     card.style.setProperty("--card-offset", `${offsetTop}px`);

  //     if (index === cards.length - 1) return;

  //     const minScale = 0.85;
  //     const nextCard = cards[index + 1];
  //     const cardInner = card.querySelector(".card__inner") as HTMLElement;

  //     if (!cardInner || !nextCard) return;

  //     const trigger = ScrollTrigger.create({
  //       trigger: nextCard,
  //       start: "top top",
  //       end: `+=${cards[0].clientHeight}`,
  //       scrub: true,
  //       onUpdate: (self) => {
  //         const progress = self.progress;
  //         const scale = 1 - (1 - minScale) * progress;
  //         const brightness = 1 - (1 - 0.6) * progress;

  //         gsap.set(cardInner, {
  //           scale,
  //           filter: `brightness(${brightness})`,
  //         });
  //       },
  //     });

  //     triggers.push(trigger);
  //   });

  //   return () => {
  //     triggers.forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  return (
    <>
      <div className="space h-[40vh]" />
      <div className="cards grid w-full max-w-[1200px] mx-auto gap-y-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card sticky top-[60px] z-[1] w-full"
            style={{ paddingTop: `var(--card-offset)` }}
          >
            <div className="card__inner bg-[#1D272F] flex rounded-[16px] overflow-hidden shadow-xl p-[40px] gap-[40px] will-change-transform transform-origin-top">
              <div className="w-[40%] shrink-0">
                <Image src={card.image} alt={card.heading} className="w-full h-full object-cover aspect-square rounded-md" />
              </div>
              <div className="flex flex-col justify-start w-[60%]">
                <Text as="h4" className="text-secondary text-left mb-4">
                  {card.heading}
                </Text>
                <ul className="list-disc text-white font-bold text-[18px] pl-5">
                  {card.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="space h-[90vh]" />
    </>
  );
};

export { Process };
