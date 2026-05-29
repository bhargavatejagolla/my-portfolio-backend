import React from 'react';
import { GraduationCap, School } from 'lucide-react';
import PixelTransition from './PixelTransition';
import BorderGlow from './BorderGlow';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-5xl mx-auto border-t border-white/5">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black mb-4">Education <span className="text-primary">& Timeline</span></h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* B.Tech */}
        <BorderGlow
          edgeSensitivity={30}
          glowColor="150 70 60"
          backgroundColor="transparent"
          borderRadius={15}
          glowRadius={30}
          glowIntensity={1}
          coneSpread={30}
          animated={false}
          colors={['#61dca3', '#2b4539', '#61b3dc']}
          className="w-full h-full"
        >
          <PixelTransition
            gridSize={12}
            pixelColor="#61dca3"
            animationStepDuration={0.4}
            aspectRatio="80%"
            className="w-full h-full glass-panel"
            firstContent={
              <div className="h-full w-full flex flex-col items-center justify-center p-8 text-center bg-[#0d1110]">
                <GraduationCap size={64} className="text-primary mb-6" />
                <h3 className="text-3xl font-bold mb-2">B.Tech in CS</h3>
                <p className="text-primary font-mono text-lg">2024 - 2028</p>
                <div className="mt-6 text-sm text-gray-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  Press to decode
                </div>
              </div>
            }
            secondContent={
              <div className="h-full w-full flex flex-col items-center justify-center p-8 text-center bg-[#0d1110]">
                <h4 className="text-xl font-bold mb-2 text-white">CMR College of Engineering & Technology</h4>
                <p className="text-gray-300 mb-4">Hyderabad, India</p>
                <div className="px-4 py-2 bg-primary/20 border border-primary/50 rounded-full text-primary font-bold text-xl mb-6">
                  CGPA: 8.86
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Focus areas: Artificial Intelligence, Machine Learning, Data Science, DSA
                </p>
              </div>
            }
          />
        </BorderGlow>

        {/* Intermediate */}
        <BorderGlow
          edgeSensitivity={30}
          glowColor="200 70 60"
          backgroundColor="transparent"
          borderRadius={15}
          glowRadius={30}
          glowIntensity={1}
          coneSpread={30}
          animated={false}
          colors={['#61b3dc', '#1e3a8a', '#c084fc']}
          className="w-full h-full"
        >
          <PixelTransition
            gridSize={12}
            pixelColor="#61b3dc"
            animationStepDuration={0.4}
            aspectRatio="80%"
            className="w-full h-full glass-panel"
            firstContent={
              <div className="h-full w-full flex flex-col items-center justify-center p-8 text-center bg-[#0c1015]">
                <School size={64} className="text-secondary mb-6" />
                <h3 className="text-3xl font-bold mb-2">Intermediate</h3>
                <p className="text-secondary font-mono text-lg">2022 - 2024</p>
                <div className="mt-6 text-sm text-gray-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  Press to decode
                </div>
              </div>
            }
            secondContent={
              <div className="h-full w-full flex flex-col items-center justify-center p-8 text-center bg-[#0c1015]">
                <h4 className="text-xl font-bold mb-2 text-white">Vijetha Junior College</h4>
                <p className="text-gray-300 mb-4">Hyderabad, India</p>
                <div className="px-4 py-2 bg-secondary/20 border border-secondary/50 rounded-full text-secondary font-bold text-xl mb-6">
                  Percentage: 97%
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  MPC (Mathematics, Physics, Chemistry)
                </p>
              </div>
            }
          />
        </BorderGlow>
      </div>
    </section>
  );
}
