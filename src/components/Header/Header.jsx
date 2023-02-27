import React from "react";
import Navigation from "../Navigation/Navigation";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { HeaderContainer } from "./Header.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <Navigation />
      <ThemeSwitcher />
    </HeaderContainer>
  );
};

export default Header;
