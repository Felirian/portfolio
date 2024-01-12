import React, {useEffect, useRef, useState} from 'react';
import {Canvas} from "@react-three/fiber";
import {Model} from "../../assets/laptopModel/Laptop";
import styled from "styled-components";

const ProjectCard = ({name, title, info, stack, href, pos, img}) => {
  const [hover, setHover] = useState(false)
  const ProjectCardRef = useRef();

  return (
    <CardWrapper
      //onClick={()=> console.log(viewportPos)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        paddingLeft: pos === 'right' ? '8.36vw' : '0',
        paddingRight: pos === 'left' ? '8.36vw' : '0',
        flexDirection: pos === 'left' ? 'row' : 'row-reverse'
      }}
      ref={ProjectCardRef}
    >
      <Model
        hover={hover}
        pos={pos}
      />
      <Text>
        <MainText>
          <h1>{name}</h1>
          <p>{title}</p>
        </MainText>
        <p>{info}</p>
        <StackTags>
          <h4>Stack технологий: </h4>
          {stack.map((el, i) => (
            <h4 key={`tag_${i}`}>{el}</h4>
          ))}
        </StackTags>
      </Text>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 9.10vw;
`
const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    max-width: 32.58vw;
`
const MainText = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
`
const StackTags = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export default ProjectCard;