import React from 'react';
import { Trophy, Medal, Rocket, Briefcase } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Experience() {
  const experiences = [
    {
      title: "B2B College Competition — 3rd Place",
      subtitle: "CMR College of Engineering and Technology",
      icon: <Trophy className="text-yellow-400" size={32} />,
      points: [
        "Secured 3rd Prize in a Business-to-Business (B2B) innovation competition.",
        "Presented problem-solving ideas and technical solutions before judges.",
        "Collaborated with a team to develop and pitch a practical solution."
      ],
      color: "from-yellow-400/20 to-yellow-400/0",
      borderColor: "border-yellow-400/30"
    },
    {
      title: "Bowers School of Entrepreneurship AI Hackathon",
      subtitle: "2nd Runner-Up • T-Hub, Hyderabad",
      icon: <Medal className="text-orange-400" size={32} />,
      points: [
        "Achieved 2nd Runner-Up position among 150 participating teams.",
        "Designed and developed AI-based solutions under strict hackathon timelines.",
        "Worked on data processing, model development, and presentation of results."
      ],
      color: "from-orange-400/20 to-orange-400/0",
      borderColor: "border-orange-400/30"
    },
    {
      title: "Active Hackathon Participant",
      subtitle: "2025 – Present",
      icon: <Rocket className="text-blue-400" size={32} />,
      points: [
        "Participated in multiple AI, ML, and software development hackathons.",
        "Reached shortlist/finalist stages in several national-level competitions.",
        "Built solutions involving Machine Learning, Deep Learning, Data Analytics, and Full-Stack Development."
      ],
      color: "from-blue-400/20 to-blue-400/0",
      borderColor: "border-blue-400/30"
    },
    {
      title: "Open Source & GitHub Development",
      subtitle: "Self-Driven Learning",
      icon: <FaGithub className="text-gray-200" size={32} />,
      points: [
        "Maintained and developed 30+ public GitHub repositories.",
        "Built projects across AI/ML, Data Science, SQL, Web Development, and Automation.",
        "Practiced version control, documentation, and project maintenance using Git and GitHub."
      ],
      color: "from-gray-400/20 to-gray-400/0",
      borderColor: "border-gray-500/30"
    },
    {
      title: "Actively Seeking Internships",
      subtitle: "Ready to contribute and learn",
      icon: <Briefcase className="text-primary" size={32} />,
      points: [
        "Looking for internship opportunities in Software Engineering, AI/ML, and Full-Stack Development.",
        "Eager to apply my technical skills to real-world industry problems.",
        "Available for immediate start and highly motivated to collaborate with engineering teams."
      ],
      color: "from-primary/20 to-primary/0",
      borderColor: "border-primary/50"
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto border-t border-white/5 relative z-10">
      <div className="text-center mb-24">
        <h2 className="section-title text-4xl mb-4">Experience & <span className="text-primary">Achievements</span></h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>

      <div className="w-full relative pb-32">
        {experiences.map((exp, idx) => (
          <div 
            key={idx} 
            className="sticky w-full transition-transform duration-500"
            style={{ 
              top: `calc(15vh + ${idx * 40}px)`, 
              zIndex: 10 + idx,
              marginBottom: '60px'
            }}
          >
            <div className={`bg-[#0c1015]/80 backdrop-blur-2xl border ${exp.borderColor} rounded-[32px] p-6 md:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.6)] relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300`}>
              {/* Glassmorphism shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              {/* Background gradient hint */}
              <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${exp.color} opacity-20 pointer-events-none rounded-[32px]`}></div>
              
              <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                <div className={`p-5 bg-black/40 rounded-2xl border ${exp.borderColor} shadow-inner backdrop-blur-md flex-shrink-0`}>
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">{exp.title}</h3>
                  <p className="text-primary font-mono text-sm mb-6">{exp.subtitle}</p>
                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                        <span className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0 shadow-[0_0_10px_rgba(97,220,163,0.8)]"></span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
