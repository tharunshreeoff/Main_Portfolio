import { GraduationCap, MapPin, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { education, profile } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="py-32">
      <div className="section-wrap">
        <SectionHeading tag="About Me" title="Data, distilled into decisions." />

        <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_1fr]">
          <Reveal delay={0.1} className="space-y-6 text-[18px] leading-relaxed text-muted">
            <p>
              I&apos;m an AI &amp; Data Science undergraduate who likes finding the story hiding
              inside messy data. Over the last year I&apos;ve moved from coursework into real
              internships — building fraud models on imbalanced datasets, tracking vehicles frame
              by frame with YOLOv5, and shipping Power BI dashboards that replaced hours of manual
              reporting.
            </p>
            <p>
              I care about the full pipeline: clean ingestion, honest EDA, models that generalize,
              and dashboards a non-technical stakeholder can actually read. Currently deepening my
              skills in NLP and large-scale data tooling while applying for full-time Data
              Scientist, Data Analyst, and ML roles.
            </p>
            <div className="flex flex-wrap gap-4 pt-3">
              <div className="flex items-center gap-2.5 rounded-full card-border px-5 py-2.5 text-[15px]">
                <MapPin size={16} className="text-accent" /> {profile.location}
              </div>
              <div className="flex items-center gap-2.5 rounded-full card-border px-5 py-2.5 text-[15px]">
                <Sparkles size={16} className="text-accent" /> {profile.relocation}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-[1.25rem] card-border bg-surface/50 p-8">
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <GraduationCap size={23} />
                </div>
                <span className="font-mono text-[13px] uppercase tracking-[0.2em] text-muted">
                  Education
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold">{education.degree}</h3>
              <p className="mt-1.5 text-base text-muted">{education.school}</p>
              <p className="mt-1 text-[15px] text-muted">
                {education.location} &middot; {education.period} &middot; {education.cgpa}
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {education.coursework.map((c) => (
                  <span
                    key={c}
                    className="rounded-full bg-surface2 px-4 py-1.5 text-[14px] text-muted"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}