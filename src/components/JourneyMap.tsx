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
  <div
    className={`journey-marker flex items-center ${
      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
    }`}
  >
    <div
      className={`w-1/2 ${
        index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
      }`}
    >
      <div className="inline-block">
        <span className="text-sm font-medium text-gray-500 mb-2 block">
          {event.year}
        </span>
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        <p className="text-gray-600">{event.description}</p>
      </div>
    </div>
    <div className="w-4 h-4 bg-primary rounded-full relative z-10">
      <div className="w-8 h-8 bg-primary/20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
    </div>
    <div className="w-1/2"></div>
  </div>
);

const JourneyMap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    });

    const markers = document.querySelectorAll(".journey-marker");
    markers.forEach((marker) => observer.observe(marker));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen relative py-20">
      <div className="container mx-auto px-4">
        <div className="relative">
          <motion.svg
            className="absolute left-1/2 transform -translate-x-1/2"
            width="4"
            height="100%"
            viewBox="0 0 4 1000"
            initial={{ pathLength: 0 }}
            style={{ pathLength }}
          >
            <motion.path
              d="M 2 0 L 2 1000"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              className="text-primary"
              initial={{ pathLength: 0 }}
              style={{ pathLength }}
            />
          </motion.svg>

          <div className="space-y-24">
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