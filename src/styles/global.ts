import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
    }

    body {
        background: ${(props) => props.theme['base-background']};
        color: ${(props) => props.theme['base-title']};
        -webkit-font-smoothing: antialiased;
    }

    body {
        font: 400 1rem Nunito, sans-serif;
        line-height: 1.6;
    }

    h1 {
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 31.2px;
    }

    h2 {
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 32px;
    }

    h3 {
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 28.8px;
        color: ${(props) => props.theme['base-subtitle']};
    }
    
    h4 {
        line-height: 25.6px;
        color: ${(props) => props.theme['base-subtitle']};
    }
    
    p, input {
        line-height: 25.6px;
        color: ${(props) => props.theme['base-text']};
    }

    span {
        font-size: 0.875rem;
        line-height: 22.4px;
        text-align: right;
        color: ${(props) => props.theme['base-span']};
    }

    /* a {
        text-decoration: none;
        color: ${(props) => props.theme.blue};
        font-weight: bold;
        font-size: 0.75rem;
        line-height: 19.2px;
    } */
    

`
