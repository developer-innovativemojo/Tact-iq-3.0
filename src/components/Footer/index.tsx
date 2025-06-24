import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// import Text from '../ui/Text'

import logo from '@/public/images/footer-logo.svg'
import ellipse from "@/public/images/Ellipse 7.svg";

const Footer = () => {
  return (
    <div className='w-full bg-[#1D272F] relative flex justify-center items-center min-h-auto md:min-h-[537px]'>
        <img
          src={ellipse.src}
          alt="ellipse"
          className="absolute z-10 left-1/2 md:top-[-39%] top-[-10%] -translate-x-1/2 pointer-events-none select-none md:z-0 z-10 w-full max-w-[900px]"
          style={{height: 'auto'}}
        />
        <div className='w-full max-w-[1200px] mx-auto relative'>
        <div className='w-full md:hidden flex justify-center items-center mt-[96px] mb-[45px] mx-auto relative z-0'>
            <Image src={logo} alt='logo' className='w-[200px]' />
           </div>
         <div className='mb-[82px] flex md:flex-row flex-col justify-center items-center gap-[25px] relative z-10'>
            <Link href='/#about' className='text-white'>
                About Us
            </Link>
            <Link href='/#capabilities' className='text-white'>
                Capabilities
            </Link>
            <Link href='/#past-performance' className='text-white'>
                Past Performance
            </Link>
            <Link href='/#contact-us' className='text-white'>
                Contact
            </Link> 
            <a href='/Capability Statement .pdf' target='_blank' rel='noopener noreferrer' className='text-white'>
                Capabilities Statement
            </a> 
           </div>
           <div className='w-full md:flex hidden justify-center items-center mx-auto relative z-10'>
            <Image src={logo} alt='logo' className='w-[337px]' />
           </div>
        </div>
    </div>
  )
}

export default Footer