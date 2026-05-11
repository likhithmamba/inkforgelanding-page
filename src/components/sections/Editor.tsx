import { motion } from 'motion/react';
import { useState } from 'react';

const FEATURES = [
  { icon: 'ML', name: 'Multilingual Writing Environment', desc: 'Write in any language, any script. Word count is accurate for every writing system. Spellcheck uses the correct dictionary for your language.' },
  { icon: 'TR', name: 'Live Transliteration', desc: 'Type in Roman script, receive Indic script at the cursor. No keyboard switching, no interruption to flow.' },
  { icon: 'SK', name: 'Writing Streak & Goal Tracker', desc: 'Daily word goals tracked correctly regardless of language. Session analytics, streak history, and calendar heatmap — all language-aware.' },
  { icon: 'DA', name: 'DraftArchive — Version History', desc: 'Every significant draft preserved automatically. Compare versions, understand structural evolution, restore anything.' },
  { icon: 'BR', name: 'Beta Reader Workflow', desc: 'Read-only share link for beta readers. Inline comments in a unified sidebar. The entire beta loop inside Inkforge.' },
];

export function Editor() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="editor" className="py-[140px] px-12 bg-ink border-t border-rule">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="font-mono text-[9px] tracking-[4px] uppercase text-gold-1 flex items-center gap-3.5 mb-5">
            <div className="w-[26px] h-px bg-gold-1" /> The Editor
          </div>
          <h2 className="text-[clamp(38px,4.5vw,68px)] font-black leading-[1.0] tracking-[-1.5px] mb-5">
            A professional environment<br/><em className="italic font-thin text-gold-1">for every script.</em>
          </h2>
          <p className="font-mono text-[12.5px] leading-[1.9] text-muted max-w-[540px]">
            Not a text box with formatting. A complete manuscript environment — language-aware at the structural level, connected to every intelligence system.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-[72px] items-start mt-[72px]">
          <div className="flex flex-col gap-px">
            {FEATURES.map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                onHoverStart={() => setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="flex gap-[18px] p-6 bg-ink border border-rule cursor-none relative overflow-hidden transition-all duration-300 hover:bg-surface hover:border-gold-1/30 group hover:shadow-[0_0_20px_rgba(138,31,46,0.15)]"
              >
                <div 
                  className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-crimson to-gold-1 origin-center transition-transform duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_0_10px_rgba(138,31,46,0.8)]"
                  style={{ transform: hoveredIndex === i ? 'scaleY(1)' : 'scaleY(0)' }}
                />
                
                <div className="w-[38px] h-[38px] shrink-0 border border-rule flex items-center justify-center font-mono text-[11px] text-gold-1 mt-0.5 transition-all group-hover:bg-gold-1/10 group-hover:border-gold-1 group-hover:text-gold-2 group-hover:shadow-[inset_0_0_10px_rgba(200,132,58,0.2)]">
                  {feat.icon}
                </div>
                <div>
                  <div className="font-display text-[15px] font-bold mb-1.5 transition-colors group-hover:text-gold-1">{feat.name}</div>
                  <div className="font-mono text-[10.5px] text-muted leading-[1.7] transition-colors group-hover:text-bone/70">{feat.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3 }}
            className="sticky top-20 bg-[#09090E]/90 backdrop-blur-xl border border-[rgba(200,132,58,0.15)] shadow-[0_40px_80px_rgba(0,0,0,0.6)] transition-all duration-500 overflow-hidden glow-card"
          >
            <div className="h-[42px] bg-white/5 border-b border-rule px-3.5 flex items-center gap-1.5">
              <div className="w-[9px] h-[9px] rounded-full bg-[#FF5F57] shadow-[0_0_5px_#FF5F57]" />
              <div className="w-[9px] h-[9px] rounded-full bg-[#FFBD2E] shadow-[0_0_5px_#FFBD2E]" />
              <div className="w-[9px] h-[9px] rounded-full bg-[#28C840] shadow-[0_0_5px_#28C840]" />
              <div className="flex ml-2.5 h-full">
                {['Write', 'Corkboard', 'Characters', 'Timeline'].map((tab, i) => (
                  <div key={tab} className={`font-mono text-[8.5px] tracking-[0.8px] px-3.5 h-full flex items-center border-r border-rule cursor-none transition-colors ${i === 0 ? 'text-gold-1' : 'text-muted'}`}>
                    {tab}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-[42px_1fr]">
              <div className="bg-ink border-r border-rule py-3 flex flex-col items-center gap-2">
                {['W', 'C', 'P', 'T', 'R', 'X'].map((icon, i) => (
                  <div key={icon} className={`w-[26px] h-[26px] flex flex-col items-center justify-center font-mono text-[8.5px] border border-transparent cursor-none transition-all ${i === 0 ? 'border-rule text-gold-1 bg-gold-1/10' : 'text-muted hover:border-rule hover:text-gold-1 hover:bg-gold-1/10'}`}>
                    {icon}
                  </div>
                ))}
              </div>
              <div className="p-6 min-h-[300px]">
                <div className="font-display text-[13px] leading-[2.05] text-bone/65">
                  The letter bore no return address —<br/>
                  only a <span className="bg-gold-1/10 border-b border-gold-1 text-[#E8A855]/85">date from three years ago</span>
                  <span className="inline-block font-mono text-[8px] bg-[#1A7A6A]/20 border border-[#1A7A6A]/30 text-[#40D8A8]/80 py-px px-1.5 align-middle ml-1.5">ChronoGuard</span><br/>
                  and a closing line she had memorised<br/>
                  without meaning to. <em className="italic">Come when you</em><br/>
                  <em className="italic">are ready.</em> The house <em className="italic">remembers.</em>
                  <span className="inline-block w-[2px] h-[13px] bg-gold-1 align-middle ml-px animate-blink" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
