import styled from "styled-components";

export const ThemeSwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1.25rem 2.5rem;
  background-color: white;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.35);
  font-weight: bold;
  text-decoration: underline;
  transform: rotate(-2deg);

  &:hover {
    transform: rotate(2deg) translateY(-3px);
    filter: brightness(105%);
  }

  & > * {
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }

  input {
    cursor: pointer;
  }
`;
