import React from 'react'

import { Helmet } from 'react-helmet'

const SEOComponent: React.FC = props => {
  return (
    <Helmet
      htmlAttributes={{lang: 'en'}}
      defaultTitle={`ลงทะเบียนเข้าร่วมมาตรการ ชิมช้อปใช้`}
      link={[
        {
          rel: 'shortcut icon',
          href: '/static/images/logo.png',
        },
        {
          rel: 'apple-touch-icon-precomposed',
          href: '/static/images/logo.png',
        },
      ]}
    />
  )
}

export default SEOComponent
