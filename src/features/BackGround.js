import React, {useContext} from 'react';
import styled from "styled-components";
import {BackGroundImageContext} from "../app/context";

const BackGround = ({children}) => {

  const [image, setImage] = useContext(BackGroundImageContext)


  return (
    <BackGroundWrapper>
      {image && <BackGroundImage src={image}/>}

      { children }
    </BackGroundWrapper>
  );
};

const BackGroundWrapper = styled.div`
  position: relative;
  
`
const BackGroundImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  //object-position: top;
  position: fixed;
  top: 0;
  z-index: -100;
`

export default BackGround;