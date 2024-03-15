import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import ImagePrlx from "./ImagePrlx";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
const Sticky = ({pos, img, text, height}) => {
  gsap.registerPlugin(ScrollTrigger);

  const textRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%', // Adjust the start position as needed
        end: 'bottom top',
        toggleActions: 'play none none reverse',
      },
      onComplete: () => {
        // Optionally, you can trigger a typewriter effect here
        // Example of a typewriter effect:
        gsap.to(textRef.current, {
          text: { value: text, delimiter: '' },
          duration: 1,
        });
      },
    });
  }, [text]);
  return (
    <StickyWrapper
      style={{
        flexDirection: pos === 'left' ? 'row' : 'row-reverse',
        height: `${height}vw`
      }}
      //data-aos={pos === 'left' ? "fade-right":"fade-left"}
    >
      <ImagePrlx
        img={img}
        height={height}
        //data-aos={pos === 'left' ? "fade-right" : "fade-left"}
      />
      <Text
        ref={textRef}
      >
        {text}
      </Text>
    </StickyWrapper>
  );
};

const StickyWrapper = styled.div`
  width: 100%;

  position: relative;
  top: 0;
  gap: 8px;
  display: flex;
`
const Text = styled.div`
  display: flex;
  padding: 30px 0;

  width: 100%;
  height: fit-content;


  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;

  top: 30vh;
  position: sticky;
  :first-child {
    max-width: 32.58vw;
  }
`
const Image = styled.img`
  width: auto;
`

export default Sticky;