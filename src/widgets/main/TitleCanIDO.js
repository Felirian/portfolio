import React, {useRef} from 'react';
import styled from "styled-components";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import {COLORS} from "../../shared/variables";

//https://trionn.com/
const TitleCanIdo = ({firstRow, secondRow}) => {
  const RowWrapper = useRef();
  const firstRowShadow = useRef();
  const secondRowShadow = useRef();

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    const triggerWr = {
      trigger: RowWrapper.current,
      //markers: true,
      start: 'top 90%',
      end: 'center 50%',
      ease: "power1.inOut",
      scrub: true,
    }
    gsap.from(firstRowShadow.current, {
      x: '100%',
      backgroundPositionX: '100%',
      scrollTrigger: triggerWr
    })
    gsap.from(secondRowShadow.current, {
      x: '100%',
      backgroundPositionX: '100%',
      scrollTrigger: triggerWr
    })
    //двадцатичетырехбуквенное двадцатиоднобуквенное
  }, []);

  return (
    <TitleWr ref={RowWrapper}>

      <Row ref={firstRowShadow}>{firstRow}</Row>

      <Row ref={secondRowShadow}>{secondRow}</Row>

    </TitleWr>
  );
};
const TitleWr = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;

  background-color: ${COLORS.color_5};
  width: fit-content;
`

const Row = styled.h2`
  font-family: Jost, sans-serif;
  font-size: 6vw;
  font-style: normal;
  font-weight: 800;
  line-height: 6vw; /* 114.286% */

  width: fit-content;
  color: black;

  background: -webkit-linear-gradient(45deg, ${COLORS.color_1} 60%, ${COLORS.color_3} 0);
  background-size: 200% 100%;
  background-position-x: 10%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;


`

export default TitleCanIdo;