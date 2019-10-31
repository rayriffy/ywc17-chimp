import React from 'react'

import { Box } from 'rebass'

import Context from '../context'
import Footer from './footer'
import Global from './global'
import Navbar from './navbar'
import SEO from './seo'

const AppComponent: React.FC = props => {
  const {children} = props

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
