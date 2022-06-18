import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, Scroll, Stars, Preload } from "@react-three/drei";
import Header from "../components/Header";
import Earth from "../components/Earth";
import Moon from "../components/Moon";
import Mars from "../components/Mars";
import LazyLoader from "../components/LazyLoader";

function Zoom() {
  useFrame((state) => {
    state.camera.zoom += 0.00001;
    state.camera.updateProjectionMatrix();
  });
}

export default function Home() {
  return (
    <>
      <Header />
      <Suspense fallback={<LazyLoader delay={300} />}>
        <Canvas camera={{ position: [0, 0, 75], fov: 30 }}>
          <ScrollControls
            pages={4} // Each page takes 100% of the height of the canvas
            distance={1} // A factor that increases scroll bar travel (default: 1)
            damping={4} // Friction, higher is faster (default: 4)
            horizontal={false} // Can also scroll horizontally (default: false)
            infinite={false} // Can also scroll infinitely (default: false)
          >
            <directionalLight intensity={0.5} position={[-1, 0, 0]} />
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
              <Earth scale={0.15} />
              <Moon scale={0.075} />
              <Mars scale={0.15} />
            </Scroll>
            <Scroll html style={{ width: "100%" }}>
              <div
                style={{
                  position: "absolute",
                  top: `50vh`,
                  left: "20vw",
                  transform: `translate3d(0,-100%,0)`,
                  fontSize: "4rem",
                  color: "white",
                }}
              >
                <h1
                  style={{
                    fontSize: "4rem",
                    color: "white",
                    margin: "0",
                  }}
                >
                  Earth
                </h1>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "white",
                    margin: "0",
                  }}
                >
                  Something here
                </p>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "180vh",
                  right: "40vw",
                }}
              >
                <h1
                  style={{
                    fontSize: "4rem",
                    color: "white",
                    margin: "0",
                  }}
                >
                  Moon
                </h1>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "white",
                    margin: "0",
                  }}
                >
                  Something here
                </p>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "340vh",
                  right: "50vw",
                }}
              >
                <h1
                  style={{
                    fontSize: "4rem",
                    color: "white",
                    margin: "0",
                  }}
                >
                  Mars
                </h1>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "white",
                    margin: "0",
                  }}
                >
                  Something here
                </p>
              </div>
            </Scroll>
          </ScrollControls>
          <Zoom />
          {/* <Preload /> */}
        </Canvas>
      </Suspense>
    </>
  );
}
