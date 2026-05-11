import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

export function Cursor() {
  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);
  const speedScale = useMotionValue(1);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const dotX = useTransform(mouseX, x => x - 3);
  const dotY = useTransform(mouseY, y => y - 3);
  const ringX = useTransform(cursorX, x => x - 18);
  const ringY = useTransform(cursorY, y => y - 18);

  const [hoverState, setHoverState] = useState<'normal' | 'hover' | 'clicking'>('normal');

  useEffect(() => {
    let lastX = mouseX.get();
    let lastY = mouseY.get();

    const updateMousePosition = (e: MouseEvent) => {
      const vx = e.clientX - lastX;
      const vy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      const speed = Math.hypot(vx, vy);
      speedScale.set(1 + Math.min(speed * 0.009, 0.35));
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.cursor-none')
      ) {
        setHoverState(prev => prev === 'clicking' ? 'clicking' : 'hover');
      } else {
        setHoverState(prev => prev === 'clicking' ? 'clicking' : 'normal');
      }
    };
    
    const handleMouseDown = () => setHoverState('clicking');
    const handleMouseUp = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.cursor-none')
      ) {
        setHoverState('hover');
      } else {
        setHoverState('normal');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const transformScaleRing = useTransform(speedScale, s => {
    if (hoverState === 'hover') return 1.5;
    if (hoverState === 'clicking') return 0.8;
    return s;
  });

  return (
    <>
      {/* The Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-gold-1 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: dotX, y: dotY }}
        animate={{
          scale: hoverState === 'hover' ? 0.5 : hoverState === 'clicking' ? 0.8 : 1
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.1 }}
      />
      {/* The Ring */}
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 border rounded-full pointer-events-none z-[9998]"
        style={{ 
          x: ringX, 
          y: ringY, 
          scale: transformScaleRing 
        }}
        animate={{
          borderColor: hoverState === 'hover' ? 'rgba(200, 132, 58, 0.8)' : 'rgba(200, 132, 58, 0.5)'
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
