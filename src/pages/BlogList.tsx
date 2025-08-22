import { motion } from "framer-motion";
import { ArrowLeft, ZoomIn, ZoomOut } from "lucide-react";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";
import BlogCard3D from "@/components/blog/BlogCard3D";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: "mcp-swarm-c2",
    title: "The Next Leap in Offensive AI: MCP-Powered Swarm C2",
    excerpt: "Exploring the groundbreaking Model Context Protocol (MCP) and its revolutionary approach to command and control through autonomous swarm agents that evade EDR detection.",
    date: "August 22, 2025",
    readTime: "12 min read",
    slug: "/blog/mcp-swarm-c2"
  },
  {
    id: "ai-offensive-security",
    title: "The Cutting Edge: AI's Inevitable Rise in Offensive Security",
    excerpt: "An in-depth exploration of how artificial intelligence is transforming the landscape of offensive security, from automated penetration testing to intelligent exploit generation.",
    date: "June 11, 2025",
    readTime: "15 min read",
    slug: "/blog/ai-offensive-security"
  }
];

const BlogList = () => {
  const cameraRef = useRef<any>(null);
  
  const handleZoomIn = () => {
    if (cameraRef.current) {
      const currentDistance = cameraRef.current.object.position.length();
      const newDistance = Math.max(currentDistance * 0.8, 3);
      cameraRef.current.object.position.normalize().multiplyScalar(newDistance);
    }
  };
  
  const handleZoomOut = () => {
    if (cameraRef.current) {
      const currentDistance = cameraRef.current.object.position.length();
      const newDistance = Math.min(currentDistance * 1.25, 15);
      cameraRef.current.object.position.normalize().multiplyScalar(newDistance);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 py-8 max-w-4xl relative">
        {/* Header Navigation */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-cyan-500 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Blog List Header */}
        <header className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 font-serif relative"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Blog Posts
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 blur-lg -z-10 animate-pulse" />
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-muted-foreground"
          >
            Exploring the intersection of AI, cybersecurity, and offensive security research.
          </motion.p>
        </header>

        {/* Blog Posts 3D Scene */}
        <div className="h-[800px] w-full relative">
          {/* Zoom Controls */}
          <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
            <Button 
              variant="outline" 
              size="icon"
              onClick={handleZoomIn}
              className="bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10"
            >
              <ZoomIn className="w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={handleZoomOut}
              className="bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10"
            >
              <ZoomOut className="w-4 h-4" />
            </Button>
          </div>
          
          <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
            <Suspense fallback={null}>
              <Environment preset="night" />
              <ambientLight intensity={0.3} />
              <pointLight position={[10, 10, 10]} intensity={1} color="#06b6d4" />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
              
              {blogPosts.map((post, index) => (
                <BlogCard3D
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  readTime={post.readTime}
                  slug={post.slug}
                  position={[index * 5 - 2.5, 0, 0]}
                />
              ))}
              
              <OrbitControls 
                ref={cameraRef}
                enablePan={true}
                enableZoom={false}
                enableRotate={true}
                maxDistance={15}
                minDistance={3}
                enableDamping={true}
                dampingFactor={0.05}
              />
            </Suspense>
          </Canvas>
        </div>
        
        {/* Navigation Instructions */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm">
            Click and drag to rotate • Use zoom buttons to get closer • Double-click cards to read articles
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogList;