import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { experience } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading index={3} label="Experience" title="Where I've worked" />

        <div className="mt-12 space-y-8">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.1}>
              <div className="glass grid gap-6 rounded-2xl p-6 sm:p-8 lg:grid-cols-[1fr_2fr]">
                <div>
                  <h3 className="text-xl font-semibold">{job.role}</h3>
                  <p className="mt-1 text-gradient font-medium">{job.company}</p>
                  <p className="mt-2 text-sm text-muted">{job.period}</p>
                </div>
                <ul className="space-y-3">
                  {job.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-muted sm:text-base">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
