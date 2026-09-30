import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="#top"
          className="flex items-center gap-3 font-semibold"
          aria-label="Joshua Rojas, back to top"
        >
          <span className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-success to-glow text-xs font-bold text-primary-foreground shadow-elevated">
            JR
          </span>
          <span className="hidden sm:inline">Joshua Rojas</span>
        </a>
        <nav
          className="hidden items-center gap-7 text-sm text-muted-foreground md:flex"
          aria-label="Main navigation"
        >
          <a className="transition-colors hover:text-foreground" href="#work">
            Work
          </a>
          <a
            className="transition-colors hover:text-foreground"
            href="#expertise"
          >
            Expertise
          </a>
          <a
            className="transition-colors hover:text-foreground"
            href="#experience"
          >
            Experience
          </a>
        </nav>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button asChild size="sm" className="shadow-elevated">
            <a href="mailto:joshuaeroca@gmail.com">
              Let's talk <ArrowUpRight />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};
