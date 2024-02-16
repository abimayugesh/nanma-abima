import React from 'react'
import banner from '../../../../assets/images/banner.png'
import { IoLogoApple } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className='mt-20 md:mt-10'>
    <div className='flex flex-row justify-between lg:gap-10 bg-black pt-3 px-10 md:items-center md:px-20 md:pt-[50px] mx-auto w-[92%] '>
        <div className='hero-left flex flex-col  items-start text-white md:pb-[100px] sm:pb-[10px] '>
        <div className='flex items-center gap-3'><IoLogoApple size={40}/><p className='lg:text-xl sm:text-xs'>iPhone 14 Series</p> </div>
          <div><h1 className='  font-semibold  sm:text-[10px] md:text-[60px] md:leading-[125%]'>Up to 10%<br/>off Voucher</h1></div>
          <div className='flex items-center gap-2 mt-2 ml-2 ' ><p className='lg:text-xl sm:text-xs'>Shop now</p><FaArrowRightLong /></div>
        </div>
        <div className='hero-right  md:pb-[60px]' ><img src={banner} size={60} alt="" /></div>
</div>
</div>
  )
}

export default Hero
