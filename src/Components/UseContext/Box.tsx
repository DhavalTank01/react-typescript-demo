import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Box = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <div
        style={{ background: theme.primary.main, color: theme.primary.text }}
      >
        Theme Context
      </div>
      <div
        style={{
          background: theme.secondary.main,
          color: theme.secondary.text,
        }}
      >
        Theme Context
      </div>
    </>
  );
};

export default Box;
