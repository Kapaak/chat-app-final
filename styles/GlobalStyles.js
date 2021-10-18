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

    ::-webkit-scrollbar {
		width: 1rem;
		height: 1rem;
	}
	::-webkit-scrollbar-track {
        background: #dde1f7;
		
	}
	::-webkit-scrollbar-thumb {
		background: var(--s-col);
	}

    @supports (scrollbar-color: red blue){
        *{
            scrollbar-color: var(--s-col) #dde1f7;
            scrollbar-width:thin;
        }
    }

    @media screen and (-webkit-min-device-pixel-ratio:0) { 
  select:focus,
  textarea:focus,
  input:focus {
    font-size: 16px;
    background: #d31212;
  }
}

`;
