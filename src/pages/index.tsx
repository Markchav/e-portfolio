/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import LeftSide from '@/components/LeftSide'
import RightSide from '@/components/RightSide'
import { motion } from 'framer-motion'
import About from '@/components/About'
import Hero from '@/components/Hero'
import WorkExperience from '@/components/WorkExperience'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import { GetServerSideProps, GetStaticProps } from 'next'
import { Experience, PageInfo, Project, Skill, Social } from '../../typings'
import { fetchPageInfo } from '../../utils/fetchPageInfo'
import { fetchExperience } from '../../utils/fetchExperience'
import { fetchSkills } from '../../utils/fetchSkills'
import { fetchProjects } from '../../utils/fetchProjects'
import { fetchSocials } from '../../utils/fetchSocials'


type Props = {
  pageInfo:PageInfo;
  experiences: Experience[];
  skills:Skill[];
  projects:Project[];
  socials:Social[];
}

// const inter = Inter({ subsets: ['latin'] })

export default function Home({pageInfo, experiences,skills,projects,socials}:Props) {
  return (
    <>
    <Head>
      <title>Mark's Portfolio</title>
      <link rel='icon' href='/public/favicon/favicon.ico'/>
    </Head>
    <main className='w-full h-screen  bg-[rgb(36,36,36)] overflow-y-scroll overflow-x-hidden text-white snap-y snap-mandatory z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>


    {/* Header */}
<Navbar pageInfo={pageInfo} socials={socials}/>
<div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>

  {/* LeftSide */}
<motion.div 
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:1.5}}
className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'>
  <LeftSide socials={socials}/>
</motion.div>

{/* Middle Section */}
<div className=' h-[88vh] w-full p-4 mx-auto'>
<Hero pageInfo={pageInfo}/>
<About pageInfo={pageInfo}/>
<WorkExperience experiences={experiences}/>
<Projects projects={projects}/>
<Contact pageInfo={pageInfo}/>
<Footer/>


</div>

{/* Right Side */}
<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:1.5}} 
className='hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0'>
  <RightSide pageInfo={pageInfo}/>
</motion.div>

</div>

    </main>
    </>

  )
};



export const getStaticProps: GetServerSideProps<Props> = async () => {

  const pageInfo:PageInfo = await fetchPageInfo()
  const experiences: Experience[] = await fetchExperience()
  const skills: Skill[] = await fetchSkills()
  const projects: Project[] = await fetchProjects()
  const socials: Social[] = await fetchSocials()

  return {
    props:{
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate:10,
  };

}