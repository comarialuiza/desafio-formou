import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap');

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