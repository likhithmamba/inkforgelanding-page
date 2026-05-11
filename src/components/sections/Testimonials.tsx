import { motion } from 'motion/react';
import React, { useState } from 'react';

const Card = ({ quote, name, role, delay = 0, floatOffset = 0 }: { quote: string, name: string, role: string, delay?: number, floatOffset?: number }) => {
  const [glow, setGlow] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      opacity: 1
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay }}
    >
      <motion.div 
        className="bg-ink/80 backdrop-blur-md p-[48px_42px] cursor-none relative overflow-hidden transition-all duration-500 border border-gold-1/5 hover:border-gold-1/20 group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setGlow((p) => ({ ...p, opacity: 0 }))}
        animate={{ y: [0, floatOffset, 0] }}
        transition={{ duration: 7 + delay * 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-0"
          style={{
            background: `radial-gradient(circle 250px at ${glow.x}% ${glow.y}%, rgba(200,132,58,0.08), transparent 70%)`,
            opacity: glow.opacity
          }}
        />
        {/* Subtle decorative border corners */}
        <div className="absolute top-0 left-0 w-4 h-px bg-gold-1/30 group-hover:bg-gold-1/60 transition-colors" />
        <div className="absolute top-0 left-0 w-px h-4 bg-gold-1/30 group-hover:bg-gold-1/60 transition-colors" />
        
        <div className="relative z-10">
          <span className="font-display text-[90px] italic font-thin text-gold-1/15 leading-[0.5] mb-6 block drop-shadow-md">"</span>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: delay + 0.2 }}
            className="font-display text-[17px] italic leading-[1.8] text-bone mb-[32px] drop-shadow-sm font-medium tracking-wide"
          >
            {quote}
          </motion.div>
          
          <div className="flex items-center gap-4 mt-8 pt-6 border-t border-rule/50">
            <div>
              <div className="font-mono text-[11px] text-gold-1 mb-1.5 tracking-[1px] uppercase">{name}</div>
              <div className="font-mono text-[9px] text-bone/50 tracking-[0.5px]">{role}</div>
            </div>
            <div className="w-8 h-px bg-gold-1/20 ml-auto group-hover:w-16 transition-all duration-500" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export function Testimonials() {
  return (
    <section id="testi" className="py-[160px] px-12 bg-void border-t border-rule relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-crimson/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold-1/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="font-mono text-[9.5px] tracking-[4px] uppercase text-gold-1 flex items-center gap-3.5 mb-6">
            <div className="w-[30px] h-px bg-gold-1" /> Archives
          </div>
          <h2 className="text-[clamp(42px,5.5vw,76px)] font-black leading-[1.0] tracking-[-1.5px] text-bone drop-shadow-lg">
            Voices from the<br/>
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-gold-1 to-[#E8A855] italic font-thin pr-4 pb-2">
              Veiled Realm.
            </span>
          </h2>
        </motion.div>

        {/* Irregular Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[36px] items-start mt-[100px] relative">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-[36px] pt-0 lg:pt-[40px]">
            <Card 
              quote="ThreadKeeper found a setup from Chapter 4 I had never resolved. I was 80,000 words in. I had no idea. My readers would have known immediately."
              name="Arjun Menon"
              role="Literary Fiction · Kochi"
              delay={0.1}
              floatOffset={-8}
            />
            <Card 
              quote="Writing in two languages used to mean balancing two different apps, mostly because the fonts would crash. Inkforge handles both seamlessly."
              name="Vikram Das"
              role="Fantasy Author · Kolkata"
              delay={0.4}
              floatOffset={-6}
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-[36px] pt-0 lg:pt-[120px]">
            <Card 
              quote="I exported my Tamil manuscript and opened it in Word. The text was perfect. I have been trying to solve that for two years with other tools."
              name="Priya Selvakumar"
              role="Tamil Novelist · Chennai"
              delay={0.3}
              floatOffset={-12}
            />
            <Card 
              quote="VoicePrint warned me that my protagonist sounded like her mentor in Chapter 12. It was shockingly accurate. Saved my draft."
              name="Sara Qureshi"
              role="Thriller · Mumbai"
              delay={0.5}
              floatOffset={-7}
            />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-[36px] pt-0 lg:pt-[10px]">
            <Card 
              quote="The submission packet took seven minutes. I have spent entire days on that before — every time, for every publisher. This is what it should have always been."
              name="Riya Kapoor"
              role="Hindi Fiction · Delhi"
              delay={0.2}
              floatOffset={-10}
            />
            <Card 
              quote="When ChronoGuard caught a flashback inconsistency involving an eclipsed moon, I realized this wasn't just software. It’s an editorial partner."
              name="Dev Aditya"
              role="Dark Fantasy · Bengaluru"
              delay={0.6}
              floatOffset={-9}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
