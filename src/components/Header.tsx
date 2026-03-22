import Link from "next/link";
import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Header() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-0">
      <header className="w-full max-w-5xl bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full px-6 py-4 flex items-center justify-between transition-all duration-300 hover:bg-white/90 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
        {/* Logo / Initials */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-extrabold text-sm tracking-tighter group-hover:scale-105 transition-transform duration-300 shadow-md shadow-indigo-600/20">
            NV
          </div>
          <span className="font-bold text-slate-800 tracking-tight hidden sm:block group-hover:text-indigo-600 transition-colors">
            Nathan Viana
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/50">
          <Link href="/" className="px-5 py-2 rounded-full text-sm font-semibold text-slate-600 hover:text-indigo-600 hover:bg-white hover:shadow-sm transition-all">
            Início
          </Link>
          <Link href="/#academico" className="px-5 py-2 rounded-full text-sm font-semibold text-slate-600 hover:text-indigo-600 hover:bg-white hover:shadow-sm transition-all">
            Acadêmico
          </Link>
          <Link href="/experiencia" className="px-5 py-2 rounded-full text-sm font-semibold text-slate-600 hover:text-indigo-600 hover:bg-white hover:shadow-sm transition-all">
            Carreira
          </Link>
          <Link href="/skills" className="px-5 py-2 rounded-full text-sm font-semibold text-slate-600 hover:text-indigo-600 hover:bg-white hover:shadow-sm transition-all">
            Skills
          </Link>
          <Link href="/projetos" className="px-5 py-2 rounded-full text-sm font-semibold text-slate-600 hover:text-indigo-600 hover:bg-white hover:shadow-sm transition-all">
            Projetos
          </Link>
        </nav>

        {/* Contact Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="https://wa.me/5591985979679"
            target="_blank"
            className="hidden md:flex items-center justify-center gap-2 rounded-full bg-emerald-50 px-4 py-2.5 text-sm font-bold text-emerald-600 hover:bg-emerald-500 hover:text-white hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5 transition-all duration-300"
          >
            <FaWhatsapp className="text-lg" />
            WhatsApp
          </Link>
          
          <Link
            href="mailto:viananathan03@gmail.com"
            className="hidden md:flex items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-bold text-white hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-600/20 hover:-translate-y-0.5 transition-all duration-300"
          >
            <FaEnvelope className="text-lg" />
            Email
          </Link>
          
          {/* Mobile menu button */}
          <button className="lg:hidden p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}
