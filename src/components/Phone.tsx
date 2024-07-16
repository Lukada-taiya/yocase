import { cn } from '@/lib/utils'
import darkTemplate from "../../public/phone-template-dark-edges.png";
import lightTemplate from "../../publiC/phone-template-white-edges.png";
import React, { HTMLAttributes } from 'react'
import Image from 'next/image';

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string,
    dark?: boolean
}
const Phone = ({ imgSrc, className, dark = false, ...props} : PhoneProps) => {
  return (
    <div className={cn("relative pointer-events-none z-50 overflow-hidden", className)} {...props}>
        <Image src={dark ? darkTemplate: lightTemplate} alt="phone image" className="pointer-events-none select-none z-50"/>
        <div className='absolute -z-10  inset-0'>
            <Image src={imgSrc} alt="overlaying phone image" className="object-cover"/>
        </div>
    </div>
  )
}

export default Phone