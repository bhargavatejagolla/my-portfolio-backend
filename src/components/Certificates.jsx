import React from 'react';
import { Award, BookOpen, Star, ShieldCheck } from 'lucide-react';
import TrueFocus from './TrueFocus';

export default function Certificates() {
  const certificates = [
    { title: "Learn Data Structures and Algorithms - Roadmap", issuer: "CodeChef", date: "August 2025", icon: <Award className="text-yellow-400" size={24} /> },
    { title: "SQL Roadmap for Data Analysis", issuer: "CodeChef", date: "August 2025", icon: <DatabaseIcon className="text-primary" size={24} /> },
    { title: "Data Analysis using Python", issuer: "CodeChef", date: "August 2025", icon: <BookOpen className="text-secondary" size={24} /> },
    { title: "Intro to Modern AI & Data Science", issuer: "Cisco Networking Academy", date: "2026", icon: <Star className="text-purple-400" size={24} /> },
    { title: "Data Analytics Job Simulation", issuer: "Deloitte (Forage)", date: "2025", icon: <ShieldCheck className="text-primary" size={24} /> },
    { title: "GenAI Powered Data Analytics", issuer: "Tata (Forage)", date: "2025", icon: <ShieldCheck className="text-secondary" size={24} /> },
    { title: "Power BI, ML & Data Science", issuer: "Udemy", date: "2025", icon: <Award className="text-yellow-400" size={24} /> },
    { title: "Cambridge English – B1 Level", issuer: "Cambridge Assessment", date: "Certified", icon: <BookOpen className="text-white" size={24} /> }
  ];

  return (
    <section id="certificates" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5 relative z-10">
      <div className="text-center mb-16">
        <TrueFocus 
          sentence="Certifications & Achievements"
          manualMode={false}
          blurAmount={5}
          borderColor="#61dca3"
          glowColor="rgba(97, 220, 163, 0.6)"
          animationDuration={0.8}
          pauseBetweenAnimations={0.5}
        />
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Over 64 certificates earned across CodeChef, Udemy, Forage, and Cisco, showcasing a continuous drive to master Data Structures, Algorithms, Python, SQL, and AI/ML.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certificates.map((cert, idx) => (
          <div key={idx} className="glass-panel p-6 text-center hover:-translate-y-2 transition-transform flex flex-col justify-between">
            <div className="flex justify-center mb-4">{cert.icon}</div>
            <h3 className="font-bold text-sm mb-2">{cert.title}</h3>
            <div>
              <p className="text-xs text-gray-400">{cert.issuer}</p>
              <span className="inline-block mt-3 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-primary">
                {cert.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Helper icon to avoid importing Database if not used above
function DatabaseIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
      <path d="M3 12A9 3 0 0 0 21 12"></path>
    </svg>
  );
}
