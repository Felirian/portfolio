import React, {useRef} from 'react';
import {T1} from "../../app/TextTags";
import styled from "styled-components";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import {COLORS} from "../../shared/variables";

const TextCanIDo = ({row1, row2, row3, row4}) => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const RowWrapper = useRef();
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    const triggerWr = gsap.timeline({
      scrollTrigger: {
        trigger: RowWrapper.current,
        //markers: true,
        start: 'center 100%',
        end: 'center 50%',
        ease: "power1.inOut",
        scrub: 1,
      }

    })
    triggerWr
      .from(ref1.current, {
        opacity: 0,
        x: '-10%'
      })
      .from(ref2.current, {
        opacity: 0,
        x: '-10%'
      })
      .from(ref3.current, {
        opacity: 0,
        x: '-10%'
      })
      .from(ref4.current, {
        opacity: 0,
        x: '-10%'
      })

  }, []);

  return (
    <TextWrapper ref={RowWrapper}>
      <T1 ref={ref1}>{row1}</T1>
      <T1 ref={ref2}>{row2}</T1>
      <T1 ref={ref3}>{row3}</T1>
      <T1 ref={ref4}>{row4}</T1>
    </TextWrapper>
  );
};

const TextWrapper = styled.div`
  width: 100%;
  padding: 15vw 0;
  display: flex;
  flex-direction: column;
  align-items: end;

  ${T1} {
    width: fit-content;
    
    
    background: -webkit-linear-gradient(90deg, ${COLORS.color_1} 100%, ${COLORS.color_3} 0);
    background-size: 100% 100%;
    background-position-x: 50%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export default TextCanIDo;