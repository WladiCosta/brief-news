import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='mx-[4.6rem] my-[3.5rem] flex'>
        <div className='flex flex-col sm:flex-row items-start'>
            <Image className='mt-[-20px]' src="/hero-main.svg" alt='hero' width={400} height={200}/>
            <div className='flex flex-col'>
                <div className='flex items-center mx-5 mb-4'>
                    <Image className='ml-[-0.5rem]' src="/news-hero-logo.svg" alt='news logo' width={46} height={46}/>
                    <p className='font-semibold mx-2 flex flex-row items-center justify-center text-gray-600'>Netflix<span className='  mt-1 ml-2 w-[6px] h-[6px] bg-gray-600 rounded-full flex items-center justify-center'></span></p>
                    <p className='font-semibold text-gray-600'>15 minutes ago</p>
                </div>

                <h1 className=' mx-[0.7rem] text-4xl font-semibold'>Money Heist spin-off series Berlin:</h1>
                <h2 className=' mx-[0.7rem] text-3xl font-semibold'> Netflix release date, trailer,cast details<br/> from Tudum</h2>

            </div>
        </div>
    </div>
  )
}

export default Hero




