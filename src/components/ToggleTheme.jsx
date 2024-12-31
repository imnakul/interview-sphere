import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext' // Import ThemeContext

const ThemeToggle = () => {
   const { theme, toggleTheme } = useContext(ThemeContext) // Consume Context

   return (
      <button
         id='theme-toggle'
         onClick={toggleTheme}
         className=' rounded-full focus:outline-none'
         aria-label='Toggle theme'
      >
         {theme === 'light' ? (
            <img
               src='/sun.png'
               alt=''
               className='w-7 h-7 bg-yellow-400 rounded-full'
            />
         ) : (
            <img
               src='/moon.png'
               alt=''
               className='w-7 h-7 bg-blue-500 rounded-full'
            />
         )}
      </button>
   )
}

export default ThemeToggle
