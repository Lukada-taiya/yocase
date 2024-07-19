import { cn } from '@/lib/utils'
import darkTemplate from "../../public/phone-template-dark-edges.png";
import lightTemplate from "../../public/phone-template-white-edges.png";
import React, { HTMLAttributes } from 'react'
import Image, { StaticImageData } from 'next/image';

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: StaticImageData,
    dark?: boolean
}
const Phone = ({ imgSrc, className, dark = false, ...props} : PhoneProps) => {
  return (
    <div className={cn("relative pointer-events-none z-50 overflow-hidden", className)} {...props}>
        <Image height={896} width={1831} src={dark ? darkTemplate: lightTemplate} alt="phone image" className="pointer-events-none z-50 select-none"/>
        <div className='absolute -z-10 inset-0'>
            <Image height={896} width={1831} src={imgSrc} alt="overlaying phone image" className="object-cover min-w-full min-h-full"/>
        </div>
    </div>
  )
}

export default Phone