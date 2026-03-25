import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
const Sphere = ({
  size = 1,
  amount = 50,
  color = "white",
  emissive,
  glow,
  ...props
}: {
  size?: number;
  amount?: number;
  color?: string;
  emissive?: string;
  glow?: string;
} & React.PropsWithoutRef<THREE.Mesh>) => {
  const ref = useRef<THREE.Mesh | null>(null);
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => ref.current && (ref.current.rotation.x += delta));
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}
    >
      <sphereGeometry args={[size, 64, 64]} />
      <meshStandardMaterial
        roughness={0.5}
        color={hovered ? "hotpink" : color}
        emissive={emissive || color}
        envMapIntensity={0.2}
      />
      {/* <Sparkles count={amount} scale={size * 2} size={6} speed={0.4} /> */}
    </mesh>
  );
};

export default Sphere;
