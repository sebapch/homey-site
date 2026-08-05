import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Homey',
  description: 'Homey — Real estate in Malta.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
