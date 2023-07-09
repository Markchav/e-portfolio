import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className='hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4'>

        <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'><SocialIcon url="https://instagram.com/markchavez_" fgColor='gray' bgColor='transparent' target='_blank'/></span>
        <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'><SocialIcon url="https://github.com/Markchav?tab=repositories" fgColor='gray' bgColor='transparent' target='_blank'/></span>
        <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300 mb-3'><SocialIcon url="https://www.linkedin.com/in/mark-chavez-22a701198/" fgColor='gray' bgColor='transparent' target='_blank'/></span>

    </div>
  )
}
