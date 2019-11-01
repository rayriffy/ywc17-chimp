import React from 'react'

import { Box, Flex, Image, Link } from 'rebass'
import styled from 'styled-components'

import { assetURL } from '../../../core/services/assetURL'

const StyledImage = styled(Image)`
  width: 102px;
  height: auto;
  transition: transform 1s;

  &:hover {
    transform: scale(1.3);
  }
`

const HomeSponsorComponent: React.FC = props => {
  const sponsors = [
    {
      code: 'mof',
      href: 'https://www.mof.go.th/th/home',
    },
    {
      code: 'fpo',
      href: 'http://www.fpo.go.th/',
    },
    {
      code: 'cgd',
      href: 'https://www.cgd.go.th/',
    },
    {
      code: 'ktb',
      href: 'https://www.newcb.ktb.co.th/',
    },
    {
      code: 'mot',
      href: 'https://www.mots.go.th/',
    },
    {
      code: 'tat',
      href: 'https://thai.tourismthailand.org/',
    },
  ]

  return (
    <Flex justifyContent={`center`}>
      <Box width={[22 / 24, 20 / 24, 18 / 24]} py={4}>
        <Flex flexWrap={`wrap`} alignItems={`center`}>
          {sponsors.map(sponsor => {
            const {code, href} = sponsor

            return (
              <Box width={[1 / 3, 1 / 6]} p={4} key={`sponsor-${code}`}>
                <Link href={href}>
                  <Flex justifyContent={`center`}>
                    <StyledImage src={`${assetURL}/static/images/logos/${code}.png`} />
                  </Flex>
                </Link>
              </Box>
            )
          })}
        </Flex>
      </Box>
    </Flex>
  )
}

export default HomeSponsorComponent
