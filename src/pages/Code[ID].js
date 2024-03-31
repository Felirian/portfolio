import React, {useContext, useEffect, useRef} from 'react';
import {HoverLink} from "../app/styles";
import {CODE_PROJECTS_DATA} from "../entities/CODE_PROJECTS";
import styled from "styled-components";
import {BackGroundImageContext} from "../app/context";
import {COLORS} from "../shared/variables";
import {ExtraTitle, H2, H3, T1} from "../app/TextTags";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
const CodeId = ({currentProject}) => {
  const [image, setImage] = useContext(BackGroundImageContext)
  const nextProject = currentProject + 1 === CODE_PROJECTS_DATA.length ? 0 : currentProject + 1
  const tagsRef = useRef([]);
  setImage(CODE_PROJECTS_DATA[nextProject].mainImg)

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const checkScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        document.location.href = `/projects/code/${CODE_PROJECTS_DATA[nextProject].slug}`
      }
    };

    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  useGSAP(() => {
    tagsRef.current.forEach((tags, index) => {
      const fromTl = gsap.timeline({
        scrollTrigger: {
          trigger: tags,
          //markers: true,
          start: `center ${100 - index*10}%`,
          end: `center ${90 - index*10}%`,
          ease: "power1.inOut",
          scrub: 1,
        },
      });
      fromTl.from(tags, {
        direction: 2,
        y: '200%',
        opacity: 0
      });
    });

  }, []);




  return (
    <>
      <MainImage src={CODE_PROJECTS_DATA[currentProject].mainImg} alt={' '}/>
      <CodeWr>
        <ProjectInfo>
          <HoverLink>
            <a href={CODE_PROJECTS_DATA[currentProject].link} target={'_blank'}>
              <ExtraTitle >{CODE_PROJECTS_DATA[currentProject].name}</ExtraTitle>
            </a>
          </HoverLink>
          <T1>{CODE_PROJECTS_DATA[currentProject].info}</T1>
          <br/>
        </ProjectInfo>

        <Stack>
          <H2>Stack:</H2>
          {CODE_PROJECTS_DATA[currentProject].stack.map((tech, i) => (
            <H2
              key={`tech_${tech}`}
              ref={(el) => (tagsRef.current[i] = el)}
            > {tech}</H2>
          ))}
        </Stack>

        <Blocks>
          {CODE_PROJECTS_DATA[currentProject].text.map((block, index)=>(
            <H3
              key={`block_text_${index}`}
              style={{
                marginLeft: index % 2 === 0 ? 0 : 'auto'
              }}
            >{block}</H3>
          ))}
        </Blocks>




        <img src={CODE_PROJECTS_DATA[currentProject].mockup} alt={' '}/>
      </CodeWr>

      <MainImage src={CODE_PROJECTS_DATA[nextProject].mainImg} alt={' '}/>
    </>
  );
};
const MainImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: top;
`
const CodeWr = styled.div`
  background-color: ${COLORS.color_5};
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 100%;
`
const ProjectInfo = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1vw;
  width: 90%;
  margin-top: 3vw;
  a {
    display: block;
    width: fit-content;
  }
  h1 {
    width: fit-content;
    &:after {
      content: '🡵';
      font-size: 2.4vw;
      font-weight: 300; 
      //line-height: 54px;
      margin-left: 0.5vw;
    }
  }
  p {
    
    color: ${COLORS.color_2}
  }
`
const Blocks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10vw;
  width: 90%;
  h4 {
    max-width: 50%;
  }
`
const Stack = styled.div`
  display: flex;
  align-items: end;
  justify-content: right;
  width: 90%;
  margin: 10vw 0;
  
`


export default CodeId;