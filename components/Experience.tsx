import { Briefcase } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { experience } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="section-wrap">
        <SectionHeading tag="Experience" title="Where the data work happened." />

        <div className="relative mt-16 space-y-10 border-l card-border pl-8 md:pl-10">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.1} className="relative">
              <span className="absolute -left-[41px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white md:-left-[49px]">
                <Briefcase size={12} />
              </span>
              <div className="rounded-2xl card-border bg-surface/50 p-7 transition-transform hover:-translate-y-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-xl font-bold">{job.role}</h3>
                  <span className="font-mono text-[11.5px] text-accent">{job.period}</span>
                </div>
                <p className="mt-1 text-sm text-muted">
                  {job.company} &middot; {job.location}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-[13.5px] leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
