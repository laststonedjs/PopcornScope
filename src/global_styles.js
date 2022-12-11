import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: Bahnschrift;
    -webkit-font-smooting: antialised;
    -moz-osx-font-smooting: grayscale;
    background: #ffffff;
    color: #0f0f0a;
    font-size: 16px;
    scroll-behavior: smooth;
  }
`;