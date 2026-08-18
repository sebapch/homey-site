import Link from 'next/link';
import { site, notifyMailto, anyStoreLive } from './site';

/* Real localities, so the page reads as an island product and not a template. */
const PLACES = [
  'Valletta',
  'Sliema',
  "St Julian's",
  'Gżira',
  'Msida',
  'Birkirkara',
  'Mosta',
  'Marsaskala',
  'Mellieħa',
  'Gozo',
];

const FAQ = [
  {
    q: 'Is Homey free?',
    a: 'Yes. Browsing, listing and messaging all cost nothing, and there is no commission on a sale or a let.',
  },
  {
    q: 'Can I download it yet?',
    a: 'Not yet. The app is built and we are going through the submission process with Google Play and the App Store. Leave your email and we will write to you the day it is live — that is the only thing we will use it for.',
  },
  {
    q: 'Who posts the listings?',
    a: 'People with a property to sell or let. Homey does not verify every detail of every listing, so view the place, ask questions and do your own checks before you commit to anything.',
  },
  {
    q: 'What does Homey take from a deal?',
    a: 'Nothing. Homey puts the two of you in touch and stays out of it. Whatever you agree on price, deposit or terms is between you and the other person.',
  },
  {
    q: 'Someone is behaving badly. What do I do?',
    a: 'Block or report them from inside the app. Fraudulent listings get a permanent ban.',
  },
  {
    q: 'Which areas do you cover?',
    a: 'All of Malta and Gozo. Drop the pin wherever the property actually is.',
  },
];

function IconSearch() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function IconMap() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function IconChat() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12a8 8 0 0 1-8 8H8l-5 3 1.4-4.2A8 8 0 1 1 21 12Z" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m4 12.5 5 5L20 6.5" />
    </svg>
  );
}

