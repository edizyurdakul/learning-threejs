import { useRef, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useGLTF,
  ScrollControls,
  Scroll,
  Stars,
  Preload,
  useScroll,
  useIntersect,
} from "@react-three/drei";
import Earth from "../components/Earth";
import Moon from "../components/Moon";
import Mars from "../components/Mars";

function Zoom() {
  useFrame((state) => {
    state.camera.zoom += 0.00001;
    state.camera.updateProjectionMatrix();
  });
}

export default function Home() {
  return (
    <Canvas
      camera={{ position: [0, 0, 75], fov: 30 }}
      style={{ background: "black" }}
    >
      <Suspense fallback={null}>
        <ScrollControls
          pages={4} // Each page takes 100% of the height of the canvas
          distance={1} // A factor that increases scroll bar travel (default: 1)
          damping={4} // Friction, higher is faster (default: 4)
          horizontal={false} // Can also scroll horizontally (default: false)
          infinite={false} // Can also scroll infinitely (default: false)
        >
          <directionalLight intensity={0.5} position={[-1, 0, 0]} />
          <ambientLight intensity={0} />
          <Scroll>
            <Stars
              radius={100}
              depth={50}
              count={5000}
              factor={4}
              saturation={0}
              fade
              speed={0}
            />

            <Earth scale={0.4} />
            <Moon scale={0.05} />
            <Mars scale={0.05} />
          </Scroll>
        </ScrollControls>
        <Zoom />
        <Preload />
      </Suspense>
    </Canvas>
  );
}
