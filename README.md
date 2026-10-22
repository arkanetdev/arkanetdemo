# Arkanet Technologies

Marketing site for Arkanet Technologies — websites, mobile apps and AI systems.

## Stack

- **Next.js 15** (App Router) with **React 19**
- **Tailwind CSS 3**
- **Framer Motion** and **GSAP** for animation
- **TypeScript**

## Local development

```bash
npm ci
npm run dev
```

The dev server runs at http://localhost:3000.

```bash
npm run build   # production build
npm start       # serve the production build
npm run lint
```

## Project layout

```
src/app/          App Router pages (home, about, work, capabilities, contact, blog, insights)
src/components/   home/, about/, layout/ and modals/ components
src/lib/          content and data modules
public/assets/    images, client logos and video
```

## Deployment

Deployed on Coolify from `main`. The build uses **Railpack**, which runs
`npm ci` then `npm run build` and serves on port **3000**.

Pushes to `main` deploy automatically via a GitHub webhook that calls
Coolify's manual GitHub endpoint. Coolify's `Auto deploy` setting must stay
set to "Deploy on push (webhooks)" for this to work.

> `npm ci` requires `package.json` and `package-lock.json` to stay in sync.
> Update dependencies with `npm install` (not `--legacy-peer-deps`) and commit
> the regenerated lockfile, or the build will fail at the install step.
