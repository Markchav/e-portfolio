/* eslint-disable react/no-unescaped-entities */
import React, {useState} from 'react'
import SectionTitle from './SectionTitle'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../../typings'

type Props = {
  experiences:Experience[];
}

export default function WorkExperience({experiences}: Props) {

  const [activeWork, setActiveWork] = useState<number>(0)
  //here you can handle your active experience
  const handleNexsys = (id:number)=> {
    // console.log("🚀 ~ file: WorkExperience.tsx:16 ~ handleNexsys ~ id:", id)
    setActiveWork(id)
  }

  return (
    <section id='experience' className='snap-center'>
        <div className='flex relative h-screen max-w-7xl justify-evenly items-center lg:mt-0 mt-72 overflow-hidden'>

            <SectionTitle title='experience'/>

            <div className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4 mt-20 lg:mt-5'>

                <div className='w-full mt-10 flex flex-col md:flex-row text-gray-400 font-medium md:gap-16 gap-10 smx:-mt-10'>
                    
                    <ul className=' md:w-32 flex flex-col '>
                        {experiences?.map((experience,idx)=> (
                          <li key={experience._id} onClick={()=>handleNexsys(idx)} className={`${activeWork === idx ? 
                            "border-l-white text-white" : 
                            " text-gray-400 border-l-hoverColor"} 
                            border-l-2 bg-transparent hover:bg-white/10 py-3 text-md md:text-lg cursor-pointer duration-300 px-4 font-medium`}>{experience?.company}</li>
                        ))}
                    </ul>

                    {experiences?.map((experience,idx)=> (
                      activeWork === idx && <ExperienceCard key={idx} experience={experience}/>
                    ))}
                  
                </div>
            </div>
        </div>
    </section>
  )
}