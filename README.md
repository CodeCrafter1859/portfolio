# Ashutosh Sinha — Portfolio

Responsive personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and Lucide React.

## Run locally

```sh
npm ci
npm run dev
```

On Windows PowerShell with restricted script execution, use `npm.cmd` instead of `npm`.

## Verify and build

```sh
npm run lint
npm run build
npm run preview
```

The build includes TypeScript checking and outputs a static website to `dist/`. Deploy that directory to a static host.

## Source structure

- `src/constants/profile.ts`: resume-sourced profile, projects, experience, and skills.
- `src/components/PortfolioSections.tsx`: individual portfolio section components.
- `src/components/Header.tsx`: responsive navigation.
- `src/components/ProjectCard.tsx`: project cards and accessible native dialogs.
- `src/components/SectionHeading.tsx`: shared heading pattern.
- `src/assets/`: copied profile photo and downloadable resume; no runtime dependency on the skills folder.
- `src/App.css`: Tailwind import and theme configuration only.

The supplied design guides the colors and layout. Content follows the supplied resume, including actual employers, education, and achievement statistics. Project details replace demo/repository buttons because project-specific URLs are not provided. Email and telephone links use the visitor's configured applications.

## Verification

Build and lint passed. Chrome browser checks covered 320, 375, 425, 640, 768, 900, 1024, 1440, and 1920 pixel widths, horizontal overflow, mobile navigation, project expansion, all project dialogs, Escape dismissal, PDF download, section anchors, and the email link. Desktop and mobile screenshots were visually reviewed.
