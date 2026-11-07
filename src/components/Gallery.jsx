import SectionHeading from './SectionHeading';
import { galleryItems } from '../data/galleryData';
import '../styles/gallery.css';

function Gallery() {
  return (
    <section id="gallery" className="section gallery" aria-labelledby="gallery-title">
      <div className="container">
        <SectionHeading id="gallery-title" eyebrow="Gallery" title="Moments from the kitchen and the room.">
          <p>Low light, warm brass and the quiet theatre of the tandoor.</p>
        </SectionHeading>

        <ul className="gallery__grid">
          {galleryItems.map(({ id, image, caption, layout }) => (
            <li key={id} className={layout === 'feature' ? 'gallery__item gallery__item--feature' : 'gallery__item'}>
              <figure className="gallery__figure">
                <img
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Gallery;
