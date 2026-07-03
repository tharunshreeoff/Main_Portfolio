import { Award } from 'lucide-react';
// import { SiGoogledrive } from "react-icons/si";
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { certifications } from '@/lib/data';
import { SiGoogledrive } from 'react-icons/si';

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
                  
                  {/* <SiGoogledrive size={13}/> */}
                  <a href={c.drive_link} className='mt-5 flex items-center text-[12.5px] font-medium text-muted group-hover:text-accent'><img src="google-drive-icon.svg" alt="google-drive-icon" width={"14px"} className='mr-1'/> <span></span>View on Drive</a>
                  {/* <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://w3.org">
    <path d="M14.07 41.5L6.03 27.5H22.11L30.15 41.5H14.07Z" fill="#32A853" />
    <path d="M22.11 41.5L30.15 27.5L38.19 13.5H22.11L14.07 27.5L22.11 41.5Z" fill="#4285F4" />
    <path d="M30.15 41.5H46.23L38.19 27.5H22.11L30.15 41.5Z" fill="#FABB05" />
  </svg> */}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
