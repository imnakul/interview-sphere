import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import { Button, Input, Textarea, Typography } from '@material-tailwind/react'

export function ContactSection() {
   const [isLoggedIn, setIsLoggedIn] = useState(true)

   return (
      <>
         <Navbar isLoggedIn={isLoggedIn} />
         {/* outer content box */}
         <div className=' xl:max-w-5xl max-w-sm bg-white/20 rounded-lg p-2 mx-auto my-6 shadow-md'>
            <div className='min-w-screen flex flex-col xl:flex xl:flex-row gap-5 p-2'>
               {/* left section  */}
               <div className='flex flex-col items-center justify-center py-2 lg:py-4 px-2 '>
                  <h2 class='mb-3 text-4xl tracking-tight font-extrabold text-center text-gray-900 '>
                     We&apos;re Here to Help
                  </h2>

                  <Typography className=' font-normal !text-lg max-w-md !text-white text-center '>
                     Whether it&apos;s a question about our services, a request
                     for technical assistance, or suggestions for improvement,
                     our team is eager to hear from you.
                  </Typography>
                  <img
                     src='/contact-us-animate.svg'
                     alt='contactImage'
                     className='min-w-2xl min-h-2xl loading="lazy" '
                  />
               </div>

               {/* right section  */}
               <div class='py-2 lg:py-4 px-5 xl:w-2/3 w-full mb-5 xl:mb-0 bg-white/20 shadow-lg rounded-lg '>
                  <h2 class='mb-4 mt-2 text-4xl tracking-tight font-extrabold text-center text-gray-900 '>
                     Contact Us
                  </h2>
                  {/* <p class='mb-4 lg:mb-4 font-light text-center text-black  sm:text-xl'>
                     Got a technical issue? Want to send feedback about a beta
                     feature? Need details about our Business plan? Let us know.
                  </p> */}
                  <form action='#' class='space-y-8'>
                     <div>
                        <label
                           for='email'
                           class='block mb-2 text-sm font-medium text-gray-900 '
                        >
                           Your email
                        </label>
                        <input
                           type='email'
                           id='email'
                           class='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 '
                           placeholder='name@flowbite.com'
                           required
                        />
                     </div>
                     <div>
                        <label
                           for='subject'
                           class='block mb-2 text-sm font-medium text-gray-900 '
                        >
                           Subject
                        </label>
                        <input
                           type='text'
                           id='subject'
                           class='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 '
                           placeholder='Let us know how we can help you'
                           required
                        />
                     </div>
                     <div class='sm:col-span-2'>
                        <label
                           for='message'
                           class='block mb-2 text-sm font-medium text-gray-900 '
                        >
                           Your message
                        </label>
                        <textarea
                           id='message'
                           rows='5'
                           class='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 '
                           placeholder='Leave a comment...'
                        ></textarea>
                     </div>
                     <div className='flex justify-center'>
                        <button
                           type='submit'
                           class='ml-4 py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-purple-800 focus:ring-2 focus:outline-none hover:ring-2 ring-purple-400 bg-purple-600'
                        >
                           Send message
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         {/* <Footer /> */}
      </>
   )
}

export default ContactSection
