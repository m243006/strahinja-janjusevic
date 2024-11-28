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

  // Calculate control points for a more natural S-curve
  const midY = (start.y + end.y) / 2;
  const curveIntensity = 15; // Controls how much the line curves
  
  const controlPoint1X = start.x + (end.x - start.x) * 0.25;
  const controlPoint1Y = midY - curveIntensity;
  
  const controlPoint2X = start.x + (end.x - start.x) * 0.75;
  const controlPoint2Y = midY + curveIntensity;
  
  const path = `
    M ${start.x} ${start.y}
    C ${controlPoint1X} ${controlPoint1Y} ${controlPoint2X} ${controlPoint2Y} ${end.x} ${end.y}
  `;

  return (
    <>
      {/* Background line */}
      <path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-cyan-500/5"
      />

      {/* Animated line */}
      <motion.path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray={pathLength}
        initial={{ strokeDashoffset: pathLength }}
        whileInView={{ strokeDashoffset: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="text-cyan-500"
        style={{
          filter: 'drop-shadow(0 0 4px rgb(6 182 212 / 0.3))',
        }}
      />

      {/* Subtle glow effect */}
      <motion.path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeDasharray={pathLength}
        initial={{ strokeDashoffset: pathLength }}
        whileInView={{ strokeDashoffset: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="text-cyan-300"
        style={{
          filter: 'drop-shadow(0 0 2px rgb(6 182 212 / 0.5))',
        }}
      />
    </>
  );
};