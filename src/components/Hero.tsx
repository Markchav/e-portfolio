import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import { PageInfo } from '../../typings';
import { urlForImage } from '../../sanity/lib/image';

type Props = {
  pageInfo: PageInfo
}

export default function Hero({pageInfo}: Props) {

  const [text,count] = useTypewriter({
    words:[`Hi, The Name's ${pageInfo?.name}`,
    "Guy-who-loves-Pizza.tsx",
    "<ButLovesToCodeMore/>"
  ],
  loop: true,
  delaySpeed:2000,
  });

  return (
    <section id='home' className='snap-start'>
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
          <BackgroundCircles/>
          <Image src={urlForImage(pageInfo?.heroImage).url()} alt='' width={200} height={200} className='rounded-full h-32 w-32 relative mx-auto object-cover'/>
          <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-400 pb-2 tracking-[15px]'>{pageInfo?.role}</h2>
          <h1 className='text-3xl lg:text-5xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB0A'/>
          </h1>

          </div>

        </div>
    </section>
  )
}