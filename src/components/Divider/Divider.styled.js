import styled from "styled-components";

export const DividerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 10rem;
  margin: ${({ margin }) => margin || 0};

  h2 {
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: ${({ rotate }) => `translate(-50%, 50%) rotate(${rotate || 0})`};
    font-size: 4rem;
    text-transform: uppercase;
    background-color: white;
    padding: 1rem 2rem;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.35);
  }
`;
