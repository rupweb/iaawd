# International Association for Agricultural Workers with Disabilities

## Overview

This repository builds the public IAAWD website at
`https://iaawd.netlify.app/`.

The site is now structured as a prerendered static site so search engines can
read meaningful HTML on every main public route without relying on JavaScript.

## Routes

- `/`
- `/about`
- `/mission`
- `/rights-and-support`
- `/resources`
- `/faq`
- `/governance`
- `/contact`

Non-indexed utility routes:

- `/signup`
- `/contact/thanks`
- `/404`

## Development

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Run the validation check:

```bash
npm run test
```

## SEO Surface

The repo includes:

- prerendered public HTML pages
- route-specific titles and meta descriptions
- canonical tags
- Open Graph and Twitter metadata
- JSON-LD structured data
- `robots.txt`
- `sitemap.xml`
- Netlify headers
- a custom 404 page

Operational follow-up for Search Console, Bing Webmaster Tools, and Netlify is
documented in `SEO-OPERATIONS.md`.

## Netlify

`netlify.toml` is configured to:

- run `npm run build`
- publish `dist`
- use Node 20

## Contact

For questions about the project or the organisation, contact
[rupert@webstersystems.co.uk](mailto:rupert@webstersystems.co.uk).
  
