import React, {useRef, useState} from 'react'
import {PerspectiveCamera, useGLTF} from '@react-three/drei'
import laptop from './laptop.glb'
import {useFrame} from "@react-three/fiber";
const easeInOutQuad = (t) => 2 * t * t ;
export function Model(props) {
  const {nodes, materials} = useGLTF(laptop)
  const screenMesh = useRef();
  const [open, setOpen] = useState(0)

  useFrame(() => {
    if (props.hover === true && open <= 100) {
      const easedValue = easeInOutQuad(open / 100);
      setOpen(open * 1.05 + 0.1);
    }
    if (props.hover === false && open >= 0) {
      const easedValue = easeInOutQuad(open / 100);
      setOpen(open * 0.95 - 0.1);
    }
    console.log(open);
    //screenMesh.current.rotation.x = open;
  });

  return (
    <PerspectiveCamera
      position={[0, -0, -0.65]}
      rotation={[0, 0, 0]}
      FOV={50}
    >
      <group
        {...props}
        dispose={null}
        rotation={[0.1, 0, 0]}
      >
        <mesh
          geometry={nodes.Plane.geometry}
          material={materials.Base}
        />
        <mesh
          geometry={nodes.Plane_1.geometry}
          material={materials.Lights}/>
        <mesh
          geometry={nodes.Plane_2.geometry}
          material={materials.ScreenFrame}
        />
        <mesh
          geometry={nodes.Plane_3.geometry}
          material={materials.Touchpad}
        />
        <mesh
          geometry={nodes.Keyboard.geometry}
          material={materials.Keyboard}
          position={[-0.067, 0.009, -0.001]}
          rotation={[0.023, 0, 0]}
        />
        <group position={[0, 0.008, -0.122]} rotation={[-(open * 0.01) * 2 + 3.141, 0, 0]} ref={screenMesh}>
          <mesh
            geometry={nodes.Plane001.geometry}
            material={materials.Base}
          />
          <mesh
            geometry={nodes.Plane001_1.geometry}
            material={materials.ScreenFrame}
          />
          <mesh
            geometry={nodes.Plane001_2.geometry}
            material={materials.ScreenShinyBorder}
          />
          <mesh
            geometry={nodes.Screen.geometry}
            material={materials.Screen}
          />
        </group>
      </group>
    </PerspectiveCamera>

  )
}

useGLTF.preload(laptop)
