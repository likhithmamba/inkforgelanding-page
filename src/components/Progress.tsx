import { motion, useScroll, useSpring } from 'motion/react';

export function Progress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[1.5px] origin-left z-[9800] bg-gradient-to-r from-gold-1 to-gold-2 pointer-events-none"
      style={{ scaleX }}
    />
  );
}
