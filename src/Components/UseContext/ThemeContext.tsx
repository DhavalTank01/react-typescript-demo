import React, { createContext } from "react";
import { Theme } from "./Theme";

export const ThemeContext = createContext(Theme);

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={Theme}>{children}</ThemeContext.Provider>
  );
};
