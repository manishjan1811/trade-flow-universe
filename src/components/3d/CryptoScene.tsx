import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { FloatingCryptoSphere } from './FloatingCryptoSphere';
import { CryptoParticles } from './CryptoParticles';

export function CryptoScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        style={{ background: 'transparent' }}
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={0.5} />
          <pointLight position={[-10, -10, -10]} intensity={0.3} color="#00d4ff" />
          
          {/* Environment */}
          <Environment preset="night" />
          
          {/* Floating spheres representing cryptocurrencies */}
          <FloatingCryptoSphere position={[-4, 2, 0]} scale={0.8} color="#f7931a" />
          <FloatingCryptoSphere position={[4, -1, -2]} scale={0.6} color="#627eea" />
          <FloatingCryptoSphere position={[0, 3, -3]} scale={0.5} color="#00d4ff" />
          <FloatingCryptoSphere position={[-2, -2, 1]} scale={0.4} color="#f3ba2f" />
          <FloatingCryptoSphere position={[3, 1, 2]} scale={0.7} color="#26a17b" />
          
          {/* Particle system */}
          <CryptoParticles count={1500} />
          
          {/* Controls (disabled for better performance on mobile) */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}