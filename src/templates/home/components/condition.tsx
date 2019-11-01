import React, { useContext } from 'react'

import { Box, Button, Flex, Text } from 'rebass'
import styled from 'styled-components'

import { Payload } from '../../../app/context'

const StyledButton = styled(Button)`
  background: #213a8f;
  border-radius: 5px;
  box-shadow: 0 15px 30px 0 rgba(28, 78, 132, 0.4);
`

const Raw = styled.div`
  font-family: TATSanaSuksa;
  font-size: 18px;
  line-height: 1.8;
  color: #333333;

  .nowrap {
    white-space: nowrap;
  }
`

const HomeConditionComponent: React.FC = props => {
  const payload = useContext(Payload)

  return (
    <Flex justifyContent={`center`}>
      <Box width={[22 / 24]} py={4}>
        <Box py={3}>
          <Box py={2}>
            <Text fontSize={16} fontWeight={`bold`} fontFamily={`TATSanaChon`} color={`#333333`} textAlign={`center`}>ตั้งแต่วันที่</Text>
            <Text fontSize={48} fontWeight={`bold`} fontFamily={`TATSanaChon`} color={`#e6332a`} textAlign={`center`}>{payload.duration}</Text>
          </Box>
          <Box py={2}>
            <Flex justifyContent={`center`}>
              <StyledButton px={5}>
                <Text fontSize={24} fontWeight={`bold`} fontFamily={`TATSanaChon`} color={`white`} textAlign={`center`}>ลงทะเบียน เฟส 2</Text>
                <Text fontSize={24} fontWeight={`bold`} fontFamily={`TATSanaChon`} color={`white`} textAlign={`center`}>ตั้งแต่วันที่ 24 ต.ค. 62 วันละ 2 รอบ เวลา 6.00 น. และ 18.00 น.</Text>
                <Text fontSize={24} fontWeight={`bold`} fontFamily={`TATSanaChon`} color={`white`} textAlign={`center`}>(จำกัดจำนวนผู้ลงทะเบียนรอบละ 5 แสนคน รวม 1 ล้านคนต่อวัน)</Text>
              </StyledButton>
            </Flex>
          </Box>
          <Box pt={5} pb={2}>
            <Box py={1}>
              <Text fontSize={36} fontWeight={`bold`} fontFamily={`TATSanaChon`} color={`#e6332a`}>มาตรการส่งเสริมการบริโภค</Text>
              <Text fontSize={36} fontWeight={`bold`} fontFamily={`TATSanaChon`} color={`#e6332a`}>ในประเทศ “ชิมช้อปใช้”</Text>
            </Box>
            <Box>
              <Raw dangerouslySetInnerHTML={{__html: payload.detail}} />
            </Box>
            <Box pt={2}>
              <Text fontSize={18} fontWeight={`bold`} fontFamily={`TATSanaChon`} color={`#333333`}>เงื่อนไขการเข้าร่วมมาตรการ</Text>
            </Box>
            <Box>
              <Raw dangerouslySetInnerHTML={{__html: payload.condition}} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

export default HomeConditionComponent
