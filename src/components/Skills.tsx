import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SpotCard } from "./SpotCard";
import { skillGroups } from "@/lib/data";
import { Code2, Layers, Server, Database, Wrench, Rocket, type LucideIcon } from "lucide-react";

const icons: LucideIcon[] = [Code2, Layers, Server, Database, Wrench, Rocket];
const spans = ["lg:col-span-3", "lg:col-span-3", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-6"];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading index={2} label="Skills" title="Technologies I work with" />

        <div className="mt-12 grid gap-5 lg:grid-cols-6">
          {skillGroups.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={group.title} delay={i * 0.08} className={spans[i % spans.length]}>
                <SpotCard className="glass group h-full rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-sm font-semibold text-muted">{group.title}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-surface-border bg-foreground/5 px-3 py-1 text-sm transition-colors group-hover:border-accent/40"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </SpotCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
