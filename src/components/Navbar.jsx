import React from 'react';
import GooeyNav from './GooeyNav';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
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
    <nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-x-0 rounded-none bg-background/40 px-6 py-2 flex justify-between items-center backdrop-blur-md">
      <div className="text-xl font-black tracking-tighter">
        <span className="text-primary">&lt;</span>
        Bhargava
        <span className="text-secondary">/&gt;</span>
      </div>
      
      <div className="hidden md:block">
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

      <div className="flex gap-4">
        <a href="https://github.com/bhargavatejagolla" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/golla-bhargava-teja" target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors">
          <FaLinkedin size={24} />
        </a>
      </div>
    </nav>
  );
}
