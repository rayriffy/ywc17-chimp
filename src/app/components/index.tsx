import React from 'react'

import { Box } from 'rebass'
import styled from 'styled-components'

import Global from './global'
import SEO from './seo'

const FullHeightBox = styled(Box)`
  height: 100%;
`

const AppComponent: React.FC = props => {
  const {children} = props

  return (
    <FullHeightBox>
      <Global />
      <SEO />
      {children}
    </FullHeightBox>
  )
}

export default AppComponent
