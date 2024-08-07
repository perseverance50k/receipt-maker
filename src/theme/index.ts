"use client";

import { createTheme } from "@mui/material";

import { customPalette, CustomPalette, palette } from "./palette";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      palette: CustomPalette;
    };
  }
  interface ThemeOptions {
    custom: {
      palette: CustomPalette;
    };
  }
}

export const theme = createTheme({
  palette,
  custom: {
    palette: customPalette,
  },
});
