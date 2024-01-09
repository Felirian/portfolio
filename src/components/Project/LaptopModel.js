import { useEffect, useRef } from "react";
import { useGLTF, useAnimations, PerspectiveCamera } from "@react-three/drei";
import mod from "./test_2.glb";
import laptop from "./laptop.glb"

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(laptop);
  const { actions } = useAnimations(animations, group);

  // useEffect(() => {
  //   actions?.["Culture_4|LOGO|BaseLayer.001"].play();
  //   actions?.["Technology_4|LOGO|BaseLayer.001"].play();
  //   actions?.["culture|LOGO|BaseLayer.001"].play();
  //   actions?.["pTorus12|LOGO|BaseLayer.001"].play();
  //   actions?.["pTorus14|LOGO|BaseLayer.001"].play();
  //   actions?.["technology|LOGO|BaseLayer.001"].play();
  //   actions?.["test|LOGO|BaseLayer"].play();
  // });
  return (
    <PerspectiveCamera
      position={[0, -0.20, -0.4]}
      rotation={[0, 0, 0]}
    >
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group name="Laptop">
            <mesh
              name={"Plane"}
              geometry={nodes.Plane.geometry}
              material={materials.Base}
              position={[0, 0, 0]}
            />
            <mesh
              name={"Plane"}
              geometry={nodes.Plane_1.geometry}
              material={materials.Lights}
              position={[0, 0, 0]}
            />
            <mesh
              name={"Plane"}
              geometry={nodes.Plane_2.geometry}
              material={materials.PlasticBlackPorts}
              position={[0, 0, 0]}
            />
            <mesh
              name={"Plane"}
              geometry={nodes.Plane_3.geometry}
              material={materials.Touchpad}
              position={[0, 0, 0]}
            />
            <mesh
              name={"Plane"}
              geometry={nodes.Keyboard.geometry}
              material={materials.Keyboard}
              position={[-0.067, 0.009, -0.001]}
            />
          </group>
          <group
            name="Screen_Frame"
            rotation={[-30, 0, 0]}
            position={[0, 0, -0.12]}
          >
            <mesh
              name={"Plane001"}
              geometry={nodes.Plane001.geometry}
              material={materials.Base}
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
            />
            <mesh
              name={"Plane001"}
              geometry={nodes.Plane001_1.geometry}
              material={materials.ScreenFrame}
              rotation={[0, 0, 0]}
            />
            <mesh
              name={"Plane001"}
              geometry={nodes.Plane001_2.geometry}
              material={materials.ScreenShinyBorder}
              rotation={[0, 0, 0]}
            />
            <mesh
              name={"Plane001"}
              geometry={nodes.Screen.geometry}
              material={materials.Screen}
              rotation={[0, 0, 0]}
            />
          </group>
        </group>
      </group>
    </PerspectiveCamera>
  );
}

useGLTF.preload(mod);