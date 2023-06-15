"use client";
import React from 'react'
import Link from 'next/link';
import {AiOutlineMenu} from "react-icons/ai"
const Navbar = () => {
  return (
    <div className="h-[56px] w-full fixed ">
        <div className='h-56 flex justify-between p-4 text-white '>
            <div className='flex font-extrabold text-xl '>
            <p>sunnyside</p>

            </div>
            <div className='hidden md:flex px-4 space-x-4 font-serif'>
            <Link href="/">About</Link>
            <Link href="/">Services</Link>
            <Link href="/">Projects</Link>
            <Link href="/">Contact</Link>

            </div>
            <div className='md:hidden'>
             <AiOutlineMenu className="w-[24px] h-[24px]" />
            </div>
           

        </div>

    </div>
  )
}

export default Navbar