import styled, {createGlobalStyle} from "styled-components";
import {COLORS} from "../shared/variables";
import JostFont from './fonts/Jost-VariableFont_wght.ttf'
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    //cursor: none;
    //border: 1px solid pink;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding: 0;
  }

  body {
    width: 100%;
    overflow-x: hidden;
    background-color: ${COLORS.color_5};
    color: ${COLORS.color_1};
    
  }

  @font-face {
    font-family: 'Jost';
    src: url(${JostFont});
  }

  //------TEXT-TAGS-------\\
  a {
    text-decoration: none;
    color: inherit;
  }
  
  //------SCROLL-BAR-------\\
  ::-webkit-scrollbar {
    width: 5px;
    background-color: ${COLORS.color_4};
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: ${COLORS.color_4};
  }

  ::-webkit-scrollbar-thumb {
    background: ${COLORS.color_1};

    border-radius: 5px;
    border: 2px solid ${COLORS.color_4};
    transition: 0.5s;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${COLORS.color_1};
    border-radius: 5px;
    border: 0 solid red;
    transition: 0.5s;
  }

`
export const HoverLink = styled.div`
  width: fit-content;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 1.5px;
  transition: background-size 0.5s ease;

  &:hover {
    background-size: 100% 1.5px;
  }

`
export const Block = styled.div`
  width: 100vw;
  height: 100vh;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Null = styled.div`
  width: 100vw;
  height: 100vh;
`