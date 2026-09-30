import { Reveal } from "@/VisualEffects/Reveal";
import { SectionLabel } from "../SectionLabel";
const skillGroups = [
  ["Mobile", "React Native", "iOS & Android", "Swift / Kotlin modules"],
  [
    "Frontend",
    "React.js",
    "TypeScript / JavaScript",
    "Tailwind   CSS",
    "Shadcn",
  ],
  [
    "State & data",
    " TanStack Query · Apollo",
    "Redux Toolkit · MobX",
    "Context API",
  ],
  ["Backend", "Python · FastAPI", "Node.js · NestJS", "GraphQL · REST"],
  [
    "Data layer",
    "PostgreSQL · MySQL",
    "MongoDB · Redis",
    "SQLAlchemy · Prisma",
  ],
  ["Cloud & delivery", "AWS Lambda · SQS · S3", "Docker", "Git · CI workflows"],
];
export const TechnicalSkills = () => {
  return (
    <section
      id="expertise"
      className="scroll-mt-20 overflow-hidden border-b border-border bg-card/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionLabel>Technical skills</SectionLabel>
        <Reveal>
          <div className="mt-5 max-w-3xl">
            <h2 className="text-4xl font-semibold sm:text-5xl">
              From interface to infrastructure.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              I work across the stack, with the deepest focus on mobile product
              engineering and the systems behind it.
            </p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(([title, ...skills], i) => (
            <Reveal key={title} delay={i * 70}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-success/40 hover:shadow-elevated sm:p-8">
                <div className="absolute -right-10 -top-10 size-32 rounded-full bg-success/5 blur-3xl transition-opacity duration-300 group-hover:bg-success/20" />
                <h3 className="relative font-mono text-xs uppercase text-success">
                  {title}
                </h3>
                <ul className="relative mt-6 space-y-3">
                  {skills.map((skill) => (
                    <li key={skill} className="text-sm">
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
