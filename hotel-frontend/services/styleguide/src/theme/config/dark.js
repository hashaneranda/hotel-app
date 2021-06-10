import tinycolor from "tinycolor2";
import shared from "./shared";

const theme = {
  title: "dark",
  ...shared,
  palette: {
    primary: {
      main: "#233253",
    },
    typography: {
      main: "#fff",
      secondary: "#b3b3b3",
      lighter: tinycolor("#D0D1D2").darken(45).toHexString(),
    },
    background: {
      main: "#121212",
      secondary: "rgb(30, 33, 37)",
      contrast: tinycolor("#233253").lighten(30).toHexString(),
      // secondary: "#404040"
    },
  },
  borders: {
    header: "1px solid #203200",
  },
};

export default theme;
