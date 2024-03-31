import React, {useRef} from 'react';
import {Canvas} from '@react-three/fiber';
import fbxModel from '../../assets/models/man.fbx'
import {PerspectiveCamera, useFBX} from "@react-three/drei";

const FBXMan = () => {
  const group = useRef();

  // Загрузка модели FBX
  const fbxLoad = useFBX(fbxModel)
  console.log(fbxLoad)

  return (
    <Canvas
      style={{
        width: '100%',
        height: '100vh',
        //backgroundColor: 'red',
        position: "absolute",
        left: 0,
        top: 0
      }}
    >
      <PerspectiveCamera position={[-0.5, 0, 1]} >
        <ambientLight intensity={100}/>
        <pointLight position={[1, 1, 1]}/>

        <group ref={group} scale={[0.1, 0.1, 0.1]} position={[0, -1, 0]}>

          <primitive object={fbxLoad}/>

        </group>


      </PerspectiveCamera>
    </Canvas>
  );
};

export default FBXMan;

