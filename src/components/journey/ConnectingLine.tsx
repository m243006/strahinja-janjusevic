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

  // Calculate the control points for the curve
  const midX = (start.x + end.x) / 2;
  const midY = (start.y + end.y) / 2;
  
  // Create a curved path
  const path = `
    M ${start.x}% ${start.y}%
    Q ${midX}% ${start.y}% ${midX}% ${midY}%
    Q ${midX}% ${end.y}% ${end.x}% ${end.y}%
  `;

  return (
    <motion.svg
      className="absolute top-0 left-0 w-full h-full"
      style={{ overflow: 'visible' }}
    >
      {/* Glow effect base */}
      <motion.path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={pathLength}
        strokeDashoffset={isActive ? 0 : pathLength}
        transition={{ duration: 3.0 }}
        className="text-cyan-500/20"
        style={{
          filter: 'blur(8px)',
        }}
      />

      {/* Main line */}
      <motion.path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={pathLength}
        strokeDashoffset={isActive ? 0 : pathLength}
        transition={{ duration: 3.0 }}
        className="text-cyan-500"
        style={{
          filter: 'drop-shadow(0 0 8px rgb(6 182 212 / 0.5))',
        }}
      />

      {/* Bright center line */}
      <motion.path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray={pathLength}
        strokeDashoffset={isActive ? 0 : pathLength}
        transition={{ duration: 3.0 }}
        className="text-cyan-300"
        style={{
          filter: 'drop-shadow(0 0 3px rgb(6 182 212 / 1))',
        }}
      />
    </motion.svg>
  );
};