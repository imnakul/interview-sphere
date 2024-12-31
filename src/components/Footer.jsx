import { Typography } from '@material-tailwind/react'
import { Link, useNavigate } from 'react-router-dom'

function Footer() {
   const navigate = useNavigate()
   return (
      <footer
         color='transparent'
         className='absolute bottom-0 left-0 xl:left-28 xl:min-w-[85%] min-w-full rounded-xl bg-white/50 py-3 xl:py-2.5 px-3'
      >
         <div className='flex flex-row flex-wrap items-center justify-around gap-y-6 gap-x-24 xl:gap-x-12 text-center md:justify-between'>
            {/* <img src='/interview.png' alt='logo-ct' className='w-8 h-8' /> */}
            <div className='inline-flex justify-start gap-3'>
               <p className='dark:text-white text-black text-center xl:font-semibold xl:ml-3'>
                  &copy; Nakul Srivastava
               </p>
               <Typography
                  as='a'
                  target='_blank'
                  href='https://www.linkedin.com/in/nakul-srivastava-a8426033b/'
                  color='blue-gray'
                  className='hover:scale-105 transition-all hidden xl:block'
               >
                  <img
                     src='/social.png'
                     alt='logo-linkedIn'
                     className='w-6 h-6'
                  />
               </Typography>
            </div>

            <ul className='flex flex-wrap items-center gap-y-2 gap-x-4 xl:gap-x-8'>
               <li>
                  <Link to='/about'>
                     <p className='dark:text-white text-black font-normal transition-colors hover:text-cyan-50 focus:text-blue-800 hover:font-bold'>
                        About Us
                     </p>
                  </Link>
               </li>

               {/* <li>
                  <Link
                     target='_blank'
                     to='https://github.com/imnakul/interview-platform'
                  >
                     <p className='font-normal transition-colors hover:text-cyan-50  focus:text-blue-800 hover:font-bold'>
                        Contribute
                     </p>
                  </Link>
               </li> */}
               <li>
                  <Link to='/contact'>
                     <p className='dark:text-white text-black font-normal transition-colors hover:text-cyan-50 focus:text-blue-800 hover:font-bold'>
                        Contact Us
                     </p>
                  </Link>
               </li>
               <li></li>
            </ul>
         </div>
      </footer>
   )
}

export default Footer
