import { ArrowUp } from 'lucide-react';
import EmailLink from './EmailLink';
import { contact, navLinks, openingHours, site } from '../data/siteConfig';
import '../styles/footer.css';

const footerLinks = [...navLinks, { id: 'reservation', label: 'Reservations' }, { id: 'contact', label: 'Contact' }];
const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <a href="#home" className="brand">
            Saffron <span className="brand__amp">&amp;</span> Stone
          </a>
          <p>
            {site.tagline} in {site.neighbourhood}, {site.city}. Heirloom recipes, seasonal produce
            and a table worth lingering at.
          </p>
        </div>

        <nav className="site-footer__column" aria-label="Footer">
          <h2>Explore</h2>
          <ul className="site-footer__links">
            {footerLinks.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__column">
          <h2>Visit</h2>
          <address>
            {contact.addressLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
            <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
            <EmailLink />
          </address>
        </div>

        <div className="site-footer__column">
          <h2>Hours</h2>
          <dl>
            {openingHours.map(({ days, hours }) => (
              <div key={days}>
                <dt>{days}</dt>
                <dd>{hours}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="container">
        <div className="site-footer__bottom">
          <p>
            © {currentYear} {site.name}. A fictional restaurant created for portfolio
            demonstration. Photography from Unsplash.
          </p>
          <a href="#home" className="site-footer__top">
            Back to top
            <ArrowUp size={16} strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
