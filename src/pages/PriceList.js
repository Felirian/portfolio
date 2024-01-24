import React from 'react';
import styled from "styled-components";
import PriceBlock from "../components/PriceBlock";
import img1 from '../assets/PriceList/1.jpg'
import img2 from '../assets/PriceList/2.jpg'
import img3 from '../assets/PriceList/3.jpg'


const PHOTO_PRICE = [
  {
    name: 'Уличная фотосъёмка',
    price: '4 500',
    tags: [
      '— ретушь 5 фото',
      '— количество людей - до 2х',
      '— продумывание идеи, одежды, мейкапа',
      '— дополнительный час съемки  + 1500',
    ],
    img: img1
  },
  {
    name: 'Уличная фотосъёмка',
    price: '4 500',
    tags: [
      '— ретушь 5 фото',
      '— количество людей - до 2х',
      '— продумывание идеи, одежды, мейкапа',
      '— дополнительный час съемки  + 1500',
    ],
    img: img2
  },
  {
    name: 'Уличная фотосъёмка',
    price: '4 500',
    tags: [
      '— ретушь 5 фото',
      '— количество людей - до 2х',
      '— продумывание идеи, одежды, мейкапа',
      '— дополнительный час съемки  + 1500',
    ],
    img: img3
  },
]

const PriceList = () => {
  return (
    <PriceListWrapper id={'first'}>
      {PHOTO_PRICE.map((el,i)=> (
        <PriceBlock
          key={`price_${i}`}
          num={`0${i+1}`}
          name={el.name}
          price={el.price}
          tags={el.tags}
          img={el.img}
        />
      ))}
    </PriceListWrapper>
  );
};

const PriceListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  
  top: 0;
  height: 300vh;
`


export default PriceList;