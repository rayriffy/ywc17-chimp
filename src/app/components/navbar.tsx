import React, { useContext } from 'react'

import { Box, Flex, Link, Text } from 'rebass'
import styled from 'styled-components'

import { Payload } from '../../app/context'

const Container = styled(Box)`
  position: fixed;
  z-index: 1;
  background: #fff;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
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

const AppNavbarComponent: React.FC = () => {
  const payload = useContext(Payload)

  return (
    <Container>
      <Flex justifyContent={`center`} alignItems={`center`}>
        {payload.navbarItems.map(item => {
          const {label, href} = item

          return (
            <Box p={3} key={`navbar-${label}`}>
              <NavLink href={href}>
                <NavText fontSize={14} fontWeight={`normal`} fontFamily={`TATSanaChon`}>{label}</NavText>
              </NavLink>
            </Box>
          )
        })}
      </Flex>
    </Container>
  )
}

export default AppNavbarComponent
