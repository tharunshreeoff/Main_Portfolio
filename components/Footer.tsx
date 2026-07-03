'use client';

import { ArrowUp } from 'lucide-react';
import { profile } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t card-border py-10">
      <div className="section-wrap flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-[12.5px] text-muted">
          &copy; {new Date().getFullYear()} {profile.name}. Built with intent.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="flex h-10 w-10 items-center justify-center rounded-full card-border text-muted transition-colors hover:border-accent/40 hover:text-accent"
        >
          <ArrowUp size={15} />
        </button>
      </div>
    </footer>
  );
}
