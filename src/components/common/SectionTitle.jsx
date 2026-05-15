/**
 * SectionTitle — Reusable section heading component
 *
 * COMPONENT OWNERSHIP: Purely presentational. Accepts label + title, renders markup.
 * REUSABILITY: Used by every section. One change here updates all headings.
 * SEPARATION OF CONCERNS: Does not know which section it belongs to.
 */

import styles from './SectionTitle.module.css';

export default function SectionTitle({ label, title, align = 'left' }) {
  return (
    <div className={styles.wrapper} data-align={align}>
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.line} />
    </div>
  );
}
