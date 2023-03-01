import React from "react";
import { DividerContainer } from "./Divider.styled";

const Divider = ({ margin, title, rotate, id }) => {
  return (
    <DividerContainer id={id} margin={margin} rotate={rotate}>
      <div>
        <h2>{title}</h2>
      </div>
    </DividerContainer>
  );
};

export default Divider;
