import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { GradientSphere } from './GradientSphere';

export function CryptoScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        style={{ background: 'transparent' }}
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          {/* Lighting for gradient sphere */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={0.8} />
          <pointLight position={[-10, -10, -10]} intensity={0.4} color="#ff6b9d" />
          <pointLight position={[10, -10, 10]} intensity={0.4} color="#4dabf7" />
          
          {/* Environment */}
          <Environment preset="night" />
          
          {/* Main gradient sphere */}
          <GradientSphere />
          
          {/* Auto-rotating controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
            autoRotate
            autoRotateSpeed={1}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}