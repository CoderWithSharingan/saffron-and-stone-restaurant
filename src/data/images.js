// Local WebP copies of Unsplash photos; sources and licensing are listed in README.md.
import heroThali768 from '../assets/images/hero-thali-768.webp';
import heroThali1280 from '../assets/images/hero-thali-1280.webp';
import heroThali1920 from '../assets/images/hero-thali-1920.webp';

export const images = {
  hero: {
    src: heroThali1280,
    srcSet: `${heroThali768} 768w, ${heroThali1280} 1280w, ${heroThali1920} 1920w`,
    width: 1920,
    height: 1280,
    alt: 'Brass bowls of curry, rice and accompaniments arranged for a shared meal on a restaurant table',
  },
};
