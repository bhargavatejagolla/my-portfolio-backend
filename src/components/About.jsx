import React from 'react';
import { Target, Zap, Rocket, Brain } from 'lucide-react';
import ScrambledText from './ScrambledText';
import TextPressure from './TextPressure';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative z-10 border-t border-white/5">
      <div className="text-center mb-16">
        <div style={{ position: 'relative', height: '100px', width: '100%', maxWidth: '600px', margin: '0 auto' }}>
          <TextPressure
            text="ABOUT ME"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#61dca3"
            minFontSize={48}
          />
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="glass-panel p-8 h-full relative group hover:border-primary/50 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 group-hover:bg-primary/20 transition-colors"></div>
          <ScrambledText radius={120} duration={1.2} speed={0.4} scrambleChars=".:/\\_<>{}[]+=-*&^%$#@!~" className="text-gray-300 leading-relaxed mb-6 font-mono text-[15px]">
            Motivated Computer Science undergraduate with strong academic performance and a deep interest in Artificial Intelligence, Machine Learning, and data-driven technologies. Actively develops practical solutions through hands-on projects in machine learning, deep learning, and full-stack development. Maintains an active GitHub portfolio showcasing technical implementations and continuous learning. Interested in applying computational techniques to real-world problems and contributing to research-oriented environments.
          </ScrambledText>
          
          <div className="flex gap-4 flex-wrap mt-8">
            <span className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-semibold hover:scale-105 transition-transform cursor-pointer">Driven Builder</span>
            <span className="px-4 py-2 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-sm font-semibold hover:scale-105 transition-transform cursor-pointer">Fast Learner</span>
            <span className="px-4 py-2 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full text-sm font-semibold hover:scale-105 transition-transform cursor-pointer">Ambitious</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="glass-panel p-6 text-center hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-primary/50 shadow-[0_0_0_transparent] hover:shadow-[0_0_30px_rgba(97,220,163,0.3)]">
            <Brain className="text-primary mx-auto mb-4" size={32} />
            <h3 className="font-bold mb-2">AI / ML Focus</h3>
            <p className="text-xs text-gray-400">Deep learning & LLM Engineering</p>
          </div>
          <div className="glass-panel p-6 text-center hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-secondary/50 shadow-[0_0_0_transparent] hover:shadow-[0_0_30px_rgba(97,179,220,0.3)]">
            <Rocket className="text-secondary mx-auto mb-4" size={32} />
            <h3 className="font-bold mb-2">Active Builder</h3>
            <p className="text-xs text-gray-400">30+ GitHub Repositories</p>
          </div>
          <div className="glass-panel p-6 text-center hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-purple-500/50 shadow-[0_0_0_transparent] hover:shadow-[0_0_30px_rgba(192,132,252,0.3)]">
            <Target className="text-purple-400 mx-auto mb-4" size={32} />
            <h3 className="font-bold mb-2">Competitive</h3>
            <p className="text-xs text-gray-400">CodeChef & Hackathons</p>
          </div>
          <div className="glass-panel p-6 text-center hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-yellow-400/50 shadow-[0_0_0_transparent] hover:shadow-[0_0_30px_rgba(250,204,21,0.3)]">
            <Zap className="text-yellow-400 mx-auto mb-4" size={32} />
            <h3 className="font-bold mb-2">High Achiever</h3>
            <p className="text-xs text-gray-400">8.86 CGPA</p>
          </div>
        </div>
      </div>
    </section>
  );
}
