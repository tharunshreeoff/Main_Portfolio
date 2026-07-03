import { ArrowUpRight, Github } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { projects } from '@/lib/data';

export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <div className="section-wrap">
        <SectionHeading tag="Selected Work" title="Projects that ship, not just notebooks." />

        <div className="mt-16 grid gap-7 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.1}>
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                data-cursor
                className="group block h-full rounded-[1.25rem] card-border bg-surface/50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-accent/40"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[13px] uppercase tracking-[0.15em] text-accent">
                    {p.tag}
                  </span>
                  <ArrowUpRight
                    size={22}
                    className="text-muted transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
                  />
                </div>
                <h3 className="mt-4 font-display text-[29px] font-bold">{p.title}</h3>
                <p className="mt-3 text-[16px] leading-relaxed text-muted">{p.summary}</p>

                <div className="mt-5 space-y-2 text-[15px] text-muted">
                  <p>
                    <span className="text-text/80 font-medium">Approach — </span>
                    {p.approach}
                  </p>
                  <p>
                    <span className="text-text/80 font-medium">Impact — </span>
                    {p.impact}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-surface2 px-4 py-1.5 text-[13px] text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 text-[15px] font-medium text-muted group-hover:text-accent">
                  <Github size={16} /> View on GitHub
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}