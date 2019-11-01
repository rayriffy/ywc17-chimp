import React from 'react'

import { Box, Flex, Image, Link } from 'rebass'

import { assetURL } from '../../../core/services/assetURL'

const HomeContactComponent: React.FC = props => {
  return (
    <Flex justifyContent={`center`}>
      <Box width={[22 / 24, 20 / 24, 18 / 24]} py={4}>
        <Flex flexWrap={`wrap`}>
          <Box width={[1, 1 / 3]} p={4}>
            <Flex justifyContent={`center`} alignItems={`center`}>
              <Link href={`tel:021111144`}>
                <Image src={`${assetURL}/static/images/contact/ktb.png`} />
              </Link>
            </Flex>
          </Box>
          <Box width={[1, 1 / 3]} p={4}>
            <Flex justifyContent={`center`} alignItems={`center`}>
              <Link href={`tel:022706400`}>
                <Image src={`${assetURL}/static/images/contact/cgd.png`} />
              </Link>
            </Flex>
          </Box>
          <Box width={[1, 1 / 3]} p={4}>
            <Flex justifyContent={`center`} alignItems={`center`}>
              <Link href={`tel:1672`}>
                <Image src={`${assetURL}/static/images/contact/tat.png`} />
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default HomeContactComponent
