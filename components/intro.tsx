"use client"

import React  from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare, FaTelegram } from "react-icons/fa";
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-section-context'


export default function Intro() {
   const {ref} = useSectionInView("Home", 0.5);

   const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext();

  return (
    <section ref={ref} id="home" className='mb-28 flex flex-col  sm:flex-row flex-wrap sm:gap-[20px] gap-[10] sm:max-w-[50rem] sm:mb-0 scroll-mt-[100rem]'>
         <div className='order-2 sm:order-1' >
        <motion.h1 className='text-start  mb-10 mt-4 px-4 text-2xl  font-medium !leading-[1.5] sm:text-4xl'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity:1, y: 0}}
        >
           <div>Skreka Anastasia</div> 
           <div className='font-normal mb-3'>Frontend developer </div>
           <div className='font-normal text-sm sm:text-lg  mb-3'>2 years experience</div>
           <div className='font-normal text-sm sm:text-lg'>Ukraine, Zaporizhzhia</div>
           
        </motion.h1>
        
        <motion.div className='flex flex-col sm:flex-row 
        gap-2 px-4 text-lg font-medium'
         initial={{opacity: 0, y: 100 }}
         animate={{ opacity:1, y:0 }}
         transition={{
            delay: 0.1, 
         }}
        >
        
        <div className='flex flex-col gap-4 max-w-[15rem]'>
        <Link href="#contact"
            onClick={() => {
                setActiveSection("Contact")
                setTimeOfLastClick(Date.now())
            }}
            className="group bg-gray-900 text-white px-7 text-sm py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >Contact me here <BsArrowRight  className="opacity-70 group-hover:translate-x-1 transition"/></Link>
        <a  href="/skreka-frontend.pdf" download className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10">
            Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/>
        </a>
        
      
         <div className='flex gap-5 mt-5'>
        <a   href="https://www.linkedin.com/in/anastasiia-skreka/"
          target="_blank" 
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60">
            <BsLinkedin/>
        </a>
        <a   href="https://github.com/NastyaSkreka"
         className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60">
            <FaGithubSquare/>
        </a>
        <a
            href="https://t.me/https://t.me/nastya_skreka"
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 sm:text-[1.5rem] lg:text-[1.75rem]"
            >
            <FaTelegram />
            </a>
        </div>
        </div>
       
      
        </motion.div>
        </div>
        <div className='flex flex-1 order-1  sm:order-2  items-center justify-center'>
            <motion.div
                initial={{ opacity:0, scale: 0}}
                animate={{ opacity:1, scale: 1}}
                transition={{
                    type:"tween", 
                    duration: 0.2
                }}
            >
                <Image
                src="/nastya.png"
                priority
                alt="Nastya portrait"
                width={300}
                height={400} 
                className='w-[200px] h-[260px] sm:w-full sm:h-full rounded-lg'
            />
            </motion.div>
        </div>

   
    </section>
  )
}
