import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    border: 0;
    margin: 0;
    user-select: none;
    text-decoration: none;
    outline: none;
  }

  html{ 
    font-family: 'Josefin Sans', sans-serif;
  }

  a {
    color: #000000;
  }
`