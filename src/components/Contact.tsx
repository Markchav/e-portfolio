/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import SectionTitle from './SectionTitle'
import {PhoneIcon, MapIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from '../../typings';

type Inputs = {
  fullName: string,
  email: string,
  subject:string,
  message:string
};

type Props = {
  pageInfo:PageInfo
  }



export default function Contact({pageInfo}: Props) {
  const { register, handleSubmit,formState:{errors} } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:markchavez165@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.fullName}. ${formData.message}`
  };

  return (
    <section id='contact' className='snap-start'>
        <div className='h-screen relative flex flex-col text-center items-center md:text-left max-w-7xl  mx-auto md:flex-row justify-evenly'>
    <SectionTitle title='Contact'/>
<div className='flex flex-col space-y-10 md:mt-32'>
  <h4 className='text-2xl md:text-4xl font-semibold text-center'>
    {/* Don't be shy! Hit me up!👇🏻 */}
    {pageInfo?.intriguingContactBodyHeader}
  </h4>

    <div className='space-y-10'>
        <div className='flex items-center space-x-5 justify-center'>
          <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
          <a href={`tel:${pageInfo?.phoneNumber}`} className='text-lg md:text-xl'>{pageInfo?.phoneNumber}</a>
        </div>

        <div className='flex items-center space-x-5 justify-center'>
          <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
          <a href={`mailto:${pageInfo?.email}`} className='text-lg md:text-xl'>{pageInfo?.email}</a>
        </div>
    </div>

    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
      <div className='grid grid-cols-2 gap-2'>
        <input {...register('fullName', { required: true })} placeholder='Full Name' className='contactInput placeholder:p-1' type='text'/>
        {errors.fullName && <span className='mx-6 my-2 text-pink-500 text-sm'>Please write your Full Name</span>}
        <input {...register('email',{ required: true })} placeholder='Email' className='contactInput placeholder:p-1' type='email'/>
        {errors.email && <span className='mx-6 my-2 text-pink-500 text-sm'>Please write your Email</span>}

      </div>
      <input {...register('subject', {required: true })}placeholder='Subject' className='contactInput placeholder:p-1' type='text'/>
      {errors.subject && <span className='mx-6 my-2 text-pink-500 text-sm'>Please write a Subject</span>}
      <textarea {...register('message', {required: true })} placeholder='Message' className='contactInput placeholder:p-1'/>
      {errors.message && <span className='mx-6 my-2 text-pink-500 text-sm'>Please write a Message</span>}
      <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold'>Submit</button>
    </form>
</div>
        </div>
    </section>
  )
}