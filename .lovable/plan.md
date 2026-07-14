## Goal

Convert the existing 550-line StafRof HTML file into a TanStack Start multi-route site. Same visual vibe (colors, typography, layout rhythm), but clean Tailwind v4 + shadcn components. Contact form sends an email — no DB storage.

## Routes

```
src/routes/
  __root.tsx                              shared Nav + Footer, global head
  index.tsx                               Home (hero, highlights, CTA)
  platforms.tsx                           Platforms layout (Outlet)
  platforms.index.tsx                     Platforms overview
  platforms.revenue-assurance.tsx         sub-page 1
  platforms.{platform-2}.tsx              sub-page 2
  platforms.{platform-3}.tsx              sub-page 3
  solutions.tsx                           Solutions
  about.tsx                               About
  contact.tsx                             Contact form
```

Each route gets its own `head()` with unique `title`, `description`, `og:title`, `og:description`. No hash anchors for primary nav.

## Design system (src/styles.css)

Map the HTML's CSS variables to Tailwind v4 `@theme` tokens:

- `--color-ink: #0A0A0B`, `--color-ink-2: #2A2D35`
- `--color-brand: #1E5BFF` (blue), `--color-brand-2: #4D82FF`
- `--color-accent: #7A2BF5` (purple)
- `--color-surface: #F4F5F7`, `--color-surface-2: #ECEEF2`
- `--color-border: #E4E6EB`, `--color-muted: #5A5F6B`
- `--font-display: 'Space Grotesk'`, `--font-body: 'Inter'`

Fonts loaded via `<link>` in `__root.tsx` head (Tailwind v4 rule — no remote `@import` in CSS).

## Components

Reusable, in `src/components/`:

- `SiteNav.tsx` — sticky pill nav with Platforms dropdown (shadcn `NavigationMenu`), mobile via `Sheet`
- `SiteFooter.tsx`
- `Hero.tsx`, `SectionEyebrow.tsx`, `FeatureCard.tsx`, `LogoCloud.tsx`, `CTA.tsx`
- `ContactForm.tsx` — shadcn `Form` + `Input` + `Textarea` + `Button`, Zod validation, sonner toast

Content (copy, section structure, list items) lifted 1:1 from the uploaded HTML; only the markup/styling layer changes.

## Backend (email-only)

1. Enable Lovable Cloud.
2. Set up Lovable Email domain (you complete the DNS dialog).
3. Scaffold React Email template `contact-inquiry.tsx` — sends to your business inbox with name / email / company / message.
4. Public server route `src/routes/api/public/contact.ts` (POST):
   - Zod-validate input
   - Call internal `/lovable/email/transactional/send`
   - Return `{ ok: true }`
5. `ContactForm` POSTs to `/api/public/contact`, shows success/error toast.

No database table, no admin view. Submissions arrive only as emails.

## SEO

- Per-route unique `title` + `description` + `og:title` + `og:description`
- `og:image` only on leaf routes (skip on `__root.tsx` / layouts)
- Root `head()` keeps charset, viewport, favicon, font `<link>`s
- `public/robots.txt` allow-all

## Technical notes

- Tailwind v4 tokens in `src/styles.css` under `@theme inline`
- Internal nav via `<Link to="..." params={{...}}>` only — never `<a href>`
- `platforms.tsx` returns `<Outlet />`; overview content lives in `platforms.index.tsx`
- Animations: Tailwind transitions + `tw-animate-css` (already installed); no Motion this pass
- Contact route under `/api/public/*` so it bypasses auth on the published site; only triggers an internal email
- All copy/section content sourced from `stafrof-website_contentverified.html` + the PDF brief

## Out of scope

DB storage of submissions, admin dashboard, auth, blog/CMS, multi-language, analytics. Say if you want any of these — I'll fold them in.

## Open question before build

Three Platforms sub-pages — do you have specific names, or should I extract them from the HTML dropdown? Confirm the three names now and I'll wire the routes correctly the first time.
