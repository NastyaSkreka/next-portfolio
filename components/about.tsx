"use client"
import React from 'react'
import SectionHeading from './section-heading'
import {motion} from "framer-motion"
import { useSectionInView } from '@/lib/hooks'

export default function About() {
    const {ref} = useSectionInView("About");

  return (
    <motion.section className='mb-28  max-w-[20rem] sm:max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{delay: 0.175}}
        id="about"
        ref={ref}
    >
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
        A recent graduate in Computer Science and a budding front-end 
        developer specializing in <span className="font-medium">React Redux and Next.js</span>. Passionate about crafting beautiful and functional web applications, 
        I've mastered the <span className="italic">basics of HTML, CSS, and JavaScript.</span> 
        </p >
        <p className="mb-3">
        Currently, I am actively working with<span className="font-medium"> Next.js and Nest.js</span> to build more efficient and dynamic web applications. I engage in personal projects to deepen my skills and stay up-to-date with the latest developments in front-end technologies.
        </p>
        <p className="mb-3">
        Seeking an opportunity to join a team where I can apply my knowledge, grow, and contribute. My <span className="italic">educational background in Computer Science</span> has provided me with a solid foundation, and I am ready for new challenges, eagerly anticipating opportunities in web development.
        </p>
    </motion.section>

    
  )
}

