"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  /** Verzögerung in ms, für gestaffelte Karten */
  delay?: number;
  className?: string;
};

/**
 * Dezente Einblendung beim Scrollen: fade + 12px rise, einmalig.
 *
 * SSR-sicher: Der Ausgangszustand (unsichtbar) gilt nur, wenn die
 * html-Klasse "js" gesetzt ist (Inline-Script im Layout). Ohne JavaScript
 * — Crawler, Reader — ist der Inhalt sofort sichtbar. Reduced Motion
 * wird per CSS respektiert (siehe globals.css).
 */
export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
