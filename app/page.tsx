import Link from 'next/link';
import { anyStoreLive, notifyMailto, site } from './site';

const PLACES = ['Valletta', 'Sliema', "St Julian's", 'Gżira', 'Mosta', 'Mellieħa', 'Gozo'];

const FAQ = [
  {
    q: 'Is Homey free?',
    a: 'Yes. Browsing, listing and messaging are free. Homey does not take a commission from a sale or a let.',
  },
  {
    q: 'Can I download it now?',
    a: 'Not yet. Homey is going through the App Store and Google Play submission process. Email us if you would like to hear when it launches.',
  },
  {
    q: 'Who posts the properties?',
    a: 'Owners and people handling a property directly. Always view the place, ask questions and do your own checks before paying anything.',
  },
  {
    q: 'Which areas does Homey cover?',
    a: 'Malta and Gozo. Browse listings by locality and explore nearby properties on the map.',
  },
];

function SearchIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>;
}

function SaveIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 21 12 16l-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" /></svg>;
}

function MessageIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12a8 8 0 0 1-8 8H8l-5 3 1.4-4.2A8 8 0 1 1 21 12Z" /></svg>;
}

function CheckIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 12.5 5 5L20 6.5" /></svg>;
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MobileApplication',
      name: 'Homey',
      applicationCategory: 'LifestyleApplication',
      operatingSystem: 'Android, iOS',
      description: 'A property app for Malta and Gozo. Browse, list and message directly.',
      url: site.url,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
      areaServed: { '@type': 'Country', name: 'Malta' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQ.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main>
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Property in Malta &amp; Gozo</p>
              <h1>Find a place.<br />Talk to the <em>person.</em></h1>
              <p className="hero-sub">
                Homey lets you browse, save and message whoever listed the property. No commission
                from Homey. Just the information you need to arrange a viewing.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href={anyStoreLive ? '#get' : notifyMailto}>
                  {anyStoreLive ? 'Get the app' : 'Let me know when it launches'}
                </a>
                <a className="text-link" href="#how">See how it works <span aria-hidden="true">↓</span></a>
              </div>
              <p className="hero-note">Free to use · Coming to iPhone and Android</p>
            </div>

            <div className="hero-stage">
              <div className="device">
                <div className="device-screen">
                  <img src="/screens/map.jpeg" alt="Homey showing properties on a map of Malta." width={720} height={1600} />
                </div>
              </div>
              <p className="shot-caption">A real Homey screen, not a mock-up.</p>
            </div>
          </div>
        </section>

        <section className="places" aria-label="Areas covered">
          <div className="wrap places-inner">
            <span className="places-label">Across the islands</span>
            {PLACES.map((place) => <span className="place" key={place}>{place}</span>)}
          </div>
        </section>

        <section className="section" id="how">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">How it works</p>
              <div className="rule" />
              <h2>Everything between search and viewing.</h2>
              <p>No forms sent into the void. No waiting for someone to call you back.</p>
            </div>
            <div className="cards">
              <article className="card">
                <div className="card-icon"><SearchIcon /></div><p className="card-number">01</p>
                <h3>Search properly</h3><p>Filter by locality, price, size and the details that matter to you.</p>
              </article>
              <article className="card">
                <div className="card-icon"><SaveIcon /></div><p className="card-number">02</p>
                <h3>Keep a shortlist</h3><p>Save the places worth revisiting without losing them in old messages.</p>
              </article>
              <article className="card">
                <div className="card-icon"><MessageIcon /></div><p className="card-number">03</p>
                <h3>Message directly</h3><p>Ask about the deposit, ground rent or viewing time in the same app.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="owner-section" id="owners">
          <div className="wrap split">
            <div className="shots-pair" aria-label="The Homey property listing flow">
              <div className="device"><div className="device-screen"><img src="/screens/list.jpeg" alt="Homey asking whether a property is for sale or rent." width={720} height={1600} /></div></div>
              <div className="device"><div className="device-screen"><img src="/screens/photos.jpeg" alt="Adding property photos to a Homey listing." width={720} height={1600} /></div></div>
            </div>
            <div className="owner-copy">
              <p className="eyebrow">Have a property?</p>
              <div className="rule" />
              <h2>List it from your phone.</h2>
              <p className="owner-intro">Add the facts, upload your photos and drop a pin. People interested in the property message you directly.</p>
              <ul className="privacy-list">
                <li><CheckIcon /><span>Sell or rent anywhere in Malta and Gozo</span></li>
                <li><CheckIcon /><span>Add up to 20 photos</span></li>
                <li><CheckIcon /><span>Edit or remove the listing whenever you need</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="band">
          <div className="wrap band-inner">
            <p className="eyebrow">The simple bit</p>
            <blockquote>No commission.<br /><span>No hidden fees.</span></blockquote>
            <p>Homey introduces the people on each side of a property. The price, deposit and terms are agreed between you.</p>
            <p className="band-meta">Homey is a marketplace, not a licensed estate agency. Do your own checks before any money moves. <Link href="/terms">Read the terms</Link></p>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="wrap faq-grid">
            <div className="section-head">
              <p className="eyebrow">Good to know</p><div className="rule" /><h2>Four straight answers.</h2>
            </div>
            <div className="faq">
              {FAQ.map(({ q, a }) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
            </div>
          </div>
        </section>

        <section className="cta" id="get">
          <div className="wrap">
            <img src="/brand/homey-icon-512.png" alt="" width={78} height={78} />
            <p className="eyebrow">Launching soon</p>
            <h2>Hear when Homey launches.</h2>
            <p>Email us what you are looking for and we will let you know when the app is live.</p>
            <div className="cta-actions">
              <a className="btn btn-primary" href={notifyMailto}>Keep me posted</a>
              <a className="btn btn-ghost" href={`mailto:${site.email}`}>Ask us something</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
