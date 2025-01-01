import { Radio, Typography } from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { Auth } from '@supabase/auth-ui-react'
import supabase from '../services/Supabase'

function Register() {
   const navigate = useNavigate()
   const [isLoggedIn, setIsLoggedIn] = useState(false)
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [repeatPassword, setRepeatPassword] = useState('')
   const [message, setMessage] = useState('')
   const [role, setRole] = useState('user')

   const handleSubmit = async (e) => {
      e.preventDefault()
      setMessage('')

      if (password !== repeatPassword) {
         setMessage('Passwords do not match')
         toast.error('Passwords do not match')
         return
      }

      try {
         // Sign up the user in Supabase Auth
         const { data: authData, error: authError } =
            await supabase.auth.signUp({
               email: email,
               password: password,
            })

         if (authError) {
            setMessage(authError.message)
            toast.error(authError.message)
            return
         }

         // Extract the authenticated user's data
         const { user } = authData

         // Insert user details into the `users` table
         const { error: insertError } = await supabase.from('users').insert([
            {
               id: user.id, // Use the ID from the authenticated user
               name: name,
               email: email,
               password: password,
               role: role,
            },
         ])

         if (insertError) {
            console.error('Error storing user details:', insertError.message)
            setMessage('Error storing user details')
            toast.error('Error storing user details')
            return
         }

         setMessage('Registered Successfully')
         toast.success('Registered Successfully')
         navigate('/signin')
      } catch (err) {
         console.error('Unexpected error:', err)
         toast.error('An unexpected error occurred')
      }
   }

   return (
      <>
         <Navbar isLoggedIn={isLoggedIn} />
         <div className='xl:max-w-md max-w-sm mx-auto my-2.5 p-5 bg-white/30 rounded-md'>
            <form onSubmit={handleSubmit}>
               <Typography
                  variant='h3'
                  color='blue-gray'
                  className='dark:text-white mb-2 text-center'
               >
                  Register yourself here
               </Typography>
               <div className='mb-5'>
                  <label
                     htmlFor='name'
                     className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                     Name
                  </label>

                  <input
                     onChange={(e) => setName(e.target.value)}
                     value={name}
                     type='name'
                     id='name'
                     className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                     placeholder='Name'
                     required
                  />
               </div>
               <div className='mb-5 '>
                  <label
                     htmlFor='email'
                     className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                     Email
                  </label>

                  <input
                     onChange={(e) => setEmail(e.target.value)}
                     value={email}
                     type='email'
                     id='email'
                     className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                     placeholder='name@gmail.com'
                     required
                  />
               </div>
               <div className='mb-5 '>
                  <label
                     htmlFor='password'
                     className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                     Password
                  </label>
                  <input
                     onChange={(e) => setPassword(e.target.value)}
                     value={password}
                     type='password'
                     id='password'
                     className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                     placeholder='********'
                     required
                  />
               </div>
               <div className='mb-5'>
                  <label
                     htmlFor='password'
                     className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                     Repeat Password
                  </label>
                  <input
                     onChange={(e) => setRepeatPassword(e.target.value)}
                     value={repeatPassword}
                     type='password'
                     id='password'
                     className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                     placeholder='********'
                     required
                  />
               </div>
               <div className='mb-2'>
                  <label
                     className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                     htmlFor='user_avatar'
                  >
                     Upload profile picture
                  </label>
                  <input
                     className='block w-full p-0.5 text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
                     aria-describedby='user_avatar_help'
                     id='user_avatar'
                     type='file'
                  />
               </div>

               <div className='flex justify-around mb-2'>
                  <Radio
                     name='type'
                     value='admin'
                     onChange={(e) => setRole(e.target.value)}
                     label={
                        <Typography className='text-white font-semibold'>
                           Admin
                        </Typography>
                     }
                  />
                  <Radio
                     name='type'
                     value='user'
                     onChange={(e) => setRole(e.target.value)}
                     label={
                        <Typography className='text-white font-semibold'>
                           User
                        </Typography>
                     }
                     defaultChecked
                  />
               </div>

               <div className='flex justify-start items-center mb-0'>
                  <button
                     type='submit'
                     className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-300 ml-2 mb-2'
                  >
                     Register
                  </button>
               </div>
            </form>

            <div className='flex justify-end items-center mb-0'>
               <p className='mr-1 dark:text-white'>Already have an account?</p>

               <button
                  type='submit'
                  className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-400 xl:ml-2'
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
         </div>
      </>
   )
}

export default Register
