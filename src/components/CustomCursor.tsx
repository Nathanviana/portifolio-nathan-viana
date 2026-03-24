"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineWrapperRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }
    
    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Update dot wrapper instantly
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
      
      // Update outline wrapper with CSS transition applied to its parent
      if (cursorOutlineWrapperRef.current) {
        cursorOutlineWrapperRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });
    
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div 
        ref={cursorOutlineWrapperRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] transition-transform duration-100 ease-out hidden md:flex items-center justify-center w-0 h-0"
      >
        <div 
          className={`rounded-full border-2 transition-all duration-300 ease-out absolute ${
            isHovering ? "w-0 h-0 opacity-0" : "w-10 h-10 border-indigo-400/50 opacity-100"
          }`}
        ></div>
      </div>
      
      <div 
        ref={cursorDotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:flex items-center justify-center w-0 h-0"
      >
        <div className={`rounded-full bg-indigo-500 transition-all duration-300 absolute ${
            isHovering ? "w-3 h-3 opacity-100 shadow-[0_0_15px_rgba(99,102,241,0.9)]" : "w-2 h-2 opacity-100 shadow-[0_0_10px_rgba(99,102,241,0.8)]"
        }`}></div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @media (hover: hover) and (pointer: fine) {
          body, a, button, [role="button"], input, textarea, select {
            cursor: none !important;
          }
        }
      `}} />
    </>
  );
}
