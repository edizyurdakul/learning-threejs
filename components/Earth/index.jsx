import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Earth = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/model/earth/scene.gltf");
  const { viewport } = useThree(viewport);

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    group.current.rotation.y = a * 0.1;
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[viewport.width / 2.5, 0, -50]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={nodes.Sphere_Material002_0.geometry}
              material={materials["Material.002"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

export default Earth;
