import React from 'react'
import Image from 'next/image'

import Text from '../ui/Text'

import logo from '@/public/images/footer-logo.svg'
// import ellipse from "@/public/images/Ellipse 7.svg"

const Footer = () => {
  return (
    <div className='w-full bg-[#1D272F] flex justify-center items-center min-h-[437px]'>
        <div className='w-full max-w-[1200px] mx-auto relative'>
        {/* <div className='relative'>
         <Image src={ellipse} alt='ellipse' className='h-[180px] w-full max-w-[1057px] mx-auto' />
         </div> */}
         <div className='mb-[82px] flex justify-center items-center gap-[25px]'>
            <Text className='text-white'>
                About Us
            </Text>
            <Text className='text-white'>
                Capabilities
            </Text>
            <Text className='text-white'>
                Past Performance
            </Text>
            <Text className='text-white'>
                Contact
            </Text> 
           </div>
           <div className='w-full flex justify-center items-center mx-auto'>
            <Image src={logo} alt='logo' className='w-[337px]' />
           </div>
        </div>
    </div>
  )
}

export default Footer