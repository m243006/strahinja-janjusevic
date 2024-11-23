import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  delay: number;
  details: string;
  position: { x: number; y: number };
}

const timeline: TimelineEvent[] = [
  {
    year: "2019-2023",
    title: "U.S. Naval Academy",
    description: "Dual degree in Cyber Operations and Computer Science",
    details: "Worked extensively with U.S. Military and NSA on cutting-edge cybersecurity projects. Led team initiatives and developed secure systems.",
    delay: 0.2,
    position: { x: 15, y: 15 }
  },
  {
    year: "2022",
    title: "Microsoft Internship",
    description: "Developed tools for incident response",
    details: "Created automated incident response tools that improved response time by 40%. Collaborated with security teams across multiple divisions.",
    delay: 0.4,
    position: { x: 35, y: 45 }
  },
  {
    year: "2023",
    title: "NASA Internship",
    description: "Visualizing solar data",
    details: "Developed innovative visualization tools for solar research data, enabling scientists to better understand solar phenomena and their effects on Earth.",
    delay: 0.6,
    position: { x: 65, y: 25 }
  },
  {
    year: "2023-Present",
    title: "MIT Graduate Research",
    description: "AI applications in cybersecurity",
    details: "Currently researching advanced AI applications in cybersecurity at MIT CSAIL, focusing on threat detection and automated response systems.",
    delay: 0.8,
    position: { x: 85, y: 55 }
  }
];

const Footstep = ({ rotate, x, y, delay }: { rotate: number; x: number; y: number; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, delay }}
    className="absolute"
    style={{
      transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`,
    }}
  >
    <img
      src="/lovable-uploads/cd8244b2-2862-4d63-96f7-550d95019af6.png"
      alt="footstep"
      className="w-6 h-6 opacity-30"
    />
  </motion.div>
);

const TimelineCard = ({ event }: { event: TimelineEvent }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: event.delay }}
        viewport={{ once: true }}
        className="absolute cursor-pointer"
        style={{
          left: `${event.position.x}%`,
          top: `${event.position.y}%`,
        }}
        onClick={() => setIsOpen(true)}
      >
        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-64">
          <h3 className="text-lg font-bold text-gray-800">{event.title}</h3>
          <p className="text-sm text-gray-600">{event.year}</p>
          <p className="text-sm text-gray-700 mt-2">{event.description}</p>
        </div>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{event.title}</DialogTitle>
            <DialogDescription>
              <p className="text-sm text-muted-foreground mb-2">{event.year}</p>
              <p className="text-sm">{event.details}</p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

const JourneyMap = () => {
  const footsteps = timeline.slice(0, -1).flatMap((_, index) => {
    const start = timeline[index].position;
    const end = timeline[index + 1].position;
    const steps = 8; // Increased number of footsteps between points
    
    return Array.from({ length: steps }, (_, stepIndex) => {
      const progress = stepIndex / steps;
      const x = start.x + (end.x - start.x) * progress;
      const y = start.y + (end.y - start.y) * progress;
      const angle = Math.atan2(end.y - start.y, end.x - start.x) * (180 / Math.PI);
      
      return {
        x,
        y,
        rotate: angle + (stepIndex % 2 ? 30 : -30),
        delay: index * 0.2 + stepIndex * 0.1 // Sequential delay for footsteps
      };
    });
  });

  return (
    <div className="min-h-screen relative py-20">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b')] 
          bg-cover bg-center opacity-20 bg-fixed"
          style={{ filter: 'brightness(1.2) contrast(0.8)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/70" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16 text-gray-800"
        >
          My Journey
        </motion.h2>

        <div className="relative h-[600px]">
          {footsteps.map((step, index) => (
            <Footstep
              key={index}
              rotate={step.rotate}
              x={step.x}
              y={step.y}
              delay={step.delay}
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