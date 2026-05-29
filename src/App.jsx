import React from 'react';
import LetterGlitch from './components/LetterGlitch';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen text-white font-sans selection:bg-primary/30">

      <Navbar />
      <Hero />

      <div className="relative z-10 bg-background/98 border-t border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Education />
        <Contact />
      </div>
    </div>
  );
}

export default App;
