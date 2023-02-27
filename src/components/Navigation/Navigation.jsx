import React from "react";
import { NavigationContainer } from "./Navigation.styled";

const Navigation = () => {
  return (
    <NavigationContainer>
      <ul>
        <li>О себе</li>
        <li>Навыки</li>
        <li>Проекты</li>
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
