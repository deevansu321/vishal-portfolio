import type { ReactNode } from "react";

const wrapperClass =
  "relative h-40 w-full overflow-hidden bg-gradient-to-br from-accent/15 via-transparent to-accent-2/10 sm:h-44";

function Frame({ id, children }: { id: string; children: ReactNode }) {
  return (
    <div className={wrapperClass}>
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-60" />
      <svg
        viewBox="0 0 400 200"
        className="relative h-full w-full"
        role="img"
        aria-labelledby={`${id}-title`}
      >
        <title id={`${id}-title`}>Project illustration</title>
        <defs>
          <linearGradient id={`${id}-line`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" style={{ stopColor: "var(--accent)" }} />
            <stop offset="100%" style={{ stopColor: "var(--accent-2)" }} />
          </linearGradient>
          <radialGradient id={`${id}-glow`}>
            <stop offset="0%" style={{ stopColor: "var(--accent)", stopOpacity: 0.35 }} />
            <stop offset="100%" style={{ stopColor: "var(--accent)", stopOpacity: 0 }} />
          </radialGradient>
        </defs>
        {children}
      </svg>
    </div>
  );
}

function TowTraceVisual() {
  const id = "towtrace";
  return (
    <Frame id={id}>
      <circle cx="90" cy="150" r="70" fill={`url(#${id}-glow)`} />
      <path
        d="M40 160 C 110 60, 190 190, 260 90 S 360 40, 370 30"
        fill="none"
        stroke={`url(#${id}-line)`}
        strokeWidth="3"
        strokeDasharray="10 8"
        strokeLinecap="round"
        className="animate-dash"
      />
      <circle cx="40" cy="160" r="6" fill="var(--accent-2)" />
      <g transform="translate(345,12)">
        <path
          d="M25 0 C11 0 0 11 0 25 C0 43 25 60 25 60 C25 60 50 43 50 25 C50 11 39 0 25 0Z"
          style={{ fill: `url(#${id}-line)` }}
        />
        <circle cx="25" cy="24" r="9" fill="var(--surface)" />
      </g>
      <g transform="translate(130,95)">
        <g className="animate-float-slow">
          <rect x="0" y="10" width="46" height="22" rx="6" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2" />
          <rect x="8" y="0" width="26" height="14" rx="4" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2" />
          <circle cx="12" cy="34" r="5" fill="var(--accent-2)" />
          <circle cx="34" cy="34" r="5" fill="var(--accent-2)" />
        </g>
      </g>
    </Frame>
  );
}

function Bid4StyleVisual() {
  const id = "bid4style";
  return (
    <Frame id={id}>
      <circle cx="310" cy="60" r="80" fill={`url(#${id}-glow)`} />
      <g transform="translate(150,30)">
        <path
          d="M14 22 L14 12 C14 4 22 -2 34 -2 C46 -2 54 4 54 12 L54 22"
          fill="none"
          stroke={`url(#${id}-line)`}
          strokeWidth="4"
        />
        <rect x="0" y="22" width="68" height="72" rx="10" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2.5" />
        <path d="M0 46 H68" stroke="var(--surface-border)" strokeWidth="2" />
        <circle cx="24" cy="58" r="4" fill="var(--accent-2)" />
        <text x="34" y="80" textAnchor="middle" fontSize="18" fontWeight="700" fill="var(--accent)">
          %
        </text>
      </g>
      <g transform="translate(60,40)">
        <g className="animate-float-slow">
          <rect x="0" y="0" width="40" height="26" rx="6" fill="none" stroke="var(--accent-2)" strokeWidth="2" />
          <text x="20" y="18" textAnchor="middle" fontSize="12" fill="var(--accent-2)">
            $49
          </text>
        </g>
      </g>
      <g transform="translate(280,130)">
        <g className="animate-float-slower">
          <rect x="0" y="0" width="46" height="28" rx="6" fill="none" stroke="var(--accent)" strokeWidth="2" />
          <text x="23" y="19" textAnchor="middle" fontSize="12" fill="var(--accent)">
            NEW
          </text>
        </g>
      </g>
    </Frame>
  );
}

function MariSpeaksVisual() {
  const id = "marispeaks";
  return (
    <Frame id={id}>
      <circle cx="200" cy="100" r="90" fill={`url(#${id}-glow)`} />
      <circle cx="200" cy="100" r="70" fill="none" stroke="var(--accent)" strokeOpacity="0.25" strokeWidth="2" className="animate-pulse-ring" />
      <circle cx="200" cy="100" r="45" fill="none" stroke="var(--accent-2)" strokeOpacity="0.35" strokeWidth="2" className="animate-pulse-ring" style={{ animationDelay: "0.6s" }} />
      <circle cx="200" cy="100" r="24" fill="var(--surface)" stroke={`url(#${id}-line)`} strokeWidth="2.5" />
      <rect x="192" y="88" width="16" height="24" rx="8" fill="var(--accent)" />
      <path d="M182 100 a18 18 0 0 0 36 0" fill="none" stroke="var(--accent-2)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="200" y1="118" x2="200" y2="128" stroke="var(--accent-2)" strokeWidth="2.5" strokeLinecap="round" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={70 + i * 12}
          y={100 - (i % 3 === 0 ? 10 : i % 2 === 0 ? 22 : 16)}
          width="6"
          height={i % 3 === 0 ? 20 : i % 2 === 0 ? 44 : 32}
          rx="3"
          fill="var(--accent)"
          opacity="0.5"
        />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={`r-${i}`}
          x={264 + i * 12}
          y={100 - (i % 3 === 0 ? 10 : i % 2 === 0 ? 22 : 16)}
          width="6"
          height={i % 3 === 0 ? 20 : i % 2 === 0 ? 44 : 32}
          rx="3"
          fill="var(--accent-2)"
          opacity="0.5"
        />
      ))}
    </Frame>
  );
}

