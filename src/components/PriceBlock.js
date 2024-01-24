import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import {ExtraTitle, H2, H3, Title, TitleBold} from "../styles/GlobalStyles";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {COLORS} from "../shared/variables";
const PriceBlock = ({num, name, price, tags, img}) => {
  const BlockRef = useRef(null)
  const TextRef = useRef(null)
  const ImgRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger);


  useEffect(() => {
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: BlockRef.current,
    //     markers: false,
    //     start: "20% 10%",
    //     end: "60% 10%",
    //     scrub: 1,
    //
    //   },
    // });
    //
    // tl.to(TextRef.current, {x: "-100%", opacity: 0, duration: 1});
    // tl.to(ImgRef.current, {x: "100%", opacity: 0, duration: 1}, "-=1");

    const tm = gsap.timeline({
      scrollTrigger: {
        trigger: BlockRef.current,
        markers: true,
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
        //pin: true
      },
    });

    tm.from(TextRef.current, {x: "-100%", opacity: 0, duration: 1});
    tm.from(ImgRef.current, {x: "100%", opacity: 0, duration: 1}, "-=1");

  }, []);

  return (
    <BlockWrapper ref={BlockRef}>
      <TextWrapper ref={TextRef}>
        <Fade>
          <ExtraTitle >{num}</ExtraTitle>
        </Fade>
        <Info>
          <Title>{name}</Title>
          <PriceWrap>
            <TitleBold>{price}</TitleBold>
            <H2>р / час</H2>
          </PriceWrap>
          <H3>
            {tags.map((el, i)=>(
              <>
                {el}<br/><br/>
              </>
            ))}
          </H3>
        </Info>
      </TextWrapper>
      <Image ref={ImgRef} src={img} alt={' '}/>
    </BlockWrapper>
  );
};

const BlockWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  
  position: sticky;
  top: 0;
`
const TextWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${COLORS.color_5};
  //border: 1px pink solid;
`
const Fade=styled.div`
  position: absolute;
  left: -8vw;
  background: linear-gradient(90deg, #0D0D0D 7.2%, rgba(13, 13, 13, 0.00) 95.96%);
`
const Info = styled.div`
  position: absolute;
  left: 1.95vw;
  top: 22.27vw;
  max-width: 26.56vw;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 3.13vw;
`
const PriceWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 0.59vw;
  align-self: stretch;
`

const Image = styled.img`
  //position: absolute;
  right: 0;
  height: 100vh;
  width: auto;
`


export default PriceBlock;