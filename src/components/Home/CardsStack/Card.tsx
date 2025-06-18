'use client'
import Image, { StaticImageData } from 'next/image';
import { useTransform, motion, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import Text from "@/components/ui/Text";

interface CardProps {
  i: number;
  image: StaticImageData; // StaticImageData type
  heading: string;
  items: string[];
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const Card = ({i, image, heading, items, progress, range, targetScale}: CardProps) => {
  const container = useRef(null);
      // const { scrollYProgress } = useScroll({
      //   target: container,
      //   offset: ['start end', 'start start']
      // })

  // const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);
 
  return (
    <div ref={container} className="min-h-[80vh] flex items-start justify-center sticky top-0">
      <motion.div 
        style={{
          scale, 
          top: `${i * 15}px`
        }} 
        className="flex flex-col relative h-[475px] w-[1200px] rounded-[16px] overflow-hidden shadow-xl transform-origin-top mt-[10px]"
      >
        <div className="card__inner bg-[#1D272F] flex rounded-[16px] pt-[88px] overflow-hidden shadow-xl p-[40px] gap-[40px] will-change-transform transform-origin-top h-full">
          <div className="w-full max-w-[593px]">
            <Image 
              src={image} 
              alt={heading} 
              className="w-full h-[299px] object-cover aspect-square rounded-[8px]" 
            />
          </div>
          <div className="flex flex-col justify-start mt-[38px]">
            <Text as="h4" className="text-secondary text-left mb-4">
              {heading}
            </Text>
            <ul className="list-disc text-white font-bold text-[18px] pl-5">
              {items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Card