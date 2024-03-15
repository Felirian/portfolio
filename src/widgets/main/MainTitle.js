import React, {useEffect} from 'react';
import inscriptionIMG from '../../assets/main/inscription.png'
import styled from "styled-components";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {COLORS} from "../../shared/variables";

const MainTitle = () => {
  gsap.registerPlugin(ScrollTrigger)


  useEffect(() => {
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
    <Inscription  id={'inscription'}>
      <h1 id={'inscription_text'}>PORTFOLIO</h1>
      <img src={inscriptionIMG} alt={''} id={'inscription_img'}/>
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
    font-family: Jost;
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