import Reveal from './Reveal';

export default function SectionHeading({
  tag,
  title,
  align = 'left',
}: {
  tag: string;
  title: string;
  align?: 'left' | 'center';
}) {
  return (
    <Reveal className={align === 'center' ? 'text-center' : ''}>
      <span className="mb-2.5 block font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
        {tag}
      </span>
      <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-black leading-[1.05] tracking-tight">
        {title}
      </h2>
      <div
        className={`mt-4 h-[2px] w-14 bg-gradient-to-r from-accent to-transparent ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </Reveal>
  );
}
