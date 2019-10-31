import React from 'react'

import { Box } from 'rebass'
import styled from 'styled-components'

import Global from './global'
import Navbar from './navbar'
import SEO from './seo'

const FullHeightBox = styled(Box)`
  height: 100%;
`

const AppComponent: React.FC = props => {
  const {children} = props

  return (
    <Box>
      <Global />
      <SEO />
      <Navbar />
      {children}
    </Box>
  )
}

export default AppComponent
