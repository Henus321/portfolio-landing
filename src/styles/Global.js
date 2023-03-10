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
    scroll-behavior: smooth;

    @media only screen and (max-width: ${({ theme }) => theme.tabLand}) {
      font-size: 56.25%;
    }

    @media only screen and (max-width: ${({ theme }) => theme.tabPort}) {
      font-size: 50%;
    }

    @media only screen and (min-width: ${({ theme }) => theme.bigDesktop}) {
      font-size: 75%; 
    }
  }

  body {
    font-family: 'Shantell Sans', sans-serif;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.background};
    background-image: ${({ theme }) =>
      `url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill=${theme.colors.backgroundFillCode} fill-opacity='0.24'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`};
    transition: background-color 0.5s;
  }
`;

export default GlobalStyles;
