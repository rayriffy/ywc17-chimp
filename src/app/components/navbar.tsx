import React, { useContext, useState } from 'react'

import { FaBars, FaTimes } from 'react-icons/fa'

import { Box, Flex, Image, Link, Text } from 'rebass'
import styled from 'styled-components'

import { Payload } from '../../app/context'

import HideDesktop from '../../core/components/hide-desktop'
import HideMobile from '../../core/components/hide-mobile'
import { assetURL } from '../../core/services/assetURL'

const Container = styled(Box)`
  position: fixed;
  z-index: 1;
  background: #fff;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 58px;
`

const NavLink = styled(Link)`
  text-decoration: none;
`

const NavText = styled(Text)`
  color: #333333;
  font-weight: bold;
  transition: all 0.3s ease-in-out 0s;

  position: relative;

  &:hover {
    color: #213a8f;

    &:after {
      transform: scaleX(1);
    }
  }

  &:after {
    content: '';
    width: 100%;
    height: 6px;

    position: absolute;
    left: 0;
    bottom: -10px;

    background-color: #213a8f;

    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
`

const StyledFlex = styled(Flex)`
  height: 58px;
`

const StyledImage = styled(Image)`
  width: auto;
  height: 42px;
`

const CollapseContainer = styled(Box)`
  background: #fff;
`

const CollapseText = styled(Text)`
  color: rgba(0, 0, 0, 0.5);

  &:hover {
    color: #333333;
  }
`

const AppNavbarComponent: React.FC = () => {
  const payload = useContext(Payload)

  const [isCollapse, setIsCollapse] = useState<boolean>(false)

  return (
    <Box>
      <Box pb={58}>
        <Container>
          <HideMobile>
            <StyledFlex justifyContent={`center`} alignItems={`center`}>
              {payload.navbarItems.map(item => {
                const {label, href} = item

                return (
                  <Box p={3} key={`navbar-${label}`}>
                    <NavLink href={href}>
                      <NavText fontSize={14} fontWeight={400} fontFamily={`TATSanaChon`}>{label}</NavText>
                    </NavLink>
                  </Box>
                )
              })}
            </StyledFlex>
          </HideMobile>
          <HideDesktop>
            <StyledFlex alignItems={`center`}>
              <Box px={3}>
                <StyledImage src={`${assetURL}/static/images/logo.png`} />
              </Box>
              <Box mx={`auto`} />
              <Box px={3} onClick={() => setIsCollapse(prev => !prev)}>
                {isCollapse ? <FaTimes size={`30px`} color={`#333333`} /> : <FaBars size={`30px`} color={`#333333`} />}
              </Box>
            </StyledFlex>
            {isCollapse ?
              <CollapseContainer p={3}>
                <Flex flexWrap={`wrap`}>
                  {payload.navbarItems.map(item => {
                    const {label, href} = item

                    return (
                      <Box width={1} p={2} key={`navbar-${label}`}>
                        <NavLink href={href}>
                          <CollapseText fontSize={16} fontWeight={400} fontFamily={`TATSanaSuksa`} textAlign={`right`}>{label}</CollapseText>
                        </NavLink>
                      </Box>
                    )
                  })}
                </Flex>
              </CollapseContainer>
            : null}
          </HideDesktop>
        </Container>
      </Box>
    </Box>
  )
}

export default AppNavbarComponent
