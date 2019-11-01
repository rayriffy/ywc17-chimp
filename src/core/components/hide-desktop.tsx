import { Box } from 'rebass'
import styled from 'styled-components'

const HideDesktop = styled(Box)`
  display: initial;

  @media screen and (min-width: 40em) {
    display: none;
  }
`

export default HideDesktop
