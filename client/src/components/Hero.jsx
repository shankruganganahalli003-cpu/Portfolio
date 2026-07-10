import React from "react";
import { ArrowRight, Code2, Server, Database, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  const chips = ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"];

  return (
    <section id="home" className="relative overflow-hidden gridlines bg-noise">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-amber/20 blur-3xl animate-pulseSlow" />
      <div className="absolute top-40 -left-20 h-72 w-72 rounded-full bg-teal/15 blur-3xl animate-pulseSlow [animation-delay:1.5s]" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 py-16 pb-24 sm:px-8 md:grid-cols-2">
        <Reveal>
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal-light px-4 py-2 font-mono text-xs uppercase tracking-wider text-teal">
              <Sparkles className="h-3.5 w-3.5" />
              status: open to internships
            </div>

            <h1 className="font-mono text-[clamp(2rem,4.6vw,3.2rem)] font-extrabold leading-[1.15] tracking-tight">
              Building full-stack apps with the{" "}
              <span className="relative inline-block text-amber-deep">
                MERN stack
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 Q50,0 100,5 T200,5"
                    stroke="#C97A2B"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.5"
                  />
                </svg>
              </span>{" "}
              — clean UI, solid backend logic.
            </h1>

            <p className="mt-6 max-w-lg text-lg text-inksoft">
              I'm Shankrappa S Ganganahalli, a BCA student in Karnataka,
              building responsive frontends, RESTful APIs, and MongoDB-backed applications end to end.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects" 
                className="group border-1 inline-flex items-center gap-2 rounded-md bg-amber px-6 py-3 font-mono text-sm text-black shadow-card transition-all hover:-translate-y-1 hover:bg-amber-deep hover:shadow-cardhover"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform text-black group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-ink px-6 py-3 font-mono text-sm transition-all hover:-translate-y-1 hover:bg-ink hover:text-paper"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {chips.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-rule bg-white/60 px-4 py-2 font-mono text-xs text-inksoft transition-transform hover:-translate-y-1 hover:scale-105"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="animate-[floaty_5s_ease-in-out_infinite]">
          <div className="overflow-hidden rounded-xl bg-ink shadow-soft ring-1 ring-black/10">
            <div className="flex items-center gap-2 border-b border-white/10 bg-[#221F19] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E0645A]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#E3B23C]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#5FA777]" />
              <span className="ml-2 font-mono text-xs text-[#8A8471]">
                shankrappa@portfolio — zsh
              </span>
            </div>
            <div className="space-y-3 px-6 py-7 font-mono text-[13.5px] leading-relaxed text-[#E8E3D3]">
              <p><span className="text-teal">$</span> whoami</p>
              <p className="text-[#B9B29B]">MERN Stack Developer / BCA student</p>

              <p className="pt-2"><span className="text-teal">$</span> cat stack.txt</p>
              <p className="text-[#B9B29B]">React.js · Node.js · Express.js · MongoDB · Tailwind CSS</p>

              <div className="grid gap-3 pt-2 sm:grid-cols-2">
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <Code2 className="mb-2 h-5 w-5 text-amber" />
                  <p className="text-xs text-[#B9B29B]">Frontend</p>
                  <p className="font-semibold">React + Tailwind</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <Server className="mb-2 h-5 w-5 text-teal" />
                  <p className="text-xs text-[#B9B29B]">Backend</p>
                  <p className="font-semibold">Node + Express</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <Database className="mb-2 h-5 w-5 text-amber" />
                  <p className="text-xs text-[#B9B29B]">Database</p>
                  <p className="font-semibold">MongoDB</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <Sparkles className="mb-2 h-5 w-5 text-teal" />
                  <p className="text-xs text-[#B9B29B]">Goal</p>
                  <p className="font-semibold">Internship Ready</p>
                </div>
              </div>

              <p className="pt-2"><span className="text-teal">$</span> ls -1 projects/</p>
              <p className="text-[#B9B29B]">daksha-bharat/ hotel-booking/ ia-management/</p>
              <p>
                <span className="text-teal">$</span>{" "}
                <span className="inline-block h-4 w-2 animate-blink bg-amber align-middle" />
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}