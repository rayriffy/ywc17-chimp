import React from 'react'

import { Box, Card, Flex, Heading, Image, Text } from 'rebass'
import styled from 'styled-components'

import { assetURL } from '../../../core/services/assetURL'

const ImageContainer = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  border-radius: 0px;
  height: 242px;

  @media screen and (min-width: 40em) {
    height: 350px;
  }
`

const LogoContainer = styled(Box)`
  position: absolute;
  left: 0;
  right: 0;
  height: 242px;

  @media screen and (min-width: 40em) {
    height: 350px;
  }
`

const StyledFlex = styled(Flex)`
  overflow: hidden;
  height: 242px;

  @media screen and (min-width: 40em) {
    height: 350px;
  }
`

const StyledCard = styled(Card)`
  position: relative;
  border-radius: 0px;
  padding-bottom: 242px;

  @media screen and (min-width: 40em) {
    padding-bottom: 350px;
  }
`

const BackgroundImage = styled(Box)`
  background: url(${props => props.src}) no-repeat;
  background-size: cover;
  height: 242px;

  @media screen and (min-width: 40em) {
    height: 350px;
  }
`

const LogoImage = styled(Image)`
  height: 100%;
  width: 100%;
`

const BannerComponent: React.FC  = props => {
  return (
    <StyledCard color='white'>
      <ImageContainer>
        <StyledFlex>
          <BackgroundImage width={1 / 3} src={`${assetURL}/static/images/banner/0.png`} />
          <BackgroundImage width={1 / 3} src={`${assetURL}/static/images/banner/1.png`} />
          <BackgroundImage width={1 / 3} src={`${assetURL}/static/images/banner/2.png`} />
        </StyledFlex>
      </ImageContainer>
      <LogoContainer>
        <StyledFlex justifyContent={`center`} alignItems={`center`}>
          <Box width={[1 / 3, 1 / 4, 1 / 5]} p={[1, 4]}>
            <Flex justifyContent={`center`}>
              <LogoImage src={`${assetURL}/static/images/banner/logo.png`} />
            </Flex>
          </Box>
        </StyledFlex>
      </LogoContainer>
    </StyledCard>
  )
}

export default BannerComponent