import { PaletteOptions, Color } from "@mui/material";

export const palette: Partial<PaletteOptions> = {
  mode: "light",
  primary: {
    light: "#c49dff",
    main: "#9555ee",
    dark: "#6625d4",
    contrastText: "#ffffff",
  },
  secondary: {
    light: "#f5f5f5",
    main: "#dedede",
    dark: "#818181",
    contrastText: "#ffffff",
  },
  success: {
    main: "#51ab6a",
    light: "#69b780",
    dark: "#408a55",
    contrastText: "#ffffff",
  },
  warning: {
    main: "#ffab2f",
    light: "#ffba53",
    dark: "#ff9c14",
    contrastText: "#ffffff",
  },
  background: {
    default: "#ffffff",
    paper: "#fffefa",
  },
  text: {
    primary: "#262626",
    secondary: "#454545",
    disabled: "#787878",
  },
};

export const customPalette: CustomPalette = {
  primary: {
    50: "#f2e7ff",
    100: "#dcc5fe",
    200: "#c49dff",
    300: "#ab74f9",
    400: "#9555ee",
    500: "#8034e4",
    600: "#752ede",
    700: "#6625d4",
    800: "#591fcc",
    900: "#420fbe",
  },
  secondary: {
    50: "#ffffff",
    100: "#fafafa",
    200: "#f5f5f5",
    300: "#f0f0f0",
    400: "#dedede",
    500: "#c2c2c2",
    600: "#979797",
    700: "#818181",
    800: "#606060",
    900: "#3c3c3c",
  },
};

export type CustomPalette = Record<string, Partial<Color>>;
