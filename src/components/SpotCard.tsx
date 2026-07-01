"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

export function SpotCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    ref.current?.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    ref.current?.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <div ref={ref} onMouseMove={onMouseMove} className={`spot-card ${className ?? ""}`}>
      {children}
    </div>
  );
}
