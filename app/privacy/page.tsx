import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Homey',
  description: 'How Homey collects, uses, and protects your data.',
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div className="page">
      <p className="updated">Last updated: March 18, 2026</p>
      <h1>Your Data at Homey</h1>
      <p className="intro">
        We value your trust. This policy explains what information we collect, how we use it,
        and how we protect your rights under the GDPR.
      </p>

      <div className="callout">
        <h3>Your Data Rights</h3>
        <ul>
          <li>You can download your data at any time.</li>
          <li>You have the &ldquo;Right to be Forgotten&rdquo; (account deletion).</li>
          <li>We never sell your personal data to third parties.</li>
          <li>We use top-tier SSL encryption for all transfers.</li>
        </ul>
      </div>

      <Section title="1. Information We Collect">
        We collect three types of information: (a) Information you provide, such as your name,
        email, and phone number when registering; (b) Content you create, like property listings
        and messages; and (c) Usage data, such as your interaction with the app and device
        information.
      </Section>

      <Section title="2. How We Use Your Information">
        We use your data to: (a) Provide and maintain our platform; (b) Facilitate connections
        between buyers and sellers; (c) Send important service notices; (d) Improve app
        performance; and (e) Detect and prevent fraudulent activity.
      </Section>

      <Section title="3. Legal Basis for Processing">
        Under the GDPR, we process your data based on your Consent (e.g. for marketing), our
        Contractual Necessity (to provide the service you signed up for), and our Legitimate
        Interest (to keep the platform secure and improve user experience).
      </Section>

      <Section title="4. Data Sharing and Disclosure">
        We don&apos;t sell your personal data. We only share it with trusted service providers
        (like Supabase for storage, Mapbox for maps, and Firebase for push notifications) who
        help us operate. In rare cases, we may share data if required by law or to protect our
        rights.
      </Section>

      <Section title="5. Data Retention">
        We store your personal data as long as your account is active. If you delete your
        account, we will purge your personal information from our active databases within 30
        days, unless a legal requirement dictates otherwise.
      </Section>

      <Section title="6. International Data Transfers">
        Your data may be stored in cloud servers located in various regions. We ensure that our
        providers comply with international standards such as the EU-US Data Privacy Framework
        to guarantee your data stays protected.
      </Section>

      <Section title="7. Cookies and Tracking">
        We use local storage to remember your login session and preferences. These are essential
        for the app&apos;s functionality. We do not use third-party advertising or tracking
        cookies.
      </Section>

      <Section title="8. Account and Data Deletion">
        You can delete your account and all associated personal data at any time from within the
        app (Profile &rarr; Data &amp; Privacy &rarr; Delete Account), or by requesting deletion
        online at{' '}
        <a href="/delete-account">homeyappmlt.com/delete-account</a>. We will confirm and process
        the deletion within 30 days.
      </Section>

      <Section title="9. Policy Updates">
        We may update this policy occasionally. If changes are significant, we will notify you
        through the app or by email. Your continued use of the app after updates means you
        accept the new policy.
      </Section>

      <div className="contact">
        <p>Questions about this policy or your data?</p>
        <a className="button" href="mailto:support@homey.mt">
          Contact support@homey.mt
        </a>
      </div>
    </div>
  );
}
