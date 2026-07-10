import React from "react";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:px-8">
      <Reveal className="mb-10">
        <div className="mb-3 font-mono text-xs uppercase tracking-widest text-teal">
          // about
        </div>
        <h2 className="font-mono text-3xl font-bold">About</h2>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        <Reveal className="md:col-span-2">
          <div className="rounded-xl border border-rule bg-card p-8 shadow-card transition-shadow hover:shadow-cardhover">
            <p className="mb-4 leading-relaxed text-inksoft">
              I'm currently pursuing a Bachelor of Computer Applications (BCA)
              and working as a MERN Stack Developer with hands-on experience
              building full-stack web applications using MongoDB, Express.js,
              React.js, and Node.js.
            </p>
            <p className="mb-4 leading-relaxed text-inksoft">
              I have practical experience developing responsive web applications,
              designing RESTful APIs, managing databases, and integrating frontend
              and backend systems.
            </p>
            <p className="leading-relaxed text-inksoft">
              I'm seeking an internship or entry-level opportunity to apply my knowledge
              on real-world projects and gain industry experience in full-stack development.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-xl border border-rule bg-card p-8 shadow-card transition-shadow hover:shadow-cardhover">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-teal">
              Quick Facts
            </h3>
            <ul className="divide-y divide-dashed divide-rule font-mono text-[13px]">
              <li className="flex justify-between py-2.5">
                <span className="text-inksoft">Location</span>
                <span className="text-right">Karnataka, India</span>
              </li>
              <li className="flex justify-between py-2.5">
                <span className="text-inksoft">Degree</span>
                <span className="text-right">BCA, exp. 2027</span>
              </li>
              <li className="flex justify-between py-2.5">
                <span className="text-inksoft">Focus</span>
                <span className="text-right">MERN Stack</span>
              </li>
              <li className="flex justify-between py-2.5">
                <span className="text-inksoft">Languages</span>
                <span className="text-right">Eng, Kan, Hin</span>
              </li>
              <li className="flex justify-between py-2.5">
                <span className="text-inksoft">Soft skills</span>
                <span className="text-right">Solver, teammate</span>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}