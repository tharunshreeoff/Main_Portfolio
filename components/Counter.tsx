'use client';

import { useEffect, useRef, useState } from 'react';

function format(n: number, compact?: boolean) {
  if (compact) return new Intl.NumberFormat('en', { notation: 'compact' }).format(n);
  return n.toLocaleString('en-IN');
}

export default function Counter({
  target,
  suffix = '',
  compact = false,
}: {
  target: number;
  suffix?: string;
  compact?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const dur = 1400;
          const step = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.floor(eased * target));
            if (p < 1) requestAnimationFrame(step);
            else setValue(target);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {format(value, compact)}
      {suffix}
    </span>
  );
}