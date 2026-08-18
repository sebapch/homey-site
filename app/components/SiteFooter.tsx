import Link from 'next/link';
import { site } from '../site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand">
              <img src="/brand/homey-icon-512.png" alt="" width={34} height={34} />
              Homey
            </Link>
            <p>Buy, sell and rent property across Malta and Gozo.</p>
          </div>

          <nav className="footer-links">
            <Link href="/#how">How it works</Link>
            <Link href="/#owners">List a property</Link>
            <Link href="/#faq">FAQ</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/delete-account">Delete account</Link>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Homey. Made in Malta.</span>
          <span>Homey facilitates contact between users. It is not a licensed estate agency.</span>
        </div>
      </div>
    </footer>
  );
}
