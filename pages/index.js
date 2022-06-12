import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Sky, Stars, OrbitControls } from "@react-three/drei";

function Earth(props) {
  const { scene } = useGLTF("/model/scene.gltf");
  const myMesh = useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y = a * 0.1;
  });
  return <primitive object={scene} {...props} ref={myMesh} />;
}

function Zoom() {
  useFrame((state) => {
    state.camera.zoom += 0.00001;
    state.camera.updateProjectionMatrix();
  });
}

export default function Home() {
  return (
    <Canvas
      camera={{ position: [0, 50, 50], fov: 60 }}
      style={{ background: "black" }}
    >
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={0}
      />
      <directionalLight intensity={0.5} position={[0, 5, 0]} />
      <ambientLight intensity={0.01} />
      <Earth position={[50, 0, 0]} scale={0.2} />
      {/* <OrbitControls /> */}
      <Zoom />
    </Canvas>
  );
}
