import { useState } from 'react';
import { images } from '../data/images';
import { site } from '../data/siteConfig';
import '../styles/hero.css';

function Hero() {
  const [imageFailed, setImageFailed] = useState(false);
  const { hero } = images;

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      {!imageFailed && (
        <img
          className="hero__media"
          src={hero.src}
          srcSet={hero.srcSet}
          sizes="100vw"
          width={hero.width}
          height={hero.height}
          alt={hero.alt}
          fetchPriority="high"
          onError={() => setImageFailed(true)}
        />
      )}
      <div className="hero__overlay" aria-hidden="true" />

      <div className="container hero__content">
        <p className="eyebrow hero__eyebrow">
          {site.tagline}
        </p>
        <h1 id="hero-title" className="hero__title">
          Tradition, <em>reimagined.</em>
        </h1>
        <p className="hero__lead">
          Heirloom recipes from across India, reinterpreted with seasonal produce, open-fire
          technique and an unhurried sense of occasion.
        </p>

        <div className="hero__actions">
          <a href="#reservation" className="btn btn--primary">
            Reserve Your Table
          </a>
          <a href="#menu" className="btn btn--ghost">
            Explore Menu
          </a>
        </div>

        <dl className="hero__meta">
          <div>
            <dt>Location</dt>
            <dd>
              {site.neighbourhood}, {site.city}
            </dd>
          </div>
          <div>
            <dt>Established</dt>
            <dd>{site.established}</dd>
          </div>
          <div>
            <dt>Dinner</dt>
            <dd>{site.serviceSummary}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default Hero;
