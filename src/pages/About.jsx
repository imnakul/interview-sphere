import React, { useRef, useState } from 'react'
import GlowingCard from '../components/GlowingCard.jsx'
import { useNavigate } from 'react-router-dom'

const About = () => {
   const navigate = useNavigate()
   const content = [
      <>
         <h2 class='text-white text-3xl font-extrabold mb-4'>
            Collaborative Features
         </h2>
         <p class='text-lg font-normal text-gray-400 mb-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut omnis
            exercitationem consequatur deserunt ratione fuga et, ullam suscipit
            voluptates optio nihil magnam vel quasi esse iusto mollitia? Nihil,
            at soluta?
         </p>
      </>,
      <>
         <h2 class='text-white text-3xl font-extrabold mb-4'>
            Live Video & Chat
         </h2>
         <p class='text-lg font-normal text-gray-400 mb-4'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi at
            libero, tempora voluptatum quo necessitatibus vitae quos ipsum
            expedita soluta, dolores reprehenderit. Enim quam beatae officia
            soluta delectus rem nisi.
         </p>
      </>,
      <>
         <h2 class='text-white text-3xl font-extrabold mb-4'>
            Admin & User DB
         </h2>
         <p class='text-lg font-normal text-gray-400 mb-4'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi at
            libero, tempora voluptatum quo necessitatibus vitae quos ipsum
            expedita soluta, dolores reprehenderit. Enim quam beatae officia
            soluta delectus rem nisi.
         </p>
      </>,
      <>
         <h1 class='text-white text-3xl md:text-5xl font-extrabold mb-3'>
            The Interview Platform
         </h1>
         <p class='text-lg font-normal text-gray-400 mb-6'>
            Static websites are now used to bootstrap lots of websites and are
            becoming the basis for a variety of tools that even influence both
            web designers and developers.
         </p>
      </>,
   ]

   return (
      //   <div className="min-h-screen bg-[url('/darkbg.jpg')] bg-cover bg-center">
      <div className='w-full h-screen overflow-hidden'>
         {/* Video Background */}
         <video
            autoPlay
            loop
            muted
            playsInline
            className='w-full h-full object-cover fixed top-0 left-0 -z-10'
            poster='/fallback2.png'
         >
            <source src='/bg5.mp4' type='video/mp4' />
         </video>

         <div className='flex justify-start min-w-screen min-h-full'>
            <button className='self-start ml-5'>
               <img
                  src='/home5.png'
                  alt=''
                  className='w-10 h-10 hover:scale-110 mt-7 border border-black rounded-full'
                  onClick={() => {
                     navigate('/')
                  }}
               />
            </button>
            <div class='py-8 px-4 mx-auto max-w-screen-xl lg:py-8 '>
               <GlowingCard content={content[3]} />

               <div class='grid md:grid-cols-3 gap-8'>
                  <GlowingCard content={content[0]} />
                  <GlowingCard content={content[1]} />
                  <GlowingCard content={content[2]} />
               </div>
            </div>
         </div>
      </div>
   )
}
export default About
