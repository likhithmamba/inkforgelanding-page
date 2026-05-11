import { motion } from 'motion/react';
import React, { useState } from 'react';

const CountUp = ({ to, suffix = '' }: { to: number; suffix?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {to === 0 ? "0" : to > 1000 ? `${(to/1000).toFixed(1)}K+` : to}{suffix}
    </motion.div>
  );
};

const LegacyCard = ({ title, desc, icon }: { title: string, desc: string, icon: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div 
      className="p-8 bg-void border border-rule relative overflow-hidden group cursor-none transition-all duration-500 hover:border-gold-1/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="absolute inset-0 bg-gold-1 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" 
        style={{
          background: 'radial-gradient(circle at center, var(--color-gold-1) 0%, transparent 70%)'
        }}
      />
      
      {/* Animated corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold-1/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold-1/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="font-mono text-[10px] tracking-[2px] uppercase text-muted mb-6 flex items-center gap-3">
          <span className="text-gold-1/50">{icon}</span> {title}
        </div>
        <div className="font-display text-[15px] leading-[1.7] text-bone/80 group-hover:text-bone transition-colors duration-300 relative">
          {desc}
          <motion.div 
             className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-0 bg-gold-1"
             animate={{ height: isHovered ? '80%' : '0%' }}
             transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </div>
  );
};

export function Statement() {
  const lineVariants = {
    hidden: { y: '105%', opacity: 0 },
    visible: { 
      y: '0%', 
      opacity: 1,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section id="statement" className="py-[160px] px-12 bg-void relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gold-1/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-[clamp(44px,6vw,84px)] font-black leading-[1.05] tracking-[-2px] overflow-hidden drop-shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.08 }}
        >
          <div className="overflow-hidden inline-block mr-4"><motion.span variants={lineVariants} className="inline-block">The industry built</motion.span></div>
          <div className="overflow-hidden inline-block"><motion.span variants={lineVariants} className="inline-block">tools for English.</motion.span></div>
          <br/>
          <div className="overflow-hidden inline-block mr-4"><motion.span variants={lineVariants} className="inline-block">Every other language</motion.span></div>
          <div className="overflow-hidden inline-block"><motion.span variants={lineVariants} className="inline-block text-gold-1 italic font-thin">was an afterthought.</motion.span></div>
        </motion.div>

        <motion.div 
          className="mt-[80px]"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-start mb-[80px]">
            <div className="relative">
              <div className="absolute top-0 left-[-20px] w-1 h-[80%] bg-rule" />
              <p className="font-mono text-[13px] leading-[1.9] text-muted max-w-[480px]">
                Scrivener, Sudowrite, and NovelCrafter are exceptional — if you write in English. But the moment you switch to Hindi, Tamil, Arabic, or Japanese, the architecture breaks. Fonts crash during export. Word counts fail. AI assistants return gibberish or hallucinate phrasing.
              </p>
              <br/>
              <p className="font-mono text-[13px] leading-[1.9] text-bone max-w-[480px]">
                We stripped the English-first assumption down to the code. Inkforge is the first studio engineered identically for every script on Earth.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <LegacyCard 
                icon="01" 
                title="Word Count" 
                desc="Legacy tools count characters instead of words for scripts like Devanagari. Inkforge counts true semantic words." 
              />
              <LegacyCard 
                icon="02" 
                title="Intelligence" 
                desc="Other AIs don't grasp native narrative structures, enforcing Western character arcs. Ours understands tone." 
              />
              <LegacyCard 
                icon="03" 
                title="Formatting" 
                desc="PDF exports drop unicode glyphs in older tools. Inkforge embeds universal publisher-grade typography natively." 
              />
              <LegacyCard 
                icon="04" 
                title="Punctuation" 
                desc="Standard editors misinterpret Indic quote marks and breaks. We built a parser specifically for non-Latin syntax." 
              />
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-px bg-rule border border-rule mt-12 relative overflow-hidden group/stats">
            <div className="absolute inset-0 bg-gold-1/5 translate-x-[-100%] group-hover/stats:translate-x-[100%] transition-transform duration-1000" />
            <div className="p-8 bg-ink hover:bg-surface transition-colors cursor-none relative z-10 flex flex-col justify-end min-h-[140px]">
              <div className="font-display text-[48px] font-black text-gold-1 leading-none mb-3"><CountUp to={9} /></div>
              <div className="font-mono text-[10px] text-bone/60 tracking-[1px] uppercase">Intelligence systems</div>
            </div>
            <div className="p-8 bg-ink hover:bg-surface transition-colors cursor-none relative z-10 flex flex-col justify-end min-h-[140px]">
              <div className="font-display text-[48px] font-black text-gold-1 leading-none mb-3"><CountUp to={0} /></div>
              <div className="font-mono text-[10px] text-bone/60 tracking-[1px] uppercase">Competitors at this level</div>
            </div>
            <div className="p-8 bg-ink hover:bg-surface transition-colors cursor-none relative z-10 flex flex-col justify-end min-h-[140px]">
              <div className="font-display text-[48px] font-black text-gold-1 leading-none mb-3"><CountUp to={1300} suffix="M+" /></div>
              <div className="font-mono text-[10px] text-bone/60 tracking-[1px] uppercase">Writers left behind</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
