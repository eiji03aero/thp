import { createGlobalStyle } from "styled-components";
import { colors } from "./utils/colors";

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: Menlo;
  }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    box-sizing: border-box;
    background-color: ${colors.black};
  }

  * {
    box-sizing: border-box;
  }

  #app-root {
    width: 100%;
    height: 100%;
  }
`;
