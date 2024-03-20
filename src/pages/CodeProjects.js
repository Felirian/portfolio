import React, {useRef} from 'react';
import {CODE_PROJECTS_DATA} from "../entities/CODE_PROJECTS";
import {NavLink} from "react-router-dom";
import {ExtraTitle, H3, Title} from "../app/TextTags";
import styled from "styled-components";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

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
          start: 'center 100%',
          end: 'center 50%',
          ease: "power1.inOut",
          scrub: true,
          //pin: true
        },
      });
      fromTl.from(link, {
        //direction: 2,
        rotateX: '90deg',
        // x: '100%',
        // opacity: 0
      });

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
            <ExtraTitle
              ref={(el) => (projTextRef.current[index] = el)}
            >{project.name}</ExtraTitle>
          </NavLink>
        </LinkWr>

      ))}
    </ProjectWr>
  );
};

const ProjectWr = styled.div`
  display: flex;
  flex-direction: column;
  height: ${CODE_PROJECTS_DATA.length * 100}vh;
`

const LinkWr = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translate3d(10px,2px,3px) perspective(300px);
`

export default CodeProjects;