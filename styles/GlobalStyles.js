import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,*::before,*::after{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    html{
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body{
        font-size: 1.6rem;
        font-family: "Raleway", sans-serif;
    }

    :root{
       --f-col:#fcfcfc;
       --s-col:#163cff;
       --t-col:#ececec;
       --ff-col:#131313;
       --fff-col:#BEBEBE;
    }

`;
