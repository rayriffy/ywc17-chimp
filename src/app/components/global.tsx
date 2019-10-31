import { createGlobalStyle } from 'styled-components'

const AppGlobalComponent = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica,Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }

  @font-face {
    font-family: 'Chonburi';
    font-style: normal;
    font-display: swap;
    src: url('/static/fonts/Chonburi/normal/font.woff2') format('woff2'), url('/static/fonts/Chonburi/normal/font.woff') format('woff');
  }

  @font-face {
    font-family: 'TATSanaChon';
    font-style: normal;
    font-display: swap;
    src: url('/static/fonts/TATSanaChon/normal/font.woff2') format('woff2'), url('/static/fonts/TATSanaChon/normal/font.woff') format('woff');
  }

  @font-face {
    font-family: 'TATSanaSuksa';
    font-style: normal;
    font-display: swap;
    src: url('/static/fonts/TATSanaSuksa/normal/font.woff2') format('woff2'), url('/static/fonts/TATSanaSuksa/normal/font.woff') format('woff');
  }

  @font-face {
    font-family: 'TATSanaSuksa';
    font-style: bold;
    font-display: swap;
    src: url('/static/fonts/TATSanaSuksa/bold/font.woff2') format('woff2'), url('/static/fonts/TATSanaSuksa/bold/font.woff') format('woff');
  }
`

export default AppGlobalComponent