import React from 'react'
import Link from 'next/link'
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram} from "react-icons/ai"
import { AiOutlineTwitter} from "react-icons/ai"
import {BsPinterest} from "react-icons/bs"
const Footer = () => {
  return (
    <div className='sb h-[350px] w-[500px] md:h-[300px] md:w-full bg-[#90D4C6] items-center '>
      <div className='h-[200px] w-[500px] grid grid-rows-3  my-[55px] mx-[55px] md:my-[50px] md:mx-[400px] '>
       <p className='text-[#2C7566] font-extrabold text-lg text-center'>sunnyside</p>
       <div className=' grid grid-cols-3 mx-[100px] gap-x-[10px] my-[10px] text-[#458D7E] text-[18px] leading-[45px]'>
         <Link href="/">About</Link>
         <Link href="/">Services</Link>
         <Link href="/">Projects</Link>
      
       </div>

       <div className='grid grid-cols-4 my-4 mx-[170px] h-[100px] w-[150px]'>
        <AiFillFacebook className="text-[#2C7566] w-[20px] h-[20px] gap-0" />
        <AiOutlineInstagram className="text-[#2C7566] w-[20px] h-[20px]" />
        <AiOutlineTwitter className="text-[#2C7566] w-[20px] h-[20px]" />
        <BsPinterest className="text-[#2C7566] w-[20px] h-[20px]" />
       </div>
       <div>

       </div>

      </div>
    </div>
  )
}

export default Footer