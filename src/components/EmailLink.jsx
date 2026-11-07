import { contact } from '../data/siteConfig';

// Allows long addresses to wrap after "@" rather than mid-word on narrow screens.
function EmailLink({ className }) {
  const [user, domain] = contact.email.split('@');

  return (
    <a className={className} href={`mailto:${contact.email}`}>
      {user}@<wbr />
      {domain}
    </a>
  );
}

export default EmailLink;
