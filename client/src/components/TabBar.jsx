import React, { useEffect, useState } from "react";

const tabs = [
  { id: "home", label: "Home.tsx" },
  { id: "about", label: "About.tsx" },
  { id: "skills", label: "Skills.json" },
  { id: "projects", label: "Projects/" },
  { id: "education", label: "Education.md" },
  { id: "contact", label: "Contact.md" },
];

export default function TabBar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const onScroll = () => {
      let current = "home";
      const y = window.scrollY + 130;
      sections.forEach((section) => {
        if (y >= section.offsetTop) current = section.id;
      });
      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center overflow-x-auto px-4 sm:px-8">
        <div className="mr-3 flex flex-shrink-0 gap-1.5 border-r border-rule py-3.5 pr-4">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E0645A]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E3B23C]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#5FA777]" />
        </div>

        <nav className="flex gap-1">
          {tabs.map((tab) => {
            const isActive = active === tab.id;
            return (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                className={`whitespace-nowrap border-b-2 px-4 py-3.5 font-mono text-[12.5px] transition-colors ${
                  isActive
                    ? "border-amber text-amber-deep"
                    : "border-transparent text-inksoft hover:text-ink"
                }`}
              >
                {tab.label}
              </a>
            );
          })}
        </nav>

        <a
          href="#contact"
          className="ml-auto flex-shrink-0 rounded bg-ink px-4 py-2 font-mono text-2xl text-paper transition-colors hover:bg-amber-deep my-2"
        >
          Hire Me →
        </a>
      </div>
    </div>
  );
}