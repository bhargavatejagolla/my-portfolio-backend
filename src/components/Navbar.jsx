import React, { useState } from 'react';
import GooeyNav from './GooeyNav';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Download, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const items = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certificates", href: "#certificates" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-x-0 rounded-none bg-background/40 px-6 py-2 flex justify-between items-center backdrop-blur-md">
        <div className="text-xl font-black tracking-tighter">
          <span className="text-primary">&lt;</span>
          Bhargava
          <span className="text-secondary">/&gt;</span>
        </div>
        
        <div className="hidden lg:block">
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={['white', 'primary', 'secondary']}
          />
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="/Bhargava%20Teja-resume.pdf" 
            download 
            className="hidden md:flex items-center gap-2 bg-primary/10 border border-primary/50 text-primary px-4 py-1.5 rounded-full font-bold text-sm hover:bg-primary hover:text-black transition-all shadow-[0_0_10px_rgba(97,220,163,0.2)]"
          >
            <Download size={16} /> Resume
          </a>
          <a href="https://github.com/bhargavatejagolla" target="_blank" rel="noreferrer" className="hidden sm:block hover:text-primary transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/golla-bhargava-teja" target="_blank" rel="noreferrer" className="hidden sm:block hover:text-secondary transition-colors">
            <FaLinkedin size={24} />
          </a>
          <button 
            className="lg:hidden text-white hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-14 left-0 w-full z-40 bg-background/95 backdrop-blur-3xl border-b border-white/10 shadow-2xl flex flex-col items-center py-8 gap-6 lg:hidden"
          >
            {items.map((item, i) => (
              <a 
                key={i}
                href={item.href}
                className="text-xl font-bold text-gray-200 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            
            <div className="w-24 h-px bg-white/20 my-2"></div>
            
            <div className="flex items-center gap-6">
              <a href="https://github.com/bhargavatejagolla" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                <FaGithub size={28} />
              </a>
              <a href="https://linkedin.com/in/golla-bhargava-teja" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-secondary transition-colors">
                <FaLinkedin size={28} />
              </a>
            </div>
            
            <a 
              href="/Bhargava%20Teja-resume.pdf" 
              download 
              className="mt-4 flex items-center gap-2 bg-primary text-background px-8 py-3 rounded-full font-bold shadow-[0_0_15px_rgba(97,220,163,0.4)]"
            >
              <Download size={20} /> Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
