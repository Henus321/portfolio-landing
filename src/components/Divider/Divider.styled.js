import styled from "styled-components";

export const DividerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10rem;
  margin: ${({ margin }) => margin || 0};

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: linear-gradient(
        to bottom right,
        #f5f5f5,
        20%,
        rgba(236, 178, 186, 0)
      ),
      #fff;
    transform: ${({ rotate }) => `rotate(${rotate || 0})`};

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(
          0deg,
          rgba(236, 178, 186, 0),
          49%,
          rgba(156, 151, 142, 0.4),
          51%,
          rgba(236, 178, 186, 0)
        ),
        linear-gradient(
          89.5deg,
          rgba(236, 178, 186, 0),
          49%,
          rgba(156, 151, 142, 0.3),
          51%,
          rgba(236, 178, 186, 0)
        );
    }
    /* background: linear-gradient(
        to bottom right,
        #bcb5a9,
        20%,
        rgba(236, 178, 186, 0)
      ),
      #b5a488;
    transform: ${({ rotate }) => `rotate(${rotate || 0})`};

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(
          0deg,
          rgba(236, 178, 186, 0),
          49%,
          rgba(235, 235, 235, 0.65),
          51%,
          rgba(236, 178, 186, 0)
        ),
        linear-gradient(
          89.5deg,
          rgba(236, 178, 186, 0),
          49%,
          rgba(235, 235, 235, 0.65),
          50%,
          rgba(236, 178, 186, 0)
        );
    } */
  }

  h2 {
    font-size: 4rem;
    text-transform: uppercase;
    padding: 1rem 2rem;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.35);
  }
`;
