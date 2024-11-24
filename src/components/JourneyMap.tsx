import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  delay: number;
  details: string;
  position: { x: number; y: number };
  bgImage: string;
  expandedImages: string[];
}

const timeline: TimelineEvent[] = [
  {
    year: "2019-2023",
    title: "U.S. Naval Academy",
    description: "Dual degree in Cyber Operations and Computer Science",
    details: "Worked extensively with U.S. Military and NSA on cutting-edge cybersecurity projects. Led team initiatives and developed secure systems.",
    delay: 0.2,
    position: { x: 15, y: 15 },
    bgImage: "photo-1461749280684-dccba630e2f6",
    expandedImages: [
      "photo-1461749280684-dccba630e2f6",
      "photo-1588666309990-d68f08e3d4a6",
    ]
  },
  {
    year: "2022",
    title: "Microsoft Internship",
    description: "Developed tools for incident response",
    details: "Created automated incident response tools that improved response time by 40%. Collaborated with security teams across multiple divisions.",
    delay: 0.4,
    position: { x: 35, y: 35 },
    bgImage: "photo-1494891848038-7bd202a2afeb",
    expandedImages: [
      "photo-1494891848038-7bd202a2afeb",
      "photo-1633419461186-7d40a38105ec",
    ]
  },
  {
    year: "2023",
    title: "NASA Internship",
    description: "Visualizing solar data",
    details: "Developed innovative visualization tools for solar research data, enabling scientists to better understand solar phenomena and their effects on Earth.",
    delay: 0.6,
    position: { x: 65, y: 60 },
    bgImage: "photo-1472396961693-142e6e269027",
    expandedImages: [
      "photo-1472396961693-142e6e269027",
      "photo-1451187580459-43490279c0fa",
    ]
  },
  {
    year: "2023-Present",
    title: "MIT Graduate Research",
    description: "AI applications in cybersecurity",
    details: "Currently researching advanced AI applications in cybersecurity at MIT CSAIL, focusing on threat detection and automated response systems.",
    delay: 0.8,
    position: { x: 75, y: 85 },
    bgImage: "photo-1504893524553-b855bce32c67",
    expandedImages: [
      "photo-1504893524553-b855bce32c67",
      "photo-1620712943543-bcc4688e7485",
    ]
  }
];

const ConnectingLine = ({ start, end }: { start: { x: number; y: number }; end: { x: number; y: number } }) => {
  const pathLength = Math.sqrt(
    Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)
  );

  return (
    <motion.svg
      className="absolute top-0 left-0 w-full h-full"
      style={{ overflow: 'visible' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.line
        x1={`${start.x}%`}
        y1={`${start.y}%`}
        x2={`${end.x}%`}
        y2={`${end.y}%`}
        stroke="currentColor"
        strokeWidth="3"
        strokeDasharray={pathLength}
        strokeDashoffset={pathLength}
        variants={{
          hidden: { strokeDashoffset: pathLength },
          visible: {
            strokeDashoffset: 0,
            transition: { duration: 2, ease: "easeInOut" }
          }
        }}
        className="text-purple-400/70"
      />
    </motion.svg>
  );
};

const TimelineCard = ({ event }: { event: TimelineEvent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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
        <div 
          className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-72 h-48"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(https://images.unsplash.com/${event.bgImage})`,
              filter: 'brightness(0.9)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
          <div className="relative p-6 text-white">
            <h3 className="text-xl font-bold mb-1">{event.title}</h3>
            <p className="text-sm text-white/90 mb-2">{event.year}</p>
            <p className="text-sm text-white/95">{event.description}</p>
          </div>
        </div>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{event.title}</DialogTitle>
            <DialogDescription>
              <p className="text-sm text-muted-foreground mb-4">{event.year}</p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {event.expandedImages.map((image, index) => (
                  <div 
                    key={index}
                    className="relative aspect-video cursor-pointer overflow-hidden rounded-lg"
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <img
                      src={`https://images.unsplash.com/${image}`}
                      alt={`${event.title} image ${index + 1}`}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                ))}
              </div>
              <p className="text-base leading-relaxed">{event.details}</p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

const JourneyMap = () => {
  return (
    <div className="min-h-screen relative py-20">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b')] 
          bg-cover bg-center opacity-60 bg-fixed scale-125"
          style={{ filter: 'brightness(1.2) contrast(0.8)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background/50" />
      </div>
      
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

        <div className="relative h-[1500px]">
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