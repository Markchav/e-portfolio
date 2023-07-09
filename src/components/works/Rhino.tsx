import React from 'react'
import { motion } from 'framer-motion'
import {TiArrowForward} from 'react-icons/ti'

type Props = {}

export default function Rhino({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.1}}
    className='w-full'>
        <h3 className='flex gap-1 font-medium md:flex-row flex-col text-xl'>Salesman/Distributor<span className='text-white tracking-wide'>@Rhino International Distribution</span></h3>
        <p className='text-left text-sm mt-1 font-medium text-white'>June 2019 - August 2019</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base md:text-lg flex gap-2 text-white'>
                <span className='text-white mt-1'>
                    <TiArrowForward/>
                </span>
                Organized over a hundred packages of weekly arrivals at the distribution department to release products for
sale.
            </li>
            <li className='text-base md:text-lg flex gap-2 text-white'>
                <span className='text-white mt-1'>
                    <TiArrowForward/>
                </span>
                Promoted sales by engaging on trips in the different cities of South Florida to enhance profit opportunities
within the company.
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