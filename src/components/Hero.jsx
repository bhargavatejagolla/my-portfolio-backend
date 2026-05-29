import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiCodechef } from 'react-icons/si';
import Shuffle from './Shuffle';
import { TypeAnimation } from 'react-type-animation';
import ElectricBorder from './ElectricBorder';

import LetterGlitch from './LetterGlitch';

export default function Hero() {
  return (
    <section id="hero" className="relative flex flex-col items-center min-h-screen px-6 text-center pt-32 lg:pt-[15vh] pb-24 overflow-hidden">
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={false}
        outerVignette={false}
        smooth={true}
        className="absolute inset-0 w-full h-full"
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:items-start"
      >
        <div className="w-full text-left min-w-0">
          <h2 className="text-primary font-mono mb-4 text-lg">Hello, I am</h2>
          <h1 className="mb-4 flex flex-wrap gap-x-3 lg:gap-x-5 text-5xl lg:text-7xl font-black leading-tight tracking-tight text-white m-0">
            <Shuffle
              text="Golla"
              shuffleDirection="right"
              duration={0.5}
              animationMode="evenodd"
              shuffleTimes={3}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={false}
              triggerOnHover={true}
              respectReducedMotion={true}
              loop={false}
              loopDelay={0}
              className="inline-block"
              tag="span"
            />
            <Shuffle
              text="Bhargava"
              shuffleDirection="right"
              duration={0.5}
              animationMode="evenodd"
              shuffleTimes={3}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={false}
              triggerOnHover={true}
              respectReducedMotion={true}
              loop={false}
              loopDelay={0}
              className="inline-block"
              tag="span"
            />
            <Shuffle
              text="Teja"
              shuffleDirection="right"
              duration={0.5}
              animationMode="evenodd"
              shuffleTimes={3}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={false}
              triggerOnHover={true}
              respectReducedMotion={true}
              loop={false}
              loopDelay={0}
              className="inline-block"
              tag="span"
            />
          </h1>
          <div className="text-3xl lg:text-5xl font-black mb-8 leading-tight tracking-tight min-h-[60px] h-auto flex flex-wrap">
            <TypeAnimation
              sequence={[
                'AI & ML Engineer',
                2000,
                'Web Developer',
                2000,
                'Software Developer',
                2000,
                'Data Analyst',
                2000,
                'LLM Engineer',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary break-words whitespace-normal"
            />
          </div>
          
          <div className="glass-panel bg-[#0c1015]/80 backdrop-blur-xl p-6 lg:p-8 rounded-[24px] border border-white/10 mb-8 max-w-full w-full break-words text-left relative overflow-hidden group shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
            {/* Subtle gradient glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-wrap gap-3 md:gap-4 items-center text-gray-300 font-mono text-xs md:text-sm mb-6">
              <span className="flex items-center gap-2 border border-white/5 bg-black/50 px-4 py-1.5 rounded-full backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(97,220,163,0.8)]"></span>
                30+ GitHub Projects
              </span>
              <span className="flex items-center gap-2 border border-white/5 bg-black/50 px-4 py-1.5 rounded-full backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(97,220,163,0.8)]"></span>
                Hackathon Competitor
              </span>
              <span className="flex items-center gap-2 border border-white/5 bg-black/50 px-4 py-1.5 rounded-full backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(97,220,163,0.8)]"></span>
                AI/ML Developer
              </span>
            </div>
            
            <p className="relative z-10 text-lg lg:text-xl text-gray-300 leading-relaxed font-light">
              Engineering <span className="font-semibold text-white">intelligent solutions</span> from complex data. 
              Specializing in <span className="text-primary font-medium">Machine Learning</span>, <span className="text-primary font-medium">Deep Learning</span>, and <span className="text-primary font-medium">LLM Architecture</span> to build robust, scalable systems that drive real-world impact.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#projects" className="bg-primary text-background px-8 py-3 rounded-full font-bold hover:shadow-[0_0_20px_rgba(97,220,163,0.4)] transition-all text-center">
              View Work
            </a>
            <a href="#contact" className="glass-panel px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all text-center">
              Contact Me
            </a>
            <a 
              href="/Bhargava%20Teja-resume.pdf" 
              download 
              className="flex items-center gap-2 glass-panel border border-primary/40 text-primary px-8 py-3 rounded-full font-bold hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(97,220,163,0.2)] transition-all text-center"
            >
              <Download size={20} /> Download Resume
            </a>
          </div>

          <div className="flex flex-wrap gap-4 lg:gap-6 text-gray-400">
            <a href="https://github.com/bhargavatejagolla" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors p-3 glass-panel rounded-full flex items-center justify-center"><FaGithub size={24} /></a>
            <a href="https://linkedin.com/in/golla-bhargava-teja" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors p-3 glass-panel rounded-full flex items-center justify-center"><FaLinkedin size={24} /></a>
            <a href="https://www.codechef.com/users/bhargavatejago" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors p-3 glass-panel rounded-full flex items-center justify-center"><SiCodechef size={24} /></a>
            <a href="mailto:bhargavatejagolla@gmail.com" className="hover:text-primary transition-colors p-3 glass-panel rounded-full flex items-center justify-center"><Mail size={24} /></a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0 w-full">
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full p-2 glass-panel overflow-hidden border-2 border-primary/50 shadow-[0_0_30px_rgba(97,220,163,0.2)] flex-shrink-0">
            <img 
              src="/bt.jpeg" 
              alt="Bhargava Teja Golla" 
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&auto=format&fit=crop';
              }}
            />
            <div className="absolute bottom-4 right-4 bg-background px-4 py-1 rounded-full border border-primary text-primary text-sm font-mono font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Builder
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-gray-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
