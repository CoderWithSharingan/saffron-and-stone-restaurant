import Hero from './components/Hero';
import Navbar from './components/Navbar';

// Temporary Phase 2 anchors so navigation can be tested; replaced by real sections in Phase 3.
const upcomingSections = [
  { id: 'story', title: 'Our Story' },
  { id: 'menu', title: 'Menu' },
  { id: 'gallery', title: 'Gallery' },
  { id: 'reservation', title: 'Reservations' },
  { id: 'contact', title: 'Contact' },
];

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        {upcomingSections.map(({ id, title }) => (
          <section key={id} id={id} className="phase-placeholder" aria-labelledby={`${id}-title`}>
            <h2 id={`${id}-title`}>{title}</h2>
            <p>This section will be built in Phase 3.</p>
          </section>
        ))}
      </main>
    </>
  );
}

export default App;
