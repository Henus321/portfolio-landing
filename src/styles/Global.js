import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    background: ${({ theme }) => theme.colors.primary};
    color: #303030;
    font-family: 'Shantell Sans', sans-serif;
    font-size: 1.6rem;
  }
`;

export default GlobalStyles;
