import { SectionLabel } from "../SectionLabel";
import { Reveal } from "@/VisualEffects/Reveal";

export const CareerPath = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-b border-border py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[.65fr_1.35fr] lg:px-12">
        <div>
          <SectionLabel>Career path</SectionLabel>
          <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">
            Built through ownership.
          </h2>
          <p className="mt-5 max-w-md leading-7 text-muted-foreground">
            A progression from building reusable enterprise web and mobile
            interfaces to cross-functional ownership across frontend, backend,
            security, and cloud delivery.
          </p>
        </div>
        <div>
          <Reveal>
            <article className="border-t border-border py-8">
              <div className="flex flex-wrap justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold">
                    Mobile / Software Engineer
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    First Factory · Remote
                  </p>
                </div>
                <p className="font-mono text-xs text-muted-foreground">
                  APR 2022 — MAY 2026
                </p>
              </div>
              <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
                Cross-functional software engineer delivering React, React
                Native, and full-stack solutions across enterprise engagements,
                with experience spanning live commerce, secure identity,
                accessibility, payments, and AWS-powered infrastructure.
              </p>
            </article>
          </Reveal>
          <Reveal delay={100}>
            <article className="border-t border-border py-8">
              <div className="flex flex-wrap justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold">Frontend Developer</h3>
                  <p className="mt-1 text-muted-foreground">SOIN · Remote</p>
                </div>
                <p className="font-mono text-xs text-muted-foreground">
                  MAR 2021 — FEB 2022
                </p>
              </div>
              <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
                Built reusable React components for enterprise products,
                contributed to a centralized portal and Tramite ¡Ya!, and
                strengthened quality through unit and end-to-end testing.
              </p>
            </article>
          </Reveal>
          <Reveal delay={160}>
            <article className="grid gap-6 border-y border-border py-8 sm:grid-cols-2">
              <div>
                <p className="font-mono text-xs uppercase text-muted-foreground">
                  Education
                </p>
                <h3 className="mt-3 font-semibold">
                  Bachelor's in Information Technology for Business
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Universidad de Costa Rica · 2015-2020
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase text-muted-foreground">
                  Certifications
                </p>
                <p className="mt-3 text-sm leading-6">
                  Advanced Software Design with Objects I · 10Pines
                </p>
                <p className="mt-2 text-sm leading-6">
                  Scrum Fundamentals Certified · SCRUMstudy
                </p>
                <p className="mt-3 text-sm leading-6">
                  Building robust software with TDD · 10Pines
                </p>
                <p className="mt-3 text-sm leading-6">
                  NestJS: The Complete Developer's Guide · Udemy
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
