import React from "react";
import Navigation from "../Navigation/Navigation";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { StyledHeader } from "./Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Navigation />
      <ThemeSwitcher />
    </StyledHeader>
  );
};

export default Header;
