import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import { Group } from 'three';

interface CubeContent {
  image: string;
  title: string;
  description: string;
}

interface InteractiveCubeProps {
  cards: CubeContent[];
}

const CubeFace = ({ content, position, rotation }: { 
  content: CubeContent; 
  position: [number, number, number]; 
  rotation: [number, number, number];
}) => {
  return (
    <group position={position} rotation={rotation}>
      <mesh>
        <boxGeometry args={[3.0, 3.0, 0.1]} />
        <meshStandardMaterial color="#0a4d5c" transparent opacity={0.9} />
      </mesh>
      {/* Background for text readability */}
      <mesh position={[0, 0, 0.06]}>
        <planeGeometry args={[2.8, 2.8]} />
        <meshStandardMaterial color="#000000" transparent opacity={0.8} />
      </mesh>
      <Text
        position={[0, 0.6, 0.07]}
        fontSize={0.2}
        color="#00d4ff"
        anchorX="center"
        anchorY="middle"
      >
        {content.title}
      </Text>
      <Text
        position={[0, -0.1, 0.07]}
        fontSize={0.11}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={2}
      >
        {content.description}
      </Text>
    </group>
  );
};

const RotatingCube = ({ cards }: { cards: CubeContent[] }) => {
  const groupRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Front face */}
      <CubeFace 
        content={cards[0]} 
        position={[0, 0, 1.6]} 
        rotation={[0, 0, 0]} 
      />
      
      {/* Right face */}
      <CubeFace 
        content={cards[1] || cards[0]} 
        position={[1.6, 0, 0]} 
        rotation={[0, Math.PI / 2, 0]} 
      />
      
      {/* Back face */}
      <CubeFace 
        content={cards[2] || cards[0]} 
        position={[0, 0, -1.6]} 
        rotation={[0, Math.PI, 0]} 
      />
      
      {/* Left face */}
      <CubeFace 
        content={cards[0]} 
        position={[-1.6, 0, 0]} 
        rotation={[0, -Math.PI / 2, 0]} 
      />
      
      {/* Top face */}
      <CubeFace 
        content={cards[1] || cards[0]} 
        position={[0, 1.6, 0]} 
        rotation={[-Math.PI / 2, 0, 0]} 
      />
      
      {/* Bottom face */}
      <CubeFace 
        content={cards[2] || cards[0]} 
        position={[0, -1.6, 0]} 
        rotation={[Math.PI / 2, 0, 0]} 
      />
    </group>
  );
};

const InteractiveCube = ({ cards }: InteractiveCubeProps) => {
  console.log('InteractiveCube rendering with cards:', cards);
  
  return (
    <div className="w-full h-96 mb-8 bg-gray-900 rounded-lg">
      <Suspense fallback={<div className="flex items-center justify-center h-full text-white">Loading 3D Cube...</div>}>
        <Canvas 
          camera={{ position: [5, 5, 5], fov: 50 }}
          style={{ background: 'transparent' }}
          gl={{ antialias: true, alpha: true }}
          onCreated={(state) => console.log('Canvas created:', state)}
        >
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <directionalLight position={[0, 0, 5]} intensity={1} />
          
          {/* Simplified cube with basic text */}
          <group>
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[3, 3, 3]} />
              <meshStandardMaterial color="#0a4d5c" transparent opacity={0.9} />
            </mesh>
            
            {/* Simple text overlay */}
            <Text
              position={[0, 0, 1.6]}
              fontSize={0.3}
              color="#00d4ff"
              anchorX="center"
              anchorY="middle"
            >
              {cards[0]?.title || "50656f706c65204d6174746572"}
            </Text>
          </group>
          
          <OrbitControls 
            enablePan={false} 
            enableZoom={true}
            minDistance={3}
            maxDistance={8}
            autoRotate
            autoRotateSpeed={1}
          />
        </Canvas>
      </Suspense>
      
      <div className="text-center mt-4">
        <p className="text-sm text-muted-foreground">
          Click and drag to control rotation • Scroll to zoom
        </p>
      </div>
    </div>
  );
};

export default InteractiveCube;