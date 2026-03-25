import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
import Sphere from "./components/Sphere";

export default function App() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <Sphere
        amount={30}
        emissive="purple"
        glow="#ff90f0"
        size={0.5}
        position={[-1.5, 2, 0]}
      />
      <OrbitControls />
    </Canvas>
  );
}
