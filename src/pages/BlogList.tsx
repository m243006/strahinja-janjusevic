import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Suspense } from "react";
import BlogCard3D from "@/components/blog/BlogCard3D";

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-500 font-serif">
            Blog Posts
          </h1>
          <p className="text-lg text-muted-foreground">
            Exploring the intersection of AI, cybersecurity, and offensive security research.
          </p>
        </header>

        {/* Blog Posts 3D Scene */}
        <div className="h-[800px] w-full">
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
                enablePan={true}
                enableZoom={false}
                enableRotate={true}
                maxDistance={15}
                minDistance={3}
              />
            </Suspense>
          </Canvas>
        </div>
        
        {/* Navigation Instructions */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm">
            Click and drag to rotate • Double-click cards to read articles
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogList;