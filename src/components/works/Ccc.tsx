import React from 'react'
import { motion } from 'framer-motion'
import {TiArrowForward} from 'react-icons/ti'

type Props = {}

export default function Ccc({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.1}}
    className='w-full'>
        <h3 className='flex gap-1 font-medium text-xl'>Licensed Public Adjuster<span className='text-white tracking-wide'>@Contender Claims Consultant</span></h3>
        <p className='text-left text-sm mt-1 font-medium text-white'>August 2019 - January 2020</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base md:text-lg flex gap-2 text-white'>
                <span className='text-white mt-1'>
                    <TiArrowForward/>
                </span>
                Completed 60 hours approved course in property insurance adjusting, Florida’s laws and regulations for
public adjusting.
            </li>
            <li className='text-base md:text-lg flex gap-2 text-white'>
                <span className='text-white mt-1'>
                    <TiArrowForward/>
                </span>
                 Supervised multiple house claims daily, with at least one successful claims process while developing
external business relationships with loss adjusters.
            </li>
            <li className='text-base md:text-lg flex gap-2 text-white'>
                <span className='text-white mt-1'>
                    <TiArrowForward/>
                </span>
                Communicated with over fifty clients on telephone or in-person to discuss claim reviews and audits
designed to result in file resolution.
            </li>
        </ul>
        </motion.div>
  )
}