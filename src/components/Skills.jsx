import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Database, Wrench, Globe, Cpu } from 'lucide-react';
import ElectricBorder from './ElectricBorder';
import TextPressure from './TextPressure';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code2 className="text-primary" size={24} />,
      skills: ["Python", "C", "Java", "SQL", "TypeScript", "JavaScript"],
      color: "#61dca3"
    },
    {
      title: "AI & ML",
      icon: <BrainCircuit className="text-secondary" size={24} />,
      skills: ["Machine Learning", "Deep Learning", "LLM Engineering", "AI Engineering", "Model Training", "Data Preprocessing"],
      color: "#61b3dc"
    },
    {
      title: "Data Science",
      icon: <Database className="text-purple-400" size={24} />,
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Power BI", "Tableau"],
      color: "#c084fc"
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="text-yellow-400" size={24} />,
      skills: ["GitHub", "Google Colab", "Jupyter", "VS Code", "AI-assisted Dev"],
      color: "#facc15"
    },
    {
      title: "Web Dev",
      icon: <Globe className="text-blue-400" size={24} />,
      skills: ["HTML", "CSS", "React", "Tailwind CSS"],
      color: "#60a5fa"
    },
    {
      title: "Core CS",
      icon: <Cpu className="text-red-400" size={24} />,
      skills: ["DSA", "Object Oriented Programming (OOP)", "Competitive Programming"],
      color: "#f87171"
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
      <div className="text-center mb-16">
        <div style={{ position: 'relative', height: '100px', width: '100%', maxWidth: '700px', margin: '0 auto' }}>
          <TextPressure
            text="TECHNICAL SKILLS"
            flex={false}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#61b3dc"
            minFontSize={48}
          />
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="h-full"
          >
            <ElectricBorder 
              color={category.color}
              speed={2}
              chaos={0.12}
              thickness={2}
              style={{ borderRadius: '16px' }}
              className="h-full flex flex-col bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden relative group"
            >
              {/* Internal Glass Highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="p-6 h-full flex flex-col relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/10 rounded-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold drop-shadow-md">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="text-xs font-bold px-3 py-1.5 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-gray-200 shadow-sm hover:bg-white/20 hover:text-white transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ElectricBorder>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
