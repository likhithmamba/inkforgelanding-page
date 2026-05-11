import { useEffect, useRef } from 'react';

class Particle {
  l: number;
  x: number;
  y: number;
  r: number;
  bvy: number;
  vx: number;
  a: number;
  life: number;
  dec: number;

  constructor(layer: number, width: number, height: number) {
    this.l = layer;
    this.x = Math.random() * width;
    this.y = height + 10 + Math.random() * 50;
    this.r = this.l === 0 ? Math.random() * 2 + 1.2 : this.l === 1 ? Math.random() * 1.4 + 0.6 : Math.random() * 0.8 + 0.3;
    this.bvy = -(Math.random() * (0.28 + this.l * 0.2) + 0.14);
    this.vx = (Math.random() - 0.5) * (0.22 + this.l * 0.08);
    this.a = this.l === 0 ? Math.random() * 0.2 + 0.06 : this.l === 1 ? Math.random() * 0.15 + 0.04 : Math.random() * 0.1 + 0.025;
    this.life = 1;
    this.dec = Math.random() * 0.002 + 0.0008 + this.l * 0.0003;
  }

  reset(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = height + 10 + Math.random() * 50;
    this.life = 1;
  }

  update(width: number, height: number, scrollVel: number, mouseX: number, mouseY: number) {
    const si = scrollVel * 0.003;
    this.x += this.vx;
    this.y += this.bvy + si;
    this.life -= this.dec;

    if (this.l === 0) {
      this.vx += (mouseX - this.x) * 0.000015;
      this.bvy += (mouseY - this.y) * 0.000010;
      this.vx *= 0.996;
      this.bvy *= 0.998;
    }

    if (this.life <= 0 || this.y < -20) {
      this.reset(width, height);
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(200, 132, 58, ${(this.a * this.life).toFixed(3)})`;
    ctx.fill();
  }
}

export function CanvasInk() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: typeof window !== 'undefined' ? window.innerWidth/2 : 0, y: typeof window !== 'undefined' ? window.innerHeight/2 : 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const parts = [
      ...Array.from({ length: 28 }, () => new Particle(0, width, height)),
      ...Array.from({ length: 22 }, () => new Particle(1, width, height)),
      ...Array.from({ length: 10 }, () => new Particle(2, width, height)),
    ];
    
    parts.forEach(p => p.y = Math.random() * height);

    let scrollY = window.scrollY;
    let lastScrollY = window.scrollY;
    let scrollVel = 0;
    let smoothScrollVel = 0;

    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    let animationFrameId: number;

    const render = () => {
      scrollVel = scrollY - lastScrollY;
      smoothScrollVel += (scrollVel - smoothScrollVel) * 0.15;
      lastScrollY = scrollY;

      ctx.clearRect(0, 0, width, height);

      const vis = Math.max(0, 1 - scrollY / height);
      if (vis > 0) {
        ctx.globalAlpha = vis;
        
        // Draw constellation lines
        ctx.lineWidth = 0.5;
        for (let i = 0; i < parts.length; i++) {
          for (let j = i + 1; j < parts.length; j++) {
            const dx = parts[i].x - parts[j].x;
            const dy = parts[i].y - parts[j].y;
            const dist = dx * dx + dy * dy;
            
            if (dist < 15000) {
              const alpha = (1 - dist / 15000) * 0.15 * Math.min(parts[i].life, parts[j].life);
              ctx.beginPath();
              ctx.moveTo(parts[i].x, parts[i].y);
              ctx.lineTo(parts[j].x, parts[j].y);
              ctx.strokeStyle = `rgba(138, 31, 46, ${alpha})`; // Crimson glow lines
              ctx.stroke();
            }
          }
        }
        
        parts.forEach(p => {
          p.update(width, height, smoothScrollVel, mouseRef.current.x, mouseRef.current.y);
          p.draw(ctx);
        });
        ctx.globalAlpha = 1;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
