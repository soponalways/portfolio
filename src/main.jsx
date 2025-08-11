import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import ThemeProvider from './Theme/ThemeProvider.jsx'
import ClientThemeWraper from './Theme/ClientThemeWraper.jsx'
import router from './Router/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <ClientThemeWraper>
        <RouterProvider router={router} />
      </ClientThemeWraper>
    </ThemeProvider>
  </StrictMode>,
)
