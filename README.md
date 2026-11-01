# Shreepad Sharnarthi — Portfolio

Professional portfolio for a Python backend developer, built with React, Vite, Tailwind CSS v4, Motion for React and Lucide React.

## Run locally

Install dependencies with npm install, then start the local development server with npm run dev.

Create a production build with npm run build. Preview it with npm run preview.

## Content and assets

- Profile and contact details: src/data/profile.js
- Experience: src/data/experience.js
- Skills: src/data/skills.js
- Projects: src/data/projects.js
- Education and research: src/data/education.js
- Certifications: src/data/certifications.js
- Optimized portrait: public/assets/shreepad-sharnarthi.jpg
- Social preview image: public/assets/social-preview.jpg
- Résumé: public/resume/Shreepad_Sharnarthi_Resume.pdf

Project repository links are left empty in src/data/projects.js because the résumé does not include their URLs. Add verified public repository URLs to each repoUrl field when available.

## Deploy to Vercel

Import the repository into Vercel and use the Vite defaults, or set the build command to npm run build and the output directory to dist. The included vercel.json contains these settings.

The social preview metadata uses a root-relative image path. After the site has a stable public domain, update og:image and twitter:image in index.html to absolute URLs on that domain for reliable social previews.
