import React from "react";
import Reveal from "./Reveal";

const projects = [
  {
    title: "Hotel Room Booking System",
    link: "https://github.com/shankruganganahalli003-cpu/HotelBooking",
    points: [
      "Full-stack hotel booking web application using the MERN stack.",
      "Date-based booking system helping prevent double booking of rooms.",
      "Browse rooms, select dates, and make bookings with booking history.",
      "Admin panel to add and manage rooms.",
      "RESTful APIs for users, bookings, and room management.",
    ],
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
  },
  {
    title: "IA Management System",
    link: "https://github.com/shankruganganahalli003-cpu/IA-management",
    points: [
      "Web-based Internal Assessment management system using the MERN stack.",
      "Students can view their IA marks.",
      "Teachers can upload and manage marks.",
      "Admin panel for managing teachers, subjects, and roles.",
      "Secure authentication and role-based access control.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "RBAC"],
  },
  {
    title: "Daksha Bharat — Worker Hiring Platform",
    link: "https://github.com/shankruganganahalli003-cpu/oAuth2",
    points: [
      "Full-stack platform connecting users with nearby workers for job services.",
      "JWT-based authentication for secure user and worker access.",
      "RESTful APIs for managing users, workers, and service requests.",
      "Location-based logic to help users find nearby workers.",
      "Job posting, worker discovery, and communication features.",
    ],
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24 sm:px-8">
      <Reveal className="mb-10 flex flex-wrap items-baseline gap-4">
        <div>
          <div className="mb-3 font-mono text-xs uppercase tracking-widest text-teal">
            // projects
          </div>
          <h2 className="font-mono text-3xl font-bold">Projects</h2>
        </div>
        <span className="rounded-full border border-rule px-3 py-1 font-mono text-xs text-inksoft">
          3 repositories
        </span>
      </Reveal>

      <div className="space-y-6">
        {projects.map((project) => (
          <Reveal key={project.title}>
            <article className="group rounded-xl border border-rule bg-card p-7 transition-all hover:-translate-y-1 hover:border-amber/50 hover:shadow-cardhover sm:p-9">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h3 className="text-xl font-bold group-hover:text-amber-deep transition-colors">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="whitespace-nowrap rounded-full border border-teal px-4 py-1.5 font-mono text-xs text-teal transition-colors hover:bg-teal hover:text-white"
                >
                  View Repo ↗
                </a>
              </div>

              <ul className="mt-4 list-inside list-disc space-y-1.5 text-inksoft">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-amber-light px-2.5 py-1 font-mono text-[11px] text-amber-deep"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}