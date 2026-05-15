/**
 * Projects — Portfolio project showcase
 *
 * SECTION OWNERSHIP: The "work samples" section.
 * PATTERN: Responsive grid of ProjectCard atoms.
 * DATA FLOW: projects[] → filter featured first → render ProjectCard[]
 * SCALABILITY: New project = push to projects[] in data file.
 */

import { projects } from '../../data/portfolio';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className={`section ${styles.section}`} aria-labelledby="projects-heading">
      <div className="container">
        <SectionTitle label="What I've Built" title="Projects" />

        {/* Featured grid */}
        <div className={styles.featuredGrid}>
          {featured.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {/* Other projects */}
        {others.length > 0 && (
          <>
            <p className={styles.othersLabel}>Other projects</p>
            <div className={styles.othersGrid}>
              {others.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
