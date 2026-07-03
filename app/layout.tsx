import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { profile } from '@/lib/data';

const display = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '700', '900'],
  variable: '--font-display',
  display: 'swap',
});

const sans = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const siteUrl = 'https://tharunshree.netlify.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — Data Scientist & ML Engineer`,
    template: `%s — ${profile.name}`,
  },
  description: profile.summary,
  keywords: [
    'Tharun Shree', 'Data Scientist', 'Data Analyst', 'Machine Learning Engineer',
    'Python Developer', 'Power BI Developer', 'Portfolio', 'Bengaluru',
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: `${profile.name} — Data Scientist & ML Engineer`,
    description: profile.tagline,
    siteName: profile.name,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: profile.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — Data Scientist & ML Engineer`,
    description: profile.tagline,
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.svg',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
    { media: '(prefers-color-scheme: light)', color: '#fafafc' },
  ],
};

const themeInitScript = `
(function(){
  try {
    var saved = localStorage.getItem('theme');
    var theme = saved || 'dark';
    if (theme === 'light') document.documentElement.classList.add('light');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="noise">
        {children}
      </body>
    </html>
  );
}
