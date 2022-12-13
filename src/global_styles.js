import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: Bahnschrift;
    -webkit-font-smooting: antialised;
    -moz-osx-font-smooting: grayscale;
    background: linear-gradient(to bottom left, #e6ffff 0%, #f2f2f2 100%);
    color: #0f0f0a;
    font-size: 16px;
    scroll-behavior: smooth;
  }
`;