import React from 'react'

import { Box } from 'rebass'

import Banner from './banner'
import Condition from './condition'

const HomeComponent: React.FC = props => {
  return (
    <Box>
      <Box>
        <Banner />
        <Condition />
      </Box>
    </Box>
  )
}

export default HomeComponent
