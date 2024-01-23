import styled, {createGlobalStyle} from "styled-components";
import {COLORS} from "../shared/variables";
import JostFont from './fonts/Jost-VariableFont_wght.ttf'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: none;
    //border: 1px solid red;
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

  //------TEXT-TAGS-------\\\\
  a {
    text-decoration: none;
    color: inherit;
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
export const ExtraTitle = styled.h1`
  color: ${COLORS.color_5};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${COLORS.color_1};

  font-family: Jost, sans-serif;
  font-size: 430px;
  font-style: normal;
  font-weight: 800;
  line-height: 95%; /* 408.5px */
`

export const H1 = styled.h1`
  font-family: Jost, sans-serif;
  font-size: 1.88vw;
  font-style: normal;
  font-weight: 300;
  line-height: 2.11vw; /* 112.5% */
`
export const H2 = styled.h2`
  font-family: Jost, sans-serif;
  font-size: 1.64vw;
  font-style: normal;
  font-weight: 200;
  line-height: 48px; /* 114.286% */
`

export const H3 = styled.h3`
  font-family: Jost, sans-serif;
  font-size: 1.17vw;
  font-style: normal;
  font-weight: 300;
  line-height: 1.33vw; /* 113.333% */
`