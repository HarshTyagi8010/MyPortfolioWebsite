/**
 * main.jsx — Application entry point
 *
 * Vite builds from this file. React is mounted here.
 * StrictMode intentionally enabled for catching subtle React issues in development.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
