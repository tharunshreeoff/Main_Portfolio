'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { skillGroups, techStack } from '@/lib/data';

export default function Skills() {
  const [active, setActive] = useState(skillGroups[0].key);
  const group = skillGroups.find((g) => g.key === active)!;

  return (
    <section id="skills" className="py-28">
      <div className="section-wrap">
        <SectionHeading tag="Skills" title="Tools I reach for daily." />

        <Reveal delay={0.1} className="mt-12 flex flex-wrap gap-2">
          {skillGroups.map((g) => (
            <button
              key={g.key}
              onClick={() => setActive(g.key)}
              className={`rounded-full px-4 py-2 text-[12.5px] font-medium transition-colors ${
                active === g.key
                  ? 'bg-accent text-white'
                  : 'card-border text-muted hover:text-accent'
              }`}
            >
              {g.label}
            </button>
          ))}
        </Reveal>

        <div className="mt-8 grid gap-x-10 gap-y-5 rounded-2xl card-border bg-surface/50 p-8 md:grid-cols-2">
          {group.skills.map((s) => (
            <div key={s.name}>
              <div className="mb-2 flex items-center justify-between text-[13.5px]">
                <span className="font-medium">{s.name}</span>
                <span className="font-mono text-muted">{s.level}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-surface2">
                <motion.div
                  key={active + s.name}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-accent to-accent2"
                />
              </div>
            </div>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14 overflow-hidden">
          <p className="mb-4 text-center font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
            Full Tech Stack
          </p>
          <div className="relative">
            <div className="flex w-max animate-marquee gap-3">
              {[...techStack, ...techStack].map((t, i) => (
                <span
                  key={t + i}
                  className="whitespace-nowrap rounded-full card-border bg-surface/50 px-4 py-2 text-[12.5px] text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
