import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { profile } from "@/lib/data";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";

const facts = [
  { icon: Briefcase, label: "Role", value: "Junior Flutter Developer" },
  { icon: MapPin, label: "Based in", value: profile.location },
  { icon: GraduationCap, label: "Education", value: "MCA, PG Degree College" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading index={1} label="About Me" title="Turning ideas into smooth, native-feeling apps" />

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <Reveal delay={0.1} className="lg:col-span-3">
            <p className="text-lg leading-relaxed text-muted">{profile.summary}</p>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-2">
            <div className="glass grid gap-4 rounded-2xl p-6">
              {facts.map((fact) => (
                <div key={fact.label} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <fact.icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-muted">{fact.label}</div>
                    <div className="text-sm font-medium">{fact.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
