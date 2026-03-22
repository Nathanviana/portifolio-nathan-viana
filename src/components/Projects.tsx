import Link from "next/link";
import { FaGithub, FaLinkedin, FaExternalLinkAlt, FaAddressCard, FaLaptopCode, FaCheckSquare, FaServer, FaNetworkWired } from "react-icons/fa";

export default function Projects() {
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
      title: "Landing page",
      description: "Criei esta landing page do zero utilizando apenas semântica pura em HTML e CSS avançado, entregando alta performance e um layout moderno.",
      cardIcon: <FaLaptopCode className="text-3xl text-violet-500 group-hover:text-white transition-colors duration-300" />,
      tags: ["HTML5", "CSS3", "Design System"],
      links: [
        { label: "Ver projeto ao vivo", url: "https://sheep-landing-page.vercel.app", icon: <FaExternalLinkAlt /> },
        { label: "Código Fonte", url: "https://github.com/Nathanviana/Sheep-Landing-page", icon: <FaGithub /> }
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
        </div>
      </div>
    </section>
  );
}
