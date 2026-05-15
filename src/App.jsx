/**
 * App.jsx — Root component / layout shell
 *
 * ARCHITECTURE DECISION: App is a thin orchestrator.
 * It imports section components and renders them in page order.
 * NO business logic here — just composition.
 *
 * SEPARATION OF CONCERNS:
 * - App = page layout order
 * - Each section = owns its own data + rendering logic
 * - portfolio.js = owns all content data
 *
 * SCALABILITY: Adding/removing/reordering sections = edit this file only.
 */

import './styles/global.css';

import Navbar     from './components/sections/Navbar';
import Hero       from './components/sections/Hero';
import About      from './components/sections/About';
import Skills     from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects   from './components/sections/Projects';
import Contact    from './components/sections/Contact';
import Footer     from './components/sections/Footer';

export default function App() {
  return (
    <>
      {/* Skip-to-content link for keyboard/screen reader accessibility */}
      <a
        href="#hero"
        style={{
          position: 'absolute',
          top: '-9999px',
          left: '-9999px',
          background: 'var(--color-primary)',
          color: '#fff',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          zIndex: 9999,
          fontSize: '0.875rem',
        }}
        onFocus={(e) => { e.target.style.top = '1rem'; e.target.style.left = '1rem'; }}
        onBlur={(e)  => { e.target.style.top = '-9999px'; e.target.style.left = '-9999px'; }}
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
