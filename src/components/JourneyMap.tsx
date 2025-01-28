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

  const interests = [
    "Attending: Harvard European Conference: Leader or Dreamer? (Feb 1st) 🤖",
    "Attenging: National Security Conference: MIT 📚",
    "Building RAGs and Vertical AI agents 🛠️",
    "Researching: Cybersecuirty in Maritime Industry 🔒",
  ];

  const staticCards = [
    {
      image: "/lovable-uploads/People.PNG",
      title: "People Matter",
      description: "Through connection, collaboration, and compassion that we find purpose, create impact, and build a legacy that outlasts our individual achievements.",
      position: { x: 65, y: 15 }
    },
    {
      image: "/lovable-uploads/Friends.PNG",
      title: "Friends",
      description: "Turn moments into memories and challenges into triumphs.",
      position: { x: 75, y: 45 }
    },
    {
      image: "/lovable-uploads/Fam.PNG",
      title: "Family",
      description: "Purpose and support.",
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

        <div className="container mx-auto px-4 relative z-10">
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
              style={{ zIndex: 20 }}
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

            {/* Static cards - hidden on mobile */}
            <div className="hidden md:block">
              {staticCards.map((card, index) => (
                <div
                  key={index}
                  className="absolute w-64 cursor-pointer hover:scale-105 transition-transform duration-300"
                  style={{
                    left: `${card.position.x}%`,
                    top: `${card.position.y}%`,
                    zIndex: 40
                  }}
                >
                  <Card className="bg-background/80 backdrop-blur border-cyan-500/20 hover:border-cyan-500/40">
                    <CardContent className="p-4">
                      <div className="aspect-video overflow-hidden rounded-lg mb-4">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="object-contain w-full h-full transform hover:scale-110 transition-transform duration-300"
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

          {/* Add significant spacing before the Current Interests section */}
          <div className="mt-32">
            <h3 className="text-2xl font-bold text-center mb-4 text-cyan-500"
                style={{
                  textShadow: '0 0 10px rgba(6, 182, 212, 0.3)',
                  fontFamily: "'Playfair Display', serif"
                }}>
              Current Interests and Events
            </h3>

            {/* Running Tape */}
            <div className="w-full overflow-hidden my-8 bg-background/40 backdrop-blur-sm rounded-lg p-4">
              <motion.div
                animate={{
                  x: [0, -1000],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  }
                }}
                className="whitespace-nowrap inline-block"
              >
                {interests.map((interest, index) => (
                  <span key={index} className="mx-8 text-cyan-400 text-lg">
                    {interest}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 relative z-50">
        <SocialLinks />
      </div>
    </>
  );
};

export default JourneyMap;
