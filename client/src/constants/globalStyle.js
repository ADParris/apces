import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *::before, *, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;
    body {
      font-family: 'Open Sans Condensed', sans-serif;
      background-color: #ffffff;
      font-size: 1.6rem;
      ul {
        list-style: none;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
`

export default GlobalStyle
