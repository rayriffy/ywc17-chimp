import React from 'react'

import { FaCaretRight } from 'react-icons/fa'
import Player from 'react-player'

import { Box, Button, Flex, Image, Link,  Text } from 'rebass'
import styled from 'styled-components'

import HideDesktop from '../../../core/components/hide-desktop'
import HideMobile from '../../../core/components/hide-mobile'

import { assetURL } from '../../../core/services/assetURL'

import { IGuideButtonProps } from '../@types/IGuideButtonProps'

const StyledImage = styled(Image)`
  width: 100%;
`

const StyledButton = styled(Button)`
  border-radius: 5px;
  border: solid 4px #213a8f;
  color: #213a8f;
  background: transparent;

  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  &:hover {
    background: #213a8f;
    color: #fff;
  }
`

const VideoWrapper = styled(Box)`
  position: relative;
  padding-top: 56.25%;
`

const Video = styled(Player)`
  position: absolute;
  top: 0;
  left: 0;
`

const GuideButton: React.FC<IGuideButtonProps> = props => {
  const {href, title} = props
  return (
    <Link href={href}>
      <StyledButton py={1} px={2}>
        <Flex alignItems={`center`}>
          <Text fontSize={18} fontWeight={`bold`} fontFamily={`TATSanaChon`}>{title}</Text>
          <Box mx={`auto`} />
          <FaCaretRight size={`18px`} />
        </Flex>
      </StyledButton>
    </Link>
  )
}

const HomeGuideComponent: React.FC = props => {
  return (
    <Flex justifyContent={`center`}>
      <Box width={[22 / 24, 20 / 24, 18 / 24]} py={3}>
        <Box py={3}>
          <Flex flexWrap={`wrap`}>
            <HideMobile width={[1, 5 / 12]} p={3}>
              <Text fontSize={36} fontWeight={`bold`} fontFamily={`TATSanaChon`} color={`#e6332a`} pb={3}>ค้นหารายชื่อร้านค้า</Text>
              <GuideButton title={`รายชื่อร้านค้าที่ร่วมโครงการ`} href={`https://www2.xn--b3caa1e2a7e2b0h2be.com/thung-ngern-shop-province`} />
            </HideMobile>
            <Box width={[1, 7 / 12]} p={3}>
              <StyledImage src={`${assetURL}/static/images/guide/store.png`} />
            </Box>
            <HideDesktop width={[1, 5 / 12]} p={3}>
              <Text fontSize={36} fontWeight={`bold`} fontFamily={`TATSanaChon`} color={`#e6332a`} pb={3}>ค้นหารายชื่อร้านค้า</Text>
              <GuideButton title={`รายชื่อร้านค้าที่ร่วมโครงการ`} href={`https://www2.xn--b3caa1e2a7e2b0h2be.com/thung-ngern-shop-province`} />
            </HideDesktop>
          </Flex>
        </Box>
        <Box py={3}>
          <Flex flexWrap={`wrap`}>
            <Box width={[1, 7 / 12]} p={3}>
              <VideoWrapper>
                <Video url={`https://www.youtube.com/embed/ZkniwQLv_Xk`} width={`100%`} height={`100%`} />
              </VideoWrapper>
            </Box>
            <Box width={[1, 5 / 12]} p={3}>
              <Text fontSize={36} fontWeight={`bold`} fontFamily={`TATSanaChon`} color={`#e6332a`} pb={3}>ขั้นตอนการเข้าใช้งานผ่านแอปฯ “เป๋าตัง”</Text>
              <GuideButton title={`ขั้นตอนทั้งหมด`} href={`https://www2.xn--b3caa1e2a7e2b0h2be.com/howto-register`} />
            </Box>
          </Flex>
        </Box>
        <Box py={3}>
          <Flex flexWrap={`wrap`}>
            <HideMobile width={[1, 5 / 12]} p={3}>
              <Text fontSize={36} fontWeight={`bold`} fontFamily={`TATSanaChon`} color={`#e6332a`} pb={3}>การเติมเงินเข้า “เป๋าตัง” (G-Wallet)</Text>
              <GuideButton title={`ดูขั้นตอนทั้งหมด`} href={`https://www2.xn--b3caa1e2a7e2b0h2be.com/howto-topup-gwallet`} />
            </HideMobile>
            <Box width={[1, 7 / 12]} p={3}>
              <StyledImage src={`${assetURL}/static/images/guide/topup.png`} />
            </Box>
            <HideDesktop width={[1, 5 / 12]} p={3}>
              <Text fontSize={36} fontWeight={`bold`} fontFamily={`TATSanaChon`} color={`#e6332a`} pb={3}>การเติมเงินเข้า “เป๋าตัง” (G-Wallet)</Text>
              <GuideButton title={`ดูขั้นตอนทั้งหมด`} href={`https://www2.xn--b3caa1e2a7e2b0h2be.com/howto-topup-gwallet`} />
            </HideDesktop>
          </Flex>
        </Box>
        <Box py={3}>
          <Flex flexWrap={`wrap`}>
            <Box width={[1, 7 / 12]} p={3}>
              <StyledImage src={`${assetURL}/static/images/guide/usage.png`} />
            </Box>
            <Box width={[1, 5 / 12]} p={3}>
              <Text fontSize={36} fontWeight={`bold`} fontFamily={`TATSanaChon`} color={`#e6332a`}>ใช้จ่าย สะดวก ปลอดภัยผ่าน “เป๋าตัง” (G-Wallet)</Text>
              <Box py={2}>
                <Text fontSize={18} fontWeight={`bold`} fontFamily={`TATSanaChon`} color={`#333`}>สิทธิต่อที่ 1 : รับเงินสนับสนุน 1,000 บาท</Text>
                <Text fontSize={18} fontWeight={`bold`} fontFamily={`TATSanaChon`} color={`#333`}>สิทธิต่อที่ 2 : รับเงินชดเชยคืน 15%-20% (สูงสุด 8,500 บาท)</Text>
              </Box>
              <Box py={2}>
                <Text fontSize={16} fontFamily={`TATSanaSuksa`} color={`#333333`}>แบ่งเป็น</Text>
                <Box px={3}>
                  <Text fontSize={16} fontFamily={`TATSanaSuksa`} color={`#333333`}>1. 15% สำหรับยอดใช้จ่ายสะสมไม่เกิน 30,000 บาท</Text>
                  <Text fontSize={16} fontFamily={`TATSanaSuksa`} color={`#333333`}>2. 20% สำหรับยอดใช้จ่ายสะสมส่วน 30,000 ถึง 50,000 บาท</Text>
                </Box>
              </Box>
              <Box py={2}>
                <Flex>
                  <Box p={2}>
                    <Link href={`https://apps.apple.com/th/app/%E0%B9%80%E0%B8%9B-%E0%B8%B2%E0%B8%95-%E0%B8%87/id1324902182?l=th`}>
                      <Image width={168} src={`${assetURL}/static/images/download/ios.png`} />
                    </Link>
                  </Box>
                  <Box p={2}>
                    <Link href={`https://play.google.com/store/apps/details?id=com.ktb.customer.qr`}>
                      <Image width={168} src={`${assetURL}/static/images/download/android.png`} />
                    </Link>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  )
}

export default HomeGuideComponent
