import React, {useEffect} from 'react';
import {Null} from "../app/styles";
import {CODE_PROJECTS_DATA} from "../entities/CODE_PROJECTS";
import styled from "styled-components";
import {redirect, useNavigation, useParams} from "react-router-dom";

const CodeId = ({currentProject}) => {
  const nextProject = currentProject +1 === CODE_PROJECTS_DATA.length ? 0 : currentProject  + 1
  // console.log(CODE_PROJECTS_DATA.length);
  // console.log(nextProject);

  //currentProject === CODE_PROJECTS_DATA.length ? 0 : currentProject + 1

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
      <h1>{CODE_PROJECTS_DATA[currentProject].name}</h1>
      {/*<MainImage src={CODE_PROJECTS_DATA[currentProject].mainImg} alt={' '} onLoad={console.log('ready')}/>*/}
      <Null/>

      <Null/>
      {/*<MainImage src={CODE_PROJECTS_DATA[nextProject].mainImg} alt={' '}/>*/}
    </>
  );
};

const MainImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: top;
`

export default CodeId;