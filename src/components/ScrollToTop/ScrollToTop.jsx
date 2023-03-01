import React from "react";
import { ScrollToTopContainer } from "./ScrollToTop.styled";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  return (
    <ScrollToTopContainer href="#header">
      <FaArrowUp />
    </ScrollToTopContainer>
  );
};

export default ScrollToTop;
