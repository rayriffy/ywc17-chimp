import { Box } from 'rebass'
import styled from 'styled-components'

const HideMobile = styled(Box)`
  display: none;

  @media screen and (min-width: 40em) {
    display: initial;
  }
`

export default HideMobile
