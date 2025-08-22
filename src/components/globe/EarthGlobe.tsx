import { useRef, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';

// Countries you've visited with their approximate coordinates
const visitedCountries = [
  { name: 'United States', lat: 39.8283, lng: -98.5795 },
  { name: 'Serbia', lat: 44.0165, lng: 21.0059 },
  { name: 'Germany', lat: 51.1657, lng: 10.4515 },
  { name: 'France', lat: 46.6034, lng: 1.8883 },
  { name: 'United Kingdom', lat: 55.3781, lng: -3.4360 },
  { name: 'Netherlands', lat: 52.1326, lng: 5.2913 },
  { name: 'Switzerland', lat: 46.8182, lng: 8.2275 },
  { name: 'Austria', lat: 47.5162, lng: 14.5501 },
  { name: 'Italy', lat: 41.8719, lng: 12.5674 },
];

// Convert lat/lng to 3D coordinates on sphere
const latLngToVector3 = (lat: number, lng: number, radius: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  
  return new THREE.Vector3(x, y, z);
};

const CountryMarker = ({ country, radius }: { country: typeof visitedCountries[0], radius: number }) => {
  const markerRef = useRef<THREE.Mesh>(null);
  const position = latLngToVector3(country.lat, country.lng, radius + 0.05);
  
  useFrame((state) => {
    if (markerRef.current) {
      // Gentle pulsing animation
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
      markerRef.current.scale.setScalar(scale);
    }
  });
  
  return (
    <mesh ref={markerRef} position={position}>
      <sphereGeometry args={[0.02, 8, 8]} />
      <meshBasicMaterial color="#00ffff" />
      {/* Glow effect */}
      <mesh scale={2}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshBasicMaterial color="#00ffff" transparent opacity={0.3} />
      </mesh>
    </mesh>
  );
};

const EarthGlobe = () => {
  const globeRef = useRef<THREE.Mesh>(null);
  const earthRadius = 2;
  
  // Load Earth texture - using a high-resolution Earth texture with visible countries
  const earthTexture = useLoader(TextureLoader, 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=2048&q=80');
  
  useFrame((state) => {
    if (globeRef.current) {
      // Slow rotation
      globeRef.current.rotation.y += 0.005;
    }
  });
  
  return (
    <group>
      {/* Earth sphere */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[earthRadius, 128, 128]} />
        <meshStandardMaterial 
          map={earthTexture}
          roughness={0.9}
          metalness={0.0}
          bumpScale={0.05}
        />
      </mesh>
      
      {/* Atmosphere glow */}
      <mesh scale={1.1}>
        <sphereGeometry args={[earthRadius, 64, 64]} />
        <meshBasicMaterial 
          color="#4da6ff" 
          transparent 
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>
      
      {/* Country markers */}
      {visitedCountries.map((country, index) => (
        <CountryMarker 
          key={index} 
          country={country} 
          radius={earthRadius}
        />
      ))}
      
      {/* Orbital rings for visual effect */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[earthRadius + 0.3, earthRadius + 0.35, 64]} />
        <meshBasicMaterial 
          color="#06b6d4" 
          transparent 
          opacity={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <ringGeometry args={[earthRadius + 0.4, earthRadius + 0.42, 64]} />
        <meshBasicMaterial 
          color="#00ffff" 
          transparent 
          opacity={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

export default EarthGlobe;