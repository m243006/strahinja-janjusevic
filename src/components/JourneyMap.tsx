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
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1561541178-a1689e8ac55f')] 
          bg-cover bg-center opacity-90 bg-fixed"
          style={{ filter: 'brightness(0.9) contrast(1.1) sepia(0.3)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/10 to-background/20" />
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 font-serif italic tracking-wider text-amber-900"
          style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            fontFamily: "'Playfair Display', serif"
          }}
        >
          The Quest Continues
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