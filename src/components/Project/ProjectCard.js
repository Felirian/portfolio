import React, {useEffect, useRef, useState} from 'react';
import {Canvas} from "@react-three/fiber";
import {Model} from "../../assets/laptopModel/Laptop";
import styled from "styled-components";
const ProjectCard = ({name, title, info, stack, href, pos, img}) => {
  const [hover, setHover] = useState(false)
  const el = useRef();
  const [viewportPos, setViewportPos] = useState(0)

  // const getPos = () => {
  //   if (el.current) {
  //     setViewportPos(el.current.getBoundingClientRect())
  //     return (viewportPos.top - 170) / 100
  //   } else {
  //     return 0
  //   }
  // }
  //console.log(getPos());

  useEffect(() => {
    setViewportPos(el.current.getBoundingClientRect());

    document.addEventListener('scroll', ()=> {
      setViewportPos(el.current.getBoundingClientRect());
      //console.log();
    })
  }, []);

  return (
    <CardWrapper
      //onClick={()=> setHover(!hover)}
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
      style={{
        paddingLeft: pos === 'right' ? '8.36vw' : '0',
        paddingRight: pos === 'left' ? '8.36vw' : '0',
        flexDirection: pos === 'left' ? 'row' : 'row-reverse'
      }}

    >
      <Canvas
        style={{
          width: '32.58vw',
          height: '26.13vw',
          //background: "white"
        }}
        camera={{
          zoom: 1.5,
          filmOffset: 1,
          position: [0, 0, 0],
        }}
        ref={el}
      >
        <ambientLight/>
        <directionalLight intensity={5} position={[-0.2, 0.5, 0.8]}/>
        <Model hover={hover} pos={pos} viewport={viewportPos}/>
      </Canvas>
      <Text>
        <MainText>
          <h1>{name}</h1>
          <p>{title}</p>
        </MainText>
        <p>{info}</p>
        <StackTags>
          <h4>Stack технологий: </h4>
          {stack.map((el, i)=>(
            <h4 index={`tag_${i}`}>{el}</h4>
          ))}
        </StackTags>
      </Text>
    </CardWrapper>
  );
};

const CardWrapper = styled.div ` 
    display: flex;
    align-items: center;
    gap: 9.10vw;
`
const Text = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    max-width: 32.58vw;
`
const MainText = styled.div `
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
`
const StackTags = styled.div `
    display: flex;
    align-items: center;
    gap: 20px;
`

export default ProjectCard;