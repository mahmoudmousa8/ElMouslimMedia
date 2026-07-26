# El Mouslim Digital Marketing

Production-ready website for **El Mouslim Digital Marketing**.

- Production domain: `https://elmouslim.net`
- Framework: Next.js-compatible Vinext application
- Runtime target: Cloudflare Workers through ChatGPT Sites
- Public language: English
- Node.js: `22.13.0` or newer

## Install

```bash
npm install
```

The hosted lifecycle uses the locked installation command:

```bash
npm run install:ci
```

## Run locally

```bash
npm run dev
```

The terminal prints the local address after the development server starts.

Windows users can run `START-WINDOWS.bat` after installing Node.js.

## Production build

```bash
npm run build
```

The build script also validates the deployable Sites artifact.

## Central content files

All frequently edited public content is centralized under `data/`.

| Content | File |
| --- | --- |
| Company details and navigation | `data/site-config.ts` |
| Services and service groups | `data/services.ts` |
| Work entries and portfolio categories | `data/projects.ts` |
| Blog articles and categories | `data/blog-posts.ts` |
| Digital subscriptions, payments, and FAQs | `data/subscriptions.ts` |
| Career departments and vacancies | `data/jobs.ts` |

## Update company details

Edit `data/site-config.ts`. Header, footer, contact details, phone, WhatsApp,
Facebook, email, location, working hours, and structured data use this central
configuration.

## Add or update services

1. Add a service object in `data/services.ts`.
2. Add its slug to the correct `serviceCategories` entry.
3. Set related service slugs if relevant.

The service listing, contact dropdown, sitemap, and dynamic service-detail page
use this data automatically.

## Add projects

Edit `data/projects.ts`.

- Keep `sample: true` for neutral demonstration content.
- Use `sample: false` only after the business owner approves a real case study.
- Set `published: false` to keep an entry out of the public website.
- New category buttons are generated from published project data.
- Image and result fields are optional.

If no project image is supplied, the website uses its branded abstract cover.
It never displays an empty image area or a missing-image message.

## Add blog posts

Add a post in `data/blog-posts.ts`.

The blog listing, categories, individual article route, article metadata,
structured data, and sitemap entry are generated from this file. Blog cards are
text-only and do not require thumbnail images.

## Update subscriptions

Edit `data/subscriptions.ts`.

- `status: "available"` enables the WhatsApp order button.
- `status: "coming-soon"` displays a disabled Coming Soon label.
- Discount percentages are calculated from `originalPrice` and `salePrice`.
- Do not add private payment credentials, wallet numbers, passwords, or keys.

## Add vacancies

Add an item to `vacancies` in `data/jobs.ts` and set `active: true` only when the
position is approved for publication.

## Replace the visual brand

The current header and footer intentionally use the text identity from the
approved first version:

`ElMouslim DIGITAL MARKETING`

Global colors and layout styles are in `app/globals.css`. The favicon is
`public/favicon.svg`. Local visual assets are in `public/images/`.

## Forms

- Contact forms open WhatsApp with the supplied fields prepared in a message.
- The career form opens the visitor's email application with the general
  application details prepared.
- No form submission is stored in the website database.

## Routes

- `/` Home
- `/about`
- `/services`
- `/services/[slug]`
- `/our-work`
- `/digital-subscriptions`
- `/blog`
- `/blog/[slug]`
- `/careers`
- `/contact`
- `/privacy-policy`
- `/terms-and-conditions`

Compatibility routes:

- `/portfolio` redirects to `/our-work`
- `/blogs` redirects to `/blog`
- old media-production routes redirect to `/services`

## Environment variables

No environment variable is required for the current public experience.
`.env.example` is included for future documented integrations. Never commit real
API keys, SMTP passwords, payment credentials, server passwords, or private SSH
keys.

## GitHub

Suggested repository name:

`elmouslim-digital-website`

Create an empty repository, then run:

```bash
git remote add github https://github.com/YOUR-ACCOUNT/elmouslim-digital-website.git
git push -u github main
```

If a remote named `github` already exists, update it instead:

```bash
git remote set-url github https://github.com/YOUR-ACCOUNT/elmouslim-digital-website.git
git push -u github main
```

Do not commit `node_modules`, build output, cache folders, `.env` files, keys, or
credentials. `.gitignore` already covers these items.

## Deploy updates

The existing ChatGPT Sites deployment configuration is stored in
`.openai/hosting.json` and must be preserved. Use the same Sites project when
publishing updates.

For another supported host, preserve the current build script and confirm that
the host supports the generated Worker artifact before changing deployment
architecture.
