import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[800] h-[60px] px-12 flex items-center justify-between border-b transition-all duration-500
        ${isScrolled ? 'bg-[#050508]/95 border-rule backdrop-blur-xl' : 'bg-transparent border-transparent'}
      `}
    >
      <a href="#" className="flex items-center gap-2.5 text-[19px] font-black text-bone tracking-[-0.4px]">
        <motion.div 
          className="w-5 h-5 rounded-[50%_50%_50%_50%/58%_58%_42%_42%] blur-[0.5px]"
          style={{
            background: 'conic-gradient(from 190deg at 44% 72%, var(--color-gold-1), #8A1F2E 28%, var(--color-gold-1) 55%, var(--color-gold-2))'
          }}
          animate={{
            scale: [1, 0.9, 1.07, 1],
          }}
          transition={{ duration: 2.8, ease: "easeInOut", repeat: Infinity }}
        />
        Inkforge
      </a>
      
      <ul className="hidden md:flex gap-5 lg:gap-8">
        {['Editor', 'Intelligence', 'Publishing', 'Languages', 'Pricing'].map(item => (
          <li key={item}>
            <a 
              href={`#${item.toLowerCase()}`}
              className="relative font-mono text-[9.5px] tracking-[2px] uppercase text-muted hover:text-gold-1 transition-colors group"
            >
              {item}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold-1 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>
      
      <a 
        href="#"
        className="font-mono text-[9px] tracking-[2px] uppercase px-5 py-2 border border-gold-1 text-gold-1 hover:bg-gold-1 hover:text-void transition-colors duration-200"
      >
        Begin Free
      </a>
    </nav>
  );
}
