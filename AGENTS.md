# IAAWD Agent Guide

## Project

- Repo: `G:\Petition\iaawd`
- Live site: `https://iaawd.netlify.app/`
- Organisation name: International Association for Agricultural Workers with Disabilities (IAAWD)
- Primary goal: improve organic search visibility for IAAWD while keeping claims accurate, sober, and supportable from the governing material in this workspace.

## Authoritative Sources

Use these first when writing or editing site content:

- `public/IAAWD Governing Document.pdf`
- `README.md`
- `src/pages/Intro.jsx`
- `src/pages/MainContent.jsx`
- `src/pages/Governance.jsx`
- `src/pages/Contact.jsx`

Key governing-document summary:

- IAAWD is a non-profit entity dedicated to the welfare of agricultural workers with disabilities.
- Its stated charitable purposes include legal and property-rights advocacy, support for disabled agricultural workers and their family members, public education, and promotion of legislative change.
- Membership is open to individuals and organisations that support the mission.
- The organisation is governed by trustees.

## Sensitive Material

- Do not copy, quote, commit, or restate passwords, usernames, banking details, or similar secrets from the parent workspace.
- If you find credentials in notes or text files outside this repo, treat them as out of scope for SEO work and keep them out of commits, content, logs, and summaries.

## Current Site State

Local structure:

- `/` is the main landing page.
- `/governance` embeds the governing PDF in an iframe.
- `/contact` provides contact details and a form.
- The site is a client-rendered React app using `BrowserRouter`.

Observed SEO state on the live site on 2026-04-10:

- Homepage HTML contains a title and social tags.
- Homepage HTML does not include a standard meta description.
- No `robots.txt` was found at `https://iaawd.netlify.app/robots.txt`.
- No `sitemap.xml` was found at `https://iaawd.netlify.app/sitemap.xml`.
- Initial HTML is mostly an empty React shell with `<div id="root"></div>`, so most meaningful page copy depends on JavaScript rendering.
- The governance page relies on an embedded PDF; that is weak as a primary SEO landing page because crawlers get little explanatory HTML copy.
- External petition links are inconsistent across components and should be verified before being used as primary calls to action.

## SEO Objectives

Prioritise these outcomes:

1. Make IAAWD discoverable for searches around disabled agricultural workers, agricultural disability rights, and related UK advocacy topics.
2. Turn thin pages into indexable pages with clear, human-readable copy.
3. Build trust signals with explicit mission, governance, contact, and supporting evidence pages.
4. Avoid overclaiming or publishing allegations that are not supported by the provided material.

## Content Rules

- Use the full organisation name early in page titles, H1s, and opening paragraphs.
- Prefer plain-English keyword phrases real users might search for, such as:
  - `disabled agricultural workers`
  - `agricultural workers with disabilities`
  - `agricultural disability rights`
  - `legal rights of disabled farm workers`
  - `support for disabled agricultural workers and families`
- Write for search intent first, not slogans.
- Keep legal or factual assertions tied to the governing document or clearly identified source material in the workspace.
- Do not invent charity-registration status, trustee names, case outcomes, or affiliations unless a source in the repo supports them.
- Where a page discusses evidence or disputes, separate:
  - what the organisation says
  - what the governing document states
  - what supporting documents show
- Prefer accessible language and short paragraphs.

## Technical SEO Rules

When doing SEO work, prefer this order:

1. Add crawlable HTML content before adding cosmetic design changes.
2. Ensure each route has a unique `<title>`, meta description, canonical URL, and social preview tags.
3. Add `robots.txt` and `sitemap.xml`.
4. Add structured data where justified, starting with `Organization` or `NGO`-style schema.
5. Improve internal linking between mission, governance, contact, evidence, and FAQ content.
6. Replace weak image alt text like `Taunton Trees` with descriptive, page-relevant alt text where appropriate.
7. Add explanatory HTML summaries for PDFs instead of relying on iframes alone.

Important implementation note:

- Because this repo is client-rendered React, SEO improvements that rely only on runtime rendering may underperform. If a larger refactor is allowed, prefer prerendering, static generation, or another way to ship meaningful HTML in the initial response.

## Page Requirements

For any new indexable page:

- One clear H1.
- Unique title tag, ideally about 50 to 60 characters.
- Meta description, ideally about 140 to 160 characters.
- Opening paragraph that states who IAAWD is and why the page matters.
- At least one internal link to another relevant page.
- At least one outbound link only where it genuinely helps trust or evidence.
- Descriptive alt text for non-decorative images.
- Enough original copy to stand on its own; avoid pages that are only an embed, only a form, or only a PDF.

## Suggested SEO Work Backlog

Highest-value items:

- Add a real meta description to the homepage.
- Add `robots.txt`.
- Add `sitemap.xml`.
- Add canonical tags.
- Add structured data for the organisation.
- Convert the governance page into a normal HTML page with a summary of the governing document above the PDF embed.
- Create supporting content pages around mission, support needs, legal rights, and governance.
- Review whether a custom domain is available; a branded domain is usually better for long-term search trust than a Netlify subdomain.

## Non-Goals

- Do not use manipulative SEO tactics, keyword stuffing, doorway pages, or AI-generated filler.
- Do not publish unsupported accusations to chase traffic.
- Do not treat legal documents as marketing copy; summarise them carefully and accurately.

## Definition Of Done For SEO Changes

An SEO task is not done until:

- the page has meaningful crawlable HTML,
- metadata is route-specific,
- internal links are sensible,
- claims are source-grounded,
- and the change improves either discoverability, clarity, or trust rather than just appearance.
