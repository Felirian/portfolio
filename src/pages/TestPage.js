import React, {useEffect} from 'react';
import s from '../styles/pages/main.module.scss'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {colors} from "../assets/colors";

const TestPage = () => {

  useEffect(() => {

  const wrapper = document.getElementsByClassName(s.wrapper)

  gsap.registerPlugin(ScrollTrigger)

  const gt = gsap.timeline({
    scrollTrigger: {
      trigger : wrapper[1],
      start: 'top 70%',
      end: '10% 70%',
      scrub: 1,
      markers: 1
    }
  })

  for (let i=0; i < wrapper.length; i++) {
    const wrapperTrigger = {
      trigger : wrapper[i],
      start: 'top 70%',
      end: '10% 70%',
      scrub: 1,
      markers: 1
    }

    gsap.from(wrapper[i], {
      scrollTrigger: wrapperTrigger,
      ease: 1,
      width: '50%',
    })
  }
  const scrollPosition = () => window.pageYOffset;

  const canvas = document.getElementsByTagName('canvas')[0]
  const ctx = canvas.getContext("2d");
  const image = new Image(1920, 1080)
  image.onload = drawImageActualSize;
  document.addEventListener('scroll', e => {
    console.log(gt)

    if (Math.round(scrollPosition() / 50) > 119) {
      canvas.style.opacity = '0';
    } else {
      canvas.style.opacity = '1';
      image.src = colors[Math.round(scrollPosition() / 50)]
    }
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
        <canvas width={'100%'} height={'100vh'} id={'#v0'}></canvas>
      </div>


      <div className={s.null} style={{marginTop: '50vh'}}>
        <h1>1 Main</h1>
      </div>

      <div className={s.wrapper} id={'cont1'}>

      </div>

      <div className={s.null}>
        <h1>2 Main</h1>
        <canvas width={'100%'} height={'100vh'} id={'#v2'}></canvas>
      </div>

      <div className={s.wrapper} id={'cont2'}>

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

export default TestPage;