import { createGlobalStyle } from "styled-components";

export const colorPallete:{[key:string]: any} = {
    light:{
        body: "#fafafa",
        broder: "#e3e8ea",
        shadow: "#bccad0",
        text: "#495054",
    },
    dark:{
        body: "#495054",
        broder: "#e3e8ea",
        shadow: "#bccad0",
        text: "#fafafa",
    }
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) =>theme.theme.body};
    color: ${({ theme }) =>  theme.theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`;