import React from 'react'

import { Box } from 'rebass'

import Banner from './banner'
import Condition from './condition'
import Guide from './guide'

const HomeComponent: React.FC = props => {
  return (
    <Box>
      <Banner />
      <Condition />
      <Guide />
    </Box>
  )
}

export default HomeComponent
