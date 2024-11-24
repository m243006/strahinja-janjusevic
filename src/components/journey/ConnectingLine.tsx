import { motion } from "framer-motion";

interface ConnectingLineProps {
  start: { x: number; y: number };
  end: { x: number; y: number };
}

export const ConnectingLine = ({ start, end }: ConnectingLineProps) => {
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