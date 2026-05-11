import { motion } from 'motion/react';
import { MagneticButton } from '../MagneticButton';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[680px] h-screen flex flex-col justify-end overflow-hidden px-12 pb-[60px] pt-[60px] z-10">
      <div 
        className="absolute inset-0 pointer-events-none z-[-2] bg-[radial-gradient(ellipse_at_center,rgba(138,31,46,0.15)_0%,transparent_70%)] animate-glow-pulse"
      />
      <div 
        className="absolute z-[-1] right-0 top-0 bottom-0 w-[50%] pointer-events-none animate-aura-shift bg-gradient-to-r from-transparent via-crimson/5 to-gold-1/5"
        style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' }}
      />
      <div className="absolute z-10 left-12 top-1/2 -translate-y-1/2 -rotate-90 origin-center font-mono text-[8px] tracking-[4px] uppercase text-gold-1/40 whitespace-nowrap">
        Inkforge · Global Writing Studio
      </div>

      {/* Giant Type */}
      <div className="relative z-10 pt-[60px]">
        <div className="font-mono text-[10px] md:text-[13px] tracking-[4px] text-gold-1 uppercase mb-8 flex items-center gap-4">
          <div className="w-12 h-[2px] bg-gradient-to-r from-gold-1 to-transparent shadow-[0_0_10px_rgba(200,132,58,0.8)]" />
          The Final Writing Studio
        </div>
        <div className="text-[clamp(80px,18vw,280px)] font-black leading-[0.8] tracking-[-5px] md:tracking-[-10px] overflow-visible block">
          <motion.div 
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-bone via-gold-1 to-bone/60 pb-12 -mb-12 px-4 -mx-4 animate-shimmer"
            style={{ textShadow: '0 10px 40px rgba(200,132,58,0.15)' }}
          >
            INKFORGE
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between mt-10 pt-7 border-t border-rule">
        <motion.p 
          className="font-mono text-xs leading-[1.8] text-muted max-w-[380px]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          A complete manuscript studio — intelligent analysis, publisher-grade formatting, and submission tools for every writer in every language. Not just English.
        </motion.p>
        <motion.div 
          className="flex gap-3 items-center mt-6 md:mt-0"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.55 }}
        >
          <MagneticButton><span>Start Free</span><span className="font-sans">→</span></MagneticButton>
          <MagneticButton primary={false}>Explore</MagneticButton>
        </motion.div>
      </div>

      {/* Floating Editor Preview */}
      <motion.div 
        className="absolute z-20 right-12 top-20 w-[min(420px,36vw)] hidden lg:block animate-float-slow"
        initial={{ opacity: 0, y: -30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1.6 }}
      >
        <div className="absolute right-[-10px] top-[50px] bg-ink/80 backdrop-blur-md border border-gold-1/30 px-3 py-1.5 font-mono text-[8.5px] text-bone whitespace-nowrap animate-chip shadow-[0_0_20px_rgba(200,132,58,0.2)] z-30">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#40D8A8] mr-1.5 align-middle shadow-[0_0_8px_#40D8A8]" />
          StoryPulse · Live
        </div>
        <div className="bg-[#090910]/90 backdrop-blur-xl border border-rule shadow-[0_32px_80px_rgba(0,0,0,0.9),0_0_20px_0_rgba(138,31,46,0.2)] glow-card">
          <div className="h-[38px] bg-white/5 border-b border-rule px-3.5 flex items-center gap-[7px]">
            <div className="w-[9px] h-[9px] rounded-full bg-[#FF5F57] shadow-[0_0_5px_#FF5F57]" />
            <div className="w-[9px] h-[9px] rounded-full bg-[#FFBD2E] shadow-[0_0_5px_#FFBD2E]" />
            <div className="w-[9px] h-[9px] rounded-full bg-[#28C840] shadow-[0_0_5px_#28C840]" />
            <span className="font-mono text-[9px] text-white/40 ml-1.5 tracking-[0.5px]">Chapter 9 · 2,104 words · Depth Mode</span>
          </div>
          <div className="p-5">
            <span className="font-display text-[12.5px] leading-[2] text-bone/80 block">The city had not changed. Only</span>
            <span className="font-display text-[12.5px] leading-[2] text-bone/80 block">
              he had — the way <span className="bg-gold-1/20 border-b border-gold-1 text-gold-2 px-0.5 shadow-[0_0_10px_rgba(200,132,58,0.2)]">rivers shift</span> before
            </span>
            <span className="font-display text-[12.5px] leading-[2] text-bone/80 block">flood season. She knew it. The letter</span>
            <span className="font-display text-[12.5px] leading-[2] text-bone/80 block">
              confirmed what she had <span className="bg-gold-1/20 border-b border-gold-1 text-gold-2 px-0.5 shadow-[0_0_10px_rgba(200,132,58,0.2)]">suspected</span>.<span className="inline-block w-[2px] h-[13px] bg-gold-1 shadow-[0_0_8px_rgba(200,132,58,1)] align-middle ml-px animate-blink" />
            </span>
            <div className="mt-3.5 p-2.5 bg-[#1A7A6A]/10 border-l-2 border-[#1A7A6A] font-mono text-[9px] text-[#28C3A2]/90 leading-[1.6]">
              <b className="text-[#50D7B4] drop-shadow-[0_0_2px_rgba(80,215,180,0.8)]">ThreadKeeper</b> — Ch.3 unresolved · <b className="text-[#50D7B4] drop-shadow-[0_0_2px_rgba(80,215,180,0.8)]">VoicePrint</b> — consistent · Tension 7.8
            </div>
          </div>
        </div>
        <div className="absolute right-[-16px] top-[170px] bg-ink/80 backdrop-blur-md border border-crimson/40 px-3 py-1.5 font-mono text-[8.5px] text-bone whitespace-nowrap animate-chip !delay-[-1800ms] shadow-[0_0_20px_rgba(138,31,46,0.3)] z-30">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-crimson mr-1.5 align-middle shadow-[0_0_8px_rgba(138,31,46,1)]" />
          Streak · 22 days 🔥
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.2 }}
      >
        <span className="font-mono text-[7.5px] tracking-[3px] uppercase text-gold-1/50">Scroll</span>
        <div className="w-px h-[50px] bg-gradient-to-b from-gold-1 to-transparent animate-scroll-drop" />
      </motion.div>
    </section>
  );
}
