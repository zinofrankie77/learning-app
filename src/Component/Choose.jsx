import React from 'react'
import { Lib, User, Radio, Question, Tv, Clock } from './Icons'

const Choose = () => {
  return (
    <div className='w-full mt-1 pt-20'>
      <div className='px-4 py-12'>
        <h3 className='text-4xl font-bold text-blue-950 py-6 text-center'>Why choose Us</h3>
        <p className='py-4 text-3xl font-bold text-blue-950 text-center'>We accelerate and support learning <br /> beyond the classroom</p>

        <section className='max-w-[1240px] mx-auto'>


        <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-16 px-4 pt-12 sm:pt-20 gap-10'>

            <div className='bg-blue-700 h-[40vh] hover:translate-y-[30px] duration-1000 text-center rounded-xl shadow-2xl'>
                <div className='p-8'>
                    <h1 className='flex justify-center py-8 text-white'>{Lib}</h1>
                    <p className='text-white text-xl'>Our Teacher focus on  one student at a time, giving kids the attention they need to excel.</p>

                </div>
            </div>
            <div className='bg-blue-700 h-[40vh] hover:translate-y-[30px] duration-1000 text-center rounded-xl shadow-2xl'>
                <div className='p-8'>
                    <h1 className='flex justify-center py-8 text-white'>{Clock}</h1>
                    <p className='text-white text-xl'>Find and get access to a Tutor online anytime, anywhere.</p>

                </div>
            </div>
            <div className='bg-blue-700 h-[40vh] hover:translate-y-[30px] duration-1000 text-center rounded-xl shadow-2xl'>
                <div className='p-8'>
                    <h1 className='flex justify-center py-8 text-white'>{User}</h1>
                    <p className='text-white text-xl'>Personalized online tutor based on your own needs and schedule.</p>

                </div>
            </div>
            <div className='bg-blue-700 h-[40vh] hover:translate-y-[30px] duration-1000 text-center rounded-xl shadow-2xl'>
                <div className='p-8'>
                    <h1 className='flex justify-center py-4 text-white'>{Radio}</h1>
                    <p className='text-white text-xl'>Our Online classroom is designed to accelerate learning. We bring learning to life using Audio, and Video.</p>

                </div>
            </div>
            <div className='bg-blue-700 h-[40vh] hover:translate-y-[30px] duration-1000 text-center rounded-xl shadow-2xl'>
                <div className='p-8'>
                    <h1 className='flex justify-center py-4 text-white'>{Question}</h1>
                    <p className='text-white text-xl'>At a click of a button, Students can receive all the support they need to reach their full potential when they need it.</p>

                </div>
            </div>
            <div className='bg-blue-700 h-[40vh] hover:translate-y-[30px] duration-1000 text-center rounded-xl shadow-2xl'>
                <div className='p-8'>
                    <h1 className='flex justify-center py-8 text-white'>{Tv}</h1>
                    <p className='text-white text-xl'>Choose an experienced Tutor that fits your budget.</p>

                </div>
            </div>

        </div>

        </section>
      </div>
    </div>
  )
}

export default Choose
