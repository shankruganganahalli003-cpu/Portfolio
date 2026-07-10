import React from "react";
import { Mail, PhoneCall, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const socials = [
    { label: "Email", href: "mailto:shankruganganahalli003@gmail.com", icon: Mail },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shankru-ganganahalli-558838360/", iconText: "in" },
    { label: "GitHub", href: "https://github.com/shankruganganahalli003-cpu", iconText: "gh" },
    { label: "Call", href: "tel:+918217353141", icon: PhoneCall },
  ];

  return (
    <footer className="relative border-t border-rule bg-paper/95">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber/70 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-teal">// footer</p>
            <h3 className="mt-3 text-2xl font-bold text-ink">Shankrappa S Ganganahalli</h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-inksoft">
              MERN Stack Developer focused on building responsive, scalable, and modern web applications with React, Node.js, Express.js, and MongoDB.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 md:justify-end">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="group inline-flex items-center gap-2 rounded-full border border-rule bg-white px-4 py-2.5 font-mono text-xs text-inksoft shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber hover:text-amber-deep hover:shadow-cardhover"
              >
                {item.icon ? (
                  <item.icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                ) : (
                  <span className="flex h-4 w-4 items-center justify-center rounded bg-teal-light text-[10px] font-bold text-teal">
                    {item.iconText}
                  </span>
                )}
                <span>{item.label}</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-rule pt-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <p className="font-mono text-xs text-inksoft">
            © 2026 Shankrappa S Ganganahalli — Built with React, Tailwind CSS & JavaScript.
          </p>
          <a href="#home" className="font-mono text-xs text-teal transition-colors hover:text-amber-deep">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}