/* eslint-disable react/no-unescaped-entities */
import React, {useState} from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import img1 from '/public/assets/images/markchavez_.jpeg'
import Nexsys from './works/Nexsys'
import Sparkling from './works/Sparkling'
import Ccc from './works/Ccc'
import Rhino from './works/Rhino'
import { Experience } from '../../typings'

type Props = {
  experiences:Experience[];
}

export default function WorkExperience({experiences}: Props) {

  const [workNexsys, setWorkNexsys] = useState(true);
  const [workSparkling, setWorkSparkling] = useState(false);
  const [workCcc, setWorkCcc] = useState(false);
  const [workRhino, setWorkRhino] = useState(false);

  const handleNexsys = ()=> {
    setWorkNexsys(true);
    setWorkSparkling(false);
    setWorkCcc(false);
    setWorkRhino(false);
  }
  const handleSparkling = ()=> {
    setWorkNexsys(false);
    setWorkSparkling(true);
    setWorkCcc(false);
    setWorkRhino(false);
  }
  const handleCcc = ()=> {
    setWorkNexsys(false);
    setWorkSparkling(false);
    setWorkCcc(true);
    setWorkRhino(false);
  }
  const handleRhino = ()=> {
    setWorkNexsys(false);
    setWorkSparkling(false);
    setWorkCcc(false);
    setWorkRhino(true);
  }


  return (
    <section id='experience' className='snap-center'>
        <div className='flex relative h-screen max-w-7xl justify-evenly items-center lg:mt-0 mt-52 overflow-hidden'>

            <SectionTitle title='experience'/>

            <div className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4 xs:mt-20 lg:mt-5'>

                <div className='w-full mt-10 flex flex-col md:flex-row text-gray-400 font-medium md:gap-16 gap-10'>
                    
                    <ul className=' md:w-32 flex flex-col '>
                        {/* {experiences?.map((experience)=> (
                          <li key={experience._id} onClick={handleNexsys} className={`${workNexsys ? 
                            "border-l-white text-white" : 
                            " text-gray-400 border-l-hoverColor"} 
                            border-l-2 bg-transparent hover:bg-white/10 py-3 text-md md:text-lg cursor-pointer duration-300 px-4 font-medium`}>{experience?.company}</li>
                        ))} */}

                        <li onClick={handleNexsys} className={`${workNexsys ? 
                          "border-l-white text-white" : 
                          " text-gray-400 border-l-hoverColor"} 
                          border-l-2 bg-transparent hover:bg-white/10 py-3 text-md md:text-lg cursor-pointer duration-300 px-4 font-medium`}>Nexsys International</li>
                        <li onClick={handleSparkling} className={`${workSparkling ? 
                          "border-l-white text-white" : 
                          " text-gray-400 border-l-hoverColor"} 
                          border-l-2 bg-transparent hover:bg-white/10 py-3 text-md md:text-lg cursor-pointer duration-300 px-4 font-medium`}>Car Wash</li>
                        <li onClick={handleCcc} className={`${workCcc ? 
                          "border-l-white text-white" : 
                          " text-gray-400 border-l-hoverColor"} 
                          border-l-2 bg-transparent hover:bg-white/10 py-3 text-md md:text-lg cursor-pointer duration-300 px-4 font-medium`}>Consultant</li>
                        <li onClick={handleRhino} className={`${workRhino ? 
                          "border-l-white text-white" : 
                          " text-gray-400 border-l-hoverColor"} 
                          border-l-2 bg-transparent hover:bg-white/10 py-3 text-md md:text-lg cursor-pointer duration-300 px-4 font-medium`}>Distributor</li>

                    </ul>
                    {workNexsys && <Nexsys /> }
                    {workSparkling && <Sparkling/>}
                    {workCcc && <Ccc/>}
                    {workRhino && <Rhino/>}
                </div>
            </div>
        </div>
    </section>
  )
}