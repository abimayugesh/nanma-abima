import React from 'react'
import Qrcode from '../../assets/images/Qrcode 1.png'
import Google from '../../assets/images/google.png'
import Appstore from '../../assets/images/appstore.png'
import { RiFacebookLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className='bg-black mt-2'>
    <div className='grid grid-cols-1 lg:grid-cols-5 gap-6 sm:px-8 mx-auto py-16 w-[92%] text-white' >
       
        <div>
            <h1>Exclusive</h1>
            <p>Subscribe</p>
            <p>Get 10% off your first order</p>
        </div>
        <div>
            <h1>Support</h1>
            <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
        </div>
        <div >
            <h1>Account</h1>
            <p>My account</p>
            <p>login/Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
        </div>
        <div >
            <h1>Quick Link</h1>
            <p>Privacy Policy</p>
            <p>Terms of use</p>
            <p>FAQ</p>
            <p>Contact</p>
        </div>
        <div >
            <h1>Download App</h1>
            <p className='text-[10px]'>Save $3 with App New User Only</p>
            <div className='flex flex-row'>
                <img src={Qrcode} alt="" />
                <div className='mt-2'>
                 <img src={Google} alt="" />
                 <img src={Appstore} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-4 mt-2'>
            <RiFacebookLine />
            <FiTwitter />
            <FaInstagram />
            <TfiLinkedin />

            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer
