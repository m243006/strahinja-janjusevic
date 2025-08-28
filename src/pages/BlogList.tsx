import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

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

        {/* Blog Posts - Simplified Version */}
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-cyan-500/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-3 text-cyan-500 hover:text-cyan-400 transition-colors">
                <Link to={post.slug}>{post.title}</Link>
              </h2>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <Link
                to={post.slug}
                className="inline-flex items-center text-cyan-500 hover:text-cyan-400 transition-colors font-medium"
              >
                Read Full Article →
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BlogList;