import React, {useState} from 'react';
import {Canvas} from "@react-three/fiber";
import {Model} from "../../assets/laptopModel/Laptop";

const ProjectCard = () => {
  const [hover, setHover] = useState(false)
  return (
    <div
      //onClick={()=> setHover(!hover)}
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
    >
      <Canvas
        style={{
          width: '32.58vw',
          height: '26.13vw',
          //background: "white"
        }}
        camera={{
          zoom: 2,
          filmOffset: 1,
          position: [0, 0, 0],
        }}
      >
        <ambientLight/>
        <directionalLight intensity={5} position={[-0.2, 0.5, 0.8]}/>
        <Model hover={hover}/>
      </Canvas>
    </div>
  );
};

export default ProjectCard;