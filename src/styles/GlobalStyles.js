import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%; // 10px => 1rem
    }

    body,
    input,
    textarea,
    button {
        font-size: 1.6rem;
        font-weight: 500;
        font-family: ${fontFamily};
    }

    button {
        cursor: pointer;
    }
`;
