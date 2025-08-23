import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box } from '@react-three/drei';
import { useRef } from 'react';
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
        <boxGeometry args={[3.0, 3.0, 0.2]} />
        <meshStandardMaterial color="#0a4d5c" transparent opacity={0.9} />
      </mesh>
      {/* Background for text readability */}
      <mesh position={[0, 0, 0.1]}>
        <planeGeometry args={[2.8, 2.8]} />
        <meshStandardMaterial color="#000000" transparent opacity={0.7} />
      </mesh>
      <Text
        position={[0, 0.6, 0.1]}
        fontSize={0.2}
        color="#00d4ff"
        anchorX="center"
        anchorY="middle"
      >
        {content.title}
      </Text>
      <Text
        position={[0, -0.1, 0.1]}
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
  return (
    <div className="w-full h-96 mb-8">
      <Canvas camera={{ position: [4, 4, 4], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <pointLight position={[-10, -10, -10]} intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        
        <RotatingCube cards={cards} />
        
        <OrbitControls 
          enablePan={false} 
          enableZoom={true}
          minDistance={3}
          maxDistance={8}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
      
      <div className="text-center mt-4">
        <p className="text-sm text-muted-foreground">
          Click and drag to control rotation • Scroll to zoom
        </p>
      </div>
    </div>
  );
};

export default InteractiveCube;