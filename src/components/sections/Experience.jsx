/**
 * Experience — Timeline of professional history
 *
 * SECTION OWNERSHIP: Showcases career progression.
 * PATTERN: Vertical timeline with ExperienceCard atoms.
 * DATA FLOW: experience[] → ExperienceCard[] (one per job).
 */

import { experience } from '../../data/portfolio';
import SectionTitle from '../common/SectionTitle';
import ExperienceCard from './ExperienceCard';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className={`section ${styles.section}`} aria-labelledby="experience-heading">
      <div className="container">
        <SectionTitle label="Where I've Worked" title="Experience" />

        <div className={styles.timeline}>
          {experience.map((job) => (
            <ExperienceCard key={job.id} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
}
