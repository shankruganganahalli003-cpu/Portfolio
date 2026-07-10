import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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
  const [open, setOpen] = useState(false);

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

  const handleClick = () => setOpen(false);

  return (
    <div className="sticky top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center">
            <div className="mr-3 flex flex-shrink-0 gap-1.5 border-r border-rule py-1.5 pr-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E0645A]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#E3B23C]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#5FA777]" />
            </div>

            <nav className="hidden gap-1 md:flex">
              {tabs.map((tab) => {
                const isActive = active === tab.id;
                return (
                  <a
                    key={tab.id}
                    href={`#${tab.id}`}
                    className={`whitespace-nowrap border-b-2 px-4 py-2 font-mono text-[12.5px] transition-colors ${
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
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded bg-ink px-4 py-2 font-mono text-xs text-paper transition-colors hover:bg-amber-deep sm:inline-flex"
            >
              Hire Me →
            </a>

            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-rule text-inksoft transition hover:bg-white/5 md:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div className={`md:hidden ${open ? "pb-4" : "pb-0"}`}>
          <div
            className={`overflow-hidden rounded-2xl border border-rule bg-white/70 backdrop-blur transition-all duration-300 ${
              open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <nav className="flex flex-col p-2">
              {tabs.map((tab) => {
                const isActive = active === tab.id;
                return (
                  <a
                    key={tab.id}
                    href={`#${tab.id}`}
                    onClick={handleClick}
                    className={`rounded-xl px-4 py-3 font-mono text-[12.5px] transition-colors ${
                      isActive
                        ? "bg-amber/10 text-amber-deep"
                        : "text-inksoft hover:bg-paper hover:text-ink"
                    }`}
                  >
                    {tab.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={handleClick}
                className="mt-2 rounded-xl bg-ink px-4 py-3 text-center font-mono text-xs text-paper transition-colors hover:bg-amber-deep"
              >
                Hire Me →
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}