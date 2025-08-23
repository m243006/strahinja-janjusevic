import { Canvas } from '@react-three/fiber';
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
      <Box args={[1.8, 1.8, 0.1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#0891b2" transparent opacity={0.8} />
      </Box>
      <Text
        position={[0, 0.5, 0.06]}
        fontSize={0.15}
        color="#06b6d4"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.6}
      >
        {content.title}
      </Text>
      <Text
        position={[0, -0.2, 0.06]}
        fontSize={0.08}
        color="#e2e8f0"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.4}
        textAlign="center"
      >
        {content.description}
      </Text>
    </group>
  );
};

const InteractiveCube = ({ cards }: InteractiveCubeProps) => {
  const cubeRef = useRef<Group>(null);

  return (
    <div className="w-full h-96 mb-8">
      <Canvas camera={{ position: [3, 3, 3], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <group ref={cubeRef}>
          {/* Front face */}
          <CubeFace 
            content={cards[0]} 
            position={[0, 0, 1]} 
            rotation={[0, 0, 0]} 
          />
          
          {/* Right face */}
          <CubeFace 
            content={cards[1]} 
            position={[1, 0, 0]} 
            rotation={[0, Math.PI / 2, 0]} 
          />
          
          {/* Back face */}
          <CubeFace 
            content={cards[2]} 
            position={[0, 0, -1]} 
            rotation={[0, Math.PI, 0]} 
          />
          
          {/* Left face */}
          <CubeFace 
            content={cards[0]} 
            position={[-1, 0, 0]} 
            rotation={[0, -Math.PI / 2, 0]} 
          />
          
          {/* Top face */}
          <CubeFace 
            content={cards[1]} 
            position={[0, 1, 0]} 
            rotation={[-Math.PI / 2, 0, 0]} 
          />
          
          {/* Bottom face */}
          <CubeFace 
            content={cards[2]} 
            position={[0, -1, 0]} 
            rotation={[Math.PI / 2, 0, 0]} 
          />
        </group>
        
        <OrbitControls 
          enablePan={false} 
          enableZoom={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={3 * Math.PI / 4}
        />
      </Canvas>
      
      <div className="text-center mt-4">
        <p className="text-sm text-muted-foreground">
          Click and drag to rotate the cube
        </p>
      </div>
    </div>
  );
};

export default InteractiveCube;