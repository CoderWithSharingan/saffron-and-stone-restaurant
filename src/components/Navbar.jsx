import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, sectionIds, site } from '../data/siteConfig';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrolled } from '../hooks/useScrolled';
import '../styles/navbar.css';

const DESKTOP_QUERY = '(min-width: 1025px)';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScrolled();
  const activeId = useActiveSection(sectionIds);
  const headerRef = useRef(null);
  const toggleRef = useRef(null);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const header = headerRef.current;
    const desktopQuery = window.matchMedia(DESKTOP_QUERY);

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== 'Tab') return;

      // Keep keyboard focus inside the header while the full-screen menu is open.
      const focusable = header.querySelectorAll('a[href], button:not([disabled])');
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const handleViewportChange = (event) => {
      if (event.matches) setIsOpen(false);
    };

    document.documentElement.classList.add('is-nav-open');
    document.addEventListener('keydown', handleKeyDown);
    desktopQuery.addEventListener('change', handleViewportChange);

    return () => {
      document.documentElement.classList.remove('is-nav-open');
      document.removeEventListener('keydown', handleKeyDown);
      desktopQuery.removeEventListener('change', handleViewportChange);
    };
  }, [isOpen]);

  const headerClassName = [
    'site-header',
    isScrolled && 'is-scrolled',
    isOpen && 'is-open',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header ref={headerRef} className={headerClassName}>
      <div className="container site-header__inner">
        <a href="#home" className="brand" onClick={closeMenu}>
          Saffron <span className="brand__amp">&amp;</span> Stone
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="nav-toggle"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={24} strokeWidth={1.5} aria-hidden="true" /> : <Menu size={24} strokeWidth={1.5} aria-hidden="true" />}
        </button>

        <nav id="primary-navigation" className="site-nav" aria-label="Primary">
          <ul className="site-nav__list">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="site-nav__link"
                  aria-current={activeId === id ? 'true' : undefined}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#reservation" className="btn btn--primary btn--sm site-nav__cta" onClick={closeMenu}>
            Reserve a Table
          </a>

          <p className="site-nav__note">
            {site.neighbourhood}, {site.city}
            <span aria-hidden="true"> · </span>
            {site.serviceSummary}
          </p>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
