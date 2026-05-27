import { Button } from "./ui/Button";
import { navItems } from "../data/info";

export function Navigation() {
  return (
    <header className="sticky top-4 z-50 mx-auto flex w-[92%] max-w-screen-2xl items-center gap-3 rounded-lg border border-white/10 bg-[rgba(31,31,31,0.85)] px-3 py-1.5 shadow-lg shadow-slate-950/25 backdrop-blur-xl backdrop-saturate-150 md:px-4 lg:w-1/2">
      <div className="flex items-center gap-2 text-white">
        <span className="font-semibold tracking-wide text-slate-100">N7</span>
      </div>

      <nav className="flex flex-1 justify-center overflow-x-auto">
        <div className="flex items-center gap-3 text-sm text-slate-300">
          {(navItems ?? []).map((item) => (
            <a key={item.label} href={item.href} className="inline-flex shrink-0 items-center gap-1 transition hover:text-white text-sm">
              <span>{item.label}</span>
              {item.hasDropdown && (
                <svg viewBox="0 0 10 6" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M1 1.5l4 3 4-3" />
                </svg>
              )}
            </a>
          ))}
        </div>
      </nav>

      <div className="flex shrink-0 items-center gap-3">
        <Button href="#demo" variant="secondary" size="sm">
          REQUEST DEMO
        </Button>
      </div>
    </header>
  );
}