import React, {useEffect} from 'react';
import s from '../styles/pages/main.module.scss'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {colors} from "../assets/colors";

const Main = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    // const wrapperTrigger = ScrollTrigger.create ({
    //   trigger : 'button',
    //   start: 'top 30%',
    //   end: 'center 90%',
    //   scrub: true,
    //   markers: true
    // })

    gsap.from('.wrapper', {
      scrollTrigger: {
        trigger : '.wrapper',
        start: 'top 70%',
        end: '10% 70%',
        scrub: 1,
        markers: 1
      },
      width: '80%',

    })
    const scrollPosition = () => window.pageYOffset;

    const canvas = document.getElementsByTagName('canvas')[0]
    const ctx = canvas.getContext("2d");
    const image = new Image(1920, 1080)
    image.onload = drawImageActualSize;
    document.addEventListener('scroll', e => {
      console.log(colors)
      image.src = colors[Math.round(scrollPosition() / 100)]
    })

    function drawImageActualSize() {
      console.log('load')
      canvas.width = this.naturalWidth
      canvas.height = this.naturalHeight;
      ctx.drawImage(this, 0, 0);
    }

  }, []);
  return (
    <div className={s.main}>
      <div className={s.null}>
        <canvas width={'100%'} height={'100vh'} id={'v0'}></canvas>
      </div>


      <div className={s.null} style={{marginTop: '50vh', color: "black"}}>
        <h1>1 Main</h1>
      </div>

      <div className={s.wrapper}>

      </div>

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