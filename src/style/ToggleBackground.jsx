import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import { useLocation } from 'react-router-dom'

const ToggleBackground = ({ children }) => {
   const { theme } = useContext(ThemeContext) // Consume Context
   const location = useLocation() // Get the current route

   // Check if the current route is the Home component's path
   const isHome = location.pathname === '/'

   return (
      <>
         {theme === 'dark' ? (
            <div
               className={`min-h-screen ${
                  isHome
                     ? "bg-[url('/bgimg4.jpg')] bg-cover bg-center"
                     : "bg-[url('/bgimg4.jpg')] bg-cover bg-center"
               }`}
            >
               {children}
            </div>
         ) : isHome ? (
            <div className='w-full h-screen overflow-hidden'>
               <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className='w-full h-full object-cover fixed top-0 left-0 -z-10'
                  poster='/fallback.png'
               >
                  <source src='/bg3.mp4' type='video/mp4' />
               </video>
               {children}
            </div>
         ) : (
            <div className="min-h-screen bg-[url('/fallback.png')] bg-cover bg-center">
               {children}
            </div>
         )}
      </>
   )
}

export default ToggleBackground
