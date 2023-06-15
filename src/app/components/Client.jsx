"use client";
import React from 'react'
import Image from 'next/image';

const Client = () => {
  return (
    <div className='w-screen '> 
        <div className='text-[#A7AAAD] font-hero font-bold text-[20px] leading-6 mt-[60px] text-center' >
           <h1 className='text-center'>CLIENT TESTIMONIALS</h1>
        </div>
        <div className='sb grid grid-rows-3 md:grid-cols-3 m-10  w-full  md:w-full'>
          <div className='sb grid grid-rows-4 justify-items-center w-[350px] '>
            <div className='h-[80px] w-[80px] '>
              <Image
               className="h-[70px] w-[70px]"
               src="/images/Oval.png"
               height={70}
               width={70}
               alt="logo"
               />
              
            </div>
            <p className='my-5 text-[18px] text-[#5B636D] leading-7 text-center font-semibold'>
                We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                </p>
                <div  className='mt-5'>
                <p className='font-hero font-bold text-[18px] leading-5 text-center'>Emily R.</p>
                <p className='text-[#A7AAAD]'>Marketing Director</p>
                </div>


          </div>
          <div className='grid grid-rows-4 justify-items-center w-[350px] '>
            <div className='h-[80px] w-[80px] '>
              <Image
               className="h-[70px] w-[70px]"
               src="/images/Oval2.png"
               height={70}
               width={70}
               alt="logo"
               />
              
            </div>
            <p className='my-5 text-[18px] text-[#5B636D] leading-7 text-center font-semibold'>
            Sunnysides enthusiasm coupled with their keen interest in our brands success made it a satisfying and enjoyable experience.
                </p>
                <div className='mt-5'>
                <p className='font-hero font-bold text-[18px] leading-5 text-center '>Thomas S.</p>
                <p className='text-[#A7AAAD]'>Chief Operating Officer</p>

                </div>

          </div>
          <div className='grid grid-rows-4 justify-items-center w-[350px]'>
            <div className='h-[80px] w-[80px] relative'>
              <Image
               className="h-[70px] w-[70px]"
               src="/images/Oval 3.png"
               height={70}
               width={70}
               alt="logo"
               />
              
            </div> 
            <p className='my-5 text-[18px] text-[#5B636D] leading-7 text-center font-semibold'>
            Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
                </p>
                <div  className='mt-5'>
                <p className='font-hero font-bold text-[18px] leading-5 text-center '>Jennie F.</p>
                <p className='text-[#A7AAAD]'>Business Owner</p>

                </div>
               


          </div>
           
           
        </div>

  </div>
       
    
  )
}

export default Client