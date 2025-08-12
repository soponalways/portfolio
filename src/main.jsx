import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import ThemeProvider from './Theme/ThemeProvider.jsx'
import ClientThemeWraper from './Theme/ClientThemeWraper.jsx'
import router from './Router/Router.jsx'
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <ClientThemeWraper>
          <RouterProvider router={router} />
        </ClientThemeWraper>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>,
)
