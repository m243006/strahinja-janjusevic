import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const McpBlogPost = () => {
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
            to="/blog"
            className="inline-flex items-center text-cyan-500 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-500 font-serif">
            The Next Leap in Offensive AI: MCP-Powered Swarm C2
          </h1>
          
          <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>By Strahinja Janjusevic</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>August 22, 2025</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>12 min read</span>
            </div>
          </div>

          {/* Table of Contents */}
          <Card className="bg-background/60 backdrop-blur border-cyan-500/20 mb-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-cyan-400">Table of Contents</h3>
              <nav className="space-y-2">
                <a href="#introduction" className="block text-muted-foreground hover:text-cyan-400 transition-colors">
                  1. Introduction: Building on Previous Work
                </a>
                <a href="#beyond-beaconing" className="block text-muted-foreground hover:text-cyan-400 transition-colors">
                  2. Beyond Beaconing: The Rise of Covert, Asynchronous C2
                </a>
                <a href="#edr-evasion" className="block text-muted-foreground hover:text-cyan-400 transition-colors">
                  3. EDR Evasion and the Polymorphic Swarm
                </a>
                <a href="#case-study" className="block text-muted-foreground hover:text-cyan-400 transition-colors">
                  4. A Real-World Case Study: Rapid Domain Compromise
                </a>
                <a href="#future" className="block text-muted-foreground hover:text-cyan-400 transition-colors">
                  5. The Future of Offensive AI is Collaborative and Covert
                </a>
              </nav>
            </CardContent>
          </Card>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none text-foreground">
          <section id="introduction" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">New Technologies bring new risks: MCP-Powered Swarm C2</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              In my last post, "The Cutting Edge: AI's Inevitable Rise in Offensive Security," I explored how AI is beginning to automate and augment red team operations. We're moving from manually driven tools to autonomous agents that can strategize and adapt. However, as the provided research paper,"MCP as a Malicious Control Protocol - Red Teaming with AI Agents,"highlights, many current generative red teaming methods face challenges like hallucinations, context limitations, and trade-offs between specialized models and more general, modular frameworks.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Today, I want to dive deep into a solution proposed in that paper that marks a paradigm shift for command and control (C2): the Model Context Protocol (MCP). This isn't just an incremental improvement; it's a new way of thinking about command and control.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Traditional C2 frameworks, for all their utility, operate on a predictable, rhythmic cycle: the implant "beacons" back to the C2 server to check for new commands. This regularity is a significant operational security (OPSEC) risk. Modern NDR solutions are specifically tuned to spot these patterns. Once an NDR flags that consistent heartbeat, the implant and the operation are burned.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              The MCP architecture fundamentally changes this model by enabling asynchronous, parallel operations without any periodic beaconing. Instead of a constant check-in, agents communicate covertly, blending their traffic with what looks like normal enterprise AI activity. This is the core of its strength: it hides in the noise of legitimate network chatter, making it exceptionally difficult for defenders to isolate.
            </p>

            <Card className="bg-cyan-950/20 border-cyan-400/30 p-6 my-8">
              <p className="text-cyan-200 mb-4">Our architecture (figure above) has 3 main components. The MCP agent has two legs of communication: one with the MCP server and another with the LLM Provider, in this case, Anthropic.</p>
              <ol className="list-decimal list-inside space-y-2 text-cyan-200">
                <li><strong>MCP Server:</strong> Where the high-level task is assigned and returned.</li>
                <li><strong>MCP Agent:</strong> Connects to the MCP Server to pick up the task, disconnects, and reports later. The MCP agent also has back-and-forth communication with the LLM API that is executing the attack.</li>
                <li><strong>Anthropic API:</strong> The actual attacker in this case. With a combination of a good system prompt and a high-level task, we are able to make the benign LLM conduct full exploits and report when the task is completed.</li>
              </ol>
            </Card>
          </section>

          <section id="beyond-beaconing" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Beyond Beaconing</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              The figure below illustrates a Cobalt Strike attack, clearly showing beaconing patterns. When the attacker engages, significant spikes represent large amounts of data being transmitted, primarily command outputs.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Conversely, the figure below demonstrates how communication appears with our agentic framework. This communication is event-driven; a task is assigned to an agent connected to the MCP. The agent picks up the task and closes the connection with the MCP server. After performing its task, the agent reconnects to the server and reports its findings. In the representation below, two such cases (two attacks) are depicted. The large blue spike in the second spike of each attack indicates the point where the agent sends back all important information.
            </p>
          </section>
        </article>

        {/* Author Bio */}
        <div className="mt-16 pt-8 border-t border-cyan-500/20">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              SJ
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Strahinja Janjusevic</h3>
              <p className="text-muted-foreground leading-relaxed">
                Cybersecurity researcher and AI enthusiast exploring the intersection of artificial intelligence 
                and offensive security. Focused on advancing the field through innovative research and practical applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default McpBlogPost;