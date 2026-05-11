import { motion, useScroll, useSpring } from 'motion/react';
import React, { useRef, useState } from 'react';

const INTEL_CARDS = [
  { num: '01', name: 'StoryPulse', desc: 'Tension, pacing, and emotional intensity mapped as a live waveform across your entire manuscript. The heartbeat of your story — made visible.', status: 'Live', type: 'liv', w: 440 },
  { num: '02', name: 'ThreadKeeper', desc: 'Every setup, foreshadow, and introduced element tracked from the moment it appears. Know which story elements remain unresolved — and exactly where you introduced them.', status: 'Live', type: 'liv', w: 320 },
  { num: '03', name: 'VoicePrint', desc: 'Maps the distinct voice of every character — dialogue rhythm, vocabulary, emotional register. Flags drift before your readers sense it.', status: 'Live', type: 'liv', w: 320 },
  { num: '04', name: 'ChronoGuard', desc: 'Timeline inconsistencies, age mismatches, and continuity errors caught across every chapter. Reads your entire manuscript chronologically — silently, as you write.', status: 'Live', type: 'liv', w: 400 },
  { num: '05', name: 'SceneWeight', desc: 'Narrative density and information load scored per scene. Find what is overloaded and what is empty before readers feel either.', status: 'Live', type: 'liv', w: 320 },
  { num: '06', name: 'First Page Score', desc: 'Evaluates your opening the way a publisher reads it — hook quality, clarity, pacing, and engagement potential. Know before you submit.', status: 'Live', type: 'liv', w: 320 },
  { num: '07', name: 'Emotional Arc', desc: 'Tracks the inner state of every character scene by scene. Surfaces emotional jumps readers sense but cannot name — the quiet errors that undermine credibility.', status: 'Phase 3', type: 'nxt', w: 320 },
  { num: '08', name: 'Cultural Lens', desc: 'For historical and period fiction. Catches anachronisms at the word level. A lexicon calibrated by era and region — your story stays true to the world you built.', status: 'Phase 3', type: 'nxt', w: 320 },
  { num: '09', name: 'Subtext Calibrator', desc: 'Measures meaning carried below the surface. Calibrate to your target market — literary fiction reads differently from commercial fiction, and both are right in their context.', status: 'Phase 3', type: 'nxt', w: 320 },
  { num: '10', name: 'Draft Archaeology', desc: 'Compare manuscript versions across time. What changed, what was lost, how structure evolved from first draft to final. Every version preserved automatically.', status: 'Live', type: 'liv', w: 320 },
];

export function Intelligence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    if (scrollWidth > clientWidth) {
      setScrollProgress(scrollLeft / (scrollWidth - clientWidth));
    }
  };

  // Drag to scroll logic
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseUp = () => setIsDragging(false);
  const onMouseLeave = () => setIsDragging(false);
  
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollByAmount = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    setIsDragging(false);
    const amount = direction === 'left' ? -340 : 340;
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section id="intel" className="py-[140px] px-12 bg-void relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[150px] bg-gradient-to-b from-ink to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(138,31,46,0.1),transparent_50%)] pointer-events-none animate-glow-pulse opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(200,132,58,0.02),transparent_70%)] pointer-events-none" />
      <div className="max-w-[1280px] mx-auto relative z-20">
        <motion.div initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="font-mono text-[9px] tracking-[4px] uppercase text-gold-1 flex items-center gap-3.5 mb-5">
            <div className="w-[26px] h-px bg-gold-1" /> Intelligence Suite
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-5">
            <h2 className="text-[clamp(38px,4.5vw,68px)] font-black leading-[1.0] tracking-[-1.5px]">
              Nine systems reading<br/><em className="italic font-thin text-gold-1">your story as you write.</em>
            </h2>
            <div className="flex gap-4">
              <button onClick={() => scrollByAmount('left')} className="w-[50px] h-[50px] rounded-full border border-rule flex items-center justify-center text-muted hover:text-gold-1 hover:border-gold-1/50 hover:bg-gold-1/[0.05] hover:shadow-[0_0_20px_rgba(200,132,58,0.15)] transition-all duration-300 outline-none cursor-none group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-1/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:-translate-x-1 transition-transform duration-300"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button onClick={() => scrollByAmount('right')} className="w-[50px] h-[50px] rounded-full border border-rule flex items-center justify-center text-muted hover:text-gold-1 hover:border-gold-1/50 hover:bg-gold-1/[0.05] hover:shadow-[0_0_20px_rgba(200,132,58,0.15)] transition-all duration-300 outline-none cursor-none group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-1/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform duration-300"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
          </div>
          <p className="font-mono text-[12.5px] leading-[1.9] text-muted max-w-[540px]">
            Each system focuses on a different dimension of your manuscript. Running simultaneously. Reporting precisely. This is what intelligence in a writing tool should mean.
          </p>
        </motion.div>

        <div className="relative mt-16">
          {/* Gradient Masks for Carousel sides */}
          <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-void to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-void to-transparent z-10 pointer-events-none" />

          <motion.div 
            initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className={`flex overflow-x-auto border-t border-b border-rule hide-scrollbar select-none snap-x snap-mandatory ${!isDragging ? 'scroll-smooth' : ''}`}
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
            onMouseMove={onMouseMove}
            style={{ cursor: isDragging ? 'grabbing' : 'none' }}
          >
            {INTEL_CARDS.map((card, i) => (
              <div 
                key={i} 
                className="px-8 py-12 bg-[#09090E]/80 backdrop-blur-sm border-r border-[rgba(200,132,58,0.1)] relative overflow-hidden transition-all duration-500 hover:bg-[#050508]/90 group shrink-0 snap-start glow-card"
                style={{ flex: `0 0 ${card.w}px` }}
                onMouseEnter={() => setIsHovered(i)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div 
                  className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-crimson/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                />
                <div 
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-crimson to-transparent origin-center transition-transform duration-500 shadow-[0_-5px_20px_rgba(138,31,46,0.5)]"
                  style={{ transform: isHovered === i ? 'scaleX(1)' : 'scaleX(0)' }}
                />
                
                <div className="font-display text-[80px] font-black italic text-gold-1/[0.03] leading-[0.8] mb-6 relative group-hover:text-gold-1/10 group-hover:-translate-y-2 group-hover:text-shadow-[0_0_20px_rgba(200,132,58,0.2)] transition-all duration-500 cursor-default">
                  {card.num}
                </div>
                
                <div className="relative z-10 transform group-hover:-translate-y-1 transition-transform duration-500">
                  <div className="font-mono text-[8.5px] tracking-[2.5px] uppercase text-gold-1 mb-3.5 flex items-center gap-2">
                    <div className="w-3 h-px bg-gold-1" />
                    Intelligence · {card.num}
                  </div>
                  <div className="font-display text-[22px] font-bold leading-[1.2] mb-3 text-bone group-hover:text-white transition-colors">
                    {card.name}
                  </div>
                  <div className="font-mono text-[11px] leading-[1.85] text-muted group-hover:text-bone/70 transition-colors">
                    {card.desc}
                  </div>
                  
                  {card.name === 'StoryPulse' && (
                     <div className="mt-[20px] h-[50px] overflow-hidden rounded-sm relative">
                       <div className="absolute inset-0 bg-gold-1/[0.02]" />
                       <svg viewBox="0 0 800 50" preserveAspectRatio="none" className="w-full h-full drop-shadow-[0_0_10px_rgba(200,132,58,0.3)]">
                         <defs>
                            <linearGradient id="pgrd" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#C8843A" stopOpacity="0.4"/>
                              <stop offset="100%" stopColor="#C8843A" stopOpacity="0"/>
                            </linearGradient>
                          </defs>
                         <motion.path 
                           initial={{ opacity: 0 }}
                           whileInView={{ opacity: 1 }}
                           viewport={{ once: true }}
                           transition={{ delay: 2.9, duration: 0.5 }}
                           fill="url(#pgrd)" 
                           d="M0,50 L0,25 L50,25 L70,10 L90,42 L110,14 L130,25 L200,25 L220,5 L240,46 L260,16 L280,25 L350,25 L370,8 L390,44 L410,14 L430,25 L500,25 L520,4 L540,48 L560,12 L580,25 L650,25 L670,7 L690,43 L710,11 L730,25 L800,25 L800,50 Z"
                         />
                         <motion.path 
                           initial={{ strokeDashoffset: 900 }}
                           whileInView={{ strokeDashoffset: 0 }}
                           viewport={{ once: true }}
                           transition={{ duration: 2.8, ease: [0.22,1,0.36,1] }}
                           fill="none" stroke="var(--color-gold-1)" strokeWidth="1.5" strokeDasharray="900"
                           d="M0,25 L50,25 L70,10 L90,42 L110,14 L130,25 L200,25 L220,5 L240,46 L260,16 L280,25 L350,25 L370,8 L390,44 L410,14 L430,25 L500,25 L520,4 L540,48 L560,12 L580,25 L650,25 L670,7 L690,43 L710,11 L730,25 L800,25"
                         />
                       </svg>
                     </div>
                  )}

                  {card.name === 'ThreadKeeper' && (
                    <div className="mt-[20px] h-[50px] relative overflow-hidden rounded-sm bg-gold-1/[0.02]">
                       <div className="absolute inset-0 flex items-center justify-between px-4">
                         <div className="w-[80%] h-px bg-rule relative">
                           <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 2 }} className="h-full bg-gradient-to-r from-transparent via-[#40D8A8] to-transparent absolute top-0 left-0 opacity-50" />
                           <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5 }} className="absolute left-[10%] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gold-1 shadow-[0_0_10px_rgba(200,132,58,0.5)]" />
                           <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.5 }} className="absolute left-[80%] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#40D8A8] shadow-[0_0_10px_rgba(64,216,168,0.5)] animate-pulse" />
                           <svg className="absolute left-0 top-0 overflow-visible" style={{ width: '100%', height: '100%' }}>
                             <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} d="M 10 0 Q 45 -40 80 0" stroke="var(--color-gold-1)" strokeWidth="1" fill="none" strokeDasharray="2 2" />
                           </svg>
                         </div>
                       </div>
                    </div>
                  )}

                  {card.name === 'VoicePrint' && (
                    <div className="mt-[20px] h-[50px] relative overflow-hidden rounded-sm flex items-end justify-between px-2 gap-[2px]">
                      {[4, 8, 16, 24, 12, 32, 20, 14, 28, 16, 8, 4].map((h, j) => (
                        <motion.div key={j}
                          className="flex-1 bg-gradient-to-t from-gold-1/[0.05] to-gold-1/40 rounded-t-[1px]"
                          initial={{ height: '4px' }}
                          whileInView={{ height: `${h}px` }}
                          transition={{ duration: 0.8, delay: j * 0.05 + 0.2 }}
                        />
                      ))}
                    </div>
                  )}

                  {card.name === 'ChronoGuard' && (
                    <div className="mt-[20px] h-[50px] relative overflow-hidden rounded-sm bg-gold-1/[0.02] flex items-center justify-center gap-1">
                      {[1, 2, 3, 4, 5].map((s, j) => (
                        <motion.div key={j} className="h-2 flex-1 rounded-full bg-rule relative overflow-hidden" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: j * 0.1 }}>
                          <motion.div className="absolute top-0 left-0 bottom-0 bg-gold-1/60" initial={{ width: 0 }} whileInView={{ width: j === 2 ? '40%' : '100%' }} transition={{ duration: 1, delay: 0.5 + j * 0.1 }} />
                          {j === 2 && <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.6 }} className="absolute top-1/2 left-[40%] -translate-y-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#FF5F57] rounded-full shadow-[0_0_8px_#FF5F57]" />}
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {card.name === 'SceneWeight' && (
                    <div className="mt-[20px] h-[50px] relative overflow-hidden rounded-sm flex items-end gap-1 px-1">
                      {[30, 45, 15, 50, 35, 20].map((h, j) => (
                        <motion.div key={j}
                          className="flex-1 rounded-sm border border-gold-1/20 flex flex-col justify-end"
                          initial={{ height: 0, opacity: 0 }}
                          whileInView={{ height: `${h}px`, opacity: 1 }}
                          transition={{ duration: 0.5, delay: j * 0.1 }}
                        >
                          <div className={`w-full ${h > 40 ? 'bg-[#FF5F57]/40' : h < 20 ? 'bg-rule' : 'bg-gold-1/20'}`} style={{ height: '100%' }} />
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {card.name === 'First Page Score' && (
                     <div className="mt-[20px] h-[50px] relative overflow-hidden rounded-sm bg-gold-1/[0.02] flex items-center px-4 gap-4">
                       <div className="w-8 h-8 rounded-full border-2 border-[#40D8A8]/30 flex items-center justify-center relative">
                         <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} className="absolute inset-0 border-2 border-[#40D8A8] rounded-full border-t-transparent animate-spin" />
                         <span className="font-mono text-[9px] text-[#40D8A8]">94</span>
                       </div>
                       <div className="flex-1 flex flex-col gap-1.5">
                         <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} className="h-1 bg-rule rounded-full overflow-hidden origin-left"><div className="w-[94%] h-full bg-[#40D8A8]" /></motion.div>
                         <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ delay: 0.1 }} className="h-1 bg-rule rounded-full overflow-hidden origin-left"><div className="w-[82%] h-full bg-gold-1/60" /></motion.div>
                         <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ delay: 0.2 }} className="h-1 bg-rule rounded-full overflow-hidden origin-left"><div className="w-[88%] h-full bg-gold-1/40" /></motion.div>
                       </div>
                     </div>
                  )}

                  {!['StoryPulse', 'ThreadKeeper', 'VoicePrint', 'ChronoGuard', 'SceneWeight', 'First Page Score'].includes(card.name) && (
                     <div className="mt-[20px] h-[50px] relative overflow-hidden rounded-sm bg-gradient-to-r from-rule via-transparent to-transparent flex items-center px-4">
                       <motion.div 
                         className="h-[2px] w-8 bg-gold-1/50 rounded-full"
                         animate={{ x: [0, 60, 0], opacity: [0.3, 1, 0.3] }}
                         transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                       />
                     </div>
                  )}

                  <div className={`mt-5 inline-flex items-center gap-1.5 font-mono text-[8.5px] tracking-[2px] uppercase px-3 py-1.5 rounded-sm ${card.type === 'liv' ? 'bg-[#1A7A6A]/10 text-[#40D8A8] border border-[#1A7A6A]/20 shadow-[0_0_15px_rgba(26,122,106,0.15)] group-hover:bg-[#1A7A6A]/20' : 'bg-gold-1/[0.05] text-gold-1 border border-gold-1/20 shadow-[0_0_15px_rgba(200,132,58,0.15)] group-hover:bg-gold-1/10'} transition-colors duration-300`}>
                    {card.type === 'liv' ? <span className="w-1.5 h-1.5 rounded-full bg-[#40D8A8] animate-pulse" /> : <span className="w-1 h-1 bg-gold-1/50" />}
                    {card.status}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="h-[2px] bg-rule mt-4 relative">
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-gold-1 to-gold-2 transition-all duration-300 ease-out"
            style={{ width: `${Math.max(5, scrollProgress * 100)}%` }}
          />
        </motion.div>
      </div>
    </section>
  );
}
