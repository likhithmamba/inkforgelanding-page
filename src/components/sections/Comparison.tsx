import { motion } from 'motion/react';

export function Comparison() {
  const rows = [
    { label: 'Non-English manuscript — full support', sc: 'Partial', inf: '✓', sw: '—' },
    { label: 'Real-time narrative intelligence', sc: '—', inf: '✓', sw: 'Partial' },
    { label: 'Plot thread tracking (ThreadKeeper)', sc: '—', inf: '✓', sw: '—' },
    { label: 'Character voice analysis (VoicePrint)', sc: '—', inf: '✓', sw: '—' },
    { label: 'Timeline & continuity (ChronoGuard)', sc: 'Manual', inf: '✓', sw: '—' },
    { label: 'Publisher-grade multilingual export', sc: 'Partial', inf: '✓', sw: '—' },
    { label: 'Query letter & submission packet', sc: '—', inf: '✓', sw: '—' },
    { label: 'AI feedback in the writer\'s language', sc: '—', inf: '✓', sw: '—' },
    { label: 'Draft version history (DraftArchive)', sc: '✓', inf: '✓', sw: '—' },
    { label: 'Beta reader share & inline comments', sc: '—', inf: '✓', sw: '—' },
    { label: 'Tension, pacing & scene weight scoring', sc: '—', inf: '✓', sw: 'Partial' },
  ];

  return (
    <section id="compare" className="py-[140px] px-12 bg-ink relative border-t border-rule">
      <div className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-b from-void to-transparent z-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-end mb-16">
          <motion.div initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="font-mono text-[9px] tracking-[4px] uppercase text-gold-1 flex items-center gap-3.5 mb-5">
              <div className="w-[26px] h-px bg-gold-1" /> Head to Head
            </div>
            <h2 className="text-[clamp(38px,4.5vw,68px)] font-black leading-[1.0] tracking-[-1.5px] mb-5">
              Why writers choose Inkforge<br/><em className="italic font-thin text-gold-1">over everything else.</em>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-mono text-[12.5px] leading-[1.9] text-muted max-w-[540px]"
          >
            Eleven capabilities. One tool that delivers all of them. No other platform comes close to this stack.
          </motion.p>
        </div>
        
        <table className="w-full border-collapse border border-rule">
          <thead>
            <tr>
              <th className="w-2/5 p-3.5 px-5 border-r border-b border-rule font-mono text-[9px] tracking-[2px] uppercase text-muted font-light bg-surface text-left">Capability</th>
              <th className="p-3.5 px-5 border-r border-b border-rule font-mono text-[9px] tracking-[2px] uppercase text-muted font-light bg-surface text-center">Scrivener</th>
              <th className="p-3.5 px-5 border-r border-b-2 border-rule font-mono text-[9px] tracking-[2px] uppercase bg-gold-1/10 text-gold-1 border-b-gold-1 text-center">Inkforge</th>
              <th className="p-3.5 px-5 border-b border-rule font-mono text-[9px] tracking-[2px] uppercase text-muted font-light bg-surface text-center">Sudowrite</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <motion.tr 
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className="hover:bg-gold-1/[0.03] transition-colors"
              >
                <td className="p-3.5 px-5 border-r border-b border-rule font-mono text-[10.5px] text-bone text-left">{row.label}</td>
                <td className="p-3.5 px-5 border-r border-b border-rule font-mono text-[10.5px] text-center">
                  {row.sc === '✓' ? <span className="text-[#1A7A6A] text-[15px]">{row.sc}</span> : row.sc === 'Partial' ? <span className="text-gold-1 text-[9px] tracking-[1px]">{row.sc}</span> : <span className="text-[#2E2E3A] text-[14px]">{row.sc}</span>}
                </td>
                <td className="p-3.5 px-5 border-r border-b border-rule font-mono text-[10.5px] bg-gold-1/[0.03] text-center">
                  <span className="text-[#1A7A6A] text-[15px]">✓</span>
                </td>
                <td className="p-3.5 px-5 border-b border-rule font-mono text-[10.5px] text-center">
                  {row.sw === '✓' ? <span className="text-[#1A7A6A] text-[15px]">{row.sw}</span> : row.sw === 'Partial' ? <span className="text-gold-1 text-[9px] tracking-[1px]">{row.sw}</span> : <span className="text-[#2E2E3A] text-[14px]">{row.sw}</span>}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
