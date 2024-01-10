import React, {useEffect, useRef, useState} from 'react'
import {PerspectiveCamera, useGLTF} from '@react-three/drei'
import laptop from './laptop.glb'
import {useFrame} from "@react-three/fiber";
import TWEEN from 'tween.js';
const easeInOutQuad = (t) => 2 * t * t ;
export function Model(props) {
  const {nodes, materials} = useGLTF(laptop)
  const screenMesh = useRef();
  const FullMesh = useRef();
  const [open, setOpen] = useState(0)

  useEffect(() => {
    const TopRotation = new TWEEN.Tween(screenMesh.current.rotation)
      .to({ x: props.hover ? 0.5 : 3.151 }, 800)
      .easing(TWEEN.Easing.Quadratic.Out)
      .start();
    const FullRotation = new TWEEN.Tween(FullMesh.current.rotation)
      .to({ x: props.hover ? 1 : 0 }, 800)
      .easing(TWEEN.Easing.Quadratic.Out)
      .start();
    const FullPosition = new TWEEN.Tween(FullMesh.current.position)
      .to({ y: props.hover ? -0.1 : 0 }, 800)
      .easing(TWEEN.Easing.Quadratic.Out)
      .start();

    const animate = () => {
      requestAnimationFrame(animate);
      TWEEN.update();
    };

    animate();

    return () => {
      TopRotation.stop()
      FullRotation.stop()
      FullPosition.stop()
    }; // Остановить анимацию при размонтировании компонента
  }, [props.hover])

  return (
    <PerspectiveCamera
      position={[0, -0, -0.65]}
      rotation={[0, 0, 0]}
      FOV={50}
    >
      <group
        {...props}
        dispose={null}
        ref={FullMesh}
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
        <group position={[0, 0.008, -0.122]} ref={screenMesh}>
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
