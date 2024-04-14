/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
// Creating 3js component
const Cars = ({ isMobile }) => {
  // Importing downloaded PC model
  const car = useGLTF("./mustang/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black" />
      {/* Setting three lights around the model for better visibility around all angles */}
      <spotLight position={[0, 5, 0]} angle={Math.PI} intensity={250} />
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
        object={car.scene}
        scale={isMobile ? 0.75 : 1.3}
        position={isMobile ? [0, -1, 0] : [0, -1.25, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const CarCanvas = () => {
  // Resize responsive
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
      frameloop="demand" //Only runs rendering loop when necessary
      shadows
      camera={{ position: [5, 5, 5], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          // Dont allow users to zoom into or drag the object around, allow users to rotate about y axis and a bit of x axis
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          autoRotate //Autorotate uses a lot of GPU, can be disabled if lagging
        />
        <Cars isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default CarCanvas;
