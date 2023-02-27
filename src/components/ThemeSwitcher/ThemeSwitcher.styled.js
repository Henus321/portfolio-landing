import styled from "styled-components";

export const ThemeSwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2.5rem;
  background-color: white;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.35);
  transform: rotate(-2deg);

  & > * {
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;
