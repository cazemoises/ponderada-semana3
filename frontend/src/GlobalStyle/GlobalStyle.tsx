import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    button, a, input[type=submit], input[type=button] {
        cursor: pointer;
    }
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body * {
        box-sizing: border-box;
        font-family: Inter, 'sans-serif';
    }
`