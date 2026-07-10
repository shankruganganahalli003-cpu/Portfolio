import React from "react";
import { Mail, PhoneCall, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute -bottom-24 left-1/2 h-[20rem] w-[36rem] -translate-x-1/2 rounded-full bg-amber/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 sm:px-8">
        <Reveal className="mb-10">
          <div className="mb-3 font-mono text-xs uppercase tracking-widest text-teal">
            // contact
          </div>
          <h2 className="font-mono text-3xl font-bold">Let's build something</h2>
        </Reveal>

        <Reveal>
          <div className="rounded-xl border border-rule bg-card p-8 shadow-card sm:p-10">
            <p className="text-inksoft">
              Open for frontend, backend, and full-stack internship opportunities.
              Based in Karnataka — reach out anytime.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <a
                href="mailto:shankruganganahalli003@gmail.com"
                className="group flex items-center gap-3 rounded-lg border border-rule bg-paper p-4 font-mono text-[13px] transition-all hover:-translate-y-0.5 hover:border-amber hover:text-amber-deep"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-light text-amber-deep">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="min-w-0 break-all">
                  shankruganganahalli003@gmail.com
                </span>
                <ArrowUpRight className="ml-auto h-4 w-4 flex-shrink-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </a>

              <a
                href="tel:+918217353141"
                className="group flex items-center gap-3 rounded-lg border border-rule bg-paper p-4 font-mono text-[13px] transition-all hover:-translate-y-0.5 hover:border-amber hover:text-amber-deep"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-light text-amber-deep">
                  <PhoneCall className="h-4 w-4" />
                </span>
                <span className="min-w-0 break-all">+91-8217353141</span>
                <ArrowUpRight className="ml-auto h-4 w-4 flex-shrink-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </a>

              <a
                href="https://www.linkedin.com/in/shankru-ganganahalli-558838360/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-lg border border-rule bg-paper p-4 font-mono text-[13px] transition-all hover:-translate-y-0.5 hover:border-amber hover:text-amber-deep"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-light text-teal">
                  in
                </span>
                <span className="min-w-0">LinkedIn</span>
                <ArrowUpRight className="ml-auto h-4 w-4 flex-shrink-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </a>

              <a
                href="https://github.com/shankruganganahalli003-cpu"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-lg border border-rule bg-paper p-4 font-mono text-[13px] transition-all hover:-translate-y-0.5 hover:border-amber hover:text-amber-deep"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-light text-teal">
                  gh
                </span>
                <span className="min-w-0">GitHub</span>
                <ArrowUpRight className="ml-auto h-4 w-4 flex-shrink-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}