import { createGlobalStyle } from "styled-components";
// import { Locomotive } from "./locomotive";
// ${Locomotive};

const GlobalStyles = createGlobalStyle`

    :root{
        --black     : #FFFCE1;
        --bluelight : #FE8609;
        --grey      : #866c55;
    }

    * {
        margin     : 0;
        padding    : 0;
        box-sizing : border-box;
    }

    h1, h2, h3, h4, h5, p, a {
        color : var(--black);
    }

    h1, h2, h3, h4, a {
        font-family : Monument;
    }

    li {
        list-style : none;
    }

    img {
        width      : 100%;
        display    : block;
    }

    html {
        overflow-x      : hidden;
        min-height      : -webkit-fill-available;
        scroll-behavior : smooth;
    }

    body {
        background      : linear-gradient(141deg, #0E100F 0%,#0E100F 100%);
        cursor          : none;
        isolation       : isolate;
        min-height      : 100vh;
        min-height      : -webkit-fill-available;
        scroll-behavior : smooth;
    }

    p {
        font-family     : Grotesk;
        font-weight     : 400;
        line-height     : 120%;
        overflow-wrap   : break-word;
        word-wrap       : break-word;
        -webkit-hyphens : auto;
        -ms-hyphens     : auto;
        -moz-hyphens    : auto;
        hyphens         : auto;
    }
    
    a {
        color           : inherit;
        text-decoration : none;
        font-weight     : 800;
        text-transform  : uppercase;
        mix-blend-mode  : difference;
        outline         : none;

        &:hover{
            -webkit-text-fill-color : var(--bluelight);
            -webkit-text-stroke     : 0.13vw var(--black);
            cursor                  : none;
        }
    }
`;

export { GlobalStyles };