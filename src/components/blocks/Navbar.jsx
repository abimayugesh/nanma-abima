import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import logo from '../../assets/images/logo.png'
import { TfiMenu } from "react-icons/tfi";
import { FaRegHeart } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className='border b-2 bg-white'>
    <div className='flex justify-between items-center w-[100%] md:w-[92%] md:mx-auto p-4 '>
      <div className='flex items-center'>
        <div>
        <TfiMenu size={25} className='md:hidden cursor-pointer' />
        </div>
      <div className='hidden md:flex'>
        <img src={logo} alt="hello" />
      </div>
      </div>
      <div className='flex items-center gap-[5vw]'>
      <div className=' md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] w-full md:w-auto flex items-center px-5'>
        <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8'>
          <li>
            <a className= 'hover:text-indigo-800 font-poppins font-semibold text-base text-center' href="#">Home</a>
          </li>
          <li>
            <a className='hover:text-indigo-800 font-poppins font-semibold  text-base leading-6 text-center' href="#">Contact</a>
          </li>
          <li>
            <a className='hover:text-indigo-800 font-poppins font-semibold  text-base leading-6 text-center' href="#">About</a>
          </li>
          <li>
            <a className='hover:text-indigo-800 font-poppins font-semibold text-base leading-6 text-center' href="#">Sign up</a>
          </li>
        </ul>
      </div>
       <div className='bg-zinc-100 flex items-center px-2 lg:w-[243px] sm:w-[400px] w-[200px] rounded-md md:flex hidden'>
        <input className='bg-transparent p-3 focus:outline-none  w-full' type="text"  placeholder='What are you looking for?'/>
        <IoSearch size={20} />
       </div>
       <div className='flex items-center gap-[1vw] '>
       <FiUser size={24} className='md:flex hidden' />
       <FaRegHeart size={25} className='md:hidden flex'/>
       <IoCartOutline  size={33}/>
       
       </div>
       
       <div className=' absolute right-[4%] top-[70px]  bg-zinc-100 flex  items-center px-2 md:hidden   w-[92%] rounded-lg  '>
       <IoSearch size={25} className='ml-2'/>
        <input className='bg-transparent p-3  focus:outline-none  w-full text-[18px] ' type="text"  placeholder='What are you looking for?'/>
        
        </div>
       </div>
       
    </div>
    </div>
  )
}

export default Navbar
