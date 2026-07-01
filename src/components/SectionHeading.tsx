import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  label,
  title,
  description,
}: {
  index: number;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="flex items-end gap-4 sm:gap-6">
      <span
        aria-hidden
        className="font-mono text-4xl font-semibold text-foreground/10 sm:text-6xl"
      >
        {String(index).padStart(2, "0")}
      </span>
      <div>
        <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {label}
        </span>
        <h2 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        {description ? (
          <p className="mt-3 max-w-xl text-muted">{description}</p>
        ) : null}
      </div>
    </Reveal>
  );
}
