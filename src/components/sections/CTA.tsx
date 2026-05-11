import { motion } from 'motion/react';
import { MagneticButton } from '../MagneticButton';
import { useEffect, useState } from 'react';

export function CTA() {
  const [count, setCount] = useState('0');

  useEffect(() => {
    // Basic counter logic
    let startTimestamp: number | null = null;
    const duration = 2000;
    const target = 1300;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const val = Math.round(target * ease);
      setCount(`${val}M+`);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
         setCount('1.3B+');
      }
    };
    window.requestAnimationFrame(step);
  }, []);

  return (
    <section id="cta" className="min-h-screen grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden">
      {/* Left side */}
      <div className="bg-void p-[120px_60px] flex flex-col justify-center relative border-r border-rule z-10">
        <h2 className="text-[clamp(56px,7vw,110px)] font-black leading-[0.9] tracking-[-3px] mb-8">
          <span className="block overflow-hidden"><motion.span initial={{ y: '110%', opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }} className="inline-block">Your story.</motion.span></span>
          <span className="block overflow-hidden italic font-thin text-gold-1"><motion.span initial={{ y: '110%', opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }} className="inline-block">Your language.</motion.span></span>
          <span className="block overflow-hidden"><motion.span initial={{ y: '110%', opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }} className="inline-block">Your readers.</motion.span></span>
        </h2>
        <motion.p 
          className="font-mono text-xs text-muted max-w-[400px] mb-11 leading-[1.85]"
          initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.95 }}
        >
          The professional writing studio you have been waiting for. Every language. Every genre. Every market. Begin free — no credit card required.
        </motion.p>
        <motion.div 
          className="flex gap-3"
          initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.95, delay: 0.1 }}
        >
           <MagneticButton><span>Start Writing Free</span><span className="font-sans">→</span></MagneticButton>
           <MagneticButton primary={false}>Explore Features</MagneticButton>
        </motion.div>
      </div>

      {/* Right side */}
      <div className="bg-void relative overflow-hidden flex items-center justify-center min-h-[500px]">
        <motion.div 
          className="absolute w-[800px] h-[800px] rounded-full blur-[60px]"
          style={{ background: 'radial-gradient(circle, rgba(138,32,46,0.2) 0%, rgba(200,132,58,0.1) 40%, transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute w-[600px] h-[600px] rounded-full blur-[40px]"
          style={{ background: 'radial-gradient(circle, rgba(200,132,58,0.15) 0%, rgba(138,32,46,0.1) 40%, transparent 70%)' }}
          animate={{ scale: [1.12, 1, 1.12], rotate: [0, -90, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Orbit 1 */}
        <motion.div 
          className="absolute w-[400px] h-[400px] border border-gold-1/20 rounded-full shadow-[0_0_40px_rgba(138,31,46,0.3)]"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
           <span className="absolute -top-[14px] left-1/2 -translate-x-1/2 font-display text-[22px] text-gold-1 drop-shadow-[0_0_10px_rgba(200,132,58,0.8)]" style={{ transform: 'translateX(-50%) rotate(0deg)' }}>हि</span>
           <span className="absolute -right-[14px] top-1/2 -translate-y-1/2 font-display text-[22px] text-gold-1 drop-shadow-[0_0_10px_rgba(200,132,58,0.8)]" style={{ transform: 'translateY(-50%) rotate(-90deg)' }}>த</span>
           <span className="absolute -bottom-[14px] left-1/2 -translate-x-1/2 font-display text-[22px] text-gold-1 drop-shadow-[0_0_10px_rgba(200,132,58,0.8)]" style={{ transform: 'translateX(-50%) rotate(-180deg)' }}>ಕ</span>
           <span className="absolute -left-[14px] top-1/2 -translate-y-1/2 font-display text-[22px] text-gold-1 drop-shadow-[0_0_10px_rgba(200,132,58,0.8)]" style={{ transform: 'translateY(-50%) rotate(-270deg)' }}>తె</span>
        </motion.div>

        {/* Orbit 2 */}
        <motion.div 
          className="absolute w-[260px] h-[260px] border border-crimson/30 rounded-full shadow-[inset_0_0_30px_rgba(200,132,58,0.1)]"
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
           <span className="absolute -top-[12px] left-1/2 -translate-x-1/2 font-display text-[16px] text-crimson drop-shadow-[0_0_10px_rgba(138,31,46,0.8)]" style={{ transform: 'translateX(-50%) rotate(0deg)' }}>文</span>
           <span className="absolute -right-[12px] top-1/2 -translate-y-1/2 font-display text-[16px] text-crimson drop-shadow-[0_0_10px_rgba(138,31,46,0.8)]" style={{ transform: 'translateY(-50%) rotate(90deg)' }}>ع</span>
           <span className="absolute -bottom-[12px] left-1/2 -translate-x-1/2 font-display text-[16px] text-crimson drop-shadow-[0_0_10px_rgba(138,31,46,0.8)]" style={{ transform: 'translateX(-50%) rotate(180deg)' }}>বা</span>
           <span className="absolute -left-[12px] top-1/2 -translate-y-1/2 font-display text-[16px] text-crimson drop-shadow-[0_0_10px_rgba(138,31,46,0.8)]" style={{ transform: 'translateY(-50%) rotate(270deg)' }}>日</span>
        </motion.div>

        <div className="absolute z-10 text-center p-10 cursor-default">
          <div className="font-display text-[clamp(40px,5vw,80px)] italic font-black text-transparent bg-clip-text bg-gradient-to-br from-bone via-gold-1 to-crimson leading-none tracking-[-1px] animate-shimmer" style={{ textShadow: '0 0 40px rgba(200,132,58,0.3)' }}>{count}</div>
          <div className="font-mono text-[10px] tracking-[3px] uppercase text-gold-1/80 mt-3 drop-shadow-[0_0_5px_rgba(200,132,58,0.5)]">Writers without a studio</div>
        </div>
      </div>
    </section>
  );
}
