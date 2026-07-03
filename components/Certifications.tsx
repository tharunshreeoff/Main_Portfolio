import { Award } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { certifications } from '@/lib/data';
import { SiGoogledrive } from 'react-icons/si';

export default function Certifications() {
  return (
    <section id="certifications" className="py-32">
      <div className="section-wrap">
        <SectionHeading tag="Certifications" title="Continuous, structured learning." />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 0.1}>
              <div className="flex h-full gap-5 rounded-[1.25rem] card-border bg-surface/50 p-7 transition-transform hover:-translate-y-1">
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Award size={22} />
                </div>
                <div>
                  <h3 className="font-display text-[19px] font-bold leading-snug">{c.title}</h3>
                  <p className="mt-1 text-[15px] text-muted">{c.org}</p>
                  <p className="mt-1 font-mono text-[13px] text-accent">{c.period}</p>
                  
                  <a href={c.drive_link} target='_blank' className='mt-6 flex items-center text-[15px] font-medium text-muted group-hover:text-accent'>
                    <img src="google-drive-icon.svg" alt="google-drive-icon" width={"17px"} className='mr-1.5'/> 
                    <span></span>View on Drive
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}