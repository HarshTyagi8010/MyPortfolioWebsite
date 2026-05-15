/**
 * ExperienceCard — Renders a single work experience entry
 *
 * COMPONENT OWNERSHIP: Renders ONE job. Agnostic to data source.
 * PATTERN: Timeline card — vertical rhythm with connector line.
 */

import styles from './ExperienceCard.module.css';

export default function ExperienceCard({ role, company, location, period, bullets, current }) {
  return (
    <article className={styles.card}>
      <div className={styles.connector}>
        <div className={`${styles.dot} ${current ? styles.dotActive : ''}`} />
        <div className={styles.line} />
      </div>

      <div className={styles.content}>
        <header className={styles.header}>
          <div>
            <h3 className={styles.role}>{role}</h3>
            <p className={styles.company}>
              {company}
              <span className={styles.location}> · {location}</span>
            </p>
          </div>
          <div className={styles.metaRight}>
            <span className={styles.period}>{period}</span>
            {current && <span className={styles.currentBadge}>Current</span>}
          </div>
        </header>

        <ul className={styles.bullets}>
          {bullets.map((bullet, i) => (
            <li key={i} className={styles.bullet}>
              <span className={styles.bulletDot} aria-hidden="true" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
