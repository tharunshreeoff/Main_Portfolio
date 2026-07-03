'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/lib/data';
import Counter from './Counter';

function useTyped(roles: string[]) {
  const [text, setText] = useState('');
  useEffect(() => {
    let i = 0, c = 0, deleting = false;
    let timeout: ReturnType<typeof setTimeout>;
    const tick = () => {
      const cur = roles[i];
      setText(deleting ? cur.slice(0, c - 1) : cur.slice(0, c + 1));
      c += deleting ? -1 : 1;
      if (c === cur.length && !deleting) {
        deleting = true;
        timeout = setTimeout(tick, 1600);
        return;
      }
      if (c === 0 && deleting) {
        deleting = false;
        i = (i + 1) % roles.length;
      }
      timeout = setTimeout(tick, deleting ? 45 : 85);
    };
    tick();
    return () => clearTimeout(timeout);
  }, [roles]);
  return text;
}

export default function Hero() {
  const typed = useTyped(profile.roles);

  return (
    <section id="home" className="relative flex min-h-screen items-center pb-16 pt-28">
      <div className="section-wrap grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full card-border bg-accent/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-accent"
          >
            <span className="h-1.5 w-1.5 animate-blink rounded-full bg-accent" />
            Available for opportunities
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[clamp(2.6rem,6.5vw,5.2rem)] font-black leading-[0.98] tracking-tight"
          >
            {profile.name.split(' ')[0]}{' '}
            <span className="text-gradient">{profile.name.split(' ').slice(1).join(' ')}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 font-mono text-[15px] text-accent"
          >
            <span className="text-muted">{'// '}</span>
            {typed}
            <span className="animate-blink text-accent">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={profile.resumeFile}
              download
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="rounded-full card-border px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-accent/50 hover:text-accent"
            >
              Let&apos;s Talk
            </a>
            <div className="flex items-center gap-2 pl-1">
              {[
                { icon: Github, href: profile.github, label: 'GitHub' },
                { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full card-border text-muted transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-14 grid max-w-lg grid-cols-4 gap-4 border-t card-border pt-8"
          >
            {profile.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-bold text-text">
                  <Counter target={s.n} suffix={s.suffix} compact={s.compact} />
                </div>
                <div className="mt-1 text-[11px] leading-tight text-muted">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto hidden aspect-square w-full max-w-md lg:block"
        >
          <div className="absolute inset-0 animate-float rounded-[2rem] bg-gradient-to-br from-accent/20 to-transparent blur-2xl" />
          <div className="relative flex h-full w-full items-center justify-center rounded-[2rem] card-border bg-surface/60 backdrop-blur">
            {/* <div className="font-display text-8xl font-black text-gradient">TS</div> */}
            <img src="hero-sec-img.jpeg" alt="hero-sec-img" className='rounded-[2rem] h-full w-full object-cover '/>
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-2xl card-border glass px-5 py-3 shadow-xl">
            <div className="font-mono text-[11px] text-muted">Focus</div>
            <div className="text-sm font-semibold text-accent">ML · NLP · Analytics</div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
