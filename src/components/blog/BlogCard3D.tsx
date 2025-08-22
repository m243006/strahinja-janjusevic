import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, RoundedBox, Html } from '@react-three/drei';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock } from 'lucide-react';
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
  
  useFrame((state) => {
    if (meshRef.current) {
      // Continuous rotation
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
      
      // Gentle floating motion
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group position={position}>
      <RoundedBox
        ref={meshRef}
        args={[4, 5, 0.2]}
        radius={0.1}
        smoothness={4}
      >
        <meshStandardMaterial 
          color="#0f172a" 
          transparent 
          opacity={0.9}
          roughness={0.3}
          metalness={0.1}
        />
        
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
      </RoundedBox>
      
      {/* HTML Content Overlay */}
      <Html
        transform
        occlude
        position={[0, 0, 0.11]}
        style={{
          width: '320px',
          height: '400px',
          padding: '20px',
          color: 'white',
          fontSize: '14px',
          pointerEvents: 'auto',
        }}
      >
        <div className="w-full h-full flex flex-col justify-between bg-transparent">
          {/* Header */}
          <div>
            <h3 className="text-lg font-bold text-cyan-400 mb-3 leading-tight">
              <Link 
                to={slug} 
                className="hover:text-cyan-300 transition-colors hover:underline"
              >
                {title}
              </Link>
            </h3>
            
            <div className="flex flex-wrap gap-2 text-xs text-gray-400 mb-4">
              <div className="flex items-center">
                <User className="w-3 h-3 mr-1" />
                <span>Strahinja Janjusevic</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-3 h-3 mr-1" />
                <span>{date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                <span>{readTime}</span>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1">
            <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-6">
              {excerpt}
            </p>
          </div>
          
          {/* Footer */}
          <div>
            <Link
              to={slug}
              className="inline-flex items-center text-cyan-500 hover:text-cyan-400 transition-colors font-medium text-sm"
            >
              Read Full Article →
            </Link>
          </div>
        </div>
      </Html>
    </group>
  );
};

export default BlogCard3D;