import React from 'react'

import { Helmet } from 'react-helmet'

import { assetURL } from '../../core/services/assetURL'

const SEOComponent: React.FC = props => {
  return (
    <Helmet
      htmlAttributes={{lang: 'en'}}
      defaultTitle={`ลงทะเบียนเข้าร่วมมาตรการ ชิมช้อปใช้`}
      link={[
        {
          rel: 'shortcut icon',
          href: `${assetURL}/static/images/logo.png`,
        },
        {
          rel: 'apple-touch-icon-precomposed',
          href: `${assetURL}/static/images/logo.png`,
        },
      ]}
      meta={[
        {
          name: 'title',
          content: 'มาตรการส่งเสริมการท่องเที่ยวในประเทศ “ชิมช้อปใช้”',
        },
        {
          name: 'description',
          content: 'ผู้สนใจเข้าร่วมมาตรการฯ สามารถลงทะเบียน ตั้งแต่ วันที่ 23 ก.ย. - 15 พ.ย. 62',
        },
      ]}
    />
  )
}

export default SEOComponent
