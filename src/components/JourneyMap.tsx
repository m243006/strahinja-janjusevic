
import { motion, useScroll, useTransform } from "framer-motion";
import { ConnectingLine } from "./journey/ConnectingLine";
import { TimelineCard } from "./journey/TimelineCard";
import { timeline } from "./journey/TimelineEvent";
import { useRef } from "react";
import MatrixBackground from "./hero/MatrixBackground";
import SocialLinks from "./SocialLinks";
import InteractiveCube from "./InteractiveCube";

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
    "Big Hackaton in Sarajevo hosted by SarAI (May) 🤖",
    "Researching: Cybersecurity in Maritime Industry 🔒",
  ];

  const cubeCards = [
    {
      image: "/lovable-uploads/Peop.PNG",
      title: "50656f706c65204d6174746572",
      description: "436f6e6e656374696f6e2c20636f6c6c61626f726174696f6e2c20636f6d70617373696f6e"
    },
    {
      image: "/lovable-uploads/Friends.PNG",
      title: "467269656e6473",
      description: "4d656d6f7269657320616e6420747269756d706873"
    },
    {
      image: "/lovable-uploads/Fam.PNG",
      title: "46616d696c79",
      description: "507572706f736520616e6420737570706f7274"
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
          </div>
        </div>
      </div>

      {/* Interactive 3D Cube */}
      <div className="container mx-auto px-4 py-8">
        <InteractiveCube cards={cubeCards} />
      </div>

      <div className="py-6 md:py-10 relative z-50">
        <SocialLinks />
      </div>
    </>
  );
};

export default JourneyMap;
