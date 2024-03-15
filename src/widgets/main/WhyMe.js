import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

const WhyMe = () => {
  gsap.registerPlugin(ScrollTrigger)
  const tl = gsap.timeline({

  })
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
          scrub: true,
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
        <h2 className={'fromLeft'} ref={(el) => (fromLeft.current[0] = el)}>Hard skills</h2>
        <p ref={(el) => (fromLeft.current[1] = el)}>JavaScript</p>
        <p ref={(el) => (fromLeft.current[2] = el)}>C#</p>
        <p ref={(el) => (fromLeft.current[3] = el)}>Database</p>
      </Skills>
      <StickyWr>
        <h1>Why me?</h1>
      </StickyWr>
      <Skills algin={'start'}>
        <h2 ref={(el) => (fromLeft.current[4] = el)}>Soft skill</h2>
        <p ref={(el) => (fromLeft.current[5] = el)}>Time management</p>
        <p ref={(el) => (fromLeft.current[6] = el)}>Continuous improvement</p>
        <p ref={(el) => (fromLeft.current[7] = el)}>Problem solving</p>
      </Skills>
    </WhyMeWr>
  );
};


const WhyMeWr = styled.div`
  display: flex;
  gap: 0.78vw;
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