import Link from 'next/link';

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
    </div>
  );
}
