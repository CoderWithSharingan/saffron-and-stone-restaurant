import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Reservation from './components/Reservation';

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Reservation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
