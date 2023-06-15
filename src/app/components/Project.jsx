"use client";
import React from 'react';
import Image from 'next/image';

const Project = () => {
  return (
    <div className='sb w-full'>
       <div className='sb grid grid-cols-2 md:grid-cols-4  w-full'>
        <div className='h-[300px]  md:h-[547px] md:w-[350px] relative'>
        <Image
        src="/images/Bitmap.png"
        fill
        alt="logo"
        />

        </div>
        <div  className='h-[300px]  md:h-[547px] md:w-[350px] relative'>
        <Image
        src="/images/Bitmap2.png"
        fill
        alt="logo"
        />

        </div>
        <div  className='h-[300px]  md:h-[547px] md:w-[350px] relative'>
        <Image
        src="/images/Bitmap3.png"
       fill
        alt="logo"
        />

        </div>
        <div  className='h-[300px]  md:h-[547px] md:w-[350px] relative'>
        <Image
        src="/images/Bitmap4.png"
        fill
        alt="logo"
        />

        </div>
        
        


    </div>

    </div>
   
  )
}

export default Project