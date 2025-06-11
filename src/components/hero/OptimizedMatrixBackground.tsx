
import { useEffect, useRef, useState } from "react";

const OptimizedMatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const chars = "01";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(1);

    let lastTime = 0;
    const targetFPS = 30; // Reduced FPS for better performance
    const frameInterval = 1000 / targetFPS;

    const draw = (currentTime: number) => {
      if (currentTime - lastTime < frameInterval) {
        animationRef.current = requestAnimationFrame(draw);
        return;
      }

      lastTime = currentTime;

      // Reduced opacity change for better performance
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0f0';
      ctx.font = `${fontSize}px monospace`;

      // Process fewer drops per frame for better performance
      const dropsToProcess = Math.min(columns, 20);
      for (let i = 0; i < dropsToProcess; i++) {
        const randomIndex = Math.floor(Math.random() * columns);
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, randomIndex * fontSize, drops[randomIndex] * fontSize);
        
        if (drops[randomIndex] * fontSize > canvas.height && Math.random() > 0.98) {
          drops[randomIndex] = 0;
        }
        drops[randomIndex]++;
      }

      if (isVisible) {
        animationRef.current = requestAnimationFrame(draw);
      }
    };

    animationRef.current = requestAnimationFrame(draw);

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [isVisible]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-20 transition-opacity duration-1000 ease-in-out"
      style={{ 
        filter: 'hue-rotate(180deg) brightness(1.2)',
        mixBlendMode: 'screen',
        pointerEvents: 'none'
      }}
    />
  );
};

export default OptimizedMatrixBackground;
