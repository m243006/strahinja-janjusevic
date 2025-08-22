import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      className="min-h-screen bg-background"
    >
      <div className="container mx-auto px-4 py-8 max-w-4xl">
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

        {/* Blog Posts Grid */}
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-background/60 backdrop-blur border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-cyan-500 group-hover:text-cyan-400 transition-colors">
                    <Link to={post.slug} className="hover:underline">
                      {post.title}
                    </Link>
                  </CardTitle>
                  
                  <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      <span>By Strahinja Janjusevic</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    to={post.slug}
                    className="inline-flex items-center text-cyan-500 hover:text-cyan-400 transition-colors font-medium"
                  >
                    Read Full Article →
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BlogList;