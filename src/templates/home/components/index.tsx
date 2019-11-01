import React from 'react'

import { Box } from 'rebass'

import Banner from './banner'
import Condition from './condition'
import Contact from './contact'
import Disclaimer from './disclaimer'
import Guide from './guide'

const HomeComponent: React.FC = props => {
  return (
    <Box>
      <Banner />
      <Condition />
      <Guide />
      <Disclaimer />
      <Contact />
    </Box>
  )
}

export default HomeComponent
