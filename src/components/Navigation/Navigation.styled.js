import styled from "styled-components";

export const NavigationContainer = styled.nav`
  position: relative;
  display: flex;

  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
  }

  label {
    display: none;
    align-items: center;
    padding: 1.75rem 3.5rem;
    background-color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    text-transform: uppercase;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.35);
    transform: rotate(-1deg);
    cursor: pointer;

    @media only screen and (max-width: ${({ theme }) => theme.tabPort}) {
      display: flex;
    }

    @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
      padding: 1.75rem 2rem;
    }

    &:hover {
      transform: rotate(0) translateY(-3px);
      filter: brightness(105%);
    }

    &:active {
      filter: brightness(96%);
    }
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;

    @media only screen and (max-width: ${({ theme }) => theme.tabPort}) {
      position: absolute;
      top: 7.5rem;
      display: none;
      flex-direction: column;
      width: 26rem;
      height: 100%;
    }

    @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
      width: 20rem;
    }
  }

  input:checked[type="checkbox"] ~ ul {
    @media only screen and (max-width: ${({ theme }) => theme.tabPort}) {
      display: flex;
    }
  }

  input[type="checkbox"] + label svg {
    font-size: 2.5rem;

    &:first-child {
      display: inline-block;
    }

    &:last-child {
      display: none;
    }
  }

  input:checked[type="checkbox"] + label svg {
    &:first-child {
      display: none;
    }

    &:last-child {
      display: inline-block;
    }
  }

  li {
    display: block;
    width: 100%;
    margin-right: 2rem;
    transform: rotate(-1deg);

    @media only screen and (max-width: ${({ theme }) => theme.tabPort}) {
      text-align: center;
      margin-right: 0;
      margin-bottom: 1.5rem;
    }

    &:hover {
      transform: rotate(2deg) translateY(-3px);
      filter: brightness(105%);
    }

    &:active {
      filter: brightness(96%);
    }

    &:first-child {
      transform: rotate(2deg);

      &:hover {
        transform: rotate(-2deg) translateY(-3px);
      }
    }

    &:last-child {
      transform: rotate(3deg);

      &:hover {
        transform: rotate(-2deg) translateY(-3px);
      }
    }
  }

  a {
    display: block;
    padding: 1rem 2rem;
    color: inherit;
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.35);
    font-weight: bold;
    text-decoration: underline;
    white-space: nowrap;
    cursor: pointer;

    @media only screen and (max-width: ${({ theme }) => theme.tabPort}) {
      padding: 1.5rem 2rem;
    }
  }
`;
