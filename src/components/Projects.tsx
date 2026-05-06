"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaExternalLinkAlt, FaAddressCard, FaLaptopCode, FaCheckSquare, FaServer, FaNetworkWired, FaTimes, FaReact, FaVuejs, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiHtml5 } from "react-icons/si";

// ─── Landing Pages Modal ──────────────────────────────────────────────────────

const landingPages = [
  {
    title: "Portfólio Edinaldo Viana",
    description: "Portfólio profissional com visual moderno, animações fluidas e seções de apresentação, habilidades e contato.",
    url: "https://edinaldo-viana-portfolio.vercel.app/",
    tags: ["Vue.js", "Tailwind CSS"],
    tagIcons: [<FaVuejs key="vue" className="text-emerald-500" />, <SiTailwindcss key="tw" className="text-sky-400" />],
    color: "emerald",
    gradient: "from-emerald-500 to-teal-500",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    title: "Rosa Menina",
    description: "Landing page temática com layout responsivo, paleta vibrante e foco em conversão e experiência do usuário.",
    url: "https://rosa-menina.vercel.app/",
    tags: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    tagIcons: [<FaReact key="react" className="text-sky-400" />, <SiTailwindcss key="tw" className="text-sky-400" />, <SiJavascript key="js" className="text-yellow-400" />, <SiHtml5 key="html" className="text-orange-500" />, <FaCss3Alt key="css" className="text-blue-500" />],
    color: "pink",
    gradient: "from-pink-500 to-rose-500",
    badgeBg: "bg-pink-50 text-pink-700 border-pink-200",
  },
  {
    title: "SaaS REST LP",
    description: "Landing page para produto SaaS com estrutura clara de features, call-to-action estratégico e design minimalista.",
    url: "https://lp-saas-rest.vercel.app/",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    tagIcons: [<FaReact key="react" className="text-sky-400" />, <SiTailwindcss key="tw" className="text-sky-400" />, <SiJavascript key="js" className="text-yellow-400" />],
    color: "violet",
    gradient: "from-violet-500 to-indigo-500",
    badgeBg: "bg-violet-50 text-violet-700 border-violet-200",
  },
];

