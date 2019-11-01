import React from 'react'

import { Box } from 'rebass'

import Banner from './banner'
import Condition from './condition'
import Contact from './contact'
import Disclaimer from './disclaimer'
import Guide from './guide'
import Sponsor from './sponsor'

const HomeComponent: React.FC = props => {
  return (
    <Box>
      <Banner />
      <Condition />
      <Guide />
      <Disclaimer />
      <Contact />
      <Sponsor />
    </Box>
  )
}

export default HomeComponent
