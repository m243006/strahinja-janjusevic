
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import MatrixBackground from "./hero/MatrixBackground";
import AnimatedText from "./hero/AnimatedText";
import ProfileImage from "./hero/ProfileImage";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1561541178-a1689e8ac55f')] 
          bg-cover bg-center opacity-30 bg-fixed"
          style={{ filter: 'brightness(1.2) contrast(0.8) sepia(0.2)' }}
        />
        <MatrixBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative"
        >
          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden md:block"
          >
            <div className="writing-vertical-lr text-cyan-500 text-sm font-light tracking-wider">
              scroll down
            </div>
          </motion.div>

          <ProfileImage />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 100
            }}
            className="mt-6 md:mt-8"
          >
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 font-serif italic tracking-wider px-2">
              <motion.span
                className="inline-block text-cyan-500"
                whileHover={{ 
                  scale: 1.1,
                  color: "#00ffff",
                  textShadow: "0 0 8px rgba(0, 255, 255, 0.5)"
                }}
                style={{
                  textShadow: '0 0 10px rgba(6, 182, 212, 0.5)',
                  fontFamily: "'Playfair Display', serif"
                }}
              >
                Strahinja
              </motion.span>{" "}
              <motion.span
                className="inline-block text-cyan-500"
                whileHover={{ 
                  scale: 1.1,
                  color: "#00ffff",
                  textShadow: "0 0 8px rgba(0, 255, 255, 0.5)"
                }}
                style={{
                  textShadow: '0 0 10px rgba(6, 182, 212, 0.5)',
                  fontFamily: "'Playfair Display', serif"
                }}
              >
                Janjusevic
              </motion.span>
            </h1>
          </motion.div>
          <AnimatedText
            text="Master's student candidate in Technology and Policy at MIT, researching uses of AI in cybersecurity"
            className="text-lg md:text-2xl text-cyan-300 max-w-3xl mx-auto leading-relaxed font-serif px-4"
          />
          
          {/* Blog Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.6,
              type: "spring",
              stiffness: 100
            }}
            className="mt-8 md:mt-12"
          >
            <Link to="/blog">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-background/20 backdrop-blur border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-300 hover:border-cyan-400 transition-all duration-300 group"
              >
                <BookOpen className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Read My Blog
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
