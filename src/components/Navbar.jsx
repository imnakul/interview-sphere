import React from 'react'
import { Navbar, Collapse, Typography, Avatar } from '@material-tailwind/react'
import AvatarWithUserDropdown from './Avatar'
import { Link } from 'react-router-dom'
import ThemeToggle from '../style/ToggleTheme'

export function NavbarSimple({ isLoggedIn }) {
   const [openNav, setOpenNav] = React.useState(false)

   const handleWindowResize = () =>
      window.innerWidth >= 960 && setOpenNav(false)

   React.useEffect(() => {
      window.addEventListener('resize', handleWindowResize)

      return () => {
         window.removeEventListener('resize', handleWindowResize)
      }
   }, [])

   return (
      <Navbar
         color='transparent'
         className='mx-auto max-w-7xl px-4 py-1 bg-white/50 '
      >
         {/* max-w-screen-xl is same as max-w-7xl  */}
         <div className='flex items-center justify-between text-blue-gray-900'>
            <div className='flex justify-start items-center gap-2 xl:gap-4'>
               {/* icon */}
               <img
                  src='/online-interview.gif'
                  alt=''
                  className='contain h-9 w-9 border-2 border-black rounded'
               />

               <Link to='/'>
                  <p className='cursor-pointer text-md xl:text-xl font-bold hover:opacity-70 '>
                     InterviewSPHERE
                  </p>
               </Link>
            </div>

            {/* Navitemslist  */}
            <div className='block'>
               <div className=' flex gap-2 my-0 lg:items-center lg:gap-2'>
                  {isLoggedIn && (
                     <>
                        <AvatarWithUserDropdown />
                     </>
                  )}
                  <div className='xl:ml-2 ml-4'></div>
                  <ThemeToggle />
               </div>
            </div>
         </div>
         {/* <Collapse open={openNav}>{isLoggedIn && <NavList />}</Collapse> */}
      </Navbar>
   )
}

export default NavbarSimple
