import React from 'react';
import styled from "styled-components";
import ImagePrlx from "../components/ImagePrlx";

import img11 from '../assets/Photos/1.1.jpg'
import img12 from '../assets/Photos/1.2.jpg'
import img13 from '../assets/Photos/1.3.jpg'
import img14 from '../assets/Photos/1.4.jpg'
import img15 from '../assets/Photos/1.5.jpg'

import img21 from '../assets/Photos/2.1.jpg'
import img22 from '../assets/Photos/2.2.jpg'
import img23 from '../assets/Photos/2.3.jpg'
import img24 from '../assets/Photos/2.4.jpg'
import img25 from '../assets/Photos/2.5.jpg'

import img31 from '../assets/Photos/3.1.jpg'
import img32 from '../assets/Photos/3.2.jpg'
import img33 from '../assets/Photos/3.3.jpg'

import img41 from '../assets/Photos/4.1.jpg'
import img42 from '../assets/Photos/4.2.jpg'
import img43 from '../assets/Photos/4.3.jpg'
import img44 from '../assets/Photos/4.4.jpg'
import img45 from '../assets/Photos/4.5.jpg'

import img51 from '../assets/Photos/5.1.jpg'
import img52 from '../assets/Photos/5.2.jpg'
import img53 from '../assets/Photos/5.3.jpg'

import Sticky from "../components/Sticky";
import {H1, H3, Null} from "../styles/GlobalStyles";
import Main from "./Main";

const PhotoPage = () => {
  return (
    <PhotoPageWrapper>
      <Main/>
      <Null/>
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

      <Block>
        <ImgRow>
          <ImagePrlx
            img={img21}
            height={43.44}
          />
          <ImagePrlx
            img={img22}
            height={43.44}
          />
          <ImagePrlx
            img={img23}
            height={43.44}
          />
        </ImgRow>

        <Sticky
          pos={'right'}
          img={img24}
          text={<H1>Искусство
            В каждом кадре</H1>}
          height={36.91}
        />
        <Sticky
          pos={'left'}
          img={img25}
          text={
            <H3>
              Каждая фотография в моем портфолио является произведением искусства.
              <br/><br/>
              Я стремлюсь создавать красивые
              и эстетически привлекательные композиции,
              играя с светом, цветами и формами.
              <br/><br/>
              Мои фотографии не только передают суть момента, но и вдохновляют зрителей
              своей красотой и глубиной.
            </H3>
          }
          height={36.91}
        />

      </Block>

      <Block>
        <ImagePrlx
          img={img31}
          height={66.17}
        />
        <Sticky
          pos={'left'}
          img={img32}
          text={<H1>Для эмоций
            не нужны цвета</H1>}
          height={63.28}
        />
        <Sticky
          pos={'tight'}
          img={img33}
          text={
            <H3>
              В черно-белых портретах, пронизанных контрастами и насыщенностью эмоций,
              я стремлюсь запечатлеть моменты и чувства.
              <br/><br/>
              Окруженные тенями и светом,
              лица моделей выражают сложные нюансы человеческой природы.
              <br/><br/>
              Эта серия — это погружение в глубокие эмоциональные оттенки черно-белой палитры.
            </H3>
          }
          height={63.28}
        />
      </Block>

      <Block>
        <ImagePrlx
        img={img41}
        height={66.13}
        />
        <Sticky
          pos={'right'}
          img={img42}
          text={<H1>Улица</H1>}
          height={32.81}
        />
        <Sticky
          pos={'left'}
          img={img43}
          text={
            <H3>
              Серия фотографий представляет собой отражение разнообразия и красоты городской жизни через портреты.
              <br/><br/>
              Каждая фотография — это история, рассказываемая лицами, которые становятся характерами этого городского
              ландшафта.
              <br/><br/>
              Улица — моя студия.
            </H3>
          }
          height={32.81}
        />
        <ImgRow>
          <ImagePrlx
            img={img44}
            height={34.80}
          />
          <ImagePrlx
            img={img45}
            height={34.80}
          />
        </ImgRow>
      </Block>

      <Block>
        <ImagePrlx
          img={img51}
          height={66.13}
        />
        <Sticky
          pos={'right'}
          img={img52}
          text={<><H1>Архитектура</H1><H1>в черно-белых оттенках</H1></>}
          height={32.81}
        />
        <Sticky
          pos={'left'}
          img={img53}
          text={
            <H3>
              В моих городских снимках старинной архитектуры, черно-белая палитра
              становится хроникой времени.
              <br/><br/>
              Каждый уголок города пронизан историей,
              а черно-белые тона подчеркивают
              старину и красоту деталей.
              <br/><br/>
              Эти фотографии являются окном в прошлое,
              где городские стены рассказывают свои уникальные истории.
            </H3>
          }
          height={32.81}
        />
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