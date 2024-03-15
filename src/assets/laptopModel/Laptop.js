import React, {useEffect, useRef, useState} from 'react'
import {PerspectiveCamera, useGLTF} from '@react-three/drei'
import laptop from './laptop.glb'
import TWEEN from 'tween.js';
import {Canvas, useThree} from "@react-three/fiber";
import {Vector3} from "three";

export function Model(props) {
  const {nodes, materials} = useGLTF(laptop)
  const screenMesh = useRef();
  const FullMesh = useRef();

  const canvasRef = useRef()

  const cameraRef = useRef()


  const getYPos = () => {
    let viewport = 0

    if (canvasRef.current) {
      viewport = canvasRef.current.getBoundingClientRect()
      //console.log((viewport?.top - 170) / 500);
    }
    return viewport === 0 ? 0 : (viewport?.top - 170) / 500
  }

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (screenMesh.current && FullMesh.current) {
        const TopRotation = new TWEEN.Tween(screenMesh.current.rotation)
          .to({x: 2.5 - (1- Math.abs(getYPos()))*1.5}, 800)
          .easing(TWEEN.Easing.Quadratic.Out)
          .start();
        const FullRotation = new TWEEN.Tween(FullMesh.current.rotation)
          .to({
            y: props.pos === 'right'
              ? Math.abs(getYPos()).toFixed(1)
              : -Math.abs(getYPos()).toFixed(1)
          }, 800)
          .easing(TWEEN.Easing.Quadratic.Out)
          .start();
        const FullPosition = new TWEEN.Tween(FullMesh.current.position)
          .to({y: 0}, 800)
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
      }
    })
  }, [screenMesh.current, FullMesh.current]);

  return (
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
      ref={canvasRef}
    >
      <ambientLight/>
      <directionalLight intensity={5} position={[-0.2, 0.5, 0.8]}/>
      <PerspectiveCamera
        position={[0, -0.15, -0.65]}
        rotation={[0, 0, 0]}
        FOV={50}
        ref={cameraRef}
      >
        <group
          {...props}
          dispose={null}
          ref={FullMesh}
          //rotation={[0,0,0]}
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
    </Canvas>
  )
}

useGLTF.preload(laptop)
