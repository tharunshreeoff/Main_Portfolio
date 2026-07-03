'use client';

import { useEffect, useState } from 'react';

export default function Loader() {
  const [out, setOut] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOut(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9998] flex flex-col items-center justify-center gap-6 bg-ink transition-all duration-700 ${
        out ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      aria-hidden={out}
    >
      <div className="font-display text-4xl font-black text-gradient animate-pulse">TS</div>
      <div className="h-px w-40 overflow-hidden bg-surface2">
        <div className="h-full w-full origin-left animate-[loaderBar_1.1s_ease_forwards] bg-gradient-to-r from-accent to-accent2" />
      </div>
      <style>{`@keyframes loaderBar{from{transform:scaleX(0)}to{transform:scaleX(1)}}`}</style>
    </div>
  );
}
