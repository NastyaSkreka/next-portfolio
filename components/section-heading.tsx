import React from 'react'

type SectionHeadingProps = {
    children: React.ReactNode;
}

export default function SectionHeading({children}:SectionHeadingProps ) {
  return (
    <h2 className='text-2xl sm:text-3px font-medium capitalize mb-8'>{children}</h2>
  )
}
