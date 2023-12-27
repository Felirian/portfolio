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

  useLayoutEffect(() => {


    gsap.registerPlugin(ScrollTrigger)
    const body = document.getElementsByTagName("body")
    const wrapper = document.getElementById('img_wrapper')
    const image = document.getElementsByClassName('image')
    const imageTrigger = {
      trigger: body,
      start: '0% 60%',
      end: '90% 40%',
      scrub: 3,
      markers: 1
    }
    gsap.to('.img_wrapper', {
      scrollTrigger: imageTrigger,
      ease: "power1.inOut",
      top: '-50%',
    })
  }, []);


  return (
    <div
      className={s.img_wrapper}
      id={'img_wrapper'}
      style={{
        width: `${width}vw`,
        height: `${height}vw`,
      }}
      onClick={() => {
        setHover(!hover)
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