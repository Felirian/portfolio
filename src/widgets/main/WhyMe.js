import React, {useRef} from 'react';
import styled from "styled-components";
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import {H1, T1, Title} from "../../app/TextTags";

const WhyMe = () => {
  gsap.registerPlugin(ScrollTrigger)
  const fromLeft = useRef([]);

  useGSAP(() => {

    fromLeft.current.forEach((element, index) => {
      const fromTl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          //markers: true,
          start: 'center 90%',
          end: 'center 60%',
          ease: "power2.in",
          scrub: true,
        },
      });
      fromTl.from(element, {
        x: index < 4 ? -100 : 100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
      });
      const toTl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          //markers: true,
          start: 'center 30%',
          end: 'center 10%',
          ease: "power2.in",
          //markers: true,
          scrub: 1,
        },
      });
      toTl.to(element, {
        y: -200,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
      });
    });
  }, []);

  return (
    <WhyMeWr>
      <Skills algin={'end'}>
        <H1 className={'fromLeft'} ref={(el) => (fromLeft.current[0] = el)}>Hard skills</H1>
        <T1 ref={(el) => (fromLeft.current[1] = el)}>JavaScript</T1>
        <T1 ref={(el) => (fromLeft.current[2] = el)}>C#</T1>
        <T1 ref={(el) => (fromLeft.current[3] = el)}>Database</T1>
      </Skills>
      <StickyWr>
        <Title>Ключевые навыки</Title>
      </StickyWr>
      <Skills algin={'start'}>
        <H1 ref={(el) => (fromLeft.current[4] = el)}>Soft skill</H1>
        <T1 ref={(el) => (fromLeft.current[5] = el)}>Time management</T1>
        <T1 ref={(el) => (fromLeft.current[6] = el)}>Continuous improvement</T1>
        <T1 ref={(el) => (fromLeft.current[7] = el)}>Problem solving</T1>
      </Skills>
    </WhyMeWr>
  );
};

const WhyMeWr = styled.div`
  display: flex;
  gap: 3vw;
  top: 0;
  position: relative;
  height: 100vh;

`
const StickyWr = styled.div`
  position: sticky;
  padding-top: 50vh;
  top: 0;
  left: 0;
  width: fit-content;
  height: fit-content;
  text-align: center;
`
const Skills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.56vw;
  align-items: ${(props) => props.algin};
  justify-content: end;
  width: 100%;
  height: 100%;
`

export default WhyMe;