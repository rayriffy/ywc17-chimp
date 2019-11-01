import React from 'react'

import { Box, Flex, Image, Link } from 'rebass'

import { assetURL } from '../../../core/services/assetURL'

const HomeContactComponent: React.FC = props => {
  const contacts = [
    {
      code: 'ktb',
      href: 'tel:021111144',
    },
    {
      code: 'cgd',
      href: 'tel:022706400',
    },
    {
      code: 'tat',
      href: 'tel:1672',
    },
  ]

  return (
    <Flex justifyContent={`center`}>
      <Box width={[22 / 24, 20 / 24, 18 / 24]} py={4}>
        <Flex flexWrap={`wrap`}>
          {contacts.map(contact => {
            const {code, href} = contact
            return (
              <Box width={[1, 1 / 3]} p={4} key={`contact-${code}`}>
                <Flex justifyContent={`center`} alignItems={`center`}>
                  <Link href={href}>
                    <Image alt={code} src={`${assetURL}/static/images/contact/${code}.png`} />
                  </Link>
                </Flex>
              </Box>
            )
          })}
        </Flex>
      </Box>
    </Flex>
  )
}

export default HomeContactComponent
