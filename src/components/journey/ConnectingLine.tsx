import { motion, MotionValue, useTransform } from "framer-motion";

interface ConnectingLineProps {
  start: { x: number; y: number };
  end: { x: number; y: number };
  progress: MotionValue<number>;
  isActive: boolean;
}

export const ConnectingLine = ({ start, end, progress, isActive }: ConnectingLineProps) => {
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
        strokeWidth="4"
        strokeDasharray={pathLength}
        strokeDashoffset={isActive ? 0 : pathLength}
        className="text-cyan-500/50"
        style={{
          filter: 'drop-shadow(0 0 10px rgb(6 182 212 / 0.5))',
          transition: 'stroke-dashoffset 3s ease-out'
        }}
      />
      <motion.line
        x1={`${start.x}%`}
        y1={`${start.y}%`}
        x2={`${end.x}%`}
        y2={`${end.y}%`}
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray={pathLength}
        strokeDashoffset={isActive ? 0 : pathLength}
        className="text-cyan-500"
        style={{
          filter: 'drop-shadow(0 0 5px rgb(6 182 212 / 0.5))',
          transition: 'stroke-dashoffset 3s ease-out'
        }}
      />
    </motion.svg>
  );
};