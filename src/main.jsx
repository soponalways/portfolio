import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Router/Router.jsx'
import { HelmetProvider } from 'react-helmet-async';
import AnimatedCursor from 'react-animated-cursor'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div data-theme="dark" className='merienda-font'>
      <HelmetProvider>
        <RouterProvider router={router} />
        <AnimatedCursor
          innerSize={20}
          outerSize={8}
          color='24, 199, 71'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link', 
            
          ]}
        />
      </HelmetProvider>
    </div>
  </StrictMode>,
)
