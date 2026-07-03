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
      <span className="mb-3 block font-mono text-[13px] uppercase tracking-[0.25em] text-accent">
        {tag}
      </span>
      <h2 className="font-display text-[clamp(2.16rem,4.8vw,3.6rem)] font-black leading-[1.05] tracking-tight">
        {title}
      </h2>
      <div
        className={`mt-5 h-[2.5px] w-16 bg-gradient-to-r from-accent to-transparent ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </Reveal>
  );
}