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
        font-family: "Karla", sans-serif;
	      background-color: var(--f-col);
    }

    :root{
       --f-col:#fcfcfc;
       --s-col:#5D33E6;
       --ss-col:#E8E2F9;
       --t-col:#ececec;
       --ff-col:#131313;
       --fff-col:#BEBEBE;

       --shadow: 0 0 2.2px rgba(0, 0, 0, 0.034),
0 0 5.3px rgba(0, 0, 0, 0.048),
0 0 10px rgba(0, 0, 0, 0.06),
0 0 17.9px rgba(0, 0, 0, 0.0652),
0 0 33.4px rgba(0, 0, 0, 0.080);

       --light-gray:#E8E7E7;
       --small-text:1.35rem;
       --button-text:1.5rem;


      --main-headline:4rem;
      --main-subheadline:1.9rem;
      --text:1.6rem;

       --max-width:133rem;
       --side-padding:0 2rem;
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

    /* @media screen and (-webkit-min-device-pixel-ratio:0) { 
  select:focus,
  textarea:focus,
  input:focus {
    font-size: 16px;
  }
}

@media screen and (-webkit-min-device-pixel-ratio:0) { 
  select,
  textarea,
  input {
    font-size: 16px;
  }
} */

`;
