"use client";
import React from 'react'
import Image from 'next/image';

const Band = () => {
  return (
  
  
    <div className='h-full w-full grid grid-rows-2 md:grid-cols-2 bg-white'>
        <div className='mx-[50px] md:mx-[200px] my-[120px]  '>
            <p className='font-hero text-[40px] font-bold '>Transform your </p>
            <p className='font-hero text-[40px] font-bold '>brand</p>
            <p className="mt-3 w-[400px] font-barlow leading-7 text-[18px] text-[#808397]">
            We are a full-service creative agency specializing in helping brands grow fast. 
            Engage your clients through compelling visuals that do most of the marketing for you.
            </p>

            <p className='font-hero text-[15px] font-bold leading-6 uppercase mt-2'>Learn more</p>
            

        </div>
        <div className="bg-[url('/images/egg.jpg')] h-[312px] md:h-[600px] w-[475px] md:w-full bg-cover bg-center"> 

        </div>
        <div className="bg-[url('/images/cup.jpg')] h-[312px] md:h-[600px] w-[475px] md:w-full bg-cover bg-center"> 

        </div>
        <div className='mx-[50px] md:mx-[200px] my-[120px] '>
            <p className='font-hero text-[40px] font-bold '>Stand out to the right </p>
            <p className='font-hero text-[40px] font-bold '>audience</p>
            <p className="mt-3 w-[400px] font-barlow leading-7 text-[18px] text-[#808397]">
            Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, well build and extend your brand in digital places. 
            </p>

            <p className='font-hero text-[15px] font-bold leading-6 uppercase mt-2'>Learn more</p>
            

        </div>
        <div className="bg-[url('/images/chery.png')] h-[740px] w-full bg-cover bg-center">
          <div className=' my-[400px] mx-[30px] md:mx-[120px] text-center '>
            <h1 className='font-hero font-bold text-[#24554A] text-[28px] '>Graphic Design</h1>
            <p className="font-barlow text-[#3E7467] mt-5 mx-10 leading-6">
            Great design makes you memorable. We deliver artwork that
             underscores your brand message and captures potential clients attention.
            </p>

          </div>

        </div>
        <div className="bg-[url('/images/or.png')] h-[740px] w-full bg-cover bg-center">
        <div className=' my-[400px] mx-[30px] md:mx-[120px] text-center '>
            <h1 className='font-hero font-bold text-[#052C3B] text-[28px] '>Photography</h1>
            <p className="font-barlow text-[#19536C] mt-5 mx-10 leading-6">
            Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
            </p>

          </div>

        </div>
        
    </div>
    
    
    
    
  )
}

export default Band