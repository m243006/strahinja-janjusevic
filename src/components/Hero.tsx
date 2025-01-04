import { motion } from "framer-motion";
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
          className="text-center"
        >
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
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif italic tracking-wider">
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
            text="Master's student in Technology and Policy at MIT, researching uses of AI in cybersecurity"
            className="text-xl md:text-2xl text-cyan-300 max-w-3xl mx-auto leading-relaxed font-serif"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;