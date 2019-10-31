import React from 'react'

import { Box, Flex, Link, Text } from 'rebass'
import styled from 'styled-components'

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
`

const AppNavbarComponent: React.FC = () => {
  return (
    <Container>
      <Flex justifyContent={`center`} alignItems={`center`}>
        <Box p={3}>
          <NavLink href={`/`}>
            <NavText fontSize={14} fontWeight={`normal`} fontFamily={`TATSanaChon`}>ริฟฟี่พ่อทุกสถาบัน</NavText>
          </NavLink>
        </Box>
      </Flex>
    </Container>
  )
}

export default AppNavbarComponent
