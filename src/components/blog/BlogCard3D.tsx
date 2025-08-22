import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Text, RoundedBox } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';

interface BlogCard3DProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  position: [number, number, number];
}

const BlogCard3D = ({ title, excerpt, date, readTime, slug, position }: BlogCard3DProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const navigate = useNavigate();
  
  useFrame((state) => {
    if (meshRef.current) {
      // Continuous rotation
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
      
      // Gentle floating motion
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  const handleClick = () => {
    // Double click required to navigate
  };
  
  const handleDoubleClick = () => {
    navigate(slug);
  };

  return (
    <group position={position} onClick={handleClick} onDoubleClick={handleDoubleClick}>
      <RoundedBox
        ref={meshRef}
        args={[4, 5, 0.2]}
        radius={0.1}
        smoothness={4}
      >
        <meshStandardMaterial 
          color="#1e293b" 
          transparent 
          opacity={0.9}
          roughness={0.3}
          metalness={0.1}
        />
      </RoundedBox>
      
      {/* Card border glow */}
      <RoundedBox
        args={[4.1, 5.1, 0.1]}
        radius={0.1}
        smoothness={4}
        position={[0, 0, -0.05]}
      >
        <meshBasicMaterial 
          color="#06b6d4" 
          transparent 
          opacity={0.3}
        />
      </RoundedBox>
      
      {/* Title Text */}
      <Text
        position={[0, 1.5, 0.11]}
        fontSize={0.25}
        color="#06b6d4"
        anchorX="center"
        anchorY="middle"
        maxWidth={3.5}
        textAlign="center"
      >
        {title}
      </Text>
      
      {/* Author and Date */}
      <Text
        position={[0, 0.8, 0.11]}
        fontSize={0.12}
        color="#94a3b8"
        anchorX="center"
        anchorY="middle"
        maxWidth={3.5}
        textAlign="center"
      >
        By Strahinja Janjusevic • {date} • {readTime}
      </Text>
      
      {/* Excerpt */}
      <Text
        position={[0, -0.2, 0.11]}
        fontSize={0.1}
        color="#e2e8f0"
        anchorX="center"
        anchorY="middle"
        maxWidth={3.2}
        textAlign="center"
        lineHeight={1.2}
      >
        {excerpt.substring(0, 200)}...
      </Text>
      
      {/* Read More */}
      <Text
        position={[0, -1.8, 0.11]}
        fontSize={0.15}
        color="#06b6d4"
        anchorX="center"
        anchorY="middle"
        maxWidth={3.5}
        textAlign="center"
      >
        Double-click to Read Full Article →
      </Text>
    </group>
  );
};

export default BlogCard3D;