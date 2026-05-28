import React from 'react';
import { MonitorPlay, BrainCircuit, Database, CloudSun, Leaf, Activity } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import BorderGlow from './BorderGlow';

export default function Projects() {
  const projects = [
    {
      title: "LAMINAR – AI Vision Monitoring",
      desc: "AI-based vision monitoring system managing multiple camera streams for automated analysis. Custom backend architecture for worker lifecycle and frame ingestion.",
      icon: <MonitorPlay size={32} />,
      tech: ["Python", "Computer Vision", "Backend", "AI"],
      link: "https://github.com/bhargavatejagolla/Laminar"
    },
    {
      title: "Deep Learning – Dog Vision",
      desc: "End-to-end deep learning model for dog breed classification. Explored model training workflows, dataset preprocessing, and optimization techniques.",
      icon: <BrainCircuit size={32} />,
      tech: ["Python", "Neural Networks", "Colab"],
      link: "https://github.com/bhargavatejagolla/end-to-end-dog-vision-video.ipynb"
    },
    {
      title: "Movie Bookings SQL Analytics",
      desc: "Comprehensive SQL project managing a movie bookings database. Handled complex joins, aggregations, and real-world analytics scenarios.",
      icon: <Database size={32} />,
      tech: ["SQL", "Analytics", "Database Design"],
      link: "https://github.com/bhargavatejagolla/movie-bookings-sql-project"
    },
    {
      title: "Bulldozer Price Prediction",
      desc: "End-to-end regression project predicting auction prices. Full ML pipeline: data cleaning, feature engineering, model selection, and evaluation.",
      icon: <Activity size={32} />,
      tech: ["Python", "Scikit-Learn", "Regression"],
      link: "https://github.com/bhargavatejagolla/Bulldozer-Price-Prediction---End-to-End-Regression-Project"
    },
    {
      title: "WeatherSphere Pro",
      desc: "Fully responsive weather app powered by OpenWeatherMap API with dynamic day/night themes, animated icons, and real-time forecasts.",
      icon: <CloudSun size={32} />,
      tech: ["HTML", "CSS", "JavaScript", "API"],
      link: "https://github.com/bhargavatejagolla/weather-sphere-pro"
    },
    {
      title: "Automatic Plant Watering System",
      desc: "IoT-based automated irrigation using Arduino sensors. Implemented soil moisture monitoring to trigger automatic watering and improve efficiency.",
      icon: <Leaf size={32} />,
      tech: ["Arduino", "IoT", "C++"],
      link: "https://github.com/bhargavatejagolla"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black mb-4">Featured <span className="text-primary">Projects</span></h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <BorderGlow
            key={idx}
            edgeSensitivity={30}
            glowColor="150 70 60" /* Greenish glow matching #61dca3 */
            backgroundColor="#101311"
            borderRadius={24}
            glowRadius={30}
            glowIntensity={1}
            coneSpread={30}
            animated={false}
            colors={['#61dca3', '#2b4539', '#61b3dc']}
            className="h-full flex flex-col"
          >
            <div className="p-8 flex flex-col h-full bg-background/50">
              <div className="flex justify-between items-start mb-6">
                <div className="text-primary">{project.icon}</div>
                <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors relative z-10">
                  <FaGithub size={24} />
                </a>
              </div>
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">{project.desc}</p>
              <div className="flex gap-2 flex-wrap text-xs font-mono mt-auto">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300">{t}</span>
                ))}
              </div>
            </div>
          </BorderGlow>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a href="https://github.com/bhargavatejagolla" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 glass-panel px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all">
          <FaGithub size={20} /> View All 30 Repositories
        </a>
      </div>
    </section>
  );
}