function OneStopVisual() {
  const id = "onestop";
  return (
    <Frame id={id}>
      <circle cx="330" cy="50" r="70" fill={`url(#${id}-glow)`} />
      <path
        d="M35 150 C 100 150, 90 60, 170 60 S 300 150, 355 60"
        fill="none"
        stroke={`url(#${id}-line)`}
        strokeWidth="3"
        strokeDasharray="9 7"
        className="animate-dash"
      />
      <g transform="translate(14,128)">
        <rect x="0" y="10" width="40" height="26" rx="4" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2.5" />
        <path d="M0 10 L20 -6 L40 10" fill="none" stroke="var(--accent)" strokeWidth="2.5" />
        <rect x="16" y="20" width="8" height="16" fill="var(--accent-2)" />
      </g>
      <g transform="translate(335,26)">
        <path d="M20 0 C9 0 0 9 0 20 C0 35 20 48 20 48 C20 48 40 35 40 20 C40 9 31 0 20 0Z" style={{ fill: `url(#${id}-line)` }} />
        <circle cx="20" cy="19" r="7" fill="var(--surface)" />
      </g>
      <g transform="translate(150,42)">
        <g className="animate-float-slow">
          <rect x="0" y="0" width="34" height="26" rx="5" fill="var(--surface)" stroke="var(--accent-2)" strokeWidth="2.5" />
          <line x1="0" y1="9" x2="34" y2="9" stroke="var(--accent-2)" strokeWidth="2" />
          <line x1="17" y1="9" x2="17" y2="26" stroke="var(--accent-2)" strokeWidth="2" />
        </g>
      </g>
    </Frame>
  );
}

function AiAssistantVisual() {
  const id = "ai-assistant";
  return (
    <Frame id={id}>
      <circle cx="200" cy="95" r="90" fill={`url(#${id}-glow)`} />
      <circle cx="200" cy="95" r="30" fill="var(--surface)" stroke={`url(#${id}-line)`} strokeWidth="3" />
      <circle cx="200" cy="95" r="10" fill="var(--accent)" />
      <g className="animate-orbit" style={{ transformOrigin: "200px 95px" }}>
        <circle cx="200" cy="35" r="5" fill="var(--accent-2)" />
      </g>
      <g className="animate-orbit-reverse" style={{ transformOrigin: "200px 95px" }}>
        <circle cx="255" cy="120" r="4" fill="var(--accent)" />
      </g>
      <g className="animate-orbit" style={{ transformOrigin: "200px 95px", animationDelay: "1.4s" }}>
        <circle cx="145" cy="120" r="4" fill="var(--accent-2)" />
      </g>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect
          key={i}
          x={120 + i * 24}
          y={165 - (i % 3 === 0 ? 8 : i % 2 === 0 ? 16 : 12)}
          width="8"
          height={i % 3 === 0 ? 16 : i % 2 === 0 ? 32 : 24}
          rx="4"
          fill="var(--accent)"
          opacity="0.45"
        />
      ))}
    </Frame>
  );
}

function CareerMentorVisual() {
  const id = "career-mentor";
  return (
    <Frame id={id}>
      <circle cx="90" cy="150" r="70" fill={`url(#${id}-glow)`} />
      <g transform="translate(60,110)">
        <circle r="34" fill="none" stroke={`url(#${id}-line)`} strokeWidth="2.5" />
        <path d="M0 -22 L8 -4 L26 -2 L12 10 L16 28 L0 18 L-16 28 L-12 10 L-26 -2 L-8 -4 Z" fill="var(--accent)" opacity="0.85" />
      </g>
      <path
        d="M110 118 C 170 70, 230 160, 300 90"
        fill="none"
        stroke="var(--accent-2)"
        strokeWidth="2.5"
        strokeDasharray="6 8"
        className="animate-dash"
      />
      <g transform="translate(290,58)">
        <line x1="0" y1="0" x2="0" y2="34" stroke="var(--accent-2)" strokeWidth="3" strokeLinecap="round" />
        <path d="M0 2 L28 10 L0 18 Z" fill="var(--accent-2)" />
      </g>
      <g transform="translate(200,30)">
        <g className="animate-float-slow">
          <path d="M0 10 L22 0 L44 10 L22 20 Z" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2" />
          <line x1="38" y1="12" x2="38" y2="24" stroke="var(--accent)" strokeWidth="2" />
        </g>
      </g>
    </Frame>
  );
}

const visuals: Record<string, () => ReactNode> = {
  towtrace: TowTraceVisual,
  bid4style: Bid4StyleVisual,
  marispeaks: MariSpeaksVisual,
  onestop: OneStopVisual,
  "ai-assistant": AiAssistantVisual,
  "career-mentor": CareerMentorVisual,
};

export function ProjectVisual({ variant }: { variant: string }) {
  const Visual = visuals[variant];
  if (!Visual) return null;
  return <Visual />;
}
