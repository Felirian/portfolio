import React, {useRef} from 'react';
import inscriptionIMG from '../../assets/main/inscription.png'
import styled from "styled-components";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {COLORS} from "../../shared/variables";
import {useGSAP} from "@gsap/react";

const MainTitle = () => {
  const inscription= useRef();
  const inscription_text= useRef();
  const inscription_img= useRef();
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    const inscriptionTrigger = {
      trigger: inscription.current,
      start: '10% 0%',
      end: '70% 0%',
      scrub: 3,
      markers: 0
    }

    gsap.to(inscription_text.current, {
      scrollTrigger: inscriptionTrigger,
      ease: "power1.inOut",
      left: '100vw',
      opacity: 0,
      //filter: 'blur(50px)',
    })
    gsap.to(inscription_img.current, {
      scrollTrigger: inscriptionTrigger,
      ease: "power1.inOut",
      right: '-40%',
      filter: 'blur(50px)',
    })
  }, []);
  return (
    <Inscription  ref={inscription} id={'main'}>
      <h1 ref={inscription_text}>PORTFOLIO</h1>
      <img src={inscriptionIMG} alt={''} ref={inscription_img}/>
    </Inscription>
  );
};

const Inscription = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  scroll-snap-align: start;
  h1 {
    position: fixed;
    display: block;
    left: 0;
    bottom: 30%;
    color: ${COLORS.color_1};
    text-align: right;
    font-family: Jost, sans-serif;
    font-size: 17vw;
    font-style: normal;
    font-weight: 300;
    line-height: 120%; /* 442.8px */
    z-index: -1;
  }
  img {
    width: auto;
    height: 100vh;

    position: fixed;
    display: block;
    right: 0;
    z-index: 2;
  }
`

export default MainTitle;