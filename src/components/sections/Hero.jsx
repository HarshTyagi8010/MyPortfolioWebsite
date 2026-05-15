/**
 * Hero — Above-the-fold landing section
 *
 * SECTION OWNERSHIP: First impression. High visual impact.
 * PATTERN: Animated typewriter for roles using CSS-only approach.
 * DATA: Pulls from portfolio.js — name, tagline, roles, links.
 * PERFORMANCE: No heavy animation library. CSS keyframes + JS interval only.
 */

import { useState, useEffect } from 'react';
import { meta, about } from '../../data/portfolio';
import Button from '../common/Button';
import SocialLinks from '../common/SocialLinks';
import styles from './Hero.module.css';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect for roles
  useEffect(() => {
    const currentRole = about.roles[roleIndex];
    let timeout;

    if (!deleting && displayed.length < currentRole.length) {
      timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === currentRole.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % about.roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="hero" className={styles.section} aria-label="Introduction">
      {/* Ambient background elements */}
      <div className={styles.ambient} aria-hidden="true">
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.grid} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          {/* Greeting */}
          <p className={styles.greeting}>Hi there, I'm</p>

          {/* Name */}
          <h1 className={styles.name}>{meta.name}</h1>

          {/* Dynamic role typewriter */}
          <p className={styles.roleWrapper} aria-live="polite" aria-atomic="true">
            <span className={styles.role}>{displayed}</span>
            <span className={styles.cursor} aria-hidden="true">|</span>
          </p>

          {/* Tagline */}
          <p className={styles.tagline}>{meta.tagline}</p>

          {/* CTA row */}
          <div className={styles.cta}>
            <Button href="#projects" size="md">
              View Projects →
            </Button>
            <Button href="#contact" variant="ghost" size="md">
              Get In Touch
            </Button>
          </div>

          {/* Social links */}
          <div className={styles.social}>
            <SocialLinks />
            <span className={styles.divider} aria-hidden="true" />
            <a href={`mailto:${meta.email}`} className={styles.emailLink}>
              {meta.email}
            </a>
          </div>
        </div>

        {/* Avatar placeholder / code snippet card */}
        <aside className={styles.aside} aria-hidden="true">
          <div className={styles.codeCard}>
            <div className={styles.codeHeader}>
              <span className={styles.dot} style={{ background: '#ff5f57' }} />
              <span className={styles.dot} style={{ background: '#ffbd2e' }} />
              <span className={styles.dot} style={{ background: '#28ca42' }} />
              <span className={styles.fileName}>developer.js</span>
            </div>
            <pre className={styles.code}>{`const developer = {
  name: "${meta.name}",
  stack: [
    "React.js",
    "Angular",
    "REST APIs",
  ],
  experience: "1.5+ years",
  currentlyAt: "BPAAS Solutions",
  focus: "IRCTC Platform",
  available: true,
};`}</pre>
          </div>
        </aside>
      </div>
    </section>
  );
}
