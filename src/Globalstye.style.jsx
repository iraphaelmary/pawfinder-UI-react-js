import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-size: border-box;
    }

    ul {
        list-style-type: none;
    }

    a, Link {
        text-decoration: none;
    }  

`;