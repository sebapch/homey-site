import type { Metadata } from 'next';
import { site } from '../site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
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
      <p className="updated">Last updated: September 21, 2026</p>
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
          <li>We use HTTPS to protect data in transit.</li>
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
        We don&apos;t sell your personal data. We use service providers including Supabase for
        accounts and storage, Mapbox for maps and address search, and Expo and Apple for push
        notifications. Other users can see the listing details and profile information you choose
        to publish and the messages you send them. We may disclose data when required by law.
      </Section>

      <Section title="5. Data Retention">
        We retain account data while your account is active. In-app deletion removes the account
        and associated content from our active systems before confirming completion. If a
        technical error interrupts deletion, the app will show an error so you can retry or
        contact us. Backups expire under our providers&apos; retention schedules; records
        required by law may be retained.
      </Section>

      <Section title="6. International Data Transfers">
        Service providers may process your data outside Malta. Contact us for information about
        the safeguards that apply to a particular transfer.
      </Section>

      <Section title="7. Cookies and Tracking">
        We use local storage to remember your login session and preferences. These are essential
        for the app&apos;s functionality. We do not use third-party advertising or tracking
        cookies.
      </Section>

      <Section title="8. Account and Data Deletion">
        You can delete your account from within the app (Profile &rarr; Privacy &rarr;
        Request account deletion) or request help through our{' '}
        <a href="/delete-account">account deletion page</a>. In-app deletion confirms completion
        only after the server finishes. Contact us if you cannot access your account.
      </Section>

      <Section title="9. Policy Updates">
        We may update this policy occasionally. If changes are significant, we will notify you
        through the app or by email. Your continued use of the app after updates means you
        accept the new policy.
      </Section>

      <div className="contact">
        <p>Questions about this policy or your data?</p>
        <a className="button" href={`mailto:${site.email}`}>
          Contact {site.email}
        </a>
      </div>
    </div>
  );
}
