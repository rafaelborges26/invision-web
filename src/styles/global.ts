import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 * {
     margin: 0;
     padding: 0;
     outline: 0;
     box-sizing: border-box;
 }

 body {
    background: #FFFFFF;
    color: #707070;
    -webkit-font-smoothing: antialiased
 }

 body, input, button {
     font-size: 16px;
     font-family: 'Muli', serif;

 }

 button {
     cursor: pointer;
 }

`;
