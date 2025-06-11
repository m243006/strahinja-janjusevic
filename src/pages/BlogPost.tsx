
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const BlogPost = () => {
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

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-500 font-serif">
            The Cutting Edge: AI's Inevitable Rise in Offensive Security
          </h1>
          
          <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>By Strahinja Janjusevic</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>June 11, 2025</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>15 min read</span>
            </div>
          </div>

          {/* Table of Contents */}
          <Card className="bg-background/60 backdrop-blur border-cyan-500/20 mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-cyan-500 mb-4">Contents</h2>
              <ol className="space-y-2 text-sm">
                <li>1. <a href="#introduction" className="text-cyan-400 hover:text-cyan-300">Introduction: A New Era of Automated Hacking</a></li>
                <li>2. <a href="#three-paths" className="text-cyan-400 hover:text-cyan-300">Three Paths to AI-Powered Hacking</a>
                  <ol className="ml-4 mt-1 space-y-1">
                    <li>2.1 <a href="#fine-tuned" className="text-cyan-400 hover:text-cyan-300">Fine-Tuned Models: The Specialists</a></li>
                    <li>2.2 <a href="#modular" className="text-cyan-400 hover:text-cyan-300">LLM-Empowered Modular Frameworks: The Team Players</a></li>
                    <li>2.3 <a href="#agentic" className="text-cyan-400 hover:text-cyan-300">Agentic AI Systems: The Autonomous Operators</a></li>
                  </ol>
                </li>
                <li>3. <a href="#hurdles" className="text-cyan-400 hover:text-cyan-300">The Hurdles to Overcome</a></li>
                <li>4. <a href="#battlefield" className="text-cyan-400 hover:text-cyan-300">The New Battlefield: AI Across the Cyber Kill Chain</a></li>
                <li>5. <a href="#future" className="text-cyan-400 hover:text-cyan-300">Future Shock: What's on the Horizon?</a></li>
                <li>6. <a href="#conclusion" className="text-cyan-400 hover:text-cyan-300">Conclusion</a></li>
              </ol>
            </CardContent>
          </Card>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-3xl font-bold text-cyan-500 mb-6">1. Introduction: A New Era of Automated Hacking</h2>
            
            <p className="text-foreground leading-relaxed mb-6">
              The world of offensive security is undergoing a seismic shift, driven by the rapid advancements in 
              Artificial Intelligence. The recent raise of Large Language Models (LLMs) has unlocked unprecedented 
              possibilities for automating, enhancing, and even revolutionizing the craft of hacking. Where hacking 
              once relied exclusively on the deep expertise and time-intensive manual effort of human professionals, 
              we are now seeing the emergence of AI-powered tools that can reason, plan, and execute complex 
              attack sequences.
            </p>

            <p className="text-foreground leading-relaxed mb-6">
              These systems are no longer theoretical or science fiction; they are being actively developed and 
              benchmarked in a flurry of research. Some researchers focus on injecting deep domain knowledge 
              through fine-tuning, creating highly specialized experts. Others build complex, modular systems that 
              mimic human teams, delegating tasks to different AI agents. A third group pushes the boundaries of 
              autonomy with "agentic" AI, striving for systems that can operate with minimal human intervention.
            </p>

            <p className="text-foreground leading-relaxed mb-8">
              Navigating this new and complex landscape requires a clear map. This article delves into this cutting-
              edge domain, providing a comparative analysis of the most prominent frameworks. To ground our 
              discussion, the following table offers a comparative look at state of the art and our personal favourites, 
              charting their core strategies, key features, and operational trade-offs.
            </p>

            {/* Comparative Table */}
            <div className="overflow-x-auto mb-8">
              <Card className="bg-background/40 backdrop-blur border-cyan-500/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-cyan-500 mb-4">
                    Comparative Analysis of Offensive Security AI Frameworks
                  </h3>
                  <div className="text-sm space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border border-cyan-500/20 rounded">
                      <div className="font-semibold">Framework</div>
                      <div className="font-semibold">Approach & Memory</div>
                      <div className="font-semibold">Features & Reasoning</div>
                      <div className="font-semibold">Strengths & Weaknesses</div>
                    </div>
                    
                    {/* Sample entries - truncated for brevity */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border border-cyan-500/10 rounded">
                      <div className="font-medium text-cyan-400">PENTESTGPT</div>
                      <div>Modular LLM-empowered. PTT for status management.</div>
                      <div>Reasoning, Generation, & Parsing Modules</div>
                      <div>
                        <span className="text-green-400">Strengths:</span> Mitigates context loss<br/>
                        <span className="text-red-400">Weaknesses:</span> Relies on human intervention
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border border-cyan-500/10 rounded">
                      <div className="font-medium text-cyan-400">RedTeamLLM</div>
                      <div>Agentic AI. Memory Manager stores traces as tree.</div>
                      <div>7 components, dynamic plan correction</div>
                      <div>
                        <span className="text-green-400">Strengths:</span> High CTF competitiveness<br/>
                        <span className="text-red-400">Weaknesses:</span> PoC components immature
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="three-paths" className="mb-12">
            <h2 className="text-3xl font-bold text-cyan-500 mb-6">2. Three Paths to AI-Powered Hacking</h2>
            
            <p className="text-foreground leading-relaxed mb-8">
              The journey to harness LLMs for offensive security has diverged into three main architectural 
              philosophies, each with its own set of trade-offs.
            </p>

            <div id="fine-tuned" className="mb-8">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">2.1 Fine-Tuned Models: The Specialists</h3>
              <p className="text-foreground leading-relaxed mb-4">
                This approach involves taking a pre-trained LLM and further training it on vast, specialized datasets 
                from the cybersecurity domain. The strength of fine-tuning lies in achieving high accuracy and relevance 
                for specific, well-defined tasks. These models can achieve a high level of proficiency on narrow tasks, 
                leading to more accurate and contextually relevant outputs for known scenarios.
              </p>
            </div>

            <div id="modular" className="mb-8">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">2.2 LLM-Empowered Modular Frameworks: The Team Players</h3>
              <p className="text-foreground leading-relaxed mb-4">
                These systems use LLMs as intelligent components within a larger, structured architecture. They 
                often break down the penetration testing process into distinct phases managed by different modules, 
                mitigating LLM limitations like context loss by isolating concerns.
              </p>
            </div>

            <div id="agentic" className="mb-8">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">2.3 Agentic AI Systems: The Autonomous Operators</h3>
              <p className="text-foreground leading-relaxed mb-4">
                This is the most ambitious approach, aiming to create AI agents that can plan, execute, and adapt 
                to complex, long-duration tasks with minimal human supervision. RedTeamLLM exemplifies this 
                with an integrated architecture for automating pentesting tasks.
              </p>
            </div>
          </section>

          <section id="hurdles" className="mb-12">
            <h2 className="text-3xl font-bold text-cyan-500 mb-6">3. The Hurdles to Overcome</h2>
            <p className="text-foreground leading-relaxed mb-6">
              Despite the rapid progress, several fundamental challenges remain across all approaches. Context 
              loss is a central bottleneck; the limited context window of current LLMs directly impedes their ability 
              to conduct sophisticated operations that require recalling and synthesizing information over time.
            </p>
          </section>

          <section id="battlefield" className="mb-12">
            <h2 className="text-3xl font-bold text-cyan-500 mb-6">4. The New Battlefield: AI Across the Cyber Kill Chain</h2>
            <p className="text-foreground leading-relaxed mb-6">
              The advancements in AI have profound implications not just for isolated tasks, but for every stage of 
              the cyber kill chain. From initial reconnaissance to final exfiltration, AI agents are poised to enhance, 
              accelerate, and automate the entire attack lifecycle.
            </p>
          </section>

          <section id="future" className="mb-12">
            <h2 className="text-3xl font-bold text-cyan-500 mb-6">5. Future Shock: What's on the Horizon?</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-cyan-400 mb-4">AI-Generated Zero-Days</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  One of the most profound possibilities is the generation of AI-driven zero-day exploits. This represents 
                  the holy grail of hacking, where the discovery of vulnerabilities is no longer a purely human endeavor.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Autonomous Swarm Hacking</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  Picture a swarm of dozens or even hundreds of specialized AIs launched against a target network. 
                  Reconnaissance agents would map the terrain, vulnerability agents would test for weaknesses, and 
                  exploitation agents would act on findings, all coordinated as a parallel attack.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Hyper-Personalized Social Engineering</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  AI will also likely perfect the art of the con. The next generation of social engineering attacks will 
                  be deeply personalized and dynamically adaptive, generating hyper-personalized phishing emails that 
                  are indistinguishable from legitimate correspondence.
                </p>
              </div>
            </div>
          </section>

          <section id="conclusion" className="mb-12">
            <h2 className="text-3xl font-bold text-cyan-500 mb-6">6. Conclusion</h2>
            <p className="text-foreground leading-relaxed mb-6">
              The integration of AI into offensive security is no longer a theoretical exercise; it is a rapidly advancing 
              reality that is reshaping the cyber threat landscape. The development of fine-tuned specialists, 
              collaborative modular systems, and autonomous agents demonstrates a clear trajectory towards more 
              sophisticated and automated attack capabilities.
            </p>
            
            <p className="text-foreground leading-relaxed mb-6">
              As we move forward, the contest between attackers and defenders will increasingly become a high-speed, 
              machine-driven chess match. Success in this new era will not depend on simply reacting to threats, 
              but on proactively understanding and harnessing these powerful AI capabilities to build defenses that 
              are as intelligent, adaptive, and autonomous as the attacks they are designed to stop.
            </p>

            <div className="mt-8 p-6 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
              <p className="text-cyan-400 font-medium">
                The future of security belongs to those who can anticipate and innovate in this new AI-powered arena.
              </p>
            </div>
          </section>

          {/* References Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-cyan-500 mb-6">References</h2>
            <div className="text-sm space-y-2 text-muted-foreground">
              <p>[1] Deng, G., et al. (2024). PENTESTGPT: Evaluating and Harnessing Large Language Models for Automated Penetration Testing.</p>
              <p>[2] Pratama, D., et al. (2024). CIPHER: Cybersecurity Intelligent Penetration-Testing Helper for Ethical Researcher.</p>
              <p>[3] Challita, B. & Parrend, P. (2025). RedTeamLLM: an Agentic AI framework for offensive security.</p>
              <p>[4] Shen, X., et al. (2025). PentestAgent: Incorporating LLM Agents to Automated Penetration Testing.</p>
              <p>[5] Kong, H., et al. (2025). VulnBot: Autonomous Penetration Testing for A Multi-Agent Collaborative Framework.</p>
              {/* Additional references truncated for brevity */}
            </div>
          </section>
        </article>
      </div>
    </motion.div>
  );
};

export default BlogPost;
