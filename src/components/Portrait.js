import React, {useEffect, useLayoutEffect, useState} from 'react';
import s from "../styles/components/portrait.module.scss"
import '../styles/components/photosID.scss'
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {portrait} from "../assets/photos";



const Portrait = () => {


  const [loading, setLoading] = useState(true)
  gsap.registerPlugin(ScrollTrigger)

  window.onload = function () {
    console.log('end load')
  }
  useLayoutEffect(() => {

    const case2_mainImg = document.getElementById('case2_mainImg')
    const case2_mainImg_scroll = {
      trigger: case2_mainImg,
      start: 'top top',
      end: '200% top',
      scrub: 1,
      markers: 1
    }
    const case2_mainImg_blur = {
      trigger: case2_mainImg,
      start: '180% 70%',
      end: '250% 70%',
      scrub: 1,
      markers: 1
    }
    gsap.to(case2_mainImg, {
      scrollTrigger: case2_mainImg_scroll,
      y: -100,
      ease: 1
    })
    gsap.to(case2_mainImg, {
      scrollTrigger: case2_mainImg_blur,
      opacity: 0,
      filter: 'blur(100px)',
      ease: 0
    })
  }, []);

  return (
    <div className={s.photos}>
      <div className={s.photos_portrait}>
        <div className={s.null}/>

        <div className={s.photos_portrait_container} id={'case2'}>
          <img
            src={portrait[1].case2[0]}
            id={'case2_mainImg'}
            onLoad={() => (setLoading(true))}
          />

          <div className={s.photos_portrait_container_row}>
            <div className={s.image}><img src={portrait[1].case2[1]}/></div>
            <div className={s.image}><img src={portrait[1].case2[2]}/></div>
          </div>
          <div/>
        </div>

        <div className={s.null}/>
      </div>
    </div>
  );
};

export default Portrait;