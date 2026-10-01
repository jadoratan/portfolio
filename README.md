![Screenshot](https://myimgs.org/storage/images/22572/Screenshot%202026-07-23%20at%204.png)

# Club Member Portfolio Template

A personal portfolio website template for club members, built with Next.js. Fork it, fill in your info, and deploy.

## Getting Started

Install dependencies and run the dev server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

## Customizing Your Site

Almost everything on the site — your name, bio, education, experience, projects, social links, and contact info — is controlled from a single file:

```
app/config.ts
```

Start with the `ME` object at the top: your name, role, email, GitHub/LinkedIn username, and resume path. Everything else in the file (page title, social links, contact links, footer links, project GitHub URLs) is derived from `ME`, so you only enter that info once. Below `ME`, fill in `EDUCATION`, `EXPERIENCE`, and `PROJECTS` with your own entries. Every section has a comment explaining what it controls and where it shows up on the page. You shouldn't need to touch any component files for basic customization.

Note: you don't need to set your site's URL anywhere. It's derived automatically — on Vercel from the deployment's own URL, and `localhost:3000` locally. If you deploy elsewhere or use a custom domain, set `NEXT_PUBLIC_SITE_URL` in your environment to override it.

## Adding Your Resume

`ME.resumePath` in `config.ts` (default `/resume.pdf`) is used by both the Contact and Footer resume links. To make that link work, add your resume PDF to:

```
public/resume.pdf
```

Anything placed in `public/` is served from the site root, so `public/resume.pdf` becomes `yoursite.com/resume.pdf` automatically. If you rename the file, just update `ME.resumePath` — both links pick it up automatically.

## Adding Images

To use a profile photo or project screenshots, drop image files into `public/` (e.g. `public/headshot.jpg`) and reference them by path (`/headshot.jpg`) from the relevant component or config entry.

## Learn More

This project uses [Next.js](https://nextjs.org). See the [Next.js documentation](https://nextjs.org/docs) for details on the framework itself.

## Deploy

The easiest way to deploy is [Vercel](https://vercel.com/new), from the creators of Next.js. See the [deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other options.
