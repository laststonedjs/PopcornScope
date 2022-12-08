import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: 'Helvetica Neue', Arial, Helvetica, sans-serif;
    -webkit-font-smooting: antialised;
    -moz-osx-font-smooting: grayscale;
    background: linear-gradient(0.25turn, #3f87a6, #ebf8e1);
    color: #0f0f0a;
    font-size: 16px;
  }
`;