# Harsh Tyagi Portfolio

A modern, responsive portfolio website for Harsh Tyagi, Software Engineer specializing in Railway Systems and Full Stack Development.

## 🚀 Features

- **Profile Photo Integration**  
  Professional profile photo with animated effects.

- **Hero Section**  
  Typewriter effect for roles, animated background, and quick contact/download buttons.

- **Experience & Projects**  
  Highlights professional experience and featured projects with achievement stats.

- **Skills**  
  Animated progress bars for technical skills.

- **Education & Certifications**  
  Academic background and certifications with icons.

- **Contact Form**  
  Validated contact form with real-time feedback.

- **Download Resume**  
  Downloadable resume via a button (ensure `Harsh-Tyagi.pdf` is present in the root folder).

- **Dark/Light Theme Toggle**  
  Switch between light and dark modes.

- **Responsive Design**  
  Fully responsive for desktop, tablet, and mobile devices.

- **Back to Top Button**  
  Smooth scroll back to the top of the page.

## 🗂️ File Structure

```
/
├── index.html         # Main HTML file
├── style.css          # Main CSS file
├── app.js             # Main JavaScript file
├── Harsh-Tyagi.pdf    # Resume (add your own)
├── 1000020638.jpg     # Profile photo (replace with your own)
```

## 🛠️ Getting Started

1. **Clone or Download**  
   Download or clone this repository to your local machine.

2. **Add Your Resume**  
   Place your resume PDF file as `Harsh-Tyagi.pdf` in the root folder (same directory as `index.html`).

3. **Run Locally**  
   For best results, use a local server (browsers may block downloads from `file://`):

   **Using Node.js ([serve](https://www.npmjs.com/package/serve)):**
   ```sh
   npx serve .
   ```

   **Or with Python:**
   ```sh
   python -m http.server 8000
   ```

   Then open [http://localhost:8000](http://localhost:8000) in your browser.

4. **Customization**
   - **Profile Photo:** Replace `1000020638.jpg` with your own photo.
   - **Resume:** Replace `Harsh-Tyagi.pdf` with your own resume.
   - **Content:** Edit `index.html` to update your experience, projects, skills, education, and contact info.
   - **Styles:** Modify `style.css` for custom styles.

## 📦 Dependencies

- [Font Awesome](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css) for icons
- [Google Fonts: Inter](https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap)

## ⚠️ Notes

- The resume download button will only work if `Harsh-Tyagi.pdf` is present in the root directory and the site is served over HTTP (not opened directly as a file).
- All form validation and UI effects are handled in `app.js`.

## 📝 License

This project is for personal portfolio use.  
Feel free to use as a template for your own portfolio.

---

**Developed by Harsh Tyagi**