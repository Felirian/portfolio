import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
const ImagePrlx = ({img, height}) => {
  const imgRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const imageTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: imgRef.current,
        //markers: true,
        start: 'top 100%',
        end: 'bottom 0%',
        scrub: true, // Enable scrubbing for a smoother effect
      },
    });

    imageTimeline.to(imgRef.current, {
      y: `-${height*0.2}vw`, // Adjust this value for the desired parallax effect
    });
  }, []);

  return (
    <ImgWrapper isHeight={`${height*0.8}vw`}>
      <Image ref={imgRef} src={img} isHeight={`${height}vw`}/>
    </ImgWrapper>
  );
};

const ImgWrapper = styled.div`
  width: auto;
  height: ${props => props.isHeight};
  overflow: hidden;
`

const Image = styled.img`
  display: block;
  width: 100%;
  height: ${props => props.isHeight};
  bottom: 0;
`



export default ImagePrlx;