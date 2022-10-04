import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
    --body-bg-color: #E5E5E5;
    --header-bg-color: #C3CFD9;
    --footer-bg-color: #DFE6ED;
    --footer-bg-border-color: #9EADBA;
    --orange: #E8833A;
    --succesful-order: #247A6B; 
    --selected-seat: #8DD7CF;
    --selected-seat-border: #45BDB0;
    --seat-available: #C3CFD9;
    --seat-available-border: #808F9D;
    --seat-unavailable: #FBE192;
    --seat-unnavailable-border: #F7C52B;
    --input-border: #D4D4D4;
    --black: #293845;
  }

  html{
    font-size: 62.5%;
  }

  img {
    height: 100%;
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  body {
    width: 100vw;
    color: var(--black);
    font-family: 'Roboto', sans-serif;
    font-size: clamp(14px, 1.6rem, 2vw);
    background: var(--body-bg-color);
    /* font-family: 'Righteous', cursive; */
  }
`;

export default GlobalStyle;