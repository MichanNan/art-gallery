import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    list-style:none;
    padding:0;
    margin:0
  }

  body {
    font-family: system-ui;
  }
`;
