"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (event: PointerEvent) => setPosition({ x: event.clientX, y: event.clientY });
    const enter = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.closest("a, button, input, textarea, [data-cursor='magnetic']")) setActive(true);
    };
    const leave = () => setActive(false);

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", enter);
    document.addEventListener("pointerout", leave);

    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", enter);
      document.removeEventListener("pointerout", leave);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${active ? "is-active" : ""}`}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
    />
  );
}
