# IAAWD SEO Operations Checklist

The repo now ships prerendered public pages, canonical tags, structured data,
robots, sitemap, a custom 404 page, and Netlify-friendly static output.

The following work still has to be done outside the repo:

1. In Netlify, confirm the build command is `npm run build` and the publish
   directory is `dist`.
2. Trigger a fresh production deploy after these changes land.
3. Add `https://iaawd.netlify.app/` to Google Search Console.
4. Add `https://iaawd.netlify.app/` to Bing Webmaster Tools.
5. Submit `https://iaawd.netlify.app/sitemap.xml` in both tools.
6. Request indexing for:
   - `/`
   - `/about`
   - `/mission`
   - `/rights-and-support`
   - `/resources`
   - `/faq`
   - `/governance`
   - `/contact`
7. If a dedicated IAAWD domain becomes available, make it canonical and 301
   redirect the Netlify hostname to that domain.
8. Update the supporting sites when their repos are available:
   - `rupertportfolio.netlify.app`
   - `petition1.netlify.app`

Suggested feeder-site anchor text:

- `International Association for Agricultural Workers with Disabilities`
- `IAAWD disability and agricultural rights site`
- `support for disabled agricultural workers`
- `IAAWD governance and resources`
