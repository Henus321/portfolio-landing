import React from "react";
import { DividerContainer } from "./Divider.styled";

const Divider = ({ margin, title, rotate }) => {
  return (
    <DividerContainer margin={margin} rotate={rotate}>
      <h2>{title}</h2>
    </DividerContainer>
  );
};

export default Divider;
