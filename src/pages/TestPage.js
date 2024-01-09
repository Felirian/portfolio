import React from 'react';
import LaptopModel from "../components/Project/LaptopModel";
import Model from "../components/Project/LaptopModel";
import {Canvas} from "@react-three/fiber";
import {Model2} from "../components/Project/laptop/Laptop";

const TestPage = () => {
  return (
    <>
      <h1> test</h1>
      <Canvas
        style={{
          width: '50vw',
          height: '50vh'
      }}
        camera={{
          zoom: 1,
          filmOffset: 1,
          position: [0, 0, 0],

        }}
      >
        <ambientLight/>
        <directionalLight intensity={2} position={[-5, 15, 3]}/>
        <Model2/>

      </Canvas>

    </>
  );
};

export default TestPage;