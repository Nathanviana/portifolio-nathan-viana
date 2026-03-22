import React from "next";

export default function AcademicTrajectory() {
  const academics = [
    {
      degree: "Análise e Desenvolvimento de Sistemas",
      institution: "UNAMA",
      period: "Concluído - 2025",
      description: "Curso superior de tecnologia com foco em desenvolvimento de software, banco de dados, estrutura de software e boas práticas de programação, com base sólida em Python e Django.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
      ),
      accent: "indigo",
    },
    {
      degree: "Gestão Ágil e Projetos",
      institution: "Extra Curricular",
      period: "Contínuo",
      description: "Práticas em Metodologias Ágeis, Scrum, e ferramentas de gestão visual aplicadas ao ciclo de vida de desenvolvimento de software de alta performance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
      ),
      accent: "violet",
    },
    {
      degree: "Desenvolvimento Full-Stack",
      institution: "Certificações Complementares",
      period: "2023 - 2025",
      description: "Formações aprofundadas em React, Node.js, TypeScript e bancos de dados (PostgreSQL, MongoDB) para consolidar e validar conhecimentos técnicos reais no mercado moderno.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
      ),
      accent: "blue",
    }
  ];

  return (
    <section id="academico" className="py-20 md:py-28 bg-slate-50/50 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center md:items-start mb-16 px-4">
          <span className="text-indigo-600 font-bold tracking-wider text-sm uppercase mb-2">Educação</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Trajetória Acadêmica
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 px-4">
          {academics.map((item, idx) => (
            <div 
              key={idx} 
              className={`group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-${item.accent}-200 transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${item.accent}-400 to-${item.accent}-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              
              <div className={`mb-6 text-${item.accent}-500 w-14 h-14 rounded-xl bg-${item.accent}-50 flex items-center justify-center`}>
                {item.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-indigo-900 transition-colors">
                {item.degree}
              </h3>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{item.institution}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <span className="text-xs font-semibold text-slate-500">{item.period}</span>
              </div>
              
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Decorative background element */}
        <div className="absolute top-1/2 left-0 w-full h-[500px] bg-indigo-50/30 -skew-y-3 -translate-y-1/2 pointer-events-none -z-10"></div>
      </div>
    </section>
  );
}
