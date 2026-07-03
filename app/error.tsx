'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5 px-6 text-center">
      <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">Error</span>
      <h1 className="font-display text-4xl font-black">Something broke in the pipeline.</h1>
      <p className="max-w-sm text-sm text-muted">
        An unexpected error occurred while rendering this page.
      </p>
      <button
        onClick={reset}
        className="mt-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
      >
        Try Again
      </button>
    </div>
  );
}
