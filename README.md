# Cao Minh Nguyen — Portfolio

A minimalist software engineering portfolio built with Next.js, React, TypeScript, Tailwind CSS, and [Magic UI's Bento Grid](https://magicui.design/docs/components/bento-grid).

[Portfolio website](https://caominhnguyen.vercel.app/)

## Run locally

```bash
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000). On Windows PowerShell, use `npm.cmd` if script execution is restricted.

## Design and interactions

- White background, black typography, and navy (`#0B1526`) navigation and accents.
- Fixed, rounded navigation with section tracking, GitHub/LinkedIn links, and a keyboard-accessible mobile menu.
- Split introduction using the existing profile photo, GitHub/LinkedIn buttons, and résumé link.
- About and technical skills, expandable experience entries, education, and contact links.
- Four projects per page in a responsive Bento Grid. GitHub and live-site actions remain visible, and a live-site button appears only when a URL is supplied.
- Reduced-motion support, visible keyboard focus, and a skip-to-content link.

The Bento Grid was installed using `npx shadcn@latest add @magicui/bento-grid` and adapted in `src/components/ui/bento-grid.tsx` for project content and multiple persistent actions.

## Update content

- `src/app/data/profile.ts`: social profiles, email, and résumé path.
- `src/app/data/projects.ts`: project titles, short descriptions, technologies, categories, screenshots, and links. Add an entry to create additional pages automatically. Screenshots belong in `public/projects/`; use root-relative paths such as `/projects/example.png`. Omit `liveUrl` for GitHub-only projects.
- `src/app/data/experiences.ts` and `education.ts`: experience and education entries.
- `src/app/components/about.tsx`: biography and technical skills.
- `public/profile.jpg` and `public/CM_Nguyen_CV.pdf`: profile photo and résumé.
- `src/app/globals.css`: palette, layout, responsive styles, and motion preferences.

## Verify

```bash
npm run build
npm run test:e2e
```

The browser checks run against the production build on port 3100 at desktop (1440px), mobile (390px), and narrow-mobile (320px) widths. On Windows they use installed Microsoft Edge; elsewhere install Chromium with `npx playwright install chromium`. Set `PLAYWRIGHT_CHANNEL` to override the browser channel.

Tests cover project pagination, conditional external links, section navigation, keyboard interactions, responsive overflow, and image loading. Screenshots and failure traces are saved under the ignored `test-results/` directory.

## Contact

- Email: `minhnc2005@gmail.com`
- [GitHub](https://github.com/caominhnguyen05)
- [LinkedIn](https://www.linkedin.com/in/caominh-nguyen/)
