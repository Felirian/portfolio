import React, {useRef} from 'react';
import {CODE_PROJECTS_DATA} from "../entities/CODE_PROJECTS";
import {NavLink} from "react-router-dom";
import {ExtraTitle, H3, T1, Title} from "../app/TextTags";
import styled from "styled-components";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import {Block, HoverLink} from "../app/styles";
import {COLORS} from "../shared/variables";

const CodeProjects = () => {
  gsap.registerPlugin(ScrollTrigger)

  const projRef = useRef([]);
  const projTextRef = useRef([]);

  useGSAP(() => {
    projRef.current.forEach((link, index) => {
      const fromTl = gsap.timeline({
        scrollTrigger: {
          trigger: link,
          //markers: true,
          start: 'center 95%',
          end: 'center 55%',
          ease: "power1.inOut",
          scrub: true,
          //pin: true
        },
      });
      const toTl = gsap.timeline({
        scrollTrigger: {
          trigger: link,
          //markers: true,
          start: 'center 45%',
          end: 'center 5%',
          ease: "power1.inOut",
          scrub: true,
          //pin: true
        },
      });
      fromTl.from(link, {
        rotateX: '-90deg',
        //scale: 0.4
        translateZ: '-20vw',
        opacity: 0,
        //translateY: '-5vw'
      })
      toTl.to(link, {
        rotateX: '90deg',
        //scale: 0.4
        translateZ: '-20vw',
        opacity: 0,
        //translateY: '5vw'
      })
    });
  }, []);

  return (
    <ProjectWr>

      {CODE_PROJECTS_DATA.map((project, index) => (

        <LinkWr
          key={`project_${index}`}
          ref={(el) => (projRef.current[index] = el)}
          id={project.slug}
        >
          <NavLink to={`/projects/code/${project.slug}`}>
            <HoverLink>
              <ExtraTitle
                ref={(el) => (projTextRef.current[index] = el)}
              >{project.name}</ExtraTitle>
            </HoverLink>
            <T1>{project.info}</T1>
          </NavLink>
        </LinkWr>

      ))}
    </ProjectWr>
  );
};

const ProjectWr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${CODE_PROJECTS_DATA.length * 50}vh;
  width: 100%;  
  margin: 15vw 0;
  p {
    padding-top: 0.5vw;
    color: ${COLORS.color_2}
  }
`

const LinkWr = styled.section`
  width: 100%;
  height: 50vh;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  //background-color: gray;
  
  transform:  perspective(1000px);
  scroll-snap-align: center;
`

export default CodeProjects;