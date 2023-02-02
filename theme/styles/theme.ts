import { createTheme } from "@mui/material";
import { indigo } from "@mui/material/colors";

declare module '@mui/material/styles' {
    interface ThemeOptions {
      [key: string]: any; 
    }
}

export const theme = createTheme({
  indigo: {
    main: indigo[500],
    light: indigo[50],
  },
});
