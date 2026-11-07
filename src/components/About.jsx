import { ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { images } from '../data/images';
import { site } from '../data/siteConfig';
import '../styles/about.css';

const pillars = [
  { title: 'Regional memory', text: 'Recipes gathered from home kitchens across Lucknow, Kolkata, Kashmir and the Konkan coast.' },
  { title: 'Seasonal produce', text: 'A menu that follows Maharashtra’s markets, from monsoon greens to winter Alphonso preserves.' },
  { title: 'Fire & patience', text: 'Clay tandoors, slow dum cooking and spices roasted and ground in-house each morning.' },
];

function About() {
  const { main, detail } = images.about;

  return (
    <section id="story" className="section about" aria-labelledby="story-title">
      <div className="container about__grid">
        <div className="about__media">
          <img
            className="about__image about__image--main"
            src={main.src}
            width={main.width}
            height={main.height}
            alt={main.alt}
            loading="lazy"
            decoding="async"
          />
          <img
            className="about__image about__image--detail"
            src={detail.src}
            width={detail.width}
            height={detail.height}
            alt={detail.alt}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="about__content">
          <SectionHeading id="story-title" eyebrow="Our Story" title="More than a meal. A memory." />

          <div className="about__body">
            <p className="about__lead">
              We believe the most memorable meals are the ones that feel both familiar and new: a
              grandmother’s recipe, revisited with care, served in a room built for lingering.
            </p>
            <p>
              {site.name} opened on a quiet Bandra lane in {site.established} with a simple idea:
              honour the depth of India’s regional cooking without the formality of a museum.
              Our kitchen starts with heritage techniques and seasonal produce, then edits with a
              modern eye, so every plate tells a story worth retelling.
            </p>
          </div>

          <ul className="about__pillars">
            {pillars.map(({ title, text }) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>

          <a href="#menu" className="text-link">
            Discover the menu
            <ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
