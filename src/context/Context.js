import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = useState(false);
  const [isMenuActive, setMenuActive] = useState(false);

  const value = { isDarkTheme, setDarkTheme, isMenuActive, setMenuActive };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
