import React, {useEffect, useRef} from 'react'
import {PerspectiveCamera, useGLTF} from '@react-three/drei'
import laptop from './laptop.glb'
import TWEEN from 'tween.js';
import {useThree} from "@react-three/fiber";

export function Model(props) {
  const {nodes, materials} = useGLTF(laptop)
  const screenMesh = useRef();
  const FullMesh = useRef();
  const camera = useRef();



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



  useEffect(() => {
    console.log(props.viewport.top);
    document.addEventListener('scroll', ()=> {

    })


    // // Рассчитываем угол поворота относительно экранных координат
    // const rotationAngle = Math.atan2(
    //   boundingBox.top + boundingBox.height / 2 - window.innerHeight / 2,
    //   boundingBox.left + boundingBox.width / 2 - window.innerWidth / 2
    // );
    //
    // // Применяем поворот
    // FullMesh.current.rotation.z = rotationAngle;
  }, []);


  return (
    <PerspectiveCamera
      position={[0, -0, -0.65]}
      rotation={[0, 0, 0]}
      FOV={50}
      ref={camera}
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

  )
}

useGLTF.preload(laptop)
