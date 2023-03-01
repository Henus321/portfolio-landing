import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  padding: 3rem 2rem 5rem;
  width: 100%;
  background-color: white;
  box-shadow: 1px 1px 4px 4px rgba(0, 0, 0, 0.35);

  h2 {
    grid-column: 1 / -1;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    text-decoration: underline;
  }

  span {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-right: 2rem;
    }
  }

  svg {
    font-size: 2.5rem;
    margin-right: 1rem;
  }
`;
