import React from 'react'

import { Box, Flex, Text } from 'rebass'

const HomeDisclaimerComponent: React.FC = props => {
  return (
    <Flex justifyContent={`center`}>
      <Box width={[22 / 24, 20 / 24, 18 / 24]} py={4}>
        <Text fontSize={18} fontWeight={`bold`} fontFamily={`TATSanaChon`} color={`#333333`}>ใช้แอปพลิเคชั่น “เป๋าตัง” ชำระค่าสินค้าและบริการ</Text>
        <Text fontSize={18} fontWeight={`bold`} fontFamily={`TATSanaChon`} color={`#333333`}>ชำระค่าสินค้าและบริการได้เฉพาะกับร้านค้าที่ใช้แอปพลิเคชั่น “ถุงเงิน” เท่านั้น</Text>
        <Text fontSize={18} fontWeight={`bold`} fontFamily={`TATSanaChon`} color={`#e6332a`}>ใช้สิทธิได้ตั้งแต่ 27 ก.ย. - 31 ธ.ค. 62</Text>
      </Box>
    </Flex>
  )
}

export default HomeDisclaimerComponent
