# SIITEC Faculty Website

A bilingual (English / Thai) website for the School of Integrated Innovative Technology (SIITEC) at KMITL, presenting the faculty's programmes, departments, research centres, people and facilities.

**Live site:** https://faculty-website-sigma.vercel.app

## Overview

The site replaces scattered faculty information with a single, mobile-friendly place where prospective students, current students and partners can find programmes, staff, research groups and contact details in their preferred language.

## Features

- **English / Thai language switch** with the choice remembered in the browser (`localStorage`)
- **20+ pages**, including:
  - Programmes and programme details, B.Sc. curriculum
  - Departments of Nanoscience & Nanotechnology and Manufacturing System Technology, plus the CiRA, ATTAC and KAISEM pages
  - Executives, organisation structure, academic staff and lecturer profiles
  - International students, instrument booking, contact
- **Animated, responsive UI:** scroll-reveal sections, parallax, animated counters, page loader and route transitions (Framer Motion, `react-intersection-observer`)
- **Video gallery** with YouTube embeds and local videos
- **Code-split routes** with `React.lazy` and `Suspense` for faster first load
- Custom 404 page

## Tech stack

| Area | Technologies |
| --- | --- |
| Framework | React 18, Create React App |
| Routing | React Router 6 |
| Styling | styled-components, CSS |
| Animation | Framer Motion, react-intersection-observer |
| Icons | Font Awesome, Lucide, React Icons |
| Media | react-youtube |
| Design | Figma |
| Hosting | Vercel |

## Project structure

```
siitec/
├── public/
└── src/
    ├── App.js
    ├── routes/AppRoutes.js     # All routes, lazy-loaded
    ├── pages/                  # One file per page
    ├── components/             # Header, footer, layout, animated sections
    ├── i18n/
    │   ├── LanguageContext.jsx # Language state + persistence
    │   ├── en.js, th.js        # Shared UI strings
    │   └── content/            # Page content in both languages
    ├── config/site.js          # Shared external links
    ├── styles/
    └── assets/                 # Images, albums, videos
```

Page text lives in `src/i18n/content/`, so content can be updated without touching layout code.

## Getting started

Requires Node.js 18+.

```bash
git clone https://github.com/NoeNoe25/Faculty_website.git
cd Faculty_website/siitec
npm install
npm start          # http://localhost:3000
npm run build      # production build in build/
```

## Screenshots

_To add:_ the home page (desktop and mobile), a department page, and the language switch.

## Known issues

- The Instrument Booking page links to four PDFs under `/forms/` that are not in the repository.
- The `src/assets` folder holds about 225 MB of photos and videos, which makes cloning slow. Compressing the videos or hosting them externally (for example on YouTube) would help.

## Future improvements

- Compress and lazy-load large images and videos
- Add the missing booking forms
- Move content to a headless CMS so faculty staff can edit it

## Author

Designed and developed by **Hsu Myat Noe**: UI/UX design in Figma, frontend architecture, all pages and components, the English/Thai language system, animations, and deployment on Vercel.

[GitHub](https://github.com/NoeNoe25) · [LinkedIn](https://www.linkedin.com/in/hsu-myat-noe569aa729a/)

Content, logos and photos belong to KMITL / SIITEC.
