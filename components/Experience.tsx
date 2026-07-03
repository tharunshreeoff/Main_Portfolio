import { Briefcase } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { experience } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="py-32">
      <div className="section-wrap">
        <SectionHeading tag="Experience" title="Where the data work happened." />

        <div className="relative mt-20 space-y-12 border-l card-border pl-10 md:pl-12">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.1} className="relative">
              <span className="absolute -left-[49px] top-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-white md:-left-[58px]">
                <Briefcase size={14} />
              </span>
              <div className="rounded-[1.25rem] card-border bg-surface/50 p-8 transition-transform hover:-translate-y-1">
                <div className="flex flex-wrap items-center justify-between gap-2.5">
                  <h3 className="font-display text-2xl font-bold">{job.role}</h3>
                  <span className="font-mono text-[14px] text-accent">{job.period}</span>
                </div>
                <p className="mt-1.5 text-base text-muted">
                  {job.company} &middot; {job.location}
                </p>
                <ul className="mt-5 space-y-3">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[16px] leading-relaxed text-muted">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
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