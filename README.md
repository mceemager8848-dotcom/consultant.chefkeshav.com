# chefkeshav consultation landing page

A mobile-first Next.js landing page and thank-you page for the free restaurant marketing consultation.

## Run locally

Requirements: Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Build and type-check with:

```bash
npm run typecheck
npm run build
```

If starting from scratch instead, run `npx create-next-app@latest`, choose TypeScript, Tailwind CSS, App Router, and the `@/*` import alias, then copy this project’s `app`, `components`, `lib`, and `public` folders into the new app.

## Brand assets

The supplied logo is stored at `public/chefkeshav-logo.webp`. Keep this filename unchanged if the asset is updated later.

## Configuration

Edit `lib/config.ts` to change brand colors, copy, the Vimeo URL, WhatsApp number, or the urgency flag. Leave `showUrgency` set to `false` until real urgency copy is supplied.

## Deploy to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep the detected framework as **Next.js** and use the repository build command (`npm run build`).
4. Deploy, then add `consultant.chefkeshav.com` under **Project Settings → Domains**.
5. Update the DNS records exactly as Vercel shows, then confirm the production deployment.

## Before launch

- Add the real Vimeo URL in `lib/config.ts`.
- Add the WhatsApp number, including country code and digits only, in `lib/config.ts`.
- Replace the simulated submission in `components/CTAForm.tsx` with a working backend or CRM.
- Replace `public/og-image.png` with the final social sharing image.
- Replace `public/favicon.svg` with the exported chef-hat favicon.
- Update `metadataBase` in `app/layout.tsx` if the production domain changes.
- Do not publish `/thank-you` until the form backend is working.
