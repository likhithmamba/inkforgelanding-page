const SCRIPTS = [
  { script: '文字', lang: 'Chinese' },
  { script: 'हि', lang: 'Hindi' },
  { script: 'Español', lang: 'Spanish' },
  { script: 'ع', lang: 'Arabic' },
  { script: 'বাং', lang: 'Bengali' },
  { script: 'Português', lang: 'Portuguese' },
  { script: 'த', lang: 'Tamil' },
  { script: 'Français', lang: 'French' },
  { script: 'ಕ', lang: 'Kannada' },
  { script: 'తె', lang: 'Telugu' },
  { script: 'Deutsch', lang: 'German' },
  { script: '日本語', lang: 'Japanese' },
];

export function Ribbon() {
  return (
    <div className="overflow-hidden border-y border-rule bg-gold-1/5 relative">
      <div className="absolute inset-y-0 left-0 w-[100px] z-10 bg-gradient-to-r from-void to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-[100px] z-10 bg-gradient-to-l from-void to-transparent pointer-events-none" />
      
      <div className="flex animate-marquee w-max">
        {[...SCRIPTS, ...SCRIPTS].map((item, i) => (
          <div key={i} className="inline-flex items-center gap-3 py-3.5 px-10 border-r border-rule shrink-0">
            <span className="font-display text-[20px] text-bone/40">{item.script}</span>
            <span className="font-mono text-[8.5px] tracking-[2px] uppercase text-white/15">{item.lang}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
