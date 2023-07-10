import React from 'react'
import { PageInfo } from '../../typings'
type Props = {
  pageInfo:PageInfo
}

export default function RightSide({pageInfo}: Props) {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-6 text-textLight'>
        <div className='flex flex-col gap-7'>
        <a className='mb-7' href={`mailto:${pageInfo?.email}`}>
            <p className='text-sm rotate-90 w-72 tracking-wide text-white'>
              {pageInfo?.email}
            </p>
        </a>
        </div>
        <div className='w-[2px] h-32 bg-[#F7AB0A]/50 '></div>

    </div>
  )
}