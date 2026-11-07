import { Clock, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import EmailLink from './EmailLink';
import SectionHeading from './SectionHeading';
import { contact, openingHours, site } from '../data/siteConfig';
import '../styles/contact.css';

function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div className="contact__info">
          <SectionHeading id="contact-title" eyebrow="Visit Us" title="Find us in Bandra West.">
            <p>
              Tucked away on a leafy lane, a short walk from Carter Road promenade. Valet parking
              is available from 7 pm.
            </p>
          </SectionHeading>

          <ul className="contact__list">
            <li>
              <MapPin size={20} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <h3>Address</h3>
                <address>
                  {contact.addressLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
              </div>
            </li>
            <li>
              <Phone size={20} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <h3>Phone</h3>
                <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
              </div>
            </li>
            <li>
              <Mail size={20} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <h3>Email</h3>
                <EmailLink />
              </div>
            </li>
            <li>
              <Clock size={20} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <h3>Opening hours</h3>
                <dl className="contact__hours">
                  {openingHours.map(({ days, hours }) => (
                    <div key={days}>
                      <dt>{days}</dt>
                      <dd>{hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </li>
          </ul>
        </div>

        <div className="contact__map">
          <div className="contact__map-art" aria-hidden="true">
            <span className="contact__map-road contact__map-road--a" />
            <span className="contact__map-road contact__map-road--b" />
            <span className="contact__map-road contact__map-road--c" />
            <span className="contact__map-coast" />
            <span className="contact__map-pin">
              <MapPin size={28} strokeWidth={1.5} />
            </span>
          </div>
          <div className="contact__map-caption">
            <p className="contact__map-place">
              {site.neighbourhood}, {site.city}
            </p>
            <p className="contact__map-note">Map shows the neighbourhood; the street address is fictional.</p>
            <a className="btn btn--ghost btn--sm" href={contact.mapUrl} target="_blank" rel="noopener noreferrer">
              Open in Google Maps
              <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
