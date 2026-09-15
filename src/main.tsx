import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/poppins/latin-300.css'
import '@fontsource/poppins/latin-400.css'
import '@fontsource/poppins/latin-500.css'
import '@fontsource/poppins/latin-600.css'
import '@fontsource/poppins/latin-700.css'
import '@fontsource/poppins/latin-ext-300.css'
import '@fontsource/poppins/latin-ext-400.css'
import '@fontsource/poppins/latin-ext-500.css'
import '@fontsource/poppins/latin-ext-600.css'
import '@fontsource/poppins/latin-ext-700.css'
import '@/i18n'
import { AppProviders } from './AppProviders'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProviders />
  </StrictMode>,
)
