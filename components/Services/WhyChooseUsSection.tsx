import { ServicePoint } from '@/helpers/constants'
import Image from 'next/image'
import React from 'react'

export const WhyChooseUsSection = ({ title, description, points }: { title: string, description: string, points: ServicePoint[] }) => {
  return (
    <div className='standard-margin-top px-[100px]'>
        <h3 className='text-5xl font-bold mb-4 text-center leading-tight mx-auto'>
            {title}
        </h3>
        <p className='text-center mx-auto'>
            {description}
        </p>
        <div className='grid grid-cols-2 gap-6 w-[70%] mx-auto mt-[60px]'>
            {points.map((point, index) => (
                <div key={index} className='border border-[#E7E7E7] p-6 flex items-start gap-2'>
                    <Image src="/images/services/check-circle.png" alt="check" width={20} height={20} />
                    <div className='-mt-1'>
                        <p> <span className='font-bold'>{point.heading}:</span> {point.description} </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
