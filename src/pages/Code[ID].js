import React, {useContext, useEffect} from 'react';
import {Null} from "../app/styles";
import {CODE_PROJECTS_DATA} from "../entities/CODE_PROJECTS";
import styled from "styled-components";
import {redirect, useNavigation, useParams} from "react-router-dom";
import {BackGroundImageContext} from "../app/context";
import {COLORS} from "../shared/variables";

const CodeId = ({currentProject}) => {
  const [image, setImage] = useContext(BackGroundImageContext)
  const nextProject = currentProject +1 === CODE_PROJECTS_DATA.length ? 0 : currentProject  + 1

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

  useEffect(() => {


      console.log(document.readyState)


    // document.addEventListener('DOMContentLoaded', ready)
    // return () => {
    //   document.addEventListener('DOMContentLoaded', ready)
    // }
  }, []);

  return (
    <>
      <MainImage src={CODE_PROJECTS_DATA[currentProject].mainImg} alt={' '} />
      <CodeWr>
        <h1>{CODE_PROJECTS_DATA[currentProject].name}</h1>
        <Null/>

        <Null/>
      </CodeWr>

      <MainImage src={CODE_PROJECTS_DATA[nextProject].mainImg} alt={' '}/>
    </>
  );
};
const CodeWr = styled.div`
  background-color: ${COLORS.color_5};
`
const MainImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: top;
`

export default CodeId;