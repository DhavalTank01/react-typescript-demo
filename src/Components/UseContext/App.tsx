import React from "react";
import Box from "./Box";
import { Theme } from "./Theme";
import { ThemeContext, ThemeContextProvider } from "./ThemeContext";
import User from "./User";
import { UserContextProvider } from "./UserContext";

const App = () => {
  return (
    <>
      <ThemeContext.Provider value={Theme}>
        <Box />
      </ThemeContext.Provider>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </>
  );
};

export default App;
