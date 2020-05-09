import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased;
        font: 14px 'Roboto', sans-serif;
        background: #F8FAFB;
    }

    a {
        color: #333;
        text-decoration: none;
    }

    img {
        max-width: 100%;
    }
`;