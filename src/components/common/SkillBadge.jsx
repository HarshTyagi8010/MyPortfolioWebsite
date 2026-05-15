/**
 * SkillBadge — Renders a single skill pill
 *
 * REUSABILITY: Used in Skills section, Hero tags, ProjectCard tags.
 * VARIANT: 'default' subtle pill | 'highlight' colored pill
 */

import styles from './SkillBadge.module.css';

export default function SkillBadge({ label, variant = 'default' }) {
  return (
    <span className={`${styles.badge} ${styles[variant]}`}>
      {label}
    </span>
  );
}
