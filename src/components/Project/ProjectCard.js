import React from 'react';
import {Canvas} from "@react-three/fiber";
import {Model} from "../../assets/laptopModel/Laptop";

const ProjectCard = () => {
  return (
    <div>
      <Canvas
        style={{
          width: '50vw',
          height: '50vh',
          //background: "white"
        }}
        camera={{
          zoom: 2.5,
          filmOffset: 1,
          position: [0, 0, 0],
        }}
      >
        <ambientLight/>
        <directionalLight intensity={5} position={[-0.2, 0.5, 0.8]}/>
        <Model/>
      </Canvas>
    </div>
  );
};

export default ProjectCard;