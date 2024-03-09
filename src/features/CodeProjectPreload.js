import React, {useEffect} from 'react';
import {Null} from "../app/styles";
import {CODE_PROJECTS_DATA} from "../entities/CODE_PROJECTS";
import styled from "styled-components";

const CodeProjectPreload = ({preloadImg}) => {

  return (
    <>
      <h1>Loading</h1>
      <PreLoadImage src={CODE_PROJECTS_DATA[preloadImg].mainImg} alt={' '}/>
    </>

  );
};

const PreLoadImage = styled.img`
  width: 100%;
  height: auto;
`

export default CodeProjectPreload;