import { createTheme } from "@mui/material";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
 }

 .App {
  background-color: #070707;
 }

`;

export const theme = createTheme({
  palette: {
    primary: {
      main: "#eb5757",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});

export default GlobalStyle;
