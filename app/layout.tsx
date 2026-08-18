import type { Metadata, Viewport } from 'next';
import { Poppins, Instrument_Sans, Instrument_Serif } from 'next/font/google';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { site } from './site';
import './globals.css';

/* Display face — same one the app and the logo lockup use. */
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

/* Reading face — Poppins is too wide for paragraphs. */
const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-instrument-sans',
  display: 'swap',
});

/* Accent face — the pull quote and one word in the headline. Nothing else. */
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Homey — Property in Malta, without the middleman',
    template: '%s — Homey',
  },
  description:
    'Homey is a property app for Malta. Browse what is on the market, save what you like, and message whoever posted the listing. No commission, no hidden fees.',
  keywords: [
    'Malta property',
    'Malta real estate',
    'rent in Malta',
    'buy property Malta',
    'Sliema apartments',
    'Valletta property',
    'no agency fee Malta',
  ],
  applicationName: site.name,
  authors: [{ name: site.name }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: 'en_MT',
    url: site.url,
    title: 'Homey — Property in Malta, without the middleman',
    description:
      'Browse what is on the market in Malta, save what you like, and message whoever posted the listing. No commission, no hidden fees.',
    images: [
      {
        url: '/brand/og-banner.png',
        width: 1024,
        height: 500,
        alt: 'Homey — real estate in Malta. Buy, sell, rent.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homey — Property in Malta, without the middleman',
    description:
      'Browse what is on the market in Malta and message whoever posted the listing. No commission, no hidden fees.',
    images: ['/brand/og-banner.png'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#fbf8f3',
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-MT"
      className={`${poppins.variable} ${instrumentSans.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
