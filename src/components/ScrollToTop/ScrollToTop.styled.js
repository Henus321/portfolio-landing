import styled from "styled-components";

export const ScrollToTopContainer = styled.a`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.25);
  border: none;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transform: rotate(5deg);

  &:hover {
    transform: rotate(-2deg) translateY(-3px);
    filter: brightness(105%);
  }

  &:active {
    filter: brightness(96%);
  }
`;
