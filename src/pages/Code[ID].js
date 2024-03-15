import React, {useContext, useEffect} from 'react';
import {HoverLink, Null} from "../app/styles";
import {CODE_PROJECTS_DATA} from "../entities/CODE_PROJECTS";
import styled from "styled-components";
import {redirect, useNavigation, useParams} from "react-router-dom";
import {BackGroundImageContext} from "../app/context";
import {COLORS} from "../shared/variables";
import {ExtraTitle, H1, H2, H3, T1} from "../app/TextTags";

const CodeId = ({currentProject}) => {
  const [image, setImage] = useContext(BackGroundImageContext)
  const nextProject = currentProject + 1 === CODE_PROJECTS_DATA.length ? 0 : currentProject + 1

  setImage(CODE_PROJECTS_DATA[nextProject].mainImg)


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

  return (
    <>
      <MainImage src={CODE_PROJECTS_DATA[currentProject].mainImg} alt={' '}/>
      <CodeWr>
        <ProjectInfo>
          <HoverLink>
            <a href={CODE_PROJECTS_DATA[currentProject].link} target={'_blank'}>
              <ExtraTitle>{CODE_PROJECTS_DATA[currentProject].name}</ExtraTitle>
            </a>
          </HoverLink>
          <T1>{CODE_PROJECTS_DATA[currentProject].info}</T1>
          <br/>
          <H2>{CODE_PROJECTS_DATA[currentProject].title}</H2>
          <Stack>
            <H1>Stack:</H1>
            {CODE_PROJECTS_DATA[currentProject].stack.map((tech, i) => (
              <H2 key={`tech_${tech}`}>{tech}</H2>
            ))}
          </Stack>
        </ProjectInfo>

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
`
const ProjectInfo = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.56vw;
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
const Stack = styled.div`
  display: flex;
`


export default CodeId;