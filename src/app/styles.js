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
    scroll-padding: 130px;
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
    width: $scrollbar-width;
    background-color: $color-bg-1;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: $color-bg-1;
  }

  ::-webkit-scrollbar-thumb {
    background: $color-bg-3;

    border-radius: 5px;
    border: 2px solid #141414;
    transition: 0.5s;

  }

  ::-webkit-scrollbar-thumb:hover {
    background: #565656;
    border-radius: 5px;
    border: 0px solid red;
    transition: 0.5s;
  }

`
export const HoverLink = styled.div`
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 1.5px;
  transition: background-size 0.5s ease;

  &:hover {
    background-size: 100% 1.5px;
  }

`