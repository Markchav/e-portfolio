import React from 'react'
import { motion } from 'framer-motion'
import {TiArrowForward} from 'react-icons/ti'

type Props = {}

export default function Nexsys({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.1}}
    className='w-full'>
        <h3 className='flex gap-1 font-medium md:flex-row flex-col text-xl'>Accountant Assistant<span className='text-white tracking-wide'>@Nexsys International</span></h3>
        <p className='text-left text-sm mt-1 font-medium text-white'>March 2020 - April 2023</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base md:text-lg flex gap-2 text-white'>
                <span className='text-white mt-1'>
                    <TiArrowForward/>
                </span>
                Registered over 1,000 invoices and a hundred credit card transactions to increase company sales.
            </li>
            <li className='text-base md:text-lg flex gap-2 text-white'>
                <span className='text-white mt-1'>
                    <TiArrowForward/>
                </span>
                Attended business meetings to maximize efficiency of licenses and products sold to consumers.
            </li>
            <li className='text-base md:text-lg flex gap-2 text-white'>
                <span className='text-white mt-1'>
                    <TiArrowForward/>
                </span>
                Collaborated with a team of coworkers to set goals for each month to finalize reports for the quarters.
            </li>
        </ul>
        </motion.div>
  )
}