/* Free structured data — helps the page render properly in search results. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MobileApplication',
      name: 'Homey',
      applicationCategory: 'LifestyleApplication',
      operatingSystem: 'Android, iOS',
      description:
        'A property app for Malta. Browse listings, save favourites and message whoever posted the listing. No commission, no hidden fees.',
      url: site.url,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
      areaServed: { '@type': 'Country', name: 'Malta' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQ.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* ---------------- hero ---------------- */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <p className="eyebrow">Malta &middot; Buy &middot; Sell &middot; Rent</p>
              <h1>
                Property in Malta,
                <br />
                without the <em>middleman</em>.
              </h1>
              <p className="hero-sub">
                Homey shows you what is on the market and puts you straight through to the person
                who posted it. Browse, save, message. No commission, no hidden fees.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href={anyStoreLive ? '#get' : notifyMailto}>
                  {anyStoreLive ? 'Get the app' : 'Tell me when it launches'}
                </a>
                <a className="btn btn-ghost" href="#how">
                  See how it works
                </a>
              </div>

              <p className="hero-note">Free to use. Coming to Google Play and the App&nbsp;Store.</p>
            </div>

            <div className="hero-stage">
              <div className="device">
                <div className="device-screen">
                  <img
                    src="/screens/map.jpeg"
                    alt="The Homey app showing a map of Malta with a property pinned at Xatt It-Tiben, Ta' Xbiex."
                    width={720}
                    height={1600}
                  />
                </div>
              </div>
              <p className="shot-caption">Real screen — pinning a listing in Ta&rsquo; Xbiex.</p>
            </div>
          </div>
        </section>

        {/* ---------------- localities ---------------- */}
        <section className="places" aria-label="Areas covered">
          <div className="wrap places-inner">
            <span className="places-label">Covering</span>
            {PLACES.map((place) => (
              <span className="place" key={place}>
                {place}
              </span>
            ))}
          </div>
        </section>

        {/* ---------------- what it does ---------------- */}
        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">What Homey does</p>
              <div className="rule" />
              <h2>Three things, done properly.</h2>
              <p>
                Searching, shortlisting and the conversation all live in the same app, so nothing
                gets buried in a WhatsApp thread from four months ago.
              </p>
            </div>

            <div className="cards">
              <article className="card">
                <div className="card-icon">
                  <IconSearch />
                </div>
                <h3>Filters that match how you look</h3>
                <p>
                  Narrow by locality, price, size and property type — then by the things that
                  actually decide it. Sea view, lift, parking, furnished, pet friendly.
                </p>
              </article>

              <article className="card">
                <div className="card-icon">
                  <IconMap />
                </div>
                <h3>The whole island on a map</h3>
                <p>
                  See what is available and exactly where it is. On an island this size, the street
                  tells you more than the photos do.
                </p>
              </article>

              <article className="card">
                <div className="card-icon">
                  <IconChat />
                </div>
                <h3>Message the person, not a form</h3>
                <p>
                  Ask about the ground rent, the deposit, the viewing time. No callback queue. You
                  can block or report anyone, any time.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ---------------- how it works ---------------- */}
        <section className="section" id="how" style={{ paddingTop: 0 }}>
          <div className="wrap split">
            <div>
              <p className="eyebrow">How it works</p>
              <div className="rule" />
              <h2 style={{ fontSize: 'clamp(30px, 3.6vw, 46px)', marginBottom: 44 }}>
                Three taps from opening it to talking to someone.
              </h2>

              <ol className="steps">
                <li className="step">
                  <span className="step-n">1</span>
                  <h3>Sign in</h3>
                  <p>Apple, Google, or an email address. A few seconds, and you never see it again.</p>
                </li>
                <li className="step">
                  <span className="step-n">2</span>
                  <h3>Find something worth a viewing</h3>
                  <p>
                    Filter down to what you want, check where it is on the map, and save the ones
                    worth a second look.
                  </p>
                </li>
                <li className="step">
                  <span className="step-n">3</span>
                  <h3>Message whoever posted it</h3>
                  <p>
                    Straight to them. No agency in the middle, no fee for the introduction, no one
                    marking up the price on the way through.
                  </p>
                </li>
              </ol>
            </div>

            <div>
              <div className="device" style={{ maxWidth: 300, margin: '0 auto' }}>
                <div className="device-screen">
                  <img
                    src="/screens/signin.jpeg"
                    alt="The Homey sign-in screen, with email, Google and Apple sign-in options."
                    width={720}
                    height={1600}
                  />
                </div>
              </div>
              <p className="shot-caption">Sign in with Apple, Google or email.</p>
            </div>
          </div>
        </section>

        {/* ---------------- for owners ---------------- */}
        <section
          className="section"
          id="owners"
          style={{
            background: 'var(--paper-2)',
            borderTop: '1px solid var(--paper-3)',
            borderBottom: '1px solid var(--paper-3)',
          }}
        >
          <div className="wrap split">
            <div className="shots-pair">
              <div className="device">
                <div className="device-screen">
                  <img
                    src="/screens/list.jpeg"
                    alt="The Homey listing flow asking whether you want to sell or rent your property."
                    width={720}
                    height={1600}
                  />
                </div>
              </div>
              <div className="device">
                <div className="device-screen">
                  <img
                    src="/screens/photos.jpeg"
                    alt="The photo step of the Homey listing flow, with two property photos added."
                    width={720}
                    height={1600}
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="eyebrow">For owners</p>
              <div className="rule" />
              <h2 style={{ fontSize: 'clamp(30px, 3.6vw, 46px)', marginBottom: 18 }}>
                Listing takes minutes, not a meeting.
              </h2>
              <p style={{ fontSize: 18, color: 'var(--ink-2)', margin: '0 0 30px' }}>
                No appointment, no exclusivity agreement, no percentage at the end of it. You post
                it, people message you.
              </p>

              <ul className="privacy-list">
                <li>
                  <IconCheck />
                  <span>
                    Say whether you are selling or renting — the app asks different questions for
                    each.
                  </span>
                </li>
                <li>
                  <IconCheck />
                  <span>Add up to 20 photos, straight from your phone.</span>
                </li>
                <li>
                  <IconCheck />
                  <span>Drag the map and drop the pin exactly where the property is.</span>
                </li>
                <li>
                  <IconCheck />
                  <span>Edit or delete it later from My Properties.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ---------------- the one dark band ---------------- */}
        <section className="band">
          <div className="wrap band-inner">
            <p className="eyebrow">The deal</p>
            <blockquote>
              We don&rsquo;t take a commission.
              <br />
              <span>We just introduce you.</span>
            </blockquote>
            <p>
              No commission and no listing fee today. If that ever changes, it will appear here and
              in the Terms before it appears in the app. What you agree with the other person —
              price, deposit, dates — is between the two of you.
            </p>
            <p className="band-meta">
              Homey is a marketplace, not a licensed estate agency. Do your own due diligence before
              any money moves. <Link href="/terms">Read the Terms</Link>
            </p>
          </div>
        </section>

        {/* ---------------- privacy ---------------- */}
        <section className="section">
          <div className="wrap split">
            <div>
              <p className="eyebrow">Your data</p>
              <div className="rule" />
              <h2 style={{ fontSize: 'clamp(30px, 3.6vw, 46px)', marginBottom: 18 }}>
                GDPR, not as a footer link.
              </h2>
              <p style={{ fontSize: 18, color: 'var(--ink-2)', margin: '0 0 30px' }}>
                Malta is in the EU, so none of this is optional. It is also just how the app was
                built.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-ghost" href="/privacy">
                  Privacy policy
                </Link>
                <Link className="btn btn-ghost" href="/delete-account">
                  Delete your account
                </Link>
              </div>
            </div>

            <ul className="privacy-list">
              <li>
                <IconCheck />
                <span>Export everything we hold on you, from your profile.</span>
              </li>
              <li>
                <IconCheck />
                <span>
                  Delete your account and its data from inside the app, or from this website.
                </span>
              </li>
              <li>
                <IconCheck />
                <span>
                  No advertising SDKs in the app, and no advertising ID. Nothing follows you around.
                </span>
              </li>
              <li>
                <IconCheck />
                <span>
                  Location is used to show what is near you, and for nothing else. You can say no.
                </span>
              </li>
              <li>
                <IconCheck />
                <span>Your personal data is never sold.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ---------------- faq ---------------- */}
        <section className="section" id="faq" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Questions</p>
              <div className="rule" />
              <h2>Straight answers.</h2>
            </div>

            <div className="faq">
              {FAQ.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- closing ---------------- */}
        <section className="cta" id="get">
          <div className="wrap">
            <img src="/brand/homey-icon-512.png" alt="" width={78} height={78} />
            <h2>Be first in when it opens.</h2>
            <p>
              One email, on the day Homey lands on your phone&rsquo;s store. That is the only thing
              we will use your address for.
            </p>
            <div className="cta-actions">
              <a className="btn btn-primary" href={notifyMailto}>
                Tell me when it launches
              </a>
              <a className="btn btn-ghost" href={`mailto:${site.email}`}>
                Ask us something
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
