import { motion, useScroll, useTransform } from "framer-motion";
import { ConnectingLine } from "./journey/ConnectingLine";
import { TimelineCard } from "./journey/TimelineCard";
import { timeline } from "./journey/TimelineEvent";
import { useRef } from "react";

const JourneyMap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const mapScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const mapY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <div className="min-h-screen relative py-20" ref={containerRef}>
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ scale: mapScale, y: mapY }}
      >
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2874&auto=format')] 
          bg-cover bg-center opacity-80 bg-fixed"
          style={{ filter: 'brightness(1.2) contrast(0.8) saturate(1.2)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background/30" />
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
        >
          My Journey
        </motion.h2>

        <div className="relative h-[2000px]">
          {timeline.slice(0, -1).map((event, index) => (
            <ConnectingLine
              key={index}
              start={event.position}
              end={timeline[index + 1].position}
            />
          ))}
          
          {timeline.map((event, index) => (
            <TimelineCard key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneyMap;