export function Grain() {
  return (
    <div 
      className="fixed inset-[-80%] w-[260%] h-[260%] opacity-[0.022] pointer-events-none z-[9900]"
      style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'512\' height=\'512\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'.72\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'512\' height=\'512\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
        animation: 'grain 0.5s steps(2) infinite'
      }}
    />
  );
}
