import { motion } from 'motion/react';
import { useState } from 'react';

export function Publishing() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="pub" className="relative py-[140px] px-[48px] bg-void overflow-hidden">
      <div className="max-w-[1280px] mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="font-mono text-[9px] tracking-[4px] uppercase text-gold-1 flex items-center gap-3.5 mb-5">
            <div className="w-[26px] h-px bg-gold-1" /> Publishing
          </div>
          <h2 className="text-[clamp(38px,4.5vw,68px)] font-black leading-[1.0] tracking-[-1.5px] mb-5">
            Manuscript to submission.<br/><em className="italic font-thin text-gold-1">One platform.</em>
          </h2>
          <p className="font-mono text-[12.5px] leading-[1.9] text-muted max-w-[540px]">
            The work after writing is still work. Formatting, query letters, synopses, submission packets — Inkforge handles it.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="mt-[72px] grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#0A0808]/12"
        >
          {/* Card 1 */}
          <div 
            className="bg-[#EDE8DC] text-[#0A0808] p-[52px_44px] cursor-none relative overflow-hidden transition-colors duration-300 hover:bg-[#E6E0D3]"
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div 
              className="absolute top-0 left-0 right-0 h-[2px] bg-crimson origin-left transition-transform duration-550 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: hoveredCard === 0 ? 'scaleX(1)' : 'scaleX(0)' }}
            />
            <div className="font-mono text-[9px] tracking-[3px] uppercase text-crimson mb-[18px] flex items-center gap-2.5">
              <div className="w-3 h-px bg-crimson" /> Formatting
            </div>
            <h3 className="font-display text-[26px] font-bold leading-[1.15] mb-3.5">Publisher-Grade Manuscript Formatter</h3>
            <p className="font-mono text-[10.5px] leading-[1.85] text-[#5A544A] mb-[26px]">
              Correct formatting for every publisher — margins, fonts, spacing, headers. For multilingual manuscripts, fonts are embedded at the level that renders correctly in Microsoft Word on every operating system. No boxes. No fallback fonts. No reformatting.
            </p>
            <ul className="list-none">
              {['Multilingual font embedding — all scripts render correctly in Word', 'Publisher-specific margin and spacing presets', 'Export as .docx, .pdf, or .epub', 'Chapter headers, page numbers, title page — pre-formatted', 'Indic punctuation and script conventions preserved'].map((item, i) => (
                <li key={i} className="font-mono text-[10.5px] text-[#7A7060] py-2 border-b border-[#0A0808]/5 flex gap-2.5 items-baseline leading-[1.4]">
                  <span className="text-crimson text-[10px] shrink-0">↳</span> {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-5">
              {['Penguin India', 'Juggernaut', 'HarperCollins India', 'Rajkamal Prakashan', 'Vani Prakashan', 'Pratilipi'].map(badge => (
                <div key={badge} className="font-mono text-[8px] tracking-[1.5px] uppercase px-3 py-1.5 border border-[#0A0808]/12 text-[#7A7060] transition-colors duration-200 hover:border-crimson/20 hover:text-[#5A544A]">
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div 
            className="bg-[#EDE8DC] border-t lg:border-t-0 lg:border-l border-[#0A0808]/12 text-[#0A0808] p-[52px_44px] cursor-none relative overflow-hidden transition-colors duration-300 hover:bg-[#E6E0D3]"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div 
              className="absolute top-0 left-0 right-0 h-[2px] bg-crimson origin-left transition-transform duration-550 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: hoveredCard === 1 ? 'scaleX(1)' : 'scaleX(0)' }}
            />
            <div className="font-mono text-[9px] tracking-[3px] uppercase text-crimson mb-[18px] flex items-center gap-2.5">
              <div className="w-3 h-px bg-crimson" /> Query & Submission
            </div>
            <h3 className="font-display text-[26px] font-bold leading-[1.15] mb-3.5">Query Letter & Submission Packet Generator</h3>
            <p className="font-mono text-[10.5px] leading-[1.85] text-[#5A544A] mb-[26px]">
              A submission packet is not just a manuscript. It is a query letter, synopsis, author bio, and formatted manuscript — each calibrated to the publisher you are approaching. Inkforge generates the complete packet. What took three days takes minutes.
            </p>
            <ul className="list-none">
              {['Query letter generated from manuscript themes and voice', 'Synopsis at 250, 500, and 1,000 word lengths', 'Author bio formatted for submission context', 'Per-publisher packet assembly — one click per target', 'AI calibrated to your target market\'s submission standards'].map((item, i) => (
                <li key={i} className="font-mono text-[10.5px] text-[#7A7060] py-2 border-b border-[#0A0808]/5 flex gap-2.5 items-baseline leading-[1.4]">
                  <span className="text-crimson text-[10px] shrink-0">↳</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
