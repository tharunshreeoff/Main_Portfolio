import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5 px-6 text-center">
      <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">404</span>
      <h1 className="font-display text-4xl font-black">This page went missing in the pipeline.</h1>
      <p className="max-w-sm text-sm text-muted">
        The page you&apos;re looking for doesn&apos;t exist, or moved. Let&apos;s get you back on
        track.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
      >
        Back to Home
      </Link>
    </div>
  );
}
