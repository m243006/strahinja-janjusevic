import Hero from "@/components/Hero";
import JourneyMap from "@/components/JourneyMap";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Suspense } from "react";
import EarthGlobe from "@/components/globe/EarthGlobe";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Hero />
      <JourneyMap />
      
      {/* Countries I've Visited Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/80">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-500 font-serif">
              Places I've Explored
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interactive globe showing countries I've visited during my academic and research journey. 
              The glowing markers represent places where I've conducted research, attended conferences, or studied.
            </p>
          </motion.div>
          
          <div className="h-[600px] w-full">
            <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
              <Suspense fallback={null}>
                <Environment preset="night" />
                <ambientLight intensity={0.4} />
                <directionalLight 
                  position={[5, 5, 5]} 
                  intensity={1} 
                  color="#ffffff" 
                />
                <pointLight 
                  position={[-5, 0, 5]} 
                  intensity={0.5} 
                  color="#06b6d4" 
                />
                
                <EarthGlobe />
                
                <OrbitControls 
                  enablePan={false}
                  enableZoom={true}
                  enableRotate={true}
                  maxDistance={10}
                  minDistance={3}
                  autoRotate={true}
                  autoRotateSpeed={0.5}
                />
              </Suspense>
            </Canvas>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-8"
          >
            <p className="text-muted-foreground text-sm">
              Drag to rotate • Scroll to zoom • Auto-rotating globe with glowing country markers
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Index;