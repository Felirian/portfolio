import React, { useRef } from 'react'
import {PerspectiveCamera, useGLTF} from '@react-three/drei'
import laptop from './laptop.glb'
export function Model(props) {

  const { nodes, materials } = useGLTF(laptop)
  return (
    <PerspectiveCamera
      position={[0, -0.1, -0.85]}
      rotation={[0.5, 0, 0]}
      FOV={50}
    >
      <group {...props} dispose={null}>
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
        <group position={[0, 0.008, -0.122]} rotation={[1.4, 0, 0]}>
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
