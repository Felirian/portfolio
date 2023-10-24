import React, {useLayoutEffect} from 'react';
import s from './main.module.scss'
import inscriptionIMG from '../../assets/main/inscription.png'
import {gsap} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Link} from "react-router-dom";

const Main = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const TAB_LINE = document.getElementsByClassName(s.line)

    const tabsTrigger = {
      trigger: '#tabs',
      start: '0% 100%',
      end: '90% 100%',
      scrub: 3,
      markers: 1
    }

    for (let i = 0; i < TAB_LINE.length; i++) {
      gsap.from(TAB_LINE[i], {
        scrollTrigger: {
          trigger: '#tabs',
          start: '10% 100%',
          end: '90% 100%',
          scrub: i,
          markers: 1
        },
        ease: "power1.inOut",
        height: 0,
        opacity: 0,

        //filter: 'blur(50px)',
      })
    }

    const inscriptionTrigger = {
      trigger: '#inscription',
      start: '10% 0%',
      end: '70% 0%',
      scrub: 3,
      markers: 0
    }

    gsap.to('#inscription_text', {
      scrollTrigger: inscriptionTrigger,
      ease: "power1.inOut",
      left: '100vw',
      opacity: 0,
      //filter: 'blur(50px)',
    })
    gsap.to('#inscription_img', {
      scrollTrigger: inscriptionTrigger,
      ease: "power1.inOut",
      right: '-40%',
      filter: 'blur(50px)',
    })

  }, []);

  return (
    <div className={s.main} id={'main'}>
      <div className={s.inscription} id={'inscription'}>
        <h1 id={'inscription_text'}>PORTFOLIO</h1>
        <img src={inscriptionIMG} alt={'image'} id={'inscription_img'}/>
      </div>
      <div className={s.tabs} id={'tabs'}>
        <Link to={'/test'} className={s.tab}>
          <h3>coding</h3>
        </Link>
        <div className={s.line}/>
        <Link className={s.tab}>
          <h3>photo</h3>
        </Link>
        <div className={s.line}/>
        <Link className={s.tab}>
          <h3>ux / ui</h3>
        </Link>
        <div className={s.line}/>
        <Link className={s.tab}>
          <h3>modeling</h3>
        </Link>
      </div>
    </div>
  );
};

export default Main;