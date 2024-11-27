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

  const midX = (start.x + end.x) / 2;
  const midY = (start.y + end.y) / 2;
  
  const path = `
    M ${start.x} ${start.y}
    Q ${midX} ${start.y} ${midX} ${midY}
    Q ${midX} ${end.y} ${end.x} ${end.y}
  `;

  return (
    <>
      <path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        className="text-cyan-500/20"
      />

      <motion.path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={pathLength}
        initial={{ strokeDashoffset: pathLength }}
        whileInView={{ strokeDashoffset: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="text-cyan-500"
        style={{
          filter: 'drop-shadow(0 0 8px rgb(6 182 212 / 0.5))',
        }}
      />

      <motion.path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray={pathLength}
        initial={{ strokeDashoffset: pathLength }}
        whileInView={{ strokeDashoffset: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="text-cyan-300"
        style={{
          filter: 'drop-shadow(0 0 3px rgb(6 182 212 / 1))',
        }}
      />
    </>
  );
};