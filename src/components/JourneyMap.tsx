import { motion, useScroll, useTransform } from "framer-motion";
import { ConnectingLine } from "./journey/ConnectingLine";
import { TimelineCard } from "./journey/TimelineCard";
import { timeline } from "./journey/TimelineEvent";
import { useRef } from "react";
import MatrixBackground from "./hero/MatrixBackground";
import SocialLinks from "./SocialLinks";

const JourneyMap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const mapScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]); // Reduced scale even more
  const mapY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]); // Reduced movement
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <>
      <div className="min-h-screen relative py-20" ref={containerRef}>
        <motion.div 
          className="fixed inset-0 z-0"
          style={{ scale: mapScale, y: mapY, opacity }}
          initial={false}
        >
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1561541178-a1689e8ac55f')] 
            bg-cover bg-center opacity-40 bg-fixed"
            style={{ filter: 'brightness(0.7) contrast(1.2) hue-rotate(180deg)' }}
          />
          <MatrixBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-30">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 font-serif italic tracking-wider text-cyan-500"
            style={{
              textShadow: '0 0 20px rgba(6, 182, 212, 0.5)',
              fontFamily: "'Playfair Display', serif"
            }}
          >
            My Journey
          </h2>

          <div className="relative h-[2000px]">
            <svg 
              className="absolute inset-0 w-full h-full" 
              style={{ zIndex: 24 }}
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {timeline.slice(0, -1).map((event, index) => (
                <ConnectingLine
                  key={index}
                  start={event.position}
                  end={timeline[index + 1].position}
                  progress={scrollYProgress}
                />
              ))}
            </svg>
            
            {timeline.map((event, index) => (
              <TimelineCard 
                key={index} 
                event={event}
              />
            ))}
          </div>
        </div>
      </div>
      <SocialLinks />
    </>
  );
};

export default JourneyMap;