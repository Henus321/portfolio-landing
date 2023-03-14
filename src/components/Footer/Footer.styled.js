import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  padding: 3rem 2rem 5rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 1px 1px 4px 4px rgba(0, 0, 0, 0.35);

  @media only screen and (max-width: ${({ theme }) => theme.tabPort}) {
    grid-template-columns: 1fr;
  }

  h2 {
    grid-column: 1 / -1;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    text-decoration: underline;

    @media only screen and (max-width: ${({ theme }) => theme.tabPort}) {
      margin-bottom: 1.5rem;
    }
  }

  span {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-right: 2rem;

      @media only screen and (max-width: ${({ theme }) => theme.tabPort}) {
        margin-right: 0;
        margin-bottom: 1rem;
      }
    }
  }

  svg {
    font-size: 2.5rem;
    margin-right: 1rem;
  }
`;
