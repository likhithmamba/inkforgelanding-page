import { motion } from 'motion/react';
import React, { useRef, useState } from 'react';

const Box = ({ children, isHot = false }: { children: React.ReactNode, isHot?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    setRotation({ x: -y * 12, y: x * 12 });
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      opacity: 1
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setGlow(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ 
        rotateX: rotation.x, 
        rotateY: rotation.y,
        y: isHot && (rotation.x !== 0 || rotation.y !== 0) ? -22 : isHot ? -18 : (rotation.x !== 0 || rotation.y !== 0) ? -4 : 0
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`p-[50px_38px] cursor-none relative overflow-visible ${isHot ? 'bg-[#09090E]/90 border border-gold-1/30 glow-card' : 'bg-void border border-rule/50'}`}
      style={{
        transformStyle: 'preserve-3d',
        boxShadow: rotation.x !== 0 || rotation.y !== 0 ? `${-rotation.y * 3}px ${rotation.x * 3}px 50px rgba(138,31,46,0.3)` : 'none'
      }}
    >
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-400 z-0"
        style={{
          background: `radial-gradient(circle 240px at ${glow.x}% ${glow.y}%, ${isHot ? 'rgba(138,31,46,0.2)' : 'rgba(200,132,58,0.07)'}, transparent 65%)`,
          opacity: glow.opacity
        }}
      />
      {isHot && (
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-crimson/20 via-transparent to-transparent z-0 opacity-50" />
      )}
      <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </motion.div>
  );
};

export function Pricing() {
  return (
    <section id="pricing" className="py-[140px] px-12 bg-void">
      <div className="max-w-[1280px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="font-mono text-[9px] tracking-[4px] uppercase text-gold-1 flex items-center gap-3.5 mb-5">
            <div className="w-[26px] h-px bg-gold-1" /> Pricing
          </div>
          <h2 className="text-[clamp(38px,4.5vw,68px)] font-black leading-[1.0] tracking-[-1.5px] mb-5">
            Professional tools.<br/><em className="italic font-thin text-gold-1">No compromise on access.</em>
          </h2>
          <p className="font-mono text-[12.5px] leading-[1.9] text-muted max-w-[540px]">
            Priced for the market you are in. Indian writers pay in rupees via UPI and Razorpay. No dollar conversion. No exceptions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule border border-rule mt-[72px] relative" style={{ perspective: '900px' }}>
          <Box>
            <div className="font-mono text-[9px] tracking-[3px] uppercase text-muted mb-[18px]">Quill — Free</div>
            <div className="font-display text-[54px] italic font-thin leading-none mb-2 text-bone">₹<em className="not-italic text-bone">0</em><span className="text-[14px] text-muted not-italic ml-1">always</span></div>
            <div className="font-mono text-[10.5px] text-muted mb-[30px] pb-[30px] border-b border-rule leading-[1.6]">The complete writing environment at no cost.</div>
            <ul className="list-none mb-8">
              {['Full multilingual editor', 'Word count in any script', 'Spellcheck for supported languages', 'Writing streak and goal tracker', 'Standard manuscript export', 'DraftArchive — up to 5 versions'].map(item => (
                <li key={item} className="font-mono text-[10.5px] text-bone/50 py-2 border-b border-white/5 flex gap-[9px] items-baseline leading-[1.4]"><span className="text-gold-1 text-[9.5px] shrink-0">→</span> {item}</li>
              ))}
              {['Intelligence suite', 'Publisher-grade font export', 'Query & submission tools'].map(item => (
                <li key={item} className="font-mono text-[10.5px] text-[#2E2E3A] py-2 border-b border-white/5 flex gap-[9px] items-baseline leading-[1.4]"><span className="text-[#2E2E3A] text-[9.5px] shrink-0">—</span> {item}</li>
              ))}
            </ul>
            <a href="#" className="block w-full p-3 font-mono text-[9.5px] tracking-[2px] uppercase text-center border border-rule text-bone transition-colors hover:border-bone hover:bg-bone/5 cursor-none">Start Free</a>
          </Box>
          <Box isHot>
            <div className="absolute top-[-1px] left-1/2 -translate-x-1/2 bg-gold-1 text-void font-mono text-[8px] tracking-[2px] uppercase px-5 py-1.5">Chosen by Most Writers</div>
            <div className="font-mono text-[9px] tracking-[3px] uppercase text-muted mb-[18px]">Inkwell — Pro</div>
            <div className="font-display text-[54px] italic font-thin leading-none mb-2 text-bone"><sup className="text-[20px] not-italic">₹</sup><em className="not-italic text-bone">499</em><span className="text-[14px] text-muted not-italic ml-1">/month</span></div>
            <div className="font-mono text-[10.5px] text-muted mb-[30px] pb-[30px] border-b border-rule leading-[1.6]">The full intelligence suite and publishing tools.</div>
            <ul className="list-none mb-8">
              {['Everything in Quill', 'StoryPulse — live tension and pacing', 'ThreadKeeper — plot thread tracking', 'VoicePrint — character voice analysis', 'ChronoGuard — timeline & continuity', 'SceneWeight — scene density analysis', 'First Page Score', 'Publisher-grade multilingual export', 'AI feedback in your language · 200/month', 'DraftArchive — unlimited versions', 'Beta reader share links'].map(item => (
                <li key={item} className="font-mono text-[10.5px] text-bone/70 py-2 border-b border-white/5 flex gap-[9px] items-baseline leading-[1.4]"><span className="text-gold-1 text-[9.5px] shrink-0 drop-shadow-[0_0_5px_rgba(200,132,58,0.8)]">→</span> {item}</li>
              ))}
            </ul>
            <a href="#" className="block w-full p-3 font-mono text-[9.5px] tracking-[2px] uppercase text-center border border-transparent bg-gradient-to-r from-crimson to-gold-1 text-bone transition-all duration-300 hover:shadow-[0_0_20px_rgba(138,31,46,0.5)] cursor-none font-bold">Start Writing</a>
          </Box>
          <Box>
            <div className="font-mono text-[9px] tracking-[3px] uppercase text-muted mb-[18px]">Manuscript — Studio</div>
            <div className="font-display text-[54px] italic font-thin leading-none mb-2 text-bone"><sup className="text-[20px] not-italic">₹</sup><em className="not-italic text-bone">999</em><span className="text-[14px] text-muted not-italic ml-1">/month</span></div>
            <div className="font-mono text-[10.5px] text-muted mb-[30px] pb-[30px] border-b border-rule leading-[1.6]">For writers preparing for submission.</div>
            <ul className="list-none mb-8">
              {['Everything in Inkwell', 'Query letter generator', 'Synopsis at multiple lengths', 'Publisher submission packet', '1,000 AI sessions per month', 'Extended mode — full manuscript', 'Bring your own API key (BYOK)', 'Priority support'].map(item => (
                <li key={item} className="font-mono text-[10.5px] text-bone/50 py-2 border-b border-white/5 flex gap-[9px] items-baseline leading-[1.4]"><span className="text-gold-1 text-[9.5px] shrink-0">→</span> {item}</li>
              ))}
            </ul>
            <a href="#" className="block w-full p-3 font-mono text-[9.5px] tracking-[2px] uppercase text-center border border-rule text-bone transition-colors hover:border-bone hover:bg-bone/5 cursor-none">Go Studio</a>
          </Box>
        </div>
      </div>
    </section>
  );
}
