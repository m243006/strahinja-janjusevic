import { motion, useScroll, useTransform } from "framer-motion";
import { ConnectingLine } from "./journey/ConnectingLine";
import { TimelineCard } from "./journey/TimelineCard";
import { timeline } from "./journey/TimelineEvent";
import { useRef, useState } from "react";
import MatrixBackground from "./hero/MatrixBackground";

const JourneyMap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPoint, setCurrentPoint] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const mapScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const mapY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  const handlePointClick = (index: number) => {
    setCurrentPoint(index + 1);
  };

  return (
    <div className="min-h-screen relative py-20" ref={containerRef}>
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ scale: mapScale, y: mapY, opacity }}
      >
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1561541178-a1689e8ac55f')] 
          bg-cover bg-center opacity-40 bg-fixed transition-opacity duration-1000 z-0"
          style={{ filter: 'brightness(0.7) contrast(1.2) hue-rotate(180deg)' }}
        />
        <div className="absolute inset-0 z-10">
          <MatrixBackground />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80 z-20" />
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-30">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 font-serif italic tracking-wider text-cyan-500"
          style={{
            textShadow: '0 0 20px rgba(6, 182, 212, 0.5)',
            fontFamily: "'Playfair Display', serif"
          }}
        >
          My Journey
        </motion.h2>

        <div className="relative h-[2000px]">
          {timeline.slice(0, -1).map((event, index) => (
            <ConnectingLine
              key={index}
              start={event.position}
              end={timeline[index + 1].position}
              progress={scrollYProgress}
              isActive={index < currentPoint}
            />
          ))}
          
          {timeline.map((event, index) => (
            <TimelineCard 
              key={index} 
              event={event} 
              onPointClick={() => handlePointClick(index)}
              isActive={index < currentPoint}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneyMap;