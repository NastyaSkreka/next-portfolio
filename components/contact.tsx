"use client"

import React from 'react'
import SectionHeading from './section-heading'
import {motion} from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'
import { useFormStatus } from 'react-dom'
import SubmitBtn from './submit-btn'
import toast from 'react-hot-toast'

export default function Contact() {
    const {ref} = useSectionInView("Contact");
    const {pending} = useFormStatus();

  return (
    <motion.section id="contact" ref={ref } className='mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center'
        initial={{
            opacity:0, 
        }}
        whileInView={{
            opacity: 1, 
        }}
        transition={{
            duration: 1
        }}
        viewport={{
            once: true
        }}
    >
       <SectionHeading>Contact me</SectionHeading>

       <p className='text-gray-700 -mt-6'>
        Contact me directly at{" "}
        <a className='underline' href='mailto:nastya.skreka@gmail.com'>nastya.skreka@gmail.com</a>{" "}
        or througt this form.
       </p>

       <form className='mt-10 flex flex-col'
        action={async (formData) => {
            await sendEmail(formData)
            const {data, error} = await sendEmail(formData);

            if(error){
                toast.error(error)
                return;
            }
            toast.success("Email sent successfully!")
        }}
       >
        <input className='h-14 px-4 roinded-lg borderBlack'
         type="email"
         required
         name="senderEmail"
         maxLength={500}
         placeholder='Your email'/>

        <textarea 
        required
        name="message"
        maxLength={5000}
        className='h-52 my-3 rounded-lg p-4 borderBlack'
        placeholder='Your message'/>
       
       <SubmitBtn/>

       </form>
    </motion.section>
  )
}
