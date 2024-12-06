import { motion, useScroll, useTransform } from "framer-motion";
import { ConnectingLine } from "./journey/ConnectingLine";
import { TimelineCard } from "./journey/TimelineCard";
import { timeline } from "./journey/TimelineEvent";
import { useRef } from "react";
import MatrixBackground from "./hero/MatrixBackground";
import SocialLinks from "./SocialLinks";
import { Card, CardContent } from "./ui/card";

const JourneyMap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const mapScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const mapY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  const staticCards = [
    {
      image: "photo-1649972904349-6e44c42644a7",
      title: "Remote Work Setup",
      description: "Dedicated workspace for focused development and research",
      position: { x: 65, y: 15 }
    },
    {
      image: "photo-1519389950473-47ba0277781c",
      title: "Team Collaboration",
      description: "Working with brilliant minds across different projects",
      position: { x: 55, y: 45 }
    },
    {
      image: "photo-1581090464777-f3220bbe1b8b",
      title: "Innovation Focus",
      description: "Always exploring new ideas and technologies",
      position: { x: 60, y: 75 }
    }
  ];

  return (
    <>
      <div className="min-h-screen relative pt-5 pb-10" ref={containerRef}>
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
            className="text-4xl md:text-5xl font-bold text-center mb-8 font-serif italic tracking-wider text-cyan-500"
            style={{
              textShadow: '0 0 20px rgba(6, 182, 212, 0.5)',
              fontFamily: "'Playfair Display', serif"
            }}
          >
            My Journey
          </h2>

          <div className="relative h-[1500px]">
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

            {staticCards.map((card, index) => (
              <div
                key={index}
                className="absolute w-64"
                style={{
                  left: `${card.position.x}%`,
                  top: `${card.position.y}%`,
                  zIndex: 25
                }}
              >
                <Card className="bg-background/80 backdrop-blur border-cyan-500/20">
                  <CardContent className="p-4">
                    <div className="aspect-video overflow-hidden rounded-lg mb-4">
                      <img
                        src={`https://images.unsplash.com/${card.image}`}
                        alt={card.title}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-cyan-500 mb-2">{card.title}</h3>
                    <p className="text-muted-foreground">{card.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-10">
        <SocialLinks />
      </div>
    </>
  );
};

export default JourneyMap;
