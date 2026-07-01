const items = [
  "Flutter",
  "Dart",
  "Firebase",
  "GetX",
  "Riverpod",
  "REST APIs",
  "Supabase",
  "PostgreSQL",
  "Git & GitHub",
  "Django",
];

export function TechMarquee() {
  const track = [...items, ...items];

  return (
    <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="marquee-track">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-3 inline-flex shrink-0 items-center gap-2 rounded-full border border-surface-border px-4 py-2 text-sm text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
