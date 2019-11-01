import React, { useEffect } from 'react'

import { Box } from 'rebass'

import Context from '../context'
import Footer from './footer'
import Global from './global'
import Navbar from './navbar'
import SEO from './seo'

const AppComponent: React.FC = props => {
  const {children} = props

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/ywc17-chimp/service-worker.js', { scope: '/ywc17-chimp' }).then((registration) => {
          console.log('SW registered: ', registration)
        }).catch((registrationError) => {
          console.log('SW registration failed: ', registrationError)
        })
      })
    }
  }, [])

  return (
    <Box>
      <Context>
        <Global />
        <SEO />
        <Navbar />
        {children}
        <Footer />
      </Context>
    </Box>
  )
}

export default AppComponent
