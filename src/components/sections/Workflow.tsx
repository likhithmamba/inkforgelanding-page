import { motion, useScroll, useSpring } from 'motion/react';
import { useRef } from 'react';

const STEPS = [
  { n: 'Part 1', name: 'The Manuscript', desc: 'Write natively in any language. The engine handles formatting, typography, and counting simultaneously.' },
  { n: 'Part 2', name: 'The Intelligence', desc: 'Nine systems read your story structure, tracking tension, threads, timelines, and character voice.' },
  { n: 'Part 3', name: 'The Submission', desc: 'Generate a complete, publisher-ready packet: manuscript, synopsis, and query letter in one click.' }
];

export function Workflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  const lineProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  return (
    <section id="workflow" className="py-[160px] px-12 bg-surface border-y border-rule relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-1/[0.02] rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-[1280px] mx-auto relative z-10" ref={containerRef}>
        <motion.div initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="font-mono text-[9px] tracking-[4px] uppercase text-gold-1 flex items-center gap-3.5 mb-6">
            <div className="w-[30px] h-px bg-gold-1" /> Foundation
          </div>
          <h2 className="text-[clamp(42px,5.5vw,76px)] font-black leading-[1.0] tracking-[-1.5px] text-bone mb-4 drop-shadow-lg">
             The creative process,<br/>
             <em className="italic font-thin text-transparent bg-clip-text bg-gradient-to-r from-gold-1 to-[#E8A855] drop-shadow-sm">streamlined.</em>
          </h2>
          <p className="font-mono text-[13px] leading-[1.9] text-muted max-w-[500px]">
             From the first blank page to the final query letter. Three distinct phases engineered to keep you focused on the narrative.
          </p>
        </motion.div>

        <div className="mt-24 pl-8 md:pl-0">
          <div className="relative">
            {/* The line */}
            <div className="absolute left-[39px] top-4 bottom-4 w-px bg-rule hidden md:block" />
            <motion.div 
              className="absolute left-[39px] top-4 origin-top w-px bg-gradient-to-b from-gold-1 via-[#40D8A8] to-gold-2 hidden md:block"
              style={{ scaleY: lineProgress, height: '100%' }}
            />
            
            <div className="flex flex-col gap-[60px] md:gap-[80px]">
              {STEPS.map((s, i) => (
                <div key={i} className="flex flex-col md:flex-row items-start gap-8 md:gap-16 relative group cursor-none">
                  <div className="hidden md:flex flex-col items-center z-10 relative mt-2 shrink-0">
                    <div className="w-[80px] h-[80px] rounded-full bg-void border border-rule group-hover:border-gold-1/30 flex items-center justify-center font-display text-[32px] font-black italic text-gold-1/30 group-hover:text-gold-1 shadow-[0_0_15px_rgba(200,132,58,0)] group-hover:shadow-[0_0_30px_rgba(200,132,58,0.15)] transition-all duration-500 bg-surface">
                      {i + 1}
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-ink border border-rule group-hover:border-gold-1/30 p-10 md:p-14 relative overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] md:-translate-y-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-1/0 to-gold-1/[0.02] group-hover:from-gold-1/[0.03] transition-colors duration-500" />
                    <div className="absolute left-0 top-0 w-1 h-full bg-rule group-hover:bg-gold-1/50 transition-colors duration-500" />
                    
                    <div className="relative z-10">
                      <div className="font-mono text-[10px] tracking-[2px] uppercase text-gold-1 mb-4 flex items-center gap-3">
                         {s.n} <span className="w-12 h-px bg-gold-1/30 group-hover:w-20 transition-all duration-500" />
                      </div>
                      <h3 className="font-display text-[36px] md:text-[48px] font-black text-bone mb-6 leading-none">
                        {s.name}
                      </h3>
                      <p className="font-mono text-[13px] leading-[1.8] text-muted max-w-[600px] group-hover:text-bone/80 transition-colors">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
