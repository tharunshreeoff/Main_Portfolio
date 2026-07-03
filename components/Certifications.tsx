import { Award } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { certifications } from '@/lib/data';

export default function Certifications() {
  return (
    <section id="certifications" className="py-28">
      <div className="section-wrap">
        <SectionHeading tag="Certifications" title="Continuous, structured learning." />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 0.1}>
              <div className="flex h-full gap-4 rounded-2xl card-border bg-surface/50 p-6 transition-transform hover:-translate-y-1">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Award size={18} />
                </div>
                <div>
                  <h3 className="font-display text-[16px] font-bold leading-snug">{c.title}</h3>
                  <p className="mt-1 text-[13px] text-muted">{c.org}</p>
                  <p className="mt-1 font-mono text-[11px] text-accent">{c.period}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
