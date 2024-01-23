import React from 'react';
import styled from "styled-components";
import ImagePrlx from "../components/ImagePrlx";

import img11 from '../assets/Photos/1.1.jpg'

const PhotoPage = () => {
  return (
    <PhotoPageWrapper>
      <Null/>
      <h1>photo</h1>
      <ImagePrlx
        img={img11}
        height={66.17}
      />
      <ImagePrlx
        img={img11}
        height={66.17}
      />
      <ImagePrlx
        img={img11}
        height={66.17}
      />
      <Null/>
      <Null/>
    </PhotoPageWrapper>
  );
};

const Null = styled.div`
  width: 100vw;
  height: 100vh;
`

const PhotoPageWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 10px;
  flex-direction: column;
  align-items: center;
  gap: 400px;
`

const Block = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.91vw;
  align-self: stretch;
`

export default PhotoPage;