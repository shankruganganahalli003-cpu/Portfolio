import React from "react";

const links = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-extrabold tracking-tight">
          Shankrappa<span className="text-cyan-400">.</span>
        </a>
        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}