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
npm run typecheck
npm run build
npm run preview
```

The build includes TypeScript checking and outputs a static website to `dist/`. Deploy that directory to a static host.

## Source structure

- `src/constants/profile.ts`: resume-sourced profile, projects, experience, and skills.
- `src/components/sections/`: individual portfolio sections and shared style constants.
- `src/components/Header.tsx`: responsive navigation.
- `src/components/ProjectCard.tsx`: project cards and accessible native dialogs.
- `src/components/SectionHeading.tsx`: shared heading pattern.
- `src/assets/`: copied profile photo and downloadable resume; no runtime dependency on the skills folder.
- `src/App.css`: Tailwind import and theme configuration only.

The supplied design guides the colors and layout. Content follows the supplied resume, including actual employers, education, and achievement statistics. Projects include live links where available and native dialogs for details. Email and telephone links use the visitor's configured applications.

## Verification

Tracked Playwright tests live in `tests/`. They build and serve the production site automatically on port 4173; leave that port free before running them.

```sh
npx playwright install
npm test
```

The suite runs in Chromium, Firefox, and WebKit and covers responsive overflow from 320–1920 px, mobile menu Escape/focus, dialog padding/backdrop dismissal, project expansion, resume downloads, anchors, clipboard races and errors, dynamic reveals, reduced motion, and axe accessibility checks. Failure reports and traces are written to ignored `playwright-report/` and `test-results/` directories.

To run against an existing Chrome installation without downloading Chromium, set `PLAYWRIGHT_CHANNEL=chrome` and run `npm test -- --project=chromium` (PowerShell: `$env:PLAYWRIGHT_CHANNEL = 'chrome'`). Browser selection is optional and does not require a machine-specific executable path.

GitHub Actions runs lint, strict TypeScript checks, the production build, and all three browser projects. Test configuration and test source are included in TypeScript checking.

The footer tagline and copyright use `#797983` against `#080a0b` for at least 4.5:1 contrast; this is the only intentional palette adjustment from the original design. Reveal duration (700 ms), stagger delays, and dialog duration (300 ms) remain unchanged.
