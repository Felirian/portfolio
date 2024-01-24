import React from 'react';
import styled from "styled-components";
import ImagePrlx from "../components/ImagePrlx";

import img11 from '../assets/Photos/1.1.jpg'
import img12 from '../assets/Photos/1.2.jpg'
import img13 from '../assets/Photos/1.3.jpg'
import img14 from '../assets/Photos/1.4.jpg'
import img15 from '../assets/Photos/1.5.jpg'

import Sticky from "../components/Sticky";
import {H1, H3} from "../styles/GlobalStyles";

const PhotoPage = () => {
  return (
    <PhotoPageWrapper>
      <Block>
        <ImagePrlx
          img={img11}
          height={66.17}
        />
        <Sticky
          pos={'left'}
          img={img12}
          text={<H1>Улица</H1>}
          height={32.85}
        />
        <Sticky
          pos={'tight'}
          img={img13}
          text={
            <H3>
              Фотографии, где портрет девушки предстают
              в контрасте с красочными хвойными деревьями, вызывают колоритные эмоции.
              <br/><br/>
              Зеленые и коричневые оттенки леса
              вливаютсяв портрет, создавая атмосферу
              волшебства и умиротворения.
            </H3>
          }
          height={32.85}
        />
        <ImgRow>
          <ImagePrlx
            img={img14}
            height={43.32}
          />
          <ImagePrlx
            img={img15}
            height={43.32}
          />
        </ImgRow>
      </Block>


    </PhotoPageWrapper>
  );
};


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

const ImgRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`

export default PhotoPage;