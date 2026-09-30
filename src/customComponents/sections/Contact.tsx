import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export const Contact = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-20 relative overflow-hidden bg-primary text-primary-foreground"
    >
      <div className="pointer-events-none absolute -left-20 -top-24 size-[420px] rounded-full bg-success/20 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-24 right-0 size-[420px] rounded-full bg-glow/15 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase text-primary-foreground/60">
              Let's build something that matters
            </p>
            <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
              Looking for an engineer who can{" "}
              <span className="text-gradient">own the full problem</span>?
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/70">
              I'm always open to conversations about meaningful product
              challenges, especially where thoughtful design, web and mobile
              experiences, backend thinking, and measurable impact come
              together.
            </p>
          </div>
          <Button asChild size="lg" variant="secondary">
            <a href="mailto:joshuaeroca@gmail.com">
              Start a conversation <ArrowRight />
            </a>
          </Button>
        </div>
        <div className="mt-16 grid gap-4 border-t border-primary-foreground/20 pt-8 text-sm sm:grid-cols-3">
          <a
            className="flex items-center gap-3 text-primary-foreground/70 transition-colors hover:text-primary-foreground"
            href="mailto:joshuaeroca@gmail.com"
          >
            <Mail className="size-4" />
            joshuaeroca@gmail.com
          </a>
          <a
            className="flex items-center gap-3 text-primary-foreground/70 transition-colors hover:text-primary-foreground"
            href="tel:+50686237284"
          >
            <Phone className="size-4" />
            +506 8623-7284
          </a>
          <a
            className="flex items-center gap-3 text-primary-foreground/70 transition-colors hover:text-primary-foreground"
            href="https://www.linkedin.com/in/joshua-rojas-57434318b"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon className="size-4" />
            linkedin.com/joshua-rojas
          </a>
        </div>
      </div>
    </section>
  );
};
