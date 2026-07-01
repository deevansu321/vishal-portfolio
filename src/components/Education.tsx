import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { education } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading index={5} label="Education" title="Academic background" />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {education.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 0.1}>
              <div className="glass flex h-full items-start gap-4 rounded-2xl p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="mt-1 text-sm text-muted">{edu.school}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted">
                    <span>{edu.period}</span>
                    <span className="h-1 w-1 rounded-full bg-muted" />
                    <span className="font-medium text-accent">{edu.grade}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
