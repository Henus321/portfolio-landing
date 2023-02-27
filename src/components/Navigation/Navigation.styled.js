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
    padding: 1rem 2rem;
    margin-right: 2rem;
    background-color: white;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.35);
    cursor: pointer;
    transform: rotate(-1deg);

    &:first-child {
      transform: rotate(2deg);
    }

    &:last-child {
      transform: rotate(3deg);
    }
  }
`;
