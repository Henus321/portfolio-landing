import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  padding: 2rem 2rem 4rem;
  width: 100%;
  background-color: white;
  box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.35);

  h2 {
    grid-column: 1 / -1;
    margin-bottom: 1rem;
  }

  span {
    display: flex;

    &:not(:last-child) {
      margin-right: 2rem;
    }
  }

  svg {
    font-size: 2rem;
    margin-right: 0.5rem;
  }
`;
