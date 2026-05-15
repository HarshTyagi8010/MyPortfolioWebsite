/**
 * Skills — Categorized technical skill display
 *
 * SECTION OWNERSHIP: Full technical capability overview.
 * PATTERN: Category-grouped cards with SkillBadge atoms.
 * DATA FLOW: skills[] from portfolio.js → map over categories → map over items.
 * SCALABILITY: Adding a new category = one push to skills array in data file.
 */

import { skills } from '../../data/portfolio';
import SectionTitle from '../common/SectionTitle';
import SkillBadge from '../common/SkillBadge';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.section}`} aria-labelledby="skills-heading">
      <div className="container">
        <SectionTitle label="What I Know" title="Technical Skills" />

        <div className={styles.grid}>
          {skills.map(({ category, items }) => (
            <div key={category} className={styles.card}>
              <h3 className={styles.category}>{category}</h3>
              <div className={styles.badges}>
                {items.map((item) => (
                  <SkillBadge key={item} label={item} variant="default" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
