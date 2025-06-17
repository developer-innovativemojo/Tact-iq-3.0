'use client';
import { projects } from './Cardsdata';
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
    <main ref={container} className="relative mt-[10vh]">
      {
        projects.map( (project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.025);
          return <Card 
            key={`p_${i}`} 
            i={i} 
            {...project} 
            url={project.link}
            progress={scrollYProgress} 
            range={[i * 0.125, 1]} 
            targetScale={targetScale}
          />
        })
      }
    </main>
  )
}
