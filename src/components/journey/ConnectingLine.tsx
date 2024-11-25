import { motion, MotionValue, useTransform } from "framer-motion";

interface ConnectingLineProps {
  start: { x: number; y: number };
  end: { x: number; y: number };
  progress: MotionValue<number>;
}

export const ConnectingLine = ({ start, end, progress }: ConnectingLineProps) => {
  const pathLength = Math.sqrt(
    Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)
  );

  const lineProgress = useTransform(
    progress,
    [0, 0.5, 1],
    [0, pathLength / 2, pathLength]
  );

  return (
    <motion.svg
      className="absolute top-0 left-0 w-full h-full"
      style={{ overflow: 'visible' }}
    >
      <motion.line
        x1={`${start.x}%`}
        y1={`${start.y}%`}
        x2={`${end.x}%`}
        y2={`${end.y}%`}
        stroke="currentColor"
        strokeWidth="3"
        strokeDasharray={pathLength}
        strokeDashoffset={lineProgress}
        className="text-primary/50"
        style={{
          filter: 'drop-shadow(0 0 10px var(--primary))',
        }}
      />
      <motion.line
        x1={`${start.x}%`}
        y1={`${start.y}%`}
        x2={`${end.x}%`}
        y2={`${end.y}%`}
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray={pathLength}
        strokeDashoffset={lineProgress}
        className="text-primary"
        style={{
          filter: 'drop-shadow(0 0 5px var(--primary))',
        }}
      />
    </motion.svg>
  );
};