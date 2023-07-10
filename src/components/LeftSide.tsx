import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { Social } from '../../typings';

type Props = {
  socials:Social[]
}

export default function LeftSide({socials}: Props) {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'>
        <div className='flex flex-col gap-7'>
          {socials.map((social)=>
          <span key={social._id} className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <SocialIcon 
          url={social.url} 
          fgColor='gray' 
          bgColor='transparent' 
          target='_blank'/>
          </span> 
          )}

        </div>
        <div className='w-[2px] h-32 bg-[#F7AB0A]/50 '></div>

    </div>
  )
}