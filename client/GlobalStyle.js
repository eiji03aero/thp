import { createGlobalStyle } from "styled-components";
import { colors } from "./utils/colors.js";

export const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    box-sizing
  }

  * {
    box-sizing: border-box;
  }

  #app-root {
    width: 100%;
    height: 100%;
    background-color: ${colors.black};
  }
`;
