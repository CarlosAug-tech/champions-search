import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    * {
      outline: 0;
    }
  }

  html,
  body, 
  #root {
    min-height: 100vh;
  }

  body {
    color: #fff;
    background-color: #26345B;
    -webkit-font-smoothing: antialiased;
  }

  body, button, input, textarea {
    font: 400 14px sans-serif;
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

`;
