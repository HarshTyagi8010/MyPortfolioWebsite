/**
 * Button — Reusable CTA component
 *
 * PROPS: variant ('primary' | 'ghost'), size ('sm' | 'md'), href, onClick, children
 * PATTERN: Polymorphic — renders <a> when href provided, <button> otherwise.
 * REUSABILITY: All CTAs in the portfolio use this single component.
 */

import styles from './Button.module.css';

export default function Button({ children, href, variant = 'primary', size = 'md', onClick, target, rel }) {
  const className = `${styles.btn} ${styles[variant]} ${styles[size]}`;

  if (href) {
    return (
      <a href={href} className={className} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
