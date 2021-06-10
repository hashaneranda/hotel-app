import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";

import { useThemeValue } from "./themeContext";
import GlobalStyle from "./global";

const Theme = ({ children }) => {
  const [{ theme }] = useThemeValue();

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        {children}
      </Fragment>
    </ThemeProvider>
  );
};

export default Theme;
