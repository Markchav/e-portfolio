import React from 'react'
type Props = {}

export default function RightSide({}: Props) {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-6 text-textLight'>
        <div className='flex flex-col gap-7'>
        <a className='mb-7' href='mailto:markchavez165@gmail.com'>
            <p className='text-sm rotate-90 w-72 tracking-wide text-white'>
                markchavez165@gmail.com
            </p>
        </a>
        </div>
        <div className='w-[2px] h-32 bg-[#F7AB0A]/50 '></div>

    </div>
  )
}