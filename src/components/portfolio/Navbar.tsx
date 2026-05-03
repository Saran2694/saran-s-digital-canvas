import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "uiux", label: "UI/UX" },
  { id: "films", label: "Films" },
  { id: "achievements", label: "Awards" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = "home";
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= 120) current = l.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 py-3 transition-all",
            scrolled ? "glass-strong shadow-elevated" : "glass"
          )}
        >
          <button onClick={() => go("home")} className="group flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary font-display text-sm font-bold text-primary-foreground shadow-glow">
              SS
            </span>
            <span className="hidden font-display text-sm font-semibold tracking-wide sm:inline">
              Sri Saran <span className="text-muted-foreground">L</span>
            </span>
          </button>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className={cn(
                    "relative rounded-full px-3 py-1.5 text-sm transition-colors",
                    active === l.id
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {active === l.id && (
                    <span className="absolute inset-0 -z-10 rounded-full bg-gradient-primary opacity-20" />
                  )}
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={() => go("contact")}
              className="hidden rounded-full bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105 sm:inline-flex"
            >
              Contact Me
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-xl glass lg:hidden"
              aria-label="Toggle menu"
            >
              <span className="relative block h-3 w-5">
                <span
                  className={cn(
                    "absolute left-0 top-0 h-0.5 w-full bg-foreground transition-transform",
                    open && "translate-y-1.5 rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 w-full bg-foreground transition-transform",
                    open && "-translate-y-1 -rotate-45"
                  )}
                />
              </span>
            </button>
          </div>
        </nav>

        {open && (
          <div className="mt-2 grid grid-cols-2 gap-1 rounded-2xl glass-strong p-3 lg:hidden animate-fade-in">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={cn(
                  "rounded-xl px-3 py-2 text-left text-sm",
                  active === l.id
                    ? "bg-gradient-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {l.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
