import React from "react";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-24 sm:px-8">
      <Reveal className="mb-10">
        <div className="mb-3 font-mono text-xs uppercase tracking-widest text-teal">
          // education
        </div>
        <h2 className="font-mono text-3xl font-bold">Education & Achievements</h2>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="rounded-xl border border-rule bg-card p-8 shadow-card transition-shadow hover:shadow-cardhover">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-teal">
              Education
            </h3>
            <p className="mb-1 font-semibold">Bachelor of Computer Applications (BCA)</p>
            <p className="mb-1 text-inksoft">Pursuing, 4th Semester</p>
            <p className="text-inksoft">Expected Graduation: 2027</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-xl border border-rule bg-card p-8 shadow-card transition-shadow hover:shadow-cardhover">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-teal">
              Achievements
            </h3>
            <p className="mb-3 flex gap-2 text-inksoft">
              <span className="text-amber-deep">✓</span>
              Built multiple full-stack MERN applications independently.
            </p>
            <p className="flex gap-2 text-inksoft">
              <span className="text-amber-deep">✓</span>
              Gained hands-on experience in real-world web development concepts.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}