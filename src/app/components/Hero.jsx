"use client";
import React from 'react'
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='h-[610px] md:h-screen md:w-screen'>
        <div className="si h-[600px] md:h-full  w-full bg-center bg-[url('/images/bg.jpg')] flex flex-col items-center  bg-cover ">
            <div className='font-hero text-[40px] w-[300px] md:w-full leading-10 md:leading-[69px]  md:text-7xl text-white  text-center pt-[150px] font-bold uppercase relative '>
                We are Creatives
            </div>
           
            <Image 
            className='pt-[32px] md:pt-[90px]'   
           src="/images/Group.svg"
           width={30}
           height={60}
           alt="logo"
           />    
        </div>


    </div>
    
  )
}

export default Hero