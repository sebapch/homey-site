import Link from 'next/link';
import { anyStoreLive, notifyMailto } from '../site';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" className="brand">
          <img src="/brand/homey-icon-512.png" alt="" width={34} height={34} />
          Homey
        </Link>

        <nav className="site-nav">
          <Link href="/#how">How it works</Link>
          <Link href="/#owners">For owners</Link>
          <Link href="/#faq">FAQ</Link>
          <a className="btn btn-primary btn-sm" href={anyStoreLive ? '/#get' : notifyMailto}>
            {anyStoreLive ? 'Get the app' : 'Get notified'}
          </a>
        </nav>
      </div>
    </header>
  );
}
