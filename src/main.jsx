import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@material-tailwind/react'
import { CustomThemeProvider } from './Context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <ThemeProvider>
         <CustomThemeProvider>
            <App />
         </CustomThemeProvider>
      </ThemeProvider>
   </StrictMode>
)
