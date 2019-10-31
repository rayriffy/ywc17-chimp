import React from 'react'

import { Box } from 'rebass'

import Context from '../context'
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
      </Context>
    </Box>
  )
}

export default AppComponent
