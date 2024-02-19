import React from 'react'
import banner from '../../../../assets/images/banner.png'
import { IoLogoApple } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className='mt-20 md:mt-10'>
    <div className='bg-black mx-auto w-[92%] flex flex-row justify-between md:items-center lg:px-36 lg:pb-3 px-8 md:px-20 md:pb-10 gap-3 pt-[30px] md:pt-[50px]'>
      <div className='text-white flex flex-col items-start'>
     <div className='flex '><IoLogoApple className="lg:w-14 lg:h-14 md:w-7 md:h-7 w-5 h-5"/><p className='pl-1 lg:pt-4 pt-1 md:text-base text-[12px]' >iPhone 14 Series</p></div>
          <div className='  font-semibold pt-2 text-[20px] leading-[125%] md:text-[40px] lg:text-[60px] md:leading-[125%] '><h1 >Up to 10%<br/>off Voucher</h1></div>
          <div className='lg:pt-5 lg:pl-1 pt-2 md:pl-2 underline underline-offset-4 flex gap-2'><p>Shop now</p><FaArrowRightLong className='mt-2' /></div>
          </div>
  
        <div ><img src={banner} className='lg:w-96 lg:h-96 md:w-60 md:h-60 w-40 h-40'/></div>
        </div></div>
  )
}

export default Hero
