import { Cursor } from './components/Cursor';
import { CanvasInk } from './components/CanvasInk';
import { Grain } from './components/Grain';
import { Progress } from './components/Progress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { Ribbon } from './components/sections/Ribbon';
import { Statement } from './components/sections/Statement';
import { WhyInkforge } from './components/sections/WhyInkforge';
import { Comparison } from './components/sections/Comparison';
import { Editor } from './components/sections/Editor';
import { Intelligence } from './components/sections/Intelligence';
import { Publishing } from './components/sections/Publishing';
import { Languages } from './components/sections/Languages';
import { Workflow } from './components/sections/Workflow';
import { Pricing } from './components/sections/Pricing';
import { Testimonials } from './components/sections/Testimonials';
import { CTA } from './components/sections/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <Grain />
      <Cursor />
      <Progress />
      <CanvasInk />

      <Navbar />
      
      <main className="relative z-10 selection:bg-gold-1 selection:text-void">
        <Hero />
        <Ribbon />
        <Statement />
        <WhyInkforge />
        <Comparison />
        <Editor />
        <Intelligence />
        <Publishing />
        <Languages />
        <Workflow />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
