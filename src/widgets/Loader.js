import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoaderSVG = styled.svg`
  fill: #934949;
  stroke: #934949;
  animation: ${spin} 1s linear infinite;
`;

const Circle = styled.circle`
  fill: transparent;
  stroke: #ffffff; /* Цвет круга */
  stroke-width: 4; /* Ширина круга */
  stroke-linecap: round; /* Закругленные концы линии */
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderSVG width="50" height="50" viewBox="0 0 50 50">
        <Circle cx="25" cy="25" r="20" />
      </LoaderSVG>
    </LoaderContainer>
  );
};

export default Loader;