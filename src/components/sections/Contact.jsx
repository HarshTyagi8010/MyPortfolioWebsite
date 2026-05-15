/**
 * Contact — Call to action / contact section
 *
 * SECTION OWNERSHIP: Conversion endpoint of the portfolio.
 * PATTERN: Centered CTA card with contact links.
 * DATA FLOW: meta (email, phone, linkedin, github) from portfolio.js
 */

import { meta } from '../../data/portfolio';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import SocialLinks from '../common/SocialLinks';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.section}`} aria-labelledby="contact-heading">
      <div className="container">
        <div className={styles.card}>
          <SectionTitle
            label="Let's Work Together"
            title="Get In Touch"
            align="center"
          />

          <p className={styles.blurb}>
            I'm currently open to new opportunities. Whether you have a role in mind,
            a project to discuss, or just want to connect — my inbox is always open.
          </p>

          <div className={styles.cta}>
            <Button href={`mailto:${meta.email}`} size="md">
              Send an Email →
            </Button>
          </div>

          <div className={styles.contactMeta}>
            <a href={`tel:${meta.phone}`} className={styles.metaItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.6A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.29 6.29l1.51-1.51a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              {meta.phone}
            </a>

            <a href={`mailto:${meta.email}`} className={styles.metaItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              {meta.email}
            </a>
          </div>

          <div className={styles.socialRow}>
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
