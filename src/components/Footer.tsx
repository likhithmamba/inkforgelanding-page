export function Footer() {
  return (
    <footer className="bg-void border-t border-rule pt-[64px] px-[48px] pb-[40px] relative z-20">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-[52px] mb-[52px]">
        <div>
          <div className="font-display text-[22px] font-bold mb-2.5">Inkforge</div>
          <div className="font-mono text-[10.5px] text-muted leading-[1.8] max-w-[280px]">
            The professional writing studio for every language. Write, analyse, format, and publish — in one place, in your language.
          </div>
        </div>
        <div>
          <div className="font-mono text-[8.5px] tracking-[3px] uppercase text-muted mb-[18px]">Write</div>
          <ul className="list-none space-y-2.5">
            {['The Editor', 'Transliteration', 'Streak Tracker', 'DraftArchive', 'Beta Readers'].map(l => (
               <li key={l}><a href="#" className="font-mono text-[10.5px] text-bone/30 hover:text-gold-1 transition-colors cursor-none">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-mono text-[8.5px] tracking-[3px] uppercase text-muted mb-[18px]">Intelligence</div>
          <ul className="list-none space-y-2.5">
            {['StoryPulse', 'ThreadKeeper', 'VoicePrint', 'ChronoGuard', 'SceneWeight', 'First Page Score'].map(l => (
               <li key={l}><a href="#" className="font-mono text-[10.5px] text-bone/30 hover:text-gold-1 transition-colors cursor-none">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-mono text-[8.5px] tracking-[3px] uppercase text-muted mb-[18px]">Publish</div>
          <ul className="list-none space-y-2.5">
            {['Formatter', 'Query Generator', 'Submission Packet', 'Publisher Directory'].map(l => (
               <li key={l}><a href="#" className="font-mono text-[10.5px] text-bone/30 hover:text-gold-1 transition-colors cursor-none">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-mono text-[8.5px] tracking-[3px] uppercase text-muted mb-[18px]">Company</div>
          <ul className="list-none space-y-2.5">
            {['About', 'Languages', 'Pricing', 'Privacy', 'Terms'].map(l => (
               <li key={l}><a href="#" className="font-mono text-[10.5px] text-bone/30 hover:text-gold-1 transition-colors cursor-none">{l}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center pt-6 border-t border-rule font-mono text-[9.5px] text-white/15 tracking-[0.5px] gap-4">
        <div>© 2026 Inkforge. A global writing studio.</div>
        <div>Built for the writer the world forgot to build for.</div>
      </div>
    </footer>
  );
}
