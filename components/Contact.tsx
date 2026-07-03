'use client';

import { FormEvent, useState } from 'react';
import { Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { profile } from '@/lib/data';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const subject = String(data.get('subject') || '').trim();
    const message = String(data.get('message') || '').trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = 'Name is required.';
    if (!email || !/\S+@\S+\.\S+/.test(email)) nextErrors.email = 'Valid email is required.';
    if (!subject) nextErrors.subject = 'Subject is required.';
    if (!message) nextErrors.message = 'Message is required.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${body}`;

    setStatus('sent');
    form.reset();
    setTimeout(() => setStatus('idle'), 5000);
  }

  return (
    <section id="contact" className="py-32">
      <div className="section-wrap">
        <SectionHeading tag="Contact" title="Let's build something with data." align="center" />

        <div className="mx-auto mt-16 grid max-w-5xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal delay={0.1} className="space-y-6">
            <p className="text-[17.5px] leading-relaxed text-muted">
              Open to Data Scientist, Data Analyst, and ML Engineer roles. Reach out directly or
              use the form — I read every message.
            </p>
            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 rounded-xl card-border bg-surface/50 p-5 text-[16px] transition-colors hover:border-accent/40"
              >
                <Mail size={19} className="text-accent" /> {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-4 rounded-xl card-border bg-surface/50 p-5 text-[16px] transition-colors hover:border-accent/40"
              >
                <Phone size={19} className="text-accent" /> {profile.phone}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl card-border bg-surface/50 p-5 text-[16px] transition-colors hover:border-accent/40"
              >
                <Linkedin size={19} className="text-accent" /> {profile.linkedinLabel}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl card-border bg-surface/50 p-5 text-[16px] transition-colors hover:border-accent/40"
              >
                <Github size={19} className="text-accent" /> {profile.githubLabel}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-[1.25rem] card-border bg-surface/50 p-8 md:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <input
                    name="name"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-border/10 bg-surface2 px-5 py-4 text-base outline-none focus:border-accent"
                  />
                  {errors.name && <p className="mt-1.5 text-[14px] text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <input
                    name="email"
                    placeholder="Your email"
                    className="w-full rounded-xl border border-border/10 bg-surface2 px-5 py-4 text-base outline-none focus:border-accent"
                  />
                  {errors.email && <p className="mt-1.5 text-[14px] text-red-400">{errors.email}</p>}
                </div>
              </div>
              <div>
                <input
                  name="subject"
                  placeholder="Subject"
                  className="w-full rounded-xl border border-border/10 bg-surface2 px-5 py-4 text-base outline-none focus:border-accent"
                />
                {errors.subject && <p className="mt-1.5 text-[14px] text-red-400">{errors.subject}</p>}
              </div>
              <div>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about the role or project…"
                  className="w-full resize-none rounded-xl border border-border/10 bg-surface2 px-5 py-4 text-base outline-none focus:border-accent"
                />
                {errors.message && <p className="mt-1.5 text-[14px] text-red-400">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2.5 rounded-full bg-accent px-7 py-4 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <Send size={18} /> Send Message
              </button>
              {status === 'sent' && (
                <p className="text-center text-[15px] text-accent mt-2">
                  Opening your mail client — thanks for reaching out!
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}