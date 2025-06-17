'use client';
import { cards } from './index';
import Card from './Card';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (
    <main ref={container} className="relative mt-0 md:block hidden">
      {
        cards.map((card, i: number) => {
          const targetScale = 1 - ((cards.length - i) * 0.025);
          return <Card 
            key={`p_${i}`} 
            i={i} 
            {...card}
            progress={scrollYProgress} 
            range={[i * 0.06, 0.85]} 
            targetScale={targetScale}
          />
        })
      }
    </main>
  )
}
