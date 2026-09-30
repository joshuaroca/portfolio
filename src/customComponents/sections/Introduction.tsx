import { Button } from "@/components/ui/button";
import { GlowField } from "@/VisualEffects/GlowField";
import { Reveal } from "@/VisualEffects/Reveal";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";

export const Introduction = () => {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <GlowField />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_30%,transparent_85%)]" />
      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:px-12 lg:pb-32 lg:pt-28">
        <Reveal>
          <div className="mb-9 inline-flex items-center gap-2 rounded-full border border-success/30 bg-success-soft/60 px-3 py-1.5 text-xs font-medium shadow-sm backdrop-blur-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            Software Engineer · Costa Rica
          </div>
        </Reveal>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_290px] lg:items-end">
          <div>
            <Reveal>
              <h1 className="max-w-5xl text-5xl font-semibold leading-[1.04] sm:text-6xl lg:text-7xl">
                I engineer digital products that{" "}
                <span className="text-gradient">
                  stay fast, secure, and useful
                </span>{" "}
                at scale.
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Software Engineer with 5+ years turning complex mobile, web, and
                backend challenges into reliable product experiences. I've
                delivered end-to-end features with React, React Native, Python,
                FastAPI, and GraphQL, spanning live auctions, payments, secure
                identity, and native mobile capabilities. Experienced building
                scalable, user-focused products from frontend interfaces to
                backend services and cloud infrastructure.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg" className="shadow-elevated">
                  <a href="#work">
                    Explore my work <ArrowDown />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="/joshuaRojasCV.pdf" download="Joshua-Rojas-CV.pdf">
                    Download resume <Download />
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <div className="rounded-2xl border border-border/70 bg-card/50 p-6 backdrop-blur-md">
              <p className="font-mono text-xs uppercase text-muted-foreground">
                Core stack
              </p>
              <p className="mt-3 text-sm leading-7">
                React Native · React
                <br />
                TypeScript · Python
                <br />
                FastAPI · GraphQL
                <br />
                AWS Serverless
              </p>
              <a
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-success"
                href="https://www.linkedin.com/in/joshua-rojas-57434318b"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowUpRight className="size-4" />
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <div className="mt-14 flex items-center gap-3 text-muted-foreground">
            <div className="h-px w-12 bg-gradient-to-r from-success to-transparent" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em]">
              Scroll to explore
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
