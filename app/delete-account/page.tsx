import type { Metadata } from 'next';
import { site } from '../site';

export const metadata: Metadata = {
  title: 'Delete Your Account',
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
          Open Homey and go to <strong>Profile &rarr; Privacy &rarr; Request account
          deletion</strong>. Confirm with <strong>Delete Everything</strong>. For an account created
          with Apple, confirm with Apple when prompted. The app reports success only after the
          server finishes deleting the account and associated content. If it fails, retry or
          contact us.
        </p>
      </section>

      <section>
        <h2>Option 2: Request deletion by email</h2>
        <p>
          If you no longer have the app installed, email{' '}
          <a href={`mailto:${site.email}?subject=Account%20Deletion%20Request`}>
            {site.email}
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
          In-app deletion is completed before the app confirms success. For requests sent by
          email, we verify account ownership and process the request after that. See our{' '}
          <a href="/privacy">Privacy Policy</a> for details on data retention.
        </p>
      </section>

      <div className="contact">
        <p>Need help with your deletion request?</p>
        <a className="button" href={`mailto:${site.email}?subject=Account%20Deletion%20Request`}>
          Email {site.email}
        </a>
      </div>
    </div>
  );
}
