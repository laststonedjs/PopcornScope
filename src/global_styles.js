import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: 'Helvetica Neue', Arial, Helvetica, sans-serif;
    -webkit-font-smooting: antialised;
    -moz-osx-font-smooting: grayscale;
    background-color: #1f1f14;
    color: #0f0f0a;
    font-size: 16px;
  }
`;