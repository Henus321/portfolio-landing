import styled from "styled-components";

export const StyledAbout = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: olivedrab;
  height: 60rem;

  svg {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  h1 {
    z-index: 2;
  }
`;
