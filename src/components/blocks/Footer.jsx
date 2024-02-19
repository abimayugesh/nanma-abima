import React from 'react'
import Qrcode from '../../assets/images/Qrcode 1.png'
import Google from '../../assets/images/google.png'
import Appstore from '../../assets/images/appstore.png'
import { RiFacebookLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { PiPaperPlaneRightLight } from "react-icons/pi";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <div className='bg-black '>
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mx-auto px-5 py-16 w-[92%]  text-white' >
       <div>
    
            <h1 className='font-bold text-xl '>Exclusive</h1>
            <p className=' py-2'>Subscribe</p>
            <p className='pb-3 font-poppins font-normal text-base leading-6 '>Get 10% off your first order</p>
            <div className=' flex items-center  w-[200px] border-2 border-white gap-2  rounded-md '>
        <input className='bg-transparent p-3 focus:outline-none  w-full font-poppins font-normal text-base leading-6' type="text"  placeholder='Enter your email'/>
        <PiPaperPlaneRightLight size={30} className='mr-3' />
       </div>
        </div>
        <div >
            <h1  className='font-bold text-xl '>Support</h1>
            <p className='py-2 font-poppins font-normal text-base leading-6 '>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            <p className='py-2 font-poppins font-normal text-base leading-6 '>exclusive@gmail.com</p>
            <p className='py-2 font-poppins font-normal text-base leading-6 '>+88015-88888-9999</p>
        </div>
        <div >
            <h1  className='font-bold text-xl '>Account</h1>
            <p className='py-2 font-poppins font-normal text- leading-6 '>My account</p>
            <p className='py-2 font-poppins font-normal text-base leading-6 '>login/Register</p>
            <p className='py-2 font-poppins font-normal text-base leading-6 '>Cart</p>
            <p className='py-2 font-poppins font-normal text-base leading-6 '>Wishlist</p>
            <p className='py-2 font-poppins font-normal text-base leading-6 '>Shop</p>
        </div>
        <div >
            <h1  className='font-bold text-xl '>Quick Link</h1>
            <p className='py-2 font-poppins font-normal text-base leading-6 '>Privacy Policy</p>
            <p className='py-2 font-poppins font-normal text-base leading-6 '>Terms of use</p>
            <p className='py-2 font-poppins font-normal text-base leading-6 '>FAQ</p>
            <p className='py-2 font-poppins font-normal text-base leading-6 '>Contact</p>
        </div>
        <div  >
            <h1  className='font-bold text-xl '>Download App</h1>
            <p className='text-[12px] py-2 font-poppins font-normal  leading-6 '>Save $3 with App New User Only</p>
            <div className='flex flex-row'>
                <img src={Qrcode} alt="" />
                <div className='mt-2'>
                 <img src={Google} alt="" />
                 <img src={Appstore} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-4 gap-0 w-[50%] lg:w-[100%] mt-3 '>
            <RiFacebookLine  />
            <FiTwitter />
            <FaInstagram />
            <TfiLinkedin />

            </div>
        </div>
      
        </div>
        <div className='text-gray-500   pb-5 flex justify-center'>
        <AiOutlineCopyrightCircle  size={25} />
            <p>ERE Business Solutions 2023. All right reserved</p>
        </div>
    
    </div>
  )
}

export default Footer
