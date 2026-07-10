import React from "react";
import Reveal from "./Reveal";

const skillGroups = [
  {
    title: "Web Development",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js"],
  },
  {
    title: "Database",
    items: ["MongoDB"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman"],
  },
  {
    title: "Concepts",
    items: ["REST APIs", "CRUD", "JWT Auth", "MVC"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-24 sm:px-8">
      <Reveal className="mb-10 flex flex-wrap items-baseline gap-4">
        <div>
          <div className="mb-3 font-mono text-xs uppercase tracking-widest text-teal">
            // skills
          </div>
          <h2 className="font-mono text-3xl font-bold">Skills</h2>
        </div>
        <span className="rounded-full border border-rule px-3 py-1 font-mono text-xs text-inksoft">
          6 categories
        </span>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <Reveal key={group.title}>
            <div className="rounded-xl border border-rule bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-cardhover">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-teal">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded bg-paper border border-rule px-3 py-1.5 font-mono text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}