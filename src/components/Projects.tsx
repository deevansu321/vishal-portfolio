import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SpotCard } from "./SpotCard";
import { ProjectVisual } from "./ProjectVisual";
import { projects } from "@/lib/data";
import { Smartphone, Bot, Compass, ArrowUpRight, type LucideIcon } from "lucide-react";

const projectIcons: Record<string, LucideIcon> = {
  smartphone: Smartphone,
  bot: Bot,
  compass: Compass,
};

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading index={4} label="Projects" title="Things I've built" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => {
            const Icon = projectIcons[project.icon] ?? Smartphone;
            return (
              <Reveal key={project.name} delay={i * 0.08}>
                <SpotCard className="glass group relative flex h-full flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1">
                  <ProjectVisual variant={project.visual} />
                  <div className="relative flex flex-1 flex-col p-6 sm:p-8">
                    <div className="flex items-start justify-between">
                      <div className="-mt-12 flex h-11 w-11 items-center justify-center rounded-xl border border-surface-border bg-surface text-accent shadow-sm">
                        <Icon size={20} />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-foreground/25">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <ArrowUpRight
                          size={16}
                          className="text-muted opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent group-hover:opacity-100"
                        />
                      </div>
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">{project.name}</h3>
                    <p className="mt-1 text-sm font-medium text-accent">{project.subtitle}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-surface-border px-3 py-1 text-xs text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
