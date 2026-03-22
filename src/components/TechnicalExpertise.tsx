import React from "react";
import { FaServer, FaRobot, FaDesktop, FaTasks } from 'react-icons/fa';

export default function TechnicalExpertise() {
  const categories = [
    {
      title: "Arquitetura Back-End",
      icon: <FaServer className="text-3xl text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-300" />,
      skills: ["Python", "Django", "Node.js", "TypeScript", "REST APIs"],
      gradient: "from-indigo-500/20 to-indigo-500/0",
    },
    {
      title: "Engenharia de Dados",
      icon: <FaRobot className="text-3xl text-violet-400 mb-6 group-hover:scale-110 transition-transform duration-300" />,
      skills: ["PostgreSQL", "MySQL", "Prisma ORM", "MongoDB", "n8n"],
      gradient: "from-violet-500/20 to-violet-500/0",
    },
    {
      title: "Ecossistema Front-End",
      icon: <FaDesktop className="text-3xl text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300" />,
      skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "HTML/CSS"],
      gradient: "from-cyan-500/20 to-cyan-500/0",
    },
    {
      title: "DevOps & Metodologias",
      icon: <FaTasks className="text-3xl text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300" />,
      skills: ["Docker", "AWS", "Git/GitHub", "CI/CD", "Scrum", "Ágil"],
      gradient: "from-emerald-500/20 to-emerald-500/0",
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative blurred lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[128px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-indigo-400 font-bold tracking-widest text-sm uppercase mb-3 block">Habilidades</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Expertise Técnica
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
            Um repertório versátil, com foco em resolver problemas através da tecnologia adequada para cada cenário.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 max-w-7xl mx-auto">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="group relative bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-3xl p-8 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/50"
            >
              {/* Subtle top gradient glow */}
              <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {cat.icon}
                <h3 className="text-xl font-bold text-white mb-6 tracking-wide">{cat.title}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-3 py-1.5 bg-slate-800/50 text-slate-300 rounded-lg text-sm font-medium border border-slate-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
