import { Reveal } from "@/VisualEffects/Reveal";

const metrics = [
  {
    value: "−99%",
    title: "Account takeover tickets",
    detail:
      "Secure identity flows designed to protect users while reducing support overhead.",
  },
  {
    value: "+25%",
    title: "Mobile signup completion",
    detail:
      "A lower-friction onboarding experience without weakening security.",
  },
  {
    value: "83 → 88%",
    title: "Verified accounts",
    detail: "More users reached a trusted, verified state.",
  },
] as const;

export const Archivements = () => {
  return (
    <section
      aria-labelledby="impact-title"
      className="relative overflow-hidden border-b border-border bg-card/40 py-14 sm:py-16"
    >
      <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-3 sm:px-8 lg:px-12">
        {metrics.map((metric, index) => (
          <Reveal key={metric.value} delay={index * 110}>
            <article className="group relative h-full overflow-hidden rounded-2xl border border-border/70 bg-card/50 p-7 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-success/40 hover:shadow-elevated sm:p-8">
              <div className="absolute inset-x-0 top-0 h-1 scale-x-0 rounded-t-[inherit] bg-gradient-to-r from-success to-glow transition-transform duration-300 group-hover:scale-x-100" />
              <p className="text-gradient text-4xl font-semibold sm:text-5xl">
                {metric.value}
              </p>
              <h2
                id={index === 0 ? "impact-title" : undefined}
                className="mt-3 font-semibold"
              >
                {metric.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {metric.detail}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
