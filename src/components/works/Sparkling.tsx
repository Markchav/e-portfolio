import React from 'react'
import { motion } from 'framer-motion'
import {TiArrowForward} from 'react-icons/ti'

type Props = {}

export default function Sparkling({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.1}}
    className='w-full'>
        <h3 className='flex gap-1 font-medium md:flex-row flex-col text-xl'>Driver<span className='text-white tracking-wide'>@Sparkling Image Car Wash</span></h3>
        <p className='text-left text-sm mt-1 font-medium text-white'>May 2021 - August 2021</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base md:text-lg flex gap-2 text-white'>
                <span className='text-white mt-1'>
                    <TiArrowForward/>
                </span>
                Supervised and managed over 400 cars a day through the washing tunnel.
            </li>
            <li className='text-base md:text-lg flex gap-2 text-white'>
                <span className='text-white mt-1'>
                    <TiArrowForward/>
                </span>
                Developed and maintained knowledge of all aspects of the parking lot in order to facilitate coworker’s
duties to provide members with the highest form of customer service.
            </li>
            <li className='text-base md:text-lg flex gap-2 text-white'>
                <span className='text-white mt-1'>
                    <TiArrowForward/>
                </span>
                Enforced safety rules and regulations regarding the pandemic and the use of wearing surgical masks when
conducting vehicles.
            </li>
        </ul>
        </motion.div>
  )
}