import { Radio, Typography } from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useState } from 'react'

function Register() {
   const navigate = useNavigate()
   const [isLoggedIn, setIsLoggedIn] = useState(false)

   return (
      <>
         <Navbar isLoggedIn={isLoggedIn} />
         <form class='xl:max-w-md max-w-sm mx-auto my-5 p-5 bg-white/30 rounded-md'>
            <Typography
               variant='h3'
               color='blue-gray'
               className='mb-2 text-center'
            >
               Register yourself here
            </Typography>
            <div class='mb-5'>
               <label
                  for='name'
                  class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
               >
                  Name
               </label>

               <input
                  type='name'
                  id='name'
                  class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Name'
                  required
               />
            </div>
            <div class='mb-5 '>
               <label
                  for='email'
                  class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
               >
                  Email
               </label>

               <input
                  type='email'
                  id='email'
                  class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='name@gmail.com'
                  required
               />
            </div>
            <div class='mb-5 '>
               <label
                  for='password'
                  class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
               >
                  Password
               </label>
               <input
                  type='password'
                  id='password'
                  class='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                  placeholder='********'
                  required
               />
            </div>
            <div class='mb-5'>
               <label
                  for='password'
                  class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
               >
                  Repeat Password
               </label>
               <input
                  type='password'
                  id='password'
                  class='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                  placeholder='********'
                  required
               />
            </div>
            <div class='mb-4'>
               <label
                  class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  for='user_avatar'
               >
                  Upload profile picture
               </label>
               <input
                  class='block w-full p-0.5 text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
                  aria-describedby='user_avatar_help'
                  id='user_avatar'
                  type='file'
               />
            </div>

            <div className='flex justify-evenly gap-5 mb-4'>
               <Radio
                  name='type'
                  label={
                     <Typography className='text-white font-semibold'>
                        Admin
                     </Typography>
                  }
               />
               <Radio
                  name='type'
                  label={
                     <Typography className='text-white font-semibold'>
                        User
                     </Typography>
                  }
                  defaultChecked
               />
            </div>

            <div className='inline-flex justify-between items-center mb-0'>
               <button
                  type='submit'
                  class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-300 xl:mr-12 mr-7'
               >
                  Register
               </button>
               <p className='mr-1'>Already have an account?</p>

               <button
                  type='submit'
                  class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-400 xl:ml-4'
               >
                  <a
                     onClick={(e) => {
                        e.preventDefault()
                        navigate('/signin')
                     }}
                  >
                     Sign-In
                  </a>
               </button>
            </div>
         </form>
      </>
   )
}

export default Register
