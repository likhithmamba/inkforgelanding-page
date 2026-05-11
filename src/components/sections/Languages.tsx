import { motion } from 'motion/react';
import { useState } from 'react';

const LANGS = [
  { script: 'हि', size: 22, name: 'Hindi', stat: 'Full editor, spellcheck, export, AI feedback in language', badge: 'Live', type: 'll' },
  { script: 'த', size: 20, name: 'Tamil', stat: 'Full editor, spellcheck, export, AI feedback in language', badge: 'Live', type: 'll' },
  { script: 'ಕ', size: 20, name: 'Kannada', stat: 'Full editor, spellcheck, export, AI feedback in language', badge: 'Live', type: 'll' },
  { script: 'తె', size: 20, name: 'Telugu', stat: 'Full editor, spellcheck, export, AI feedback in language', badge: 'Live', type: 'll' },
  { script: 'EN+', size: 13, mono: true, name: 'Mixed Script', stat: 'Multilingual manuscripts — AI holds your primary language', badge: 'Live', type: 'll' },
  { script: 'ES FR DE', size: 13, mono: true, name: 'European Languages', stat: 'Spanish, French, German, Portuguese — expanding', badge: 'Expanding', type: 'ls' },
];

export function Languages() {
  const [hoveredLang, setHoveredLang] = useState<number | null>(null);

  return (
    <section id="langs" className="relative py-[140px] px-[48px] bg-void overflow-hidden">
      <div className="max-w-[1280px] mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="font-mono text-[9px] tracking-[4px] uppercase text-gold-1 flex items-center gap-3.5 mb-5">
            <div className="w-[26px] h-px bg-gold-1" /> Languages
          </div>
          <h2 className="text-[clamp(38px,4.5vw,68px)] font-black leading-[1.0] tracking-[-1.5px]">
            Every language.<br/><em className="italic font-thin text-gold-1">Equal capability.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-start mt-[72px]">
          <div className="flex flex-col gap-px">
            {LANGS.map((lang, i) => (
               <div key={i} className="flex items-center gap-5 p-[16px_22px] bg-ink border border-rule cursor-none relative overflow-hidden transition-all duration-300 hover:bg-surface hover:border-gold-1/20 group hover:pl-7">
                  <div className={`min-w-[48px] text-center text-bone/45 transition-colors group-hover:text-bone ${lang.mono ? 'font-mono' : 'font-display'}`} style={{ fontSize: lang.size }}>
                    {lang.script}
                  </div>
                  <div className="flex-1">
                    <div className="font-display text-[14px] font-bold mb-1">{lang.name}</div>
                    <div className="font-mono text-[9.5px] text-muted tracking-[0.3px]">{lang.stat}</div>
                  </div>
                  <div className={`ml-auto font-mono text-[8px] tracking-[1.5px] uppercase py-[3px] px-[9px] ${lang.type === 'll' ? 'bg-[#1A7A6A]/10 text-[#40D8A8] border border-[#1A7A6A]/20' : 'bg-gold-1/[0.08] text-gold-1 border border-gold-1/15'}`}>
                    {lang.badge}
                  </div>
               </div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
            <div className="font-display text-[clamp(18px,2.2vw,26px)] font-thin italic leading-[1.65] text-bone/55 border-l-2 border-gold-1 pl-[26px] mb-[36px]">
              "The professional tools have always been built for writers who could already afford to be writers — in the right country, writing in the right language. <strong className="not-italic font-bold text-bone">Inkforge exists to remove that condition.</strong>"
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
