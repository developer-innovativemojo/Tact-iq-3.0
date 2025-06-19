import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// import Text from '../ui/Text'

import logo from '@/public/images/footer-logo.svg'
// import ellipse from "@/public/images/Ellipse 7.svg"

const Footer = () => {
  return (
    <div className='w-full bg-[#1D272F] flex justify-center items-center min-h-auto md:min-h-[437px]'>
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
           </div>
           <div className='w-full md:flex hidden justify-center items-center mx-auto relative z-10'>
            <Image src={logo} alt='logo' className='w-[337px]' />
           </div>
        </div>
    </div>
  )
}

export default Footer