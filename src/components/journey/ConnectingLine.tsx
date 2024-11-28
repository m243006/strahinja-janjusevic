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
  const curveIntensity = 10; // Reduced from 15 for more subtle curves
  const horizontalOffset = Math.abs(end.x - start.x) * 0.2; // Add horizontal variation
  
  const controlPoint1X = start.x + horizontalOffset;
  const controlPoint1Y = midY - curveIntensity;
  
  const controlPoint2X = end.x - horizontalOffset;
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
        strokeWidth="1"
        strokeLinecap="round"
        className="text-cyan-500/5"
      />

      {/* Animated line */}
      <motion.path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeDasharray={pathLength}
        initial={{ strokeDashoffset: pathLength }}
        whileInView={{ strokeDashoffset: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="text-cyan-500"
        style={{
          filter: 'drop-shadow(0 0 3px rgb(6 182 212 / 0.2))',
        }}
      />

      {/* Subtle glow effect */}
      <motion.path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.25"
        strokeLinecap="round"
        strokeDasharray={pathLength}
        initial={{ strokeDashoffset: pathLength }}
        whileInView={{ strokeDashoffset: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="text-cyan-300"
        style={{
          filter: 'drop-shadow(0 0 1px rgb(6 182 212 / 0.3))',
        }}
      />
    </>
  );
};