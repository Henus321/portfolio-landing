import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  overflow-x: hidden;
`;

export const Pin = styled.img`
  position: absolute;
  top: ${({ top }) => top || "unset"};
  right: ${({ right }) => right || "unset"};
  bottom: ${({ bottom }) => bottom || "unset"};
  left: ${({ left }) => left || "unset"};
  filter: ${({ hue }) => `grayscale(10%) hue-rotate(${hue || 0})`};
  transform: ${({ rotate, scale }) =>
    `rotate(${rotate || 0}) scale(${scale | 1})`};
  display: block;
  width: auto;
  height: ${({ size }) => size || "5rem"};
  object-fit: cover;
  object-position: center;
`;

export const Frame = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 5rem;
  box-shadow: 5px 5px 15px 15px rgba(0, 0, 0, 0.35);
  transform: translate(0);
`;
