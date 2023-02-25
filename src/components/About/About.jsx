import React from "react";
import { StyledAbout } from "./About.styled";

const About = () => {
  return (
    <StyledAbout>
      <div>
        <h1>Александр Ерхов</h1>
        <span>Frontend-разработчик</span>
        <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
          <path
            d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z"
            style={{ stroke: "none", fill: "lightgreen" }}
          ></path>
        </svg>
      </div>
    </StyledAbout>
  );
};

export default About;
