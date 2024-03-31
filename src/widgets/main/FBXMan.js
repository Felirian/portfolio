import React, {useRef} from 'react';
import fbxModel from '../../assets/models/man.fbx'
import {useFBX} from "@react-three/drei";

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

