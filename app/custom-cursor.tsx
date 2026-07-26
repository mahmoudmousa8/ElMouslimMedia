"use client";

import { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only run on desktop devices with fine pointer (mouse)
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    document.body.classList.add("has-custom-cursor");

    const onMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const checkHover = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      if (!el) return;

      const isInteractive = Boolean(
        el.closest(
          "a, button, input, textarea, select, label, [role='button'], .cursor-target, .btn, .card"
        )
      );
      setIsHovered(isInteractive);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousemove", checkHover);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    const updatePosition = () => {
      // Ultra smooth fluid motion
      const ease = 0.25;
      pos.current.x += (target.current.x - pos.current.x) * ease;
      pos.current.y += (target.current.y - pos.current.y) * ease;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(updatePosition);
    };

    rafId.current = requestAnimationFrame(updatePosition);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousemove", checkHover);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[99999] transition-opacity duration-300 hidden lg:block ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        willChange: "transform",
      }}
    >
      <div
        className={`relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 ease-out ${
          isHovered ? "scale-115" : isClicked ? "scale-75" : "scale-100"
        }`}
      >
        {/* Compact Central White Dot */}
        <div
          className={`relative z-10 w-1.5 h-1.5 rounded-full transition-all duration-200 ${
            isHovered
              ? "bg-white shadow-[0_0_8px_rgba(255,255,255,1)]"
              : "bg-white shadow-[0_0_4px_rgba(255,255,255,0.8)]"
          }`}
        />

        {/* Rapid Spinning Compact Outer Target Corners Frame */}
        <div
          className={`absolute flex items-center justify-center w-5 h-5 ${
            isHovered ? "animate-cursor-spin-fast" : "animate-cursor-spin"
          }`}
        >
          {/* Top-Left Corner */}
          <div
            className={`absolute w-2 h-2 border-[2px] border-r-0 border-b-0 border-[#f3bc1c] transition-all duration-200 ${
              isHovered
                ? "-translate-x-[10px] -translate-y-[10px] shadow-[0_0_6px_rgba(243,188,28,0.6)]"
                : "-translate-x-[7px] -translate-y-[7px]"
            }`}
          />
          {/* Top-Right Corner */}
          <div
            className={`absolute w-2 h-2 border-[2px] border-l-0 border-b-0 border-[#f3bc1c] transition-all duration-200 ${
              isHovered
                ? "translate-x-[10px] -translate-y-[10px] shadow-[0_0_6px_rgba(243,188,28,0.6)]"
                : "translate-x-[7px] -translate-y-[7px]"
            }`}
          />
          {/* Bottom-Right Corner */}
          <div
            className={`absolute w-2 h-2 border-[2px] border-l-0 border-t-0 border-[#f3bc1c] transition-all duration-200 ${
              isHovered
                ? "translate-x-[10px] translate-y-[10px] shadow-[0_0_6px_rgba(243,188,28,0.6)]"
                : "translate-x-[7px] translate-y-[7px]"
            }`}
          />
          {/* Bottom-Left Corner */}
          <div
            className={`absolute w-2 h-2 border-[2px] border-r-0 border-t-0 border-[#f3bc1c] transition-all duration-200 ${
              isHovered
                ? "-translate-x-[10px] translate-y-[10px] shadow-[0_0_6px_rgba(243,188,28,0.6)]"
                : "-translate-x-[7px] translate-y-[7px]"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