function LandingPagesModal({ onClose }: { onClose: () => void }) {
  // Fechar com ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Landing Pages Modal"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Panel */}
      <div className="relative w-full max-w-4xl bg-white rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden animate-modal-in">
        {/* Header */}
        <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-slate-100">
          <div>
            <span className="text-indigo-600 font-bold tracking-wider text-xs uppercase mb-1 block">
              Portfólio
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Landing Pages
            </h3>
            <p className="text-slate-500 text-sm font-medium mt-1">
              Projetos focados em conversão, performance e design responsivo.
            </p>
          </div>
          <button
            onClick={onClose}
            id="modal-close-btn"
            className="w-10 h-10 flex items-center justify-center rounded-2xl border border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-all duration-200"
            aria-label="Fechar modal"
          >
            <FaTimes />
          </button>
        </div>

        {/* Cards */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-h-[70vh] overflow-y-auto">
          {landingPages.map((lp, idx) => (
            <div
              key={idx}
              className="group flex flex-col rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 hover:border-indigo-200 transition-all duration-300"
            >
              {/* Gradient top bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${lp.gradient}`} />

              <div className="flex flex-col flex-1 p-6">
                {/* Tags / stacks */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {lp.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold border ${lp.badgeBg}`}
                    >
                      {lp.tagIcons[tIdx]}
                      {tag}
                    </span>
                  ))}
                </div>

                <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {lp.title}
                </h4>

                <p className="text-slate-500 text-sm leading-relaxed flex-1">
                  {lp.description}
                </p>

                <Link
                  href={lp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 shadow-md shadow-indigo-600/20 hover:shadow-lg hover:shadow-indigo-600/40 transition-all duration-300"
                >
                  <FaExternalLinkAlt className="text-[10px]" />
                  Ver ao vivo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes modal-in {
          from { opacity: 0; transform: scale(0.95) translateY(16px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
        .animate-modal-in {
          animation: modal-in 0.25s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>
    </div>
  );
}

// ─── Projects Section ─────────────────────────────────────────────────────────

export default function Projects() {
  const [showLandingModal, setShowLandingModal] = useState(false);

  const projects = [
    {
      title: "Business Card",
      description: "Sistema de cartões de visita digital otimizado. Um projeto desafiador e, ao mesmo tempo, muito gratificante, focado em conversão e usabilidade rápida.",
      cardIcon: <FaAddressCard className="text-3xl text-indigo-500 group-hover:text-white transition-colors duration-300" />,
      tags: ["Digital", "Web App", "UI/UX"],
      links: [
        { label: "Post no LinkedIn", url: "https://www.linkedin.com/posts/nathan-viana_nos-ultimos-meses-tive-a-oportunidade-de-activity-7391821670061178881-tA3z", icon: <FaLinkedin /> }
      ]
    },
    {
      title: "MyToDo App",
      description: "Aplicação interativa de lista de tarefas (To-Do List) desenvolvida com React e Vite. O foco principal foi criar uma experiência visual fluida, agradável e com micro-interações.",
      cardIcon: <FaCheckSquare className="text-3xl text-emerald-500 group-hover:text-white transition-colors duration-300" />,
      tags: ["React", "Vite", "JavaScript"],
      links: [
        { label: "Ver projeto ao vivo", url: "https://mytodo-react-project.vercel.app/", icon: <FaExternalLinkAlt /> },
        { label: "Código Fonte", url: "https://github.com/Nathanviana/mytodo-react-project", icon: <FaGithub /> }
      ]
    },
    {
      title: "API REST - GuideX",
      description: "Uma API REST robusta projetada focando em qualidade, segurança de rotas, e estruturação modular (Clean Code) para facilitar manutenção e deploy contínuo em ecossistemas de larga escala.",
      cardIcon: <FaServer className="text-3xl text-blue-500 group-hover:text-white transition-colors duration-300" />,
      tags: ["Node.js", "TypeScript", "PostgreSQL", "Zod", "JWT"],
      links: [
        { label: "Artigo", url: "https://www.linkedin.com/posts/nathan-viana_nodejs-typescript-express-activity-7334379646030876672-tGeN", icon: <FaLinkedin /> },
        { label: "Código Fonte", url: "https://github.com/Nathanviana/API-REST-guideX", icon: <FaGithub /> }
      ]
    },
    {
      title: "Homelab Infrastructure",
      description: "Arquitetura DevOps na prática. Transformei um hardware ocioso em um servidor de produção Ubuntu real, conteinerizando aplicações e configurando monitoramento.",
      cardIcon: <FaNetworkWired className="text-3xl text-slate-500 group-hover:text-white transition-colors duration-300" />,
      tags: ["Ubuntu Server", "Docker", "Prometheus", "Grafana"],
      links: [
        { label: "Estudo de Caso", url: "https://www.linkedin.com/posts/nathan-viana_linux-ubuntuserver-devops-activity-7397257468168364050-bzCg", icon: <FaLinkedin /> }
      ]
    }
  ];

  return (
    <>
      <section id="projetos" className="py-24 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-indigo-600 font-bold tracking-wider text-sm uppercase mb-2 block">Portfólio</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Projetos em Destaque
              </h2>
            </div>
            <p className="text-slate-500 max-w-md md:text-right font-medium">
              Uma seleção de aplicações otimizadas, focadas em usabilidade e clean code, dispensando recursos visuais desnecessários.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Existing project cards */}
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-[2rem] border border-slate-200 p-8 hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200 transition-all duration-300 flex flex-col h-full"
              >
                {/* Icon Header */}
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 transition-colors duration-300 shadow-sm border border-slate-100 group-hover:border-indigo-600">
                  {project.cardIcon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 mb-8 leading-relaxed font-medium flex-grow text-sm md:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold tracking-wide border border-transparent group-hover:border-slate-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.links.map((link, lIdx) => {
                    const isPrimary = link.label.includes('Ver') || link.label.includes('Artigo');
                    return (
                      <Link
                        key={lIdx}
                        href={link.url}
                        target="_blank"
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 flex-1 justify-center ${
                          isPrimary
                            ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/40"
                            : "bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        {link.icon}
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* ── Landing Pages Card ── */}
            <button
              id="landing-pages-card"
              onClick={() => setShowLandingModal(true)}
              className="group bg-white rounded-[2rem] border border-slate-200 p-8 hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200 transition-all duration-300 flex flex-col h-full text-left cursor-pointer w-full"
              aria-label="Ver projetos de Landing Pages"
            >
              {/* Icon Header */}
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 transition-colors duration-300 shadow-sm border border-slate-100 group-hover:border-indigo-600">
                <FaLaptopCode className="text-3xl text-indigo-500 group-hover:text-white transition-colors duration-300" />
              </div>

              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  Landing Pages
                </h3>
                {/* Badge */}
                <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-600 text-xs font-bold border border-indigo-100">
                  3 projetos
                </span>
              </div>

              <p className="text-slate-600 mb-8 leading-relaxed font-medium flex-grow text-sm md:text-base">
                Coleção de landing pages focadas em performance, conversão e design responsivo cada uma desenvolvida com stacks modernas e atenção aos detalhes.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["Vue.js", "React", "Tailwind CSS", "JavaScript"].map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold tracking-wide border border-transparent group-hover:border-slate-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-auto w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold shadow-md shadow-indigo-600/20 group-hover:bg-indigo-700 group-hover:shadow-lg group-hover:shadow-indigo-600/40 transition-all duration-300">
                <FaExternalLinkAlt className="text-[10px]" />
                Ver Landing Pages
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showLandingModal && (
        <LandingPagesModal onClose={() => setShowLandingModal(false)} />
      )}
    </>
  );
}
