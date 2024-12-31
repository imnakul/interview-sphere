import React, { createContext, useState, useEffect } from 'react'

// Create Context
export const ThemeContext = createContext()

// Create Provider Component
export const CustomThemeProvider = ({ children }) => {
   const [theme, setTheme] = useState('light')

   // Check for initial theme preference on mount
   useEffect(() => {
      const savedTheme = localStorage.getItem('color-theme')
      const systemPrefersDark = window.matchMedia(
         '(prefers-color-scheme: dark)'
      ).matches

      if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
         document.documentElement.classList.add('dark')
         setTheme('dark')
      } else {
         document.documentElement.classList.remove('dark')
         setTheme('light')
      }
   }, [])

   // Toggle theme function
   const toggleTheme = () => {
      if (theme === 'light') {
         document.documentElement.classList.add('dark')
         localStorage.setItem('color-theme', 'dark')
         setTheme('dark')
      } else {
         document.documentElement.classList.remove('dark')
         localStorage.setItem('color-theme', 'light')
         setTheme('light')
      }
   }

   return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
         {children}
      </ThemeContext.Provider>
   )
}
