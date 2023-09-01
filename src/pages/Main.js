import React, {useEffect} from 'react';
import s from '../styles/pages/main.module.scss'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import img_1 from '../assets/img_1.jpg'

const Main = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to('#logo', {
      scrollTrigger: {
        trigger: '#logo',
        start: "center 40%",
        end:"bottom 60%",
        markers:true,
        scrub: true
      },
      height: 60,
      ease: true
    })
    gsap.to('#logo_title', {
      scrollTrigger: {
        trigger: '#logo',
        start: "center 40%",
        end:"bottom 60%",
        markers:true,
        scrub: true
      },
      fontSize: "50px",
      fontWeight: 300,
      ease: true
    })
    // gsap.to("#image_wrapper", {
    //   scrollTrigger: {
    //     trigger: "#image_wrapper",
    //     scrub: true,
    //     pin: true,
    //     start: "center center",
    //     end: "bottom -100%",
    //     toggleClass: "active",
    //     ease: "power2"
    //   }
    // });
    //
    // gsap.to("#image", {
    //   scrollTrigger: {
    //     trigger: "#image_wrapper",
    //     scrub: 0.5,
    //     start: "top bottom",
    //     end: "bottom -300%",
    //     ease: "power2"
    //   },
    //   y: "-30%"
    // });

  }, []);
  return (
    <div className={s.main}>
      <div className={s.logo} id={'logo'}>
        <h1 className={s.logo_title} id={'logo_title'}>FELiRiAN</h1>
      </div>

      <div className={s.null} style={{marginTop: '50vh', backgroundColor: "red"}}>
        <h1>1 Main</h1>
      </div>

      {/*<div className={s.null}>*/}
      {/*  <div id={'image_wrapper'} className={s.image_wrapper}>*/}
      {/*    <img id={'image'} src={img_1} alt={'none'}/>*/}
      {/*    <h1>hoko</h1>*/}
      {/*  </div>*/}
      {/*</div>*/}


      <div className={s.null}>
        <h1>2 Main</h1>
      </div>

      <div className={s.null}>
        <h1>3 Main</h1>
      </div>

      <div className={s.null}>
        <h1>4 Main</h1>
      </div>
      <div className={s.null}>
        <h1>5 Main</h1>
      </div>

      <div id={'scrollElement'}/>
    </div>
  );
};

export default Main;