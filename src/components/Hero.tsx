import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* World Map Background with better visibility */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b')] 
          bg-cover bg-center opacity-30 bg-fixed"
          style={{ filter: 'brightness(1.2) contrast(0.8)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full animate-pulse"></div>
              <img
                src="/lovable-uploads/e13cb1d2-d97e-4c13-843e-db26f2cd5635.png"
                alt="Profile"
                className="w-full h-full object-cover rounded-full relative z-10 border-4 border-white shadow-lg"
              />
            </div>
          </div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text"
          >
            Strahinja Janjusevic
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Master's student in Technology and Policy at MIT, focusing on cybersecurity and AI policy
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;