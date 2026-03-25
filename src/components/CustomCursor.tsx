"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Só ativa em dispositivos com mouse real
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // Mostra os elementos do cursor
    if (cursorDotRef.current) cursorDotRef.current.style.display = "flex";
    if (cursorOutlineRef.current) cursorOutlineRef.current.style.display = "flex";

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cursorDotRef.current!.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      cursorOutlineRef.current!.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a") || target.closest("button")) {
        // Botão/link: some o anel, cresce a bolinha
        if (cursorOutlineRef.current) {
          cursorOutlineRef.current.style.opacity = "0";
          cursorOutlineRef.current.style.transform += " scale(0)";
        }
        if (cursorDotRef.current) {
          const dot = cursorDotRef.current.firstElementChild as HTMLElement;
          if (dot) { dot.style.width = "12px"; dot.style.height = "12px"; }
        }
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a") || target.closest("button")) {
        if (cursorOutlineRef.current) cursorOutlineRef.current.style.opacity = "1";
        if (cursorDotRef.current) {
          const dot = cursorDotRef.current.firstElementChild as HTMLElement;
          if (dot) { dot.style.width = "8px"; dot.style.height = "8px"; }
        }
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseout", onMouseOut, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return (
    <>
      {/* Anel externo — oculto por padrão, JS ativa somente em desktop */}
      <div
        ref={cursorOutlineRef}
        style={{ display: "none", top: 0, left: 0, position: "fixed", transition: "transform 120ms ease-out, opacity 200ms ease" }}
        className="pointer-events-none z-[9998] items-center justify-center w-0 h-0"
      >
        <div className="w-10 h-10 rounded-full border-2 border-indigo-400/60 absolute transition-all duration-300"></div>
      </div>

      {/* Ponto central */}
      <div
        ref={cursorDotRef}
        style={{ display: "none", top: 0, left: 0, position: "fixed", transition: "transform 60ms linear" }}
        className="pointer-events-none z-[9999] items-center justify-center w-0 h-0"
      >
        <div
          style={{ width: "8px", height: "8px", transition: "width 200ms ease, height 200ms ease" }}
          className="rounded-full bg-indigo-500 absolute shadow-[0_0_10px_rgba(99,102,241,0.8)]"
        ></div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (hover: hover) and (pointer: fine) {
          body, a, button, [role="button"] { cursor: none !important; }
        }
      `}} />
    </>
  );
}
