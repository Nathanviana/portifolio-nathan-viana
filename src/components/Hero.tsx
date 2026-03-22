import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="inicio" className="pt-24 pb-16 md:pt-32 md:pb-32 overflow-hidden px-4 md:px-8">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Text Content - Left Side */}
        <div className="md:col-span-7 order-2 md:order-1 text-center md:text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Disponível para novos desafios
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Olá, eu sou o <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">
              Nathan Viana
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 font-medium mb-10 max-w-2xl text-balance leading-relaxed">
            Desenvolvedor de Software especialista em React, Node.js, Next.js e Python. 
            Transformando ideias complexas em soluções digitais elegantes e escaláveis.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Link
              href="https://www.linkedin.com/in/nathan-viana/"
              target="_blank"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 rounded-xl text-sm font-bold hover:bg-indigo-700 hover:shadow-indigo-600/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaLinkedin className="text-lg" />
              Conectar no LinkedIn
            </Link>
            <Link
              href="/Currículo Nathan viana - 2025.pdf"
              target="_blank"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-white border border-slate-200 shadow-sm rounded-xl text-sm font-bold text-slate-700 hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              Baixar Currículo
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center md:justify-start gap-6 text-slate-400">
            <Link href="https://github.com/Nathanviana" target="_blank" className="hover:text-slate-900 transition-colors">
              <FaGithub className="text-2xl" />
            </Link>
            <Link href="mailto:viananathan03@gmail.com" target="_blank" className="hover:text-indigo-600 transition-colors">
              <FaEnvelope className="text-2xl" />
            </Link>
            <Link href="https://wa.me/5591985979679" target="_blank" className="hover:text-emerald-500 transition-colors">
              <FaWhatsapp className="text-2xl" />
            </Link>
          </div>
        </div>

        {/* Image Content - Right Side */}
        <div className="md:col-span-5 order-1 md:order-2 relative mx-auto w-full max-w-md">
          {/* Abstract background blobs */}
          <div className="absolute -inset-4 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-[2rem] opacity-30 blur-2xl animate-pulse"></div>
          
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/50 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 bg-slate-100">
            <Image
              src="/nathan-user.png" 
              alt="Nathan Viana"
              fill
              className="object-cover object-top"
              unoptimized
            />
          </div>
        </div>
        
      </div>

      {/* About text brief integrated below Hero */}
      <div className="mt-32 max-w-4xl mx-auto px-4 relative z-10">
        <div className="absolute top-0 left-8 md:left-12 w-12 h-1 bg-indigo-500 rounded-full"></div>
        <h2 className="text-3xl font-extrabold mb-8 text-slate-900 pt-6">Um pouco sobre mim</h2>
        <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed max-w-3xl">
          <p>
            Não sou apenas um desenvolvedor, sou alguém movido pela curiosidade e pela vontade de entregar valor real através do código. Vim do Design, de onde herdei a obsessão por interfaces polidas e a habilidade única de unir forma impecável a uma função robusta.
          </p>
          <p>
            Hoje, atuo como engenheiro full-stack construindo e orquestrando desde interfaces responsivas em <span className="text-indigo-600 font-semibold">React e Next.js</span> até arquiteturas parrudas em <span className="text-indigo-600 font-semibold">Node, Python e Django</span> — mantendo sempre um olhar atento em Cloud e automações na AWS.
          </p>
        </div>
      </div>
    </section>
  );
}
