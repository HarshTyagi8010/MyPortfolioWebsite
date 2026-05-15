import { meta } from '../../data/portfolio';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>
          © {year} {meta.name}. Designed & built with React.js + Vite.
        </p>
        <p className={styles.location}>{meta.location}</p>
      </div>
    </footer>
  );
}
