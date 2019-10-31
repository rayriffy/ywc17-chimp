import React, { useContext } from 'react'

import { Box, Flex, Image, Link, Text } from 'rebass'
import styled from 'styled-components'

import { Payload } from '../../app/context'

import { assetURL } from '../../core/services/assetURL'

const StyledBox = styled(Box)`
  background: #fafafa;
`

const FooterBox = styled(Box)`
  background: #213a8f;
`

const NavLink = styled(Link)`
  text-decoration: none;
`

const AppFooterComponent: React.FC = props => {
  const payload = useContext(Payload)

  return (
    <StyledBox>
      <Box>
        <Flex justifyContent={`center`}>
          <Box width={[20 / 24, 16 / 24]} py={4}>
            <Flex flexWrap={`wrap`}>
              <Box width={[1, 1 / 4]} p={2}>
                <Image alt={`logo`} width={108} src={`${assetURL}/static/images/logo.png`} />
              </Box>
              <Box width={[1, 1 / 4]} p={2}>
                <Text pb={1} fontSize={16} fontWeight={`bold`} fontFamily={`TATSanaSuksa`} color={`#e6332a`}>ข้อมูลลงทะเบียนประชาชน</Text>
                <Text pb={1} fontSize={14} fontFamily={`TATSanaSuksa`} color={`#333333`}>การรับสิทธิ การใช้งานแอปพลิเคชั่น “เป๋าตัง” และ “ถุงเงิน”</Text>
                <Text pb={1} fontSize={14} fontFamily={`TATSanaSuksa`} color={`#333333`}>ติดต่อ ชิมช้อปใช้ Call Center by Krungthai โทร.0 2111 1144</Text>
              </Box>
              <Box width={[1, 1 / 4]} p={2}>
                <Text pb={1} fontSize={16} fontWeight={`bold`} fontFamily={`TATSanaSuksa`} color={`#e6332a`}>ข้อมูลลงทะเบียนผู้ประกอบการ</Text>
                <Text pb={1} fontSize={14} fontFamily={`TATSanaSuksa`} color={`#333333`}>เงื่อนไขและวิธีการเข้าร่วมมาตรการฯ</Text>
                <Text pb={1} fontSize={14} fontFamily={`TATSanaSuksa`} color={`#333333`}>ติดต่อ โทร. 0 2270 6400 กด 7</Text>
              </Box>
              <Box width={[1, 1 / 4]} p={2}>
                <Text pb={1} fontSize={16} fontWeight={`bold`} fontFamily={`TATSanaSuksa`} color={`#e6332a`}>ข้อมูลเที่ยวชิมช้อปใช้</Text>
                <Text pb={1} fontSize={14} fontFamily={`TATSanaSuksa`} color={`#333333`}>ติดต่อ ททท.</Text>
                <Text pb={1} fontSize={14} fontFamily={`TATSanaSuksa`} color={`#333333`}>โทร 1672</Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <FooterBox>
        <Flex justifyContent={`center`}>
          <Box width={[20 / 24, 16 / 24]}>
            <Flex flexWrap={`wrap`}>
              <Box width={[1, 1 / 4]} p={2}>
                <Text fontSize={14} fontWeight={`bold`} fontFamily={`TATSanaChon`} color={`white`}>Copyright © 2003-2019</Text>
              </Box>
              {payload.navbarItems.map(item => {
                const {label, href} = item

                return (
                  <Box width={[1, 1 / 4]} key={`navbar-${label}`} p={2}>
                    <NavLink href={href}>
                      <Text fontSize={14} fontWeight={`bold`} fontFamily={`TATSanaChon`} color={`white`}>{label}</Text>
                    </NavLink>
                  </Box>
                )
              })}
            </Flex>
          </Box>
        </Flex>
      </FooterBox>
    </StyledBox>
  )
}

export default AppFooterComponent
