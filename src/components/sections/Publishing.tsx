import { motion } from 'motion/react';
import { useState } from 'react';

export function Publishing() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="pub" className="relative py-[140px] px-[48px] bg-void overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(200,132,58,0.06),transparent_60%)] animate-glow-pulse pointer-events-none blur-3xl mix-blend-screen" />
      <div className="max-w-[1280px] mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="font-mono text-[9px] tracking-[4px] uppercase text-gold-1 flex items-center gap-3.5 mb-5">
            <div className="w-[26px] h-px bg-gold-1" /> Publishing
          </div>
          <h2 className="text-[clamp(38px,4.5vw,68px)] font-black leading-[1.0] tracking-[-1.5px] mb-5 text-bone">
            Manuscript to submission.<br/><em className="italic font-thin text-transparent bg-clip-text bg-gradient-to-r from-gold-1 to-crimson">One platform.</em>
          </h2>
          <p className="font-mono text-[12.5px] leading-[1.9] text-muted max-w-[540px]">
            The work after writing is still work. Formatting, query letters, synopses, submission packets — Inkforge handles it.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="mt-[72px] grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[rgba(200,132,58,0.2)] shadow-[0_0_50px_rgba(138,31,46,0.1)] rounded-sm overflow-hidden"
        >
          {/* Card 1 */}
          <div 
            className="bg-[#09090E]/60 backdrop-blur-xl text-bone p-[52px_44px] cursor-none relative overflow-hidden transition-all duration-500 hover:bg-[#0D0E16]/90 group"
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-1/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div 
              className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold-1 to-transparent origin-center transition-transform duration-550 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_-5px_20px_rgba(200,132,58,0.5)]"
              style={{ transform: hoveredCard === 0 ? 'scaleX(1)' : 'scaleX(0)' }}
            />
            <div className="font-mono text-[9px] tracking-[3px] uppercase text-gold-1 mb-[18px] flex items-center gap-2.5 relative z-10">
              <div className="w-3 h-px bg-gold-1" /> Formatting
            </div>
            <h3 className="font-display text-[26px] font-bold leading-[1.15] mb-3.5 relative z-10 group-hover:text-gold-2 transition-colors">Publisher-Grade Manuscript Formatter</h3>
            <p className="font-mono text-[10.5px] leading-[1.85] text-bone/60 mb-[26px] relative z-10 group-hover:text-bone/80 transition-colors">
              Correct formatting for every publisher — margins, fonts, spacing, headers. For multilingual manuscripts, fonts are embedded at the level that renders correctly in Microsoft Word on every operating system. No boxes. No fallback fonts. No reformatting.
            </p>
            <ul className="list-none relative z-10">
              {['Multilingual font embedding — all scripts render correctly in Word', 'Publisher-specific margin and spacing presets', 'Export as .docx, .pdf, or .epub', 'Chapter headers, page numbers, title page — pre-formatted', 'Indic punctuation and script conventions preserved'].map((item, i) => (
                <li key={i} className="font-mono text-[10.5px] text-bone/50 py-2 border-b border-rule flex gap-[9px] items-baseline leading-[1.4] group-hover:text-bone/70 transition-colors">
                  <span className="text-gold-1 text-[9.5px] shrink-0 drop-shadow-[0_0_5px_rgba(200,132,58,0.8)]">↳</span> {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-5 relative z-10">
              {['Penguin India', 'Juggernaut', 'HarperCollins India', 'Rajkamal Prakashan', 'Vani Prakashan', 'Pratilipi'].map(badge => (
                <div key={badge} className="font-mono text-[8px] tracking-[1.5px] uppercase px-3 py-1.5 border border-rule text-muted transition-all duration-300 group-hover:border-gold-1/30 group-hover:text-gold-1/80 hover:!border-gold-1 hover:!text-bone hover:shadow-[0_0_10px_rgba(200,132,58,0.2)]">
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div 
            className="bg-[#09090E]/60 backdrop-blur-xl border-t lg:border-t-0 lg:border-l border-[rgba(200,132,58,0.2)] text-bone p-[52px_44px] cursor-none relative overflow-hidden transition-all duration-500 hover:bg-[#0D0E16]/90 group"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-crimson/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div 
              className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-crimson to-transparent origin-center transition-transform duration-550 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_-5px_20px_rgba(138,31,46,0.5)]"
              style={{ transform: hoveredCard === 1 ? 'scaleX(1)' : 'scaleX(0)' }}
            />
            <div className="font-mono text-[9px] tracking-[3px] uppercase text-crimson mb-[18px] flex items-center gap-2.5 relative z-10">
              <div className="w-3 h-px bg-crimson" /> Query & Submission
            </div>
            <h3 className="font-display text-[26px] font-bold leading-[1.15] mb-3.5 relative z-10 group-hover:text-gold-2 transition-colors">Query Letter & Submission Packet Generator</h3>
            <p className="font-mono text-[10.5px] leading-[1.85] text-bone/60 mb-[26px] relative z-10 group-hover:text-bone/80 transition-colors">
              A submission packet is not just a manuscript. It is a query letter, synopsis, author bio, and formatted manuscript — each calibrated to the publisher you are approaching. Inkforge generates the complete packet. What took three days takes minutes.
            </p>
            <ul className="list-none relative z-10">
              {['Query letter generated from manuscript themes and voice', 'Synopsis at 250, 500, and 1,000 word lengths', 'Author bio formatted for submission context', 'Per-publisher packet assembly — one click per target', 'AI calibrated to your target market\'s submission standards'].map((item, i) => (
                <li key={i} className="font-mono text-[10.5px] text-bone/50 py-2 border-b border-rule flex gap-[9px] items-baseline leading-[1.4] group-hover:text-bone/70 transition-colors">
                  <span className="text-crimson text-[9.5px] shrink-0 drop-shadow-[0_0_5px_rgba(138,31,46,0.8)]">↳</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
