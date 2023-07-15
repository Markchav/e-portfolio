import React from 'react'
import { motion } from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'
import { Experience } from '../../typings'


type Props = {
    experience:Experience
}


// const DateFormate = (inputDate: any) => {
//     var parts = inputDate?.split("-"); // Split the input date into an array
//     var year = parts[0];
//     var month = parts[1];
//     var date = new Date(year, month - 1, 1); // Subtract 1 from the month to account for zero-based indexing
//     var formattedDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' }).format(date);
//     return formattedDate
// }



export default function ExperienceCard({ experience }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className='w-full'>
            <h3 className='flex gap-1 font-medium md:flex-row flex-col text-xl'>{experience?.jobTitle}<span className='text-white tracking-wide'>@{experience?.company}</span></h3>
            <p className='text-left text-sm mt-1 font-medium text-white'>{new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}</p>
            {/* {DateFormate(experience?.dateStarted)} - {DateFormate(experience?.dateEnded)} */}
            <ul className='mt-6 flex flex-col gap-3'>
                {experience?.points.map((point,i) => (
                    <li key={i} className='text-base md:text-lg flex gap-2 text-white'>
                        <span className='text-white mt-1'>
                                <TiArrowForward />
                            </span>
                            {point}
                    </li>
                ))}
            </ul>
        </motion.div>
    )
}