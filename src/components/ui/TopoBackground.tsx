import React, { useEffect, useRef } from 'react';

export const TopoBackground: React.FC<{ className?: string; opacity?: number }> = ({ className = '', opacity = 0.12 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = `rgba(229, 169, 60, ${opacity})`;
      ctx.lineWidth = 1;

      const linesCount = 8;
      for (let i = 0; i < linesCount; i++) {
        ctx.beginPath();
        const yOffset = (height / linesCount) * i;
        for (let x = 0; x < width; x += 30) {
          const wave1 = Math.sin(x * 0.003 + t + i * 0.4) * 45;
          const wave2 = Math.cos(x * 0.007 - t * 0.8 + i * 0.6) * 25;
          const y = yOffset + wave1 + wave2;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      t += 0.002;
      animationFrameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [opacity]);

  return <canvas ref={canvasRef} className={`absolute inset-0 pointer-events-none ${className}`} />;
};