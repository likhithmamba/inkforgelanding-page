import { motion } from 'motion/react';

const STEPS = [
  { num: '1', title: 'Write', desc: 'In your language. Intelligence runs beside you — tension, threads, continuity, voice.' },
  { num: '2', title: 'Analyse', desc: 'Nine systems assess every dimension of your manuscript as you complete it.' },
  { num: '3', title: 'Refine', desc: 'AI feedback in your language. Depth and Extended modes for scene and manuscript level.' },
  { num: '4', title: 'Format', desc: 'Publisher-ready export with correct fonts, margins, and formatting — automatically.' },
  { num: '5', title: 'Submit', desc: 'Complete packet — query, synopsis, manuscript. One click. Every publisher.' }
];

export function Workflow() {
  return (
    <section id="workflow" className="py-[160px] px-12 bg-void relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(138,31,46,0.03),transparent_60%)] pointer-events-none" />
      <div className="max-w-[1280px] mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="font-mono text-[9px] tracking-[4px] uppercase text-gold-1 flex items-center gap-3.5 mb-8">
            <div className="w-[30px] h-px bg-gold-1" /> WORKFLOW
          </div>
          <h2 className="text-[clamp(50px,7.5vw,100px)] font-display font-black leading-[1.0] tracking-[-2.5px] text-bone mb-1">
             Write to published.
          </h2>
          <div className="text-[clamp(46px,6.5vw,84px)] font-display italic font-thin text-gold-1 leading-[1.0] drop-shadow-[0_0_15px_rgba(200,132,58,0.2)] mb-20 tracking-[-1.5px]">
             Five steps.
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 border border-[rgba(200,132,58,0.2)] mt-12 group/grid relative z-20 bg-[#09090E]/60 backdrop-blur-xl shadow-[0_0_50px_rgba(138,31,46,0.15)] rounded-sm">
          {STEPS.map((s, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className={`border-[rgba(200,132,58,0.1)] relative overflow-hidden group hover:bg-[#050508]/80 transition-all duration-500 p-[60px_24px] flex flex-col items-center text-center ${i !== STEPS.length - 1 ? 'border-b md:border-b-0 md:border-r' : ''}`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-crimson/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="relative mb-8 flex justify-center items-center h-[70px] w-full">
                <div className="w-12 h-12 border border-rule/70 text-gold-1/80 group-hover:border-gold-1/40 group-hover:text-gold-1 flex items-center justify-center font-display text-[22px] italic transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(200,132,58,0.3)] group-hover:scale-110">
                  {s.num}
                </div>
              </div>
              
              <h3 className="font-display font-bold text-[17px] text-bone mb-3.5 group-hover:text-gold-1 transition-colors relative z-10">{s.title}</h3>
              <p className="font-mono text-[9.5px] text-muted leading-[1.8] group-hover:text-bone/80 transition-colors px-2 relative z-10">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
