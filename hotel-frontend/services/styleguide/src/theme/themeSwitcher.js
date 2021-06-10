import React from "react";
import { ThemeProvider } from "./themeContext";
import { ThemeOptions, THEME_OPTIONS } from "./config";

import usePeristedState from "../utils/usePersistedState";

const ThemeSwitcher = ({ children }) => {
  const [theme, setTheme] = usePeristedState(
    "theme_hotel_app",
    THEME_OPTIONS.LIGHT
  );

  const mapThemeData = (themeData) => {
    setTheme(themeData);
    return themeData;
  };

  const initialState = {
    theme: theme ? ThemeOptions[theme] : ThemeOptions.light,
    selectedTheme: theme || "light",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case THEME_OPTIONS.DARK:
        return {
          ...state,
          theme: ThemeOptions[THEME_OPTIONS.DARK],
          selectedTheme: mapThemeData(THEME_OPTIONS.DARK),
        };
      case THEME_OPTIONS.LIGHT:
        return {
          ...state,
          theme: ThemeOptions[THEME_OPTIONS.LIGHT],
          selectedTheme: mapThemeData(THEME_OPTIONS.LIGHT),
        };
      default:
        return state;
    }
  };
  return (
    <ThemeProvider initialState={initialState} reducer={reducer}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeSwitcher;
