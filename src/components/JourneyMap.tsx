import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const timeline: TimelineEvent[] = [
  {
    year: "2020",
    title: "Started Programming",
    description: "Began my journey in software development",
  },
  {
    year: "2021",
    title: "First Project",
    description: "Launched my first major project",
  },
  {
    year: "2022",
    title: "Career Growth",
    description: "Expanded my skills and took on new challenges",
  },
  {
    year: "2023",
    title: "Current",
    description: "Working on exciting new ventures",
  },
];

const TimelineMarker = ({ event, index }: { event: TimelineEvent; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
    className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} mb-16`}
  >
    <div className={`w-1/2 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
        viewport={{ once: true }}
        className="inline-block bg-white p-6 rounded-lg shadow-lg"
      >
        <span className="text-sm font-medium text-purple-500 mb-2 block">
          {event.year}
        </span>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{event.title}</h3>
        <p className="text-gray-600">{event.description}</p>
      </motion.div>
    </div>
    <div className="relative">
      <div className="w-6 h-6 bg-purple-500 rounded-full relative z-10">
        <div className="w-12 h-12 bg-purple-200 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      </div>
    </div>
    <div className="w-1/2"></div>
  </motion.div>
);

const JourneyMap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  return (
    <div ref={containerRef} className="min-h-screen relative py-20 bg-gray-50">
      <div className="container mx-auto px-4">
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
          <motion.svg
            className="absolute left-1/2 transform -translate-x-1/2"
            width="4"
            height="100%"
            viewBox="0 0 4 1000"
            style={{ pathLength }}
          >
            <motion.path
              d="M 2 0 L 2 1000"
              stroke="#8B5CF6"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              className="journey-line"
              initial={{ pathLength: 0 }}
              style={{ pathLength }}
            />
          </motion.svg>

          <div className="space-y-12">
            {timeline.map((event, index) => (
              <TimelineMarker key={event.year} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyMap;