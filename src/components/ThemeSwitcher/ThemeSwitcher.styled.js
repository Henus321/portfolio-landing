import styled from "styled-components";

export const StyledThemeSwitcher = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: darkslateblue;

  & > * {
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;
