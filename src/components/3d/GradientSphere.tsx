import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { Mesh } from 'three';

export function GradientSphere() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} scale={2.5}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#ffffff"
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={0.9}
        />
        
        {/* Gradient overlay effect */}
        <mesh scale={1.01}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial
            color="#ff6b9d"
            transparent
            opacity={0.6}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        
        <mesh scale={1.02}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial
            color="#4dabf7"
            transparent
            opacity={0.4}
            roughness={0.3}
            metalness={0.7}
          />
        </mesh>
        
        <mesh scale={1.03}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial
            color="#9775fa"
            transparent
            opacity={0.3}
            roughness={0.4}
            metalness={0.6}
          />
        </mesh>
      </mesh>
    </Float>
  );
}