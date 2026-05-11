import React from 'react';
import { motion } from 'motion/react';

const BENTO_CARDS = [
  {
    span: "md:col-span-2 md:row-span-2",
    title: <>No tool gives your story<br/>a real <em className="italic font-thin text-gold-1">intelligence system.</em></>,
    body: <>Grammar checkers read sentences. <b className="text-bone">Inkforge reads narratives</b> — tension, pacing, character voice, plot threads, timeline, scene weight, emotional arc. Nine systems. Running simultaneously. No other tool in this category does this.</>,
    visual: (
      <div className="border border-gold-1/20 p-7 lg:max-w-[80%] mt-8 relative overflow-hidden group cursor-none transition-all duration-500 hover:border-gold-1/50 bg-ink/50 backdrop-blur-md hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-1">
        <div className="absolute inset-0 bg-gold-1/0 group-hover:bg-gold-1/5 transition-colors duration-500" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-1/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
        <div className="relative z-10">
          <div className="font-mono text-[8.5px] tracking-[2px] uppercase text-gold-1 mb-4 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gold-1 rounded-full animate-pulse" />Systems running</div>
          <div className="grid grid-cols-2 gap-3">
            {['StoryPulse', 'ThreadKeeper', 'VoicePrint', 'ChronoGuard'].map((s) => (
              <div key={s} className="font-mono text-[10px] text-muted flex flex-col gap-1 border border-rule p-3 group-hover:border-gold-1/20 transition-colors">
                <span className="text-bone/80">{s}</span>
                <span className="text-[#40D8A8] text-[8px] drop-shadow-[0_0_5px_rgba(64,216,168,0.5)]">● LIVE</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    span: "md:col-span-1 md:row-span-2",
    title: <>Submission is still<br/><em className="italic font-thin text-gold-1">manual.</em></>,
    body: <>Every tool ends at export. <b className="text-bone">Inkforge generates</b> the complete submission packet — formatted per publisher, in one click.</>,
    visual: (
      <div className="border border-gold-1/15 p-6 mt-8 font-mono relative overflow-hidden group cursor-none transition-all duration-500 hover:border-gold-1/40 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] bg-void">
        <div className="absolute top-0 right-0 w-16 h-16 bg-gold-1/10 rounded-full blur-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="relative z-10">
          <div className="flex flex-col gap-3 text-[10.5px] text-muted relative border-l border-rule pl-4">
            <div className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-gold-1 scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top" />
            <div className="group-hover:text-bone hover:text-gold-1 cursor-none transition-colors">→ Formatted manuscript</div>
            <div className="group-hover:text-bone hover:text-gold-1 cursor-none transition-colors">→ Query letter</div>
            <div className="group-hover:text-bone hover:text-gold-1 cursor-none transition-colors">→ Synopsis (3 lengths)</div>
            <div className="group-hover:text-bone hover:text-gold-1 cursor-none transition-colors">→ Publishing preset</div>
          </div>
        </div>
      </div>
    )
  },
  {
    span: "md:col-span-1 md:row-span-1",
    title: <><em className="italic font-thin text-gold-1">Every</em> language.</>,
    body: <>Word count works for Devanagari. Spellcheck in Tamil. Search finds your characters by name. Indic font embedding natively.</>,
    visual: null
  },
  {
    span: "md:col-span-2 md:row-span-1 border-t-0 md:border-t border-rule",
    title: <>Every draft <em className="italic font-thin text-gold-1">preserved.</em></>,
    body: <><b className="text-bone">DraftArchive</b> preserves every version — what changed between drafts, what was restored, how the story evolved.</>,
    visual: (
      <div className="absolute right-0 bottom-0 md:top-0 border-l border-rule p-6 md:p-8 font-mono text-[10px] text-muted cursor-none relative overflow-hidden group transition-all duration-500 hover:border-gold-1/40 bg-[#0A0D10] min-w-[240px] md:w-1/3 flex justify-end flex-col">
        <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-gold-1 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="flex flex-col gap-1.5 relative">
          <div className="absolute left-[-16px] top-2 bottom-2 w-px bg-rule group-hover:bg-gold-1/30 transition-colors duration-500" />
          <div className="flex justify-between p-1.5 rounded transition-colors group-hover:bg-white/5">Draft 1 <span className="text-gold-1/40">44,200w</span></div>
          <div className="flex justify-between text-bone p-1.5 rounded bg-white/5 border border-rule group-hover:border-gold-1/30 transition-colors shadow-sm">Draft 4  <span className="text-gold-1 drop-shadow-sm group-hover:scale-105 transition-transform origin-right w-max inline-flex justify-end gap-2 text-right items-center text-[10px]">62,500w <span className="text-[12px]">←</span></span></div>
        </div>
      </div>
    )
  }
];

export function WhyInkforge() {
  return (
    <section id="why" className="py-[160px] px-12 bg-void relative border-t border-rule overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold-1/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-[1280px] mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="font-mono text-[9px] tracking-[4px] uppercase text-gold-1 flex items-center gap-3.5 mb-6">
            <div className="w-[30px] h-px bg-gold-1" /> Why Inkforge
          </div>
          <h2 className="text-[clamp(42px,5.5vw,76px)] font-black leading-[1.0] tracking-[-1.5px] text-bone mb-16 drop-shadow-lg">
            Built for the <em className="italic font-thin text-transparent bg-clip-text bg-gradient-to-r from-gold-1 to-[#E8A855] drop-shadow-sm">narrative.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule border border-rule relative">
          {BENTO_CARDS.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={`bg-ink p-[36px_40px] md:p-[48px_56px] cursor-none group transition-colors duration-500 hover:bg-surface relative overflow-hidden ${card.span} flex flex-col md:flex-row gap-8 justify-between`}
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold-1/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 m-2" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold-1/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 m-2" />
              
              <div className="relative z-10 flex-1">
                <div className="font-mono text-[9px] tracking-[2px] text-gold-1/50 mb-6">0{i+1}</div>
                <h3 className="text-[28px] md:text-[36px] font-bold leading-[1.1] tracking-[-1px] text-bone group-hover:text-white transition-colors mb-4">
                  {card.title}
                </h3>
                <p className="font-mono text-[12px] leading-[1.8] text-muted max-w-[400px]">
                  {card.body}
                </p>
              </div>
              
              {card.visual && (
                <div className="flex-shrink-0 z-10 relative">
                  {card.visual}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
