/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
// Creating 3js component
const Computers = ({ isMobile }) => {
  // Importing downloaded PC model
  const computer = useGLTF("./mustang/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black" />
      <spotLight
        position={[0, 5, 0]}
        angle={Math.PI / 3}
        penumbra={1}
        decay={2}
        distance={0}
        castShadow
        intensity={250}
      />
      <spotLight
        position={[0, 0, 5]}
        angle={Math.PI / 1}
        penumbra={1}
        decay={2}
        distance={0}
        castShadow
        intensity={100}
      />
      <spotLight
        position={[0, 0, -5]}
        angle={Math.PI / 1}
        penumbra={1}
        decay={2}
        distance={0}
        castShadow
        intensity={100}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.75 : 1.3}
        position={isMobile ? [0, -1, 0] : [0, -1.25, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [5, 5, 5], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          //autoRotate //this thing lowkey kills the gpu bruh
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default ComputersCanvas;
