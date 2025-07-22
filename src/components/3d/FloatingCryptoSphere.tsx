import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Text3D } from '@react-three/drei';
import { Mesh, Vector3 } from 'three';

export function FloatingCryptoSphere({ position, scale = 1, color = "#00d4ff" }: {
  position: [number, number, number];
  scale?: number;
  color?: string;
}) {
  const meshRef = useRef<Mesh>(null);
  const groupRef = useRef<any>(null);

  // Animate the sphere rotation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.rotation.y += 0.01;
    }
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  const sphereGeometry = useMemo(() => [1, 64, 64], []);

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere ref={meshRef} args={sphereGeometry as any}>
          <MeshDistortMaterial
            color={color}
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.8}
            transparent
            opacity={0.8}
          />
        </Sphere>
        
        {/* Glowing ring around sphere */}
        <mesh>
          <torusGeometry args={[1.5, 0.1, 16, 100]} />
          <meshBasicMaterial color={color} transparent opacity={0.3} />
        </mesh>
      </Float>
    </group>
  );
}