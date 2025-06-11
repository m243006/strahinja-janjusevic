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
    "Vectra AI Data Science Internship: Building AI Hackers 🤖",
    "Building RAGs and Vertical AI agents 🛠️",
    "Researching: Cybersecurity in Maritime Industry 🔒",
  ];

  const staticCards = [
    {
      image: "/lovable-uploads/Peop.PNG",
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
          {/* Current Interests Section */}
          <div className="mb-10 md:mb-20">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-4 text-cyan-500"
                style={{
                  textShadow: '0 0 10px rgba(6, 182, 212, 0.3)',
                  fontFamily: "'Playfair Display', serif"
                }}>
              Current Interests and Events
            </h3>

            {/* Running Tape - Mobile Optimized */}
            <div className="w-full overflow-hidden my-4 md:my-8 bg-background/40 backdrop-blur-sm rounded-lg p-2 md:p-4">
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
                  <span key={index} className="mx-4 md:mx-8 text-sm md:text-lg text-cyan-400">
                    {interest}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Journey Section */}
          <h2
            className="text-3xl md:text-5xl font-bold text-center mb-6 md:mb-8 font-serif italic tracking-wider text-cyan-500"
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
        </div>
      </div>

      {/* Mobile-only static cards */}
      <div className="md:hidden container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-4 mb-8">
          {staticCards.map((card, index) => (
            <Card key={index} className="bg-background/80 backdrop-blur border-cyan-500/20 hover:border-cyan-500/40 hover:scale-105 transition-transform duration-300">
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
                <p className="text-muted-foreground text-sm">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="py-6 md:py-10 relative z-50">
        <SocialLinks />
      </div>
    </>
  );
};

export default JourneyMap;
