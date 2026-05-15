/**
 * Navbar — Site header with scroll-aware behavior
 *
 * PATTERN: Sticky header with backdrop blur. Transparent at top, frosted on scroll.
 * HOOK: useScrolled custom hook encapsulates scroll logic.
 * SEPARATION OF CONCERNS: Nav data comes from portfolio.js, not hardcoded here.
 */

import { useState, useEffect } from 'react';
import { nav, meta } from '../../data/portfolio';
import Button from '../common/Button';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <div className={`container ${styles.inner}`}>
        {/* Logo / Brand */}
        <a href="#hero" className={styles.logo} aria-label="Home">
          <span className={styles.logoText}>HT</span>
        </a>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Main navigation">
          {nav.map(({ label, href }) => (
            <a key={href} href={href} className={styles.navLink}>
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className={styles.actions}>
          <Button href={meta.resumeUrl} variant="ghost" size="sm" target="_blank" rel="noopener noreferrer">
            Resume
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu} role="navigation" aria-label="Mobile navigation">
          {nav.map(({ label, href }) => (
            <a key={href} href={href} className={styles.mobileLink} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <Button href={meta.resumeUrl} size="sm" target="_blank" rel="noopener noreferrer">
            Resume
          </Button>
        </div>
      )}
    </header>
  );
}
