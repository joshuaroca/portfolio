import { Reveal } from "@/VisualEffects/Reveal";
import { Check } from "lucide-react";
import { SectionLabel } from "../SectionLabel";

const projects = [
  {
    index: "01",
    label: "Mobile commerce · Live systems",
    title: "Sports Card Marketplace & Live Auction Platform",
    summary:
      "Cross-platform marketplace experiences designed for fast-moving listings, live bids, and high-volume interaction—without sacrificing consistency or perceived speed.",
    contributions: [
      "Built React Native and TypeScript experiences across iOS and Android",
      "Engineered resilient bid states, real-time updates, and optimistic interactions",
      "Improved performance through virtualization, profiling, memoization, and image handling",
    ],
    stack: ["MobX", "TypeScript", "GraphQL", "React Query", "Redux Toolkit"],
  },
  {
    index: "02",
    label: "Identity · Security",
    title: "Secure Authentication & Onboarding Architecture",
    summary:
      "A safer, lower-friction account journey spanning OAuth, MFA, phone verification, onboarding, sessions, and token management across Stytch and AWS Cognito.",
    contributions: [
      "Reduced account-takeover support tickets by 99%",
      "Lifted mobile signup completion by 25%",
      "Raised verified accounts from 83% to 88%",
    ],
    stack: ["Stytch", "AWS Cognito", "OAuth", "MFA", "React Native"],
  },
  {
    index: "03",
    label: "Accessibility · Native integration",
    title: "Hardware-Connected Accessibility App",
    summary:
      "Native mobile capabilities that connect a communication experience to camera, permissions, Bluetooth pairing, and external audio hardware.",
    contributions: [
      "Bridged React Native with Swift and Kotlin native modules",
      "Handled system permissions and camera access across platforms",
      "Built Bluetooth pairing and connection flows for external audio devices",
    ],
    stack: ["Native Modules", "Swift", "Kotlin", "Bluetooth", "iOS & Android"],
  },
  {
    index: "04",
    label: "Payments · Serverless",
    title: "Serverless Payment Infrastructure",
    summary:
      "Secure transaction experiences backed by lean, on-demand infrastructure and automated financial reporting for enterprise clients.",
    contributions: [
      "Integrated Stripe, PayTrace, and Authorize.Net payment providers",
      "Architected and deployed a NestJS backend on AWS Serverless",
      "Automated transaction-log delivery with a scheduled serverless job",
    ],
    stack: ["NestJS", "AWS Lambda", "Stripe", "Authorize.Net", "PayTrace"],
  },
];

export const HighlightedWork = () => {
  return (
    <section
      id="work"
      className="scroll-mt-20 border-b border-border py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionLabel>Engineering Experience / 2021—Present</SectionLabel>
        <Reveal>
          <div className="mt-5 grid gap-6 lg:grid-cols-2 lg:items-end">
            <h2 className="text-4xl font-semibold sm:text-5xl">
              Engineering across the product surface.
            </h2>
            <p className="max-w-xl text-base leading-7 text-muted-foreground lg:justify-self-end">
              The strongest work connects user needs, business constraints, and
              sound systems thinking. These are the problems I've been trusted
              to solve.
            </p>
          </div>
        </Reveal>
        <div className="mt-14  border-border">
          {projects.map((project, i) => (
            <Reveal key={project.index} delay={i * 80}>
              <article className="group relative mt-2 grid gap-7 overflow-hidden rounded-2xl border border-border/70 px-2 py-10 transition-all duration-300 hover:bg-card/40 hover:shadow-elevated md:grid-cols-[72px_1fr] md:px-5 lg:grid-cols-[72px_minmax(260px,.75fr)_minmax(320px,1fr)] lg:gap-10 lg:px-7">
                <div className="pointer-events-none absolute inset-y-0 left-0 w-0.5 scale-y-0 bg-gradient-to-b from-success to-glow transition-transform duration-300 group-hover:scale-y-100" />
                <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-success">
                  {project.index}
                </span>
                <div>
                  <p className="font-mono text-xs uppercase text-success">
                    {project.label}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight transition-colors group-hover:text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-4 leading-7 text-muted-foreground">
                    {project.summary}
                  </p>
                </div>
                <div className="md:col-start-2 lg:col-start-3">
                  <ul className="space-y-3">
                    {project.contributions.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6">
                        <Check className="mt-1 size-4 shrink-0 text-success" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-muted/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-colors group-hover:border-success/30 group-hover:text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
