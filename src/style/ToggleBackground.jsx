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
               {/* <div className='min-h-screen w-full object-cover bg-[linear-gradient(109.6deg,_rgb(9,_9,_121)_11.2%,_rgb(144,_6,_161)_53.7%,_rgb(0,_212,_255)_100.2%)]'> */}

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
            // <div className='min-h-screen w-full object-cover bg-[linear-gradient(90.7deg,_rgb(255,_253,_218)_1.9%,_rgb(246,_210,_255)_39.3%,_rgb(152,_222,_254)_64.7%,_rgb(251,_255,_210)_100.8%)]'>
            //    {children}
            // </div>
         )}
      </>
   )
}

export default ToggleBackground
