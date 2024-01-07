import React, {Suspense, useContext, useEffect, useLayoutEffect, useState} from 'react';
import {MagicCursorHover, MagicCursorInfo} from "../context";
import s from './photoCard.module.scss'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import PagePreloader from "../PageProloader/PagePreloader";
import { useGSAP } from "@gsap/react";


const PhotoCard = ({image, imageInfo, width, height}) => {
  const [imageLoad, setImageLoad] = useState(false)

  const [info, setInfo] = useContext(MagicCursorInfo)
  const [hover, setHover] = useContext(MagicCursorHover)

  return (
    <div
      className={s.img_wrapper}
      id={'img_wrapper'}
      style={{
        width: `${width}vw`,
        height: `${height}vw`,
      }}
      onMouseEnter={() => {
        setHover(true)
        setInfo('')
      }}
      // onMouseLeave={() => {
      //   setHover(false)
      //   setInfo('')
      // }}
      onClick={() => {
        setInfo(imageInfo)
      }}
      onMouseLeave={() => setHover(false)}
    >

      <Suspense
        fallback={<h1>loading...</h1>}
      >
        <img
          src={image}
          alt={'f'}
          id={'image'}
          className={s.img_wrapper_img}
          onLoad={()=> setImageLoad(true)}
        />
      </Suspense>
    </div>
  );
};

export default PhotoCard;