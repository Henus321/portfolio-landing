import styled from "styled-components";

export const ThemeSwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1.25rem 2.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.35);
  font-weight: bold;
  text-decoration: underline;
  transform: ${({ rotate }) => `rotate(${rotate || "-2deg"})`};

  & > * {
    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }

  svg {
    font-size: 3rem;
  }

  input {
    cursor: pointer;
  }

  input[type="checkbox"] {
    position: relative;
    width: 10rem;
    height: 2rem;
    margin: 1rem 0;
    background-color: #cfcfcf;
    outline: none;
    border-radius: 2rem;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    -webkit-appearance: none;
    appearance: none;
  }

  input:checked[type="checkbox"] {
    background-color: #5e5e5e;
  }

  input[type="checkbox"]::before {
    content: "";
    position: absolute;
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
    top: -50%;
    left: 1rem;
    background-color: white;
    transform: ${({ rotate }) => `scale(1.1) rotate(${rotate || "-2deg"})`};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  }

  input:checked[type="checkbox"]::before {
    left: 5rem;
  }
`;
