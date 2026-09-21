import Link from 'next/link';
import { site } from './site';

export default function HomePage() {
  return (
    <div className="home-hero">
      <h1>Homey</h1>
      <p>Real estate in Malta.</p>
      <nav className="home">
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms of Service</Link>
        <Link href="/delete-account">Delete Account</Link>
      </nav>
      <p>Need help? <a href={`mailto:${site.email}`}>{site.email}</a></p>
    </div>
  );
}
