import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Homey',
  description: 'The terms that govern your use of Homey.',
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
}

export default function TermsPage() {
  return (
    <div className="page">
      <p className="updated">Last updated: March 18, 2026</p>
      <h1>Homey Agreement</h1>
      <p className="intro">
        Please read these terms carefully before using the Homey platform. By accessing our
        services, you agree to follow these rules.
      </p>

      <div className="callout">
        <h3>Quick Summary</h3>
        <ul>
          <li>You must be 18+ to create an account.</li>
          <li>We don&apos;t verify all property details; use caution.</li>
          <li>Fraudulent listings will result in a permanent ban.</li>
          <li>We don&apos;t take a commission (yet), we just facilitate contact.</li>
        </ul>
      </div>

      <Section title="1. Acceptance of Terms">
        By accessing or using Homey, you acknowledge that you have read, understood, and agree
        to be bound by these Terms. If you are using the service on behalf of a company, you
        represent that you have the authority to bind that entity to these terms.
      </Section>

      <Section title="2. Account Registration">
        To list a property or use certain features, you must register for an account. You agree
        to provide accurate, current, and complete information and to keep this information
        updated. You are responsible for safeguarding your login credentials and for all
        activities that occur under your account.
      </Section>

      <Section title="3. User Conduct & Prohibited Activities">
        You agree not to: (a) Post false, inaccurate, or misleading property information; (b)
        Use the service for any illegal purpose; (c) Harass other users; (d) Use automated
        systems to crawl or scrape the platform; or (e) Attempt to interfere with the proper
        working of the app.
      </Section>

      <Section title="4. Property Listings & Accuracy">
        Homey is a marketplace platform. While we encourage honesty, we do not guarantee the
        quality, safety, or legality of the properties advertised, the truth or accuracy of the
        listings, or the ability of sellers to sell properties. Users should perform their own
        due diligence before any financial commitment.
      </Section>

      <Section title="5. Intellectual Property">
        All content on Homey, including text, graphics, logos, and software, is the property of
        Homey or its content suppliers and is protected by international copyright laws. You
        retain ownership of the photos you upload, but you grant us a non-exclusive license to
        use them for marketing our service.
      </Section>

      <Section title="6. Limitation of Liability">
        Homey shall not be liable for any direct, indirect, incidental, special, or consequential
        damages resulting from the use or inability to use the service, including but not
        limited to any transactions between users or disputes over property conditions.
      </Section>

      <Section title="7. Termination and Changes">
        We reserve the right to modify or terminate the service or your access at any time, for
        any reason, without notice. We may also update these terms from time to time by posting
        the new version in the app.
      </Section>

      <Section title="8. Governing Law">
        These Terms are governed by the laws of Malta. Any disputes arising from these Terms or
        the use of Homey will be resolved exclusively in the courts of Malta.
      </Section>

      <div className="contact">
        <p>Questions about our Terms?</p>
        <a className="button" href="mailto:legal@homey.mt">
          Contact legal@homey.mt
        </a>
      </div>
    </div>
  );
}
