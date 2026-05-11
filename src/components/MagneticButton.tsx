import { motion } from 'motion/react';
import React, { useRef, useState } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  primary?: boolean;
}

export function MagneticButton({ children, className = '', onClick, primary = true }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [bgPosition, setBgPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.28, y: y * 0.32 });
    
    setBgPosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  if (primary) {
    return (
      <motion.button
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        animate={{ x: position.x, y: position.y, scale: isHovered ? 1.04 : 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className={`relative inline-flex items-center justify-center gap-2.5 px-10 py-3.5 bg-gradient-to-r from-crimson to-gold-1 text-bone font-mono text-[9.5px] uppercase tracking-[2.5px] overflow-hidden ${className}`}
        style={{
          boxShadow: isHovered 
            ? '0 20px 40px rgba(138,31,46,0.5), inset 0 0 10px rgba(255,255,255,0.2)' 
            : '0 5px 20px rgba(138,31,46,0.3)',
          textShadow: '0 0 10px rgba(255,255,255,0.3)'
        }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-gold-1 to-crimson z-0 origin-center"
          animate={{
            clipPath: isHovered 
              ? `circle(150% at ${bgPosition.x}% ${bgPosition.y}%)` 
              : `circle(0% at ${bgPosition.x}% ${bgPosition.y}%)`
          }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        />
        <span className="relative z-10 flex items-center gap-2.5 font-bold">{children}</span>
      </motion.button>
    );
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{ x: position.x, y: position.y, scale: isHovered ? 1.04 : 1 }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`font-mono text-[9.5px] uppercase tracking-[2.5px] px-7 py-3.5 bg-transparent text-gold-1 border border-gold-1/30 hover:border-gold-1 hover:bg-gold-1/10 hover:shadow-[0_0_20px_rgba(200,132,58,0.2)] transition-all duration-300 ${className}`}
    >
      {children}
    </motion.button>
  );
}
