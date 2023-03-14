import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  height: 10rem;
  background-color: transparent;
  z-index: 100;

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0 2rem;
  }
`;
