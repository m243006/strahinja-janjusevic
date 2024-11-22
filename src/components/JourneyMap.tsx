import { motion } from "framer-motion";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  delay: number;
}

const timeline: TimelineEvent[] = [
  {
    year: "2019-2023",
    title: "U.S. Naval Academy",
    description: "Dual degree in Cyber Operations and Computer Science, working with U.S. Military and NSA",
    delay: 0.2
  },
  {
    year: "2022",
    title: "Microsoft Internship",
    description: "Developed tools for incident response in cybersecurity",
    delay: 0.4
  },
  {
    year: "2023",
    title: "NASA Internship",
    description: "Worked on visualizing solar data for research applications",
    delay: 0.6
  },
  {
    year: "2023-Present",
    title: "MIT Graduate Research",
    description: "Researching AI applications in cybersecurity at MIT CSAIL",
    delay: 0.8
  }
];

const TimelineStep = ({ event, index }: { event: TimelineEvent; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: event.delay }}
    viewport={{ once: true, margin: "-100px" }}
    className="flex items-start gap-8 mb-16"
  >
    <div className="flex-shrink-0 w-32 text-right">
      <span className="text-sm font-medium text-purple-500">{event.year}</span>
    </div>
    <div className="relative">
      <div className="absolute -left-11 top-2">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: event.delay }}
          viewport={{ once: true }}
          className="w-6 h-6 bg-purple-500 rounded-full relative"
        >
          <div className="w-12 h-12 bg-purple-200 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: event.delay + 0.2 }}
        viewport={{ once: true }}
        className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg ml-4"
      >
        <h3 className="text-xl font-bold mb-2 text-gray-800">{event.title}</h3>
        <p className="text-gray-600">{event.description}</p>
      </motion.div>
    </div>
  </motion.div>
);

const JourneyMap = () => {
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

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-purple-200"></div>
          <div className="space-y-12">
            {timeline.map((event, index) => (
              <TimelineStep key={event.year} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyMap;