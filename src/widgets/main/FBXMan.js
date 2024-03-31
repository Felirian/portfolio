import React, {useEffect, useRef} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import fbxModel from '../../assets/models/man.fbx'
import {PerspectiveCamera, useFBX} from "@react-three/drei";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const FBXMan = ({contactRef}) => {
  const group = useRef();

  const fbxLoad = useFBX(fbxModel)

  return (
    <>
      <ambientLight intensity={100}/>

      <group ref={group} scale={[0.2, 0.2, 0.2]} position={[2, -1.6, 0]} rotation={[0, 5, 0]}>

        <primitive object={fbxLoad}/>

      </group>
    </>

)
  ;
};

export default FBXMan;

