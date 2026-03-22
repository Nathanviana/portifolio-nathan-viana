import React from "react";

export default function ProfessionalExperience() {
  const experiences = [
    {
      role: "Desenvolvedor Full-Stack",
      company: "Resolve Energia Solar",
      location: "Brasil · Híbrido",
      period: "jan 2025 - out 2025",
      duration: "10 meses",
      description: "Atuei no suporte técnico, desenvolvimento (front e back), automações, criação de landing pages, uso de Django, Docker e integrações. Trabalhei em equipe multidisciplinar, aprimorando habilidades técnicas, disciplina, comunicação e entrega de soluções eficientes.",
      accent: "from-indigo-500 to-violet-500",
    },
    {
      role: "Desenvolvedor Web",
      company: "Veloz",
      location: "Brasil · Remoto",
      period: "jan 2024 - jan 2025",
      duration: "1 ano",
      description: "Atuei como desenvolvedor web na Veloz, uma startup focada em inovação e tecnologia. Participei ativamente do desenvolvimento de sistemas, aprimorando minhas habilidades com Python, Django e desenvolvimento full-stack em ecossistemas ágeis.",
      accent: "from-blue-500 to-indigo-500",
    },
    {
      role: "Auxiliar Administrativo (Aprendiz)",
      company: "O Liberal",
      location: "Brasil · Presencial",
      period: "jan 2020 - jan 2021",
      duration: "1 ano",
      description: "Atuei no setor de Recursos Humanos e Departamento Pessoal (RH/DP). Minhas principais atividades envolviam organização de documentos, suporte em processos administrativos e auxílio na gestão de colaboradores.",
      accent: "from-slate-400 to-slate-500",
    }
  ];

  return (
    <section id="experiencia" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none -z-10"></div>
      
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16">
          <span className="text-indigo-600 font-bold tracking-wider text-sm uppercase mb-2 block">Carreira</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Experiência Profissional
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white border border-slate-200 rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:shadow-indigo-500/5 hover:-translate-y-1 hover:border-indigo-100 transition-all duration-300"
            >
              <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${exp.accent} rounded-l-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">{exp.role}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">{exp.company}</span>
                    <span className="text-slate-500 flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      {exp.location}
                    </span>
                  </div>
                </div>
                
                <div className="bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl text-sm font-medium text-slate-600 shadow-sm shrink-0">
                  <span className="block text-right text-xs text-slate-400 uppercase tracking-wider mb-0.5">Período</span>
                  {exp.period} <span className="text-indigo-400 font-bold ml-1">({exp.duration})</span>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed max-w-3xl mt-6 text-[15px] md:text-base">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
