import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import img2 from '/public/assets/images/example.avif'
import { motion } from 'framer-motion'
import {TbBrandGithub, } from 'react-icons/tb'
import {RxOpenInNewWindow} from 'react-icons/rx'
import { Project } from '../../typings'
import { urlForImage } from '../../sanity/lib/image'

type Props = {
projects:Project[]
}

export default function Projects({projects}: Props) {


    // const projects = [
    //     {
    //         "idx":1,
    //         "src":"/public/assets/images/example.avif",
    //         "href":"https://picnicsoflo.com",
    //         "alt":"instaclone",
    //         "title":"Instaclone",
    //         "description":"A full functional Cyber Security Blog where you can view the latest post and comments on it by passing your ideas besides you can try to add your own post on it by logging on the portal.Something I want to say  we will add the tech used inside",
    //         "hrefGitHub":"https://github.com/Markchav?tab=repositories",
    //         "hrefLink":"https://picnicsoflo.com"
    //     },
    //     {
    //         "idx":2,
    //         "src":"/public/assets/images/example.avif",
    //         "href":"https://picnicsoflo.com",
    //         "alt":"E-commerce website",
    //         "title":"E-commerce website",
    //         "description":"A full functional Cyber Security Blog where you can view the latest post and comments on it by passing your ideas besides you can try to add your own post on it by logging on the portal.Something I want to say  we will add the tech used inside",
    //         "hrefGitHub":"https://github.com/Markchav/mark-clothing",
    //         "hrefLink":"https://picnicsoflo.com"
    //     },
    //     {
    //         "idx":3,
    //         "src":"/public/assets/images/example.avif",
    //         "href":"https://https://los-magueyes.vercel.app/",
    //         "alt":"Los Magueyes",
    //         "title":"Los Magueyes",
    //         "description":"A full functional Cyber Security Blog where you can view the latest post and comments on it by passing your ideas besides you can try to add your own post on it by logging on the portal.Something I want to say  we will add the tech used inside",
    //         "hrefGitHub":"https://github.com/rayovims/los-magueyes",
    //         "hrefLink":"https://https://los-magueyes.vercel.app/"
    //     },
    //     {
    //         "idx":4,
    //         "src":"/public/assets/images/example.avif",
    //         "href":"https://picnicsoflo.com",
    //         "alt":"instaclone",
    //         "title":"Picnic SoFlo",
    //         "description":"A full functional Cyber Security Blog where you can view the latest post and comments on it by passing your ideas besides you can try to add your own post on it by logging on the portal.Something I want to say  we will add the tech used inside",
    //         "hrefGitHub":"https://github.com/Markchav/picnicSoFlo",
    //         "hrefLink":"https://picnicsoflo.com"
    //     },
    //     {
    //         "idx":5,
    //         "src":"/public/assets/images/example.avif",
    //         "href":"https://picnicsoflo.com",
    //         "alt":"instaclone",
    //         "title":"Instaclone",
    //         "description":"A full functional Cyber Security Blog where you can view the latest post and comments on it by passing your ideas besides you can try to add your own post on it by logging on the portal.Something I want to say  we will add the tech used inside",
    //         "hrefGitHub":"https://github.com/Markchav?tab=repositories",
    //         "hrefLink":"https://picnicsoflo.com"
    //     },

    // ]
return (
<section id='projects' className='snap-start'>
        <motion.div 
        initial={{ opacity:0}}
        whileInView={{ opacity:1}}
        transition={{duration:1.5}}
        className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-container justify-evenly mx-auto items-center z-0 '>

            <SectionTitle title='Projects'/>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 md:mb-5 md:mt-0 mt-10 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
            {/* mb-28 sm:mb-14 */}
                {projects?.map((project,i)=> (
                    <div key={i} className='w-screen flex-shrink-0 h-screen snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44'>
                        <div className='md:mt-20 snap-center'>
                            <a href={project?.linkToBuild} target='_blank' >
                                <motion.div
                                initial={{ y:-300, opacity:0}}
                                whileInView={{ opacity:1, y:0}}
                                transition={{duration:1.2}}
                                viewport={{once:true}}
                                className='snap-center'
                                >
                                <Image alt='' src={urlForImage(project?.image).url()} width={500} height={200} className='w-[450px] h-[400px]' />
                                </motion.div>
                            </a>
                        </div>

                    <div className='space-y-10 px-0 md:px-10 max-w-6xl gap-1'>
                        <h4 className='md:text-2xl text-lg font-semibold text-center flex items-end justify-center gap-2 w-[325px] md:w-full text-white'>
                            <span className='underline decoration-[#F7AB0A] '>
                                Case Study {i+1} of {projects.length}:
                            </span>
                            {project.title}
                        </h4>

                        <p className='md:text-lg text-base text-center md:text-left w-72 justify-center mx-auto md:w-[1200px] text-white'>{project?.summary}</p>
                        
                    </div>

                    <ul className='text-sm md:text-base tracking-wide flex gap-2 md:gap-5 justify-between text-white'>
                        {project?.technologies.map(technology => (
                            <li key={technology?._id}>{technology?.title}</li>
                        ))}
                        </ul>
                    <div className='text-base md:text-2xl tracking-wide flex gap-5 md:gap-5 justify-between text-white'>
                            <a className='hover:text-gray-400 duration-300' href={project?.linkToGithub} target='_blank'><TbBrandGithub className='md:h-8 md:w-8 h-8 w-8' /></a>
                            <a className='hover:text-gray-400 duration-300' href={project?.linkToBuild} target='_blank'><RxOpenInNewWindow className='md:h-8 md:w-8 h-8 w-8'/></a>

                            
                        </div>
                    </div>
                ))}
                {/* projects */}
                {/* projects */}
                {/* projects */}
            </div>
<div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>
        </motion.div>
        </section>
)
}