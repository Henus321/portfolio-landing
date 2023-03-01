import styled from "styled-components";

export const NavigationContainer = styled.nav`
  display: flex;

  ul {
    display: flex;
    align-items: center;
    list-style: none;
  }

  li {
    display: block;
    margin-right: 2rem;
    transform: rotate(-1deg);

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
    color: #303030;
    background-color: white;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.35);
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
`;
