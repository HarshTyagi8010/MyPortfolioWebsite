/**
 * About — Professional summary + key stats
 *
 * SECTION OWNERSHIP: Personal narrative and positioning.
 * PATTERN: Two-column layout with stat cards.
 * DATA: Pulls professional summary and stats from portfolio.js
 */

import { meta, about } from '../../data/portfolio';
import SectionTitle from '../common/SectionTitle';
import styles from './About.module.css';

const stats = [
  { value: '1.5+', label: 'Years Experience' },
  { value: '4+',   label: 'Projects Shipped' },
  { value: '10+',  label: 'JSP Screens Migrated' },
  { value: '~40%', label: 'Bug Reduction' },
];

export default function About() {
  return (
    <section id="about" className={`section ${styles.section}`} aria-labelledby="about-heading">
      <div className="container">
        <SectionTitle label="Who I Am" title="About Me" />

        <div className={styles.grid}>
          {/* Text */}
          <div className={styles.left}>
            <p className={styles.summary}>{about.summary}</p>

            <div className={styles.location}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>{meta.location}</span>
            </div>

            <div className={styles.roles}>
              <p className={styles.rolesLabel}>I identify as:</p>
              <div className={styles.rolesList}>
                {about.roles.map((role) => (
                  <span key={role} className={styles.rolePill}>{role}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className={styles.right}>
            <div className={styles.statsGrid}>
              {stats.map(({ value, label }) => (
                <div key={label} className={styles.stat}>
                  <span className={styles.statValue}>{value}</span>
                  <span className={styles.statLabel}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
