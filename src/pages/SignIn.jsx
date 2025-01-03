import { useState } from 'react'
import { Typography, Input, Button, Radio } from '@material-tailwind/react'
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom'
import { Outlet, useMatch } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Icon() {
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         fill='none'
         viewBox='0 0 24 24'
         stroke-width='1.5'
         stroke='currentColor'
         class='size-6'
      >
         <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
         />
      </svg>
   )
}

export function SignIn({ type }) {
   const [isLoggedIn, setIsLoggedIn] = useState(false)
   const matchForgotPassword = useMatch('/signin/forgotpassword')
   const [passwordShown, setPasswordShown] = useState(false)
   const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur)
   const navigate = useNavigate()

   // const handleRadioChange = (e) => {
   //    setUserType(e.target.value)
   // }

   // const [userType, setUserType] = useState('user')
   // if (!id) {
   //    return navigate('/notfound')
   // }

   const handleSubmit = (e) => {
      e.preventDefault()
      setIsLoggedIn(true)
      if (userType === 'Admin') {
         navigate('/admindashboard/:id')
      } else {
         navigate('/userdashboard/:id')
      }
   }

   return (
      <>
         <Navbar isLoggedIn={isLoggedIn} />
         {/* static section  */}
         {/* <section className='grid text-center items-center max-w-[28rem] mx-auto mt-0 mb-6 bg-white/40 p-4 rounded-md'> */}
         {matchForgotPassword && <Outlet />}
         {/* dynamic forgot password section  */}

         {/* dynamic Form section  */}
         {!matchForgotPassword && (
            <section className='grid text-center items-center max-w-sm xl:max-w-md mx-auto my-9 bg-white/40 p-4 rounded-md'>
               <div>
                  <Typography variant='h3' color='blue-gray' className='mb-2'>
                     Sign In
                  </Typography>
                  <Typography className='mb-4 text-black font-normal text-[18px]'>
                     Enter your email and password to sign in
                  </Typography>

                  <form class='max-w-sm mx-auto'>
                     <div className='flex justify-center gap-10 mb-2'>
                        <Radio
                           name='type'
                           value='admin'
                           // checked={userType === 'admin'}
                           ripple={true}
                           icon={<Icon />}
                           className='border-gray-900/10 bg-gray-900/5 p-0 transition-all hover:before:opacity-0 '
                           label={
                              <Typography
                                 color='white'
                                 className='font-normal text-white'
                              >
                                 Admin
                              </Typography>
                           }
                           // onChange={handleRadioChange}
                        />
                        <Radio
                           name='type'
                           value='user'
                           // checked={userType === 'user'}
                           ripple={true}
                           icon={<Icon />}
                           className='border-gray-900/10 bg-gray-900/5 p-0 transition-all hover:before:opacity-0'
                           label={
                              <Typography
                                 color='white'
                                 className='font-normal text-white'
                              >
                                 User
                              </Typography>
                           }
                           // onChange={handleRadioChange}
                        />
                     </div>

                     <form
                        action='#'
                        className='mx-auto max-w-[24rem] text-left'
                        onSubmit={handleSubmit}
                     >
                        <div class='mb-5'>
                           <label
                              for='email'
                              class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                           >
                              Email
                           </label>
                           <div class='relative'>
                              <div class='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
                                 <svg
                                    class='shrink-0 size-4 text-gray-500 dark:text-neutral-500'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                 >
                                    <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'></path>
                                    <circle cx='12' cy='7' r='4'></circle>
                                 </svg>
                              </div>

                              <input
                                 type='email'
                                 id='email'
                                 class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                 placeholder='name@gmail.com'
                                 required
                              />
                           </div>
                        </div>
                        <div class='mb-5'>
                           <label
                              for='password'
                              class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                           >
                              Password
                           </label>
                           <div class='relative'>
                              <div class='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
                                 <svg
                                    class='shrink-0 size-4 text-gray-500 dark:text-neutral-500'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                 >
                                    <path d='M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z'></path>
                                    <circle cx='16.5' cy='7.5' r='.5'></circle>
                                 </svg>
                              </div>
                              <input
                                 type='password'
                                 id='password'
                                 class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                 placeholder='********'
                                 required
                              />
                           </div>
                        </div>
                        <div class='flex items-start mb-5'>
                           <div class='flex items-center h-5'>
                              <input
                                 id='remember'
                                 type='checkbox'
                                 value=''
                                 class='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800'
                                 required
                              />
                           </div>
                           <label
                              for='remember'
                              class='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                           >
                              Remember me
                           </label>
                        </div>
                        <div className='inline-flex justify-between items-center'>
                           <button
                              type='submit'
                              class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-300'
                           >
                              SIGN IN
                           </button>
                        </div>
                     </form>
                     <div className='!mt-1 flex justify-end'>
                        <button
                           type='submit'
                           class='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-2 dark:focus:ring-blue-300'
                           onClick={(e) => {
                              e.preventDefault()
                              navigate('/signin/forgotpassword')
                           }}
                        >
                           Forgot Password?
                        </button>
                     </div>

                     <Button
                        variant='outlined'
                        size='lg'
                        fullWidth
                        className='mt-5 flex h-12 items-center justify-center gap-2'
                     >
                        <img
                           src={`https://www.material-tailwind.com/logos/logo-google.png`}
                           alt='google'
                           className='h-6 w-6'
                        />{' '}
                        Sign in with google
                     </Button>
                     <Typography
                        variant='small'
                        color='black'
                        className='!mt-4 text-center font-normal'
                     >
                        Not registered?{' '}
                        <button
                           type='submit'
                           class='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-300 focus:ring-2 ml-4'
                           onClick={(e) => {
                              e.preventDefault()
                              navigate('/register')
                           }}
                        >
                           Register
                        </button>
                     </Typography>
                  </form>
               </div>
               {/* dynamic section form complete  */}
            </section>
         )}
      </>
   )
}

export default SignIn
