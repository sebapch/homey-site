import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Delete Your Account — Homey',
  description: 'How to delete your Homey account and personal data.',
};

export default function DeleteAccountPage() {
  return (
    <div className="page">
      <h1>Delete Your Account</h1>
      <p className="intro">
        You can request deletion of your Homey account and all associated personal data at any
        time, whether or not you still have the app installed.
      </p>

      <section>
        <h2>Option 1: Delete inside the app</h2>
        <p>
          Open Homey and go to <strong>Profile &rarr; Data &amp; Privacy &rarr; Delete
          Account</strong>. Confirm the deletion request. Your account is deactivated
          immediately and your personal data is scheduled for permanent removal.
        </p>
      </section>

      <section>
        <h2>Option 2: Request deletion by email</h2>
        <p>
          If you no longer have the app installed, email{' '}
          <a href="mailto:support@homey.mt?subject=Account%20Deletion%20Request">
            support@homey.mt
          </a>{' '}
          from the email address associated with your account, with the subject &ldquo;Account
          Deletion Request&rdquo;. We will verify your identity and process the request.
        </p>
      </section>

      <section>
        <h2>What gets deleted</h2>
        <p>
          Your profile, property listings, messages, conversations, and favorites are removed.
          Your account credentials are deleted from our authentication provider.
        </p>
      </section>

      <section>
        <h2>What we may retain</h2>
        <p>
          We may retain minimal transactional records where required by law (e.g. fraud
          prevention, tax, or legal obligations) for a limited period. This retained data is not
          used for any other purpose.
        </p>
      </section>

      <section>
        <h2>Timeline</h2>
        <p>
          Deletion requests are confirmed and fully processed within 30 days. See our{' '}
          <a href="/privacy">Privacy Policy</a> for details on data retention.
        </p>
      </section>

      <div className="contact">
        <p>Need help with your deletion request?</p>
        <a className="button" href="mailto:support@homey.mt?subject=Account%20Deletion%20Request">
          Email support@homey.mt
        </a>
      </div>
    </div>
  );
}
