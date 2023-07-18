/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import SectionTitle from './SectionTitle'
import {AiFillThunderbolt} from 'react-icons/ai'
import { PageInfo, } from '../../typings'
import { urlForImage } from '../../sanity/lib/image'

type Props = {
    pageInfo:PageInfo,
}

export default function About({pageInfo}: Props) {
  return (
    // max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8
    <section id='about' className='snap-center'>
        <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center max-w-containerSmall py-10 lgl:py-32 gap-8'>

            <SectionTitle title='about'/>

            <div className='flex flex-col lgl:flex-row gap-16 mt-[720px] xs:mt-[500px] sm:mt-[460px] lg:-mt-0'>

                <div className='w-full lgl:w-2/3 text-white font-medium flex flex-col gap-3 mt-16 sm:mt-0'>
                    
                    {/* <h4 className='text-2xl'>Here is a little background</h4> */}
                    <p className='md:text-lg text-[15px] mt-10 sml:mt-0'>{pageInfo?.backgroundInformationFirstParagraph}</p>
                    <p className='md:text-lg text-[15px]'> {pageInfo?.backgroundInformationSecondParagraph} </p>
                    <p className='md:text-lg text-[15px]'>{pageInfo?.backgroundInformationThirdParagraph}</p>
                    <p className='md:text-lg text-[15px]'>Here are a few technologies I have been working with recently:</p>

                    <ul className='max-w-[450px] text-sm grid grid-cols-2 gap-2 mt-2 place-items-center md:place-items-start'>
                        {pageInfo.technologies.map((technology)=> (
                            <li key={technology._id} className='flex items-center gap-2'>
                                <AiFillThunderbolt/>{technology.title}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='w-full lgl:w-1/3 h-80 relative group'>
                    <div className='absolute w-full h-80 -left-6 -top-6 rounded-lg'>
                        <div className='w-full h-full relative z-20 flex pl-6 lgl:pl-0 '>
                            <Image src={urlForImage(pageInfo?.profilePic).url()} width={200} height={200} alt='' className='-mb-20 md:mb-0 flex-shrink-0 rounded-full object-cover md:rounded-lg mx-auto w-56 h-56 md:w-full md:h-80'/>
                            <div className='hidden lgl:inline-block absolute w-full h-80 bg-textGreen/10 rounded-md top-0 left-0 group-hover:bg-transparent duration-300'></div>
                        </div>
                    </div>
                    <div className='hidden lgl:inline-flex w-full h-80 border-2 border-white rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 '></div>
                </div>
            </div>

        </div>
    </section>
  )
}