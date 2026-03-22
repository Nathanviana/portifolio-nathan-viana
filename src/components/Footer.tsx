export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 mt-auto bg-slate-50 border-t border-slate-200/60">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col items-center justify-between gap-6 md:flex-row">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white font-extrabold text-xs tracking-tighter shadow-sm">
              NV
            </div>
            <span className="font-bold text-slate-800 tracking-tight">Nathan Viana</span>
          </div>
          <p className="text-sm font-medium text-slate-500 text-center md:text-left">
            Construindo o futuro na web.
          </p>
        </div>

        <p className="text-sm font-medium text-slate-400 text-center">
          &copy; {currentYear} Nathan Viana. Todos os direitos reservados.
        </p>
        
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/nathan-viana/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-400 hover:text-indigo-600 transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/Nathanviana" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
