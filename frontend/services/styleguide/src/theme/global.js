import { createGlobalStyle } from "styled-components";

import Poppins from "../assets/fonts/Poppins/Poppins-Bold.ttf";
import Manrope from "../assets/fonts/Manrope/Manrope-VariableFont_wght.ttf";

export default createGlobalStyle`
@font-face {
  font-family: 'Poppins';
  src: local('Poppins'), local('Poppins'),
  url(${Poppins}) format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Manrope';
  src: local('Manrope'), local('Manrope'),
  url(${Manrope}) format('truetype');
  font-weight: normal;
  font-style: normal;
}


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 14px;

      @media (max-width: 768px) {
        font-size: 12px;
      }
  }

    ::-webkit-scrollbar {
      width: 10px;
}
 
::-webkit-scrollbar-track {
  background-color: #FFF;
}
 
::-webkit-scrollbar-thumb {
  background-color: #CBCBCB;
	outline: 2px solid #FFF;
	outline-offset: -2px;
	border: .1px solid #B7B7B7;
}
 
::-webkit-scrollbar-thumb:hover{
	background-color: #909090;
}

  body {
    background: ${(props) => props.theme.palette.background.main};
    /* font-size: 14px; */
    color: ${(props) => props.theme.palette.typography.main};
    font-family: ${(props) => props.theme.typography.body};
  }

  h1,h2,h3,h4,h5 {
    font-family: ${(props) => props.theme.typography.heading};
  }

  h1{
    font-size: 2.1em;
  }

  h2{
    font-size: 1.8em;
  }

  h3{
    font-size: 1.6em;
  }

  h4{
    font-size: 1.3em;
  }

  h5{
    font-size: 1.2em;
  }

  .MuiList-root {
    color: ${(props) => props.theme.palette.typography.secondary};
    background: ${(props) => props.theme.palette.background.main};
  }

  .MuiInput-underline:before {
    border-color: ${(props) => props.theme.palette.typography.secondary};
  }
  
  .MuiInput-underline:hover:not(.Mui-disabled):before{
    border-color: ${(props) => props.theme.palette.typography.main};
  }

  .MuiAutocomplete-popper {
    background: ${(props) => props.theme.palette.background.main};
    color: ${(props) => props.theme.palette.typography.secondary};
  }
  
  .MuiAutocomplete-paper{
    background: ${(props) => props.theme.palette.background.main};
    color: ${(props) => props.theme.palette.typography.secondary};
  }

  .MuiAutocomplete-noOptions{
    color: ${(props) => props.theme.palette.typography.secondary};
  }


`;
