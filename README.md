# AirportsCIP marketing site

Static HTML site for **airportscip.com** (apex). Deployed on Vercel; pushing to `main` auto-deploys. `vercel.json` enables `cleanUrls` (`/demo` → `demo.html`) and a `/pricing` rewrite.

- `index.html` — homepage
- `pricing.html` — pricing page with NPIAS-based dynamic pricing (see below)
- `demo.html` — demo scheduling page (Zoho Bookings embed)
- `footer.js` — shared footer injected on every page (edit the footer here, not per-page)

## NPIAS airport data (`data/npias-airports.json`)

Generated from the **FAA NPIAS 2025–2029 Report, Appendix A** (`ARP-NPIAS-2025-2029-AppendixA.xlsx`, downloaded 2026-06-10 from <https://www.faa.gov/airports/planning_capacity/npias>). One record per airport: `locid`, `name`, `city`, `state`, `role`.

Each record carries `role` (display string from Appendix A's Service Level + Hub + asset Role columns, e.g. "General Aviation – Local", "Nonhub Primary") and `cat`, the pricing category:

1. **Cat 1** — nonprimary airports with asset role Unclassified, Basic, or Local
2. **Cat 2** — nonprimary National/Regional + Nonhub Primary + Small Hub
3. **Cat 3** — Medium Hub + Large Hub (custom pricing)

⚠️ **The NPIAS refreshes biennially** — regenerate this file when the 2027–2031 edition is published. The category mapping is computed at generation time; all prices live in one `PRICING` config object in the inline script at the bottom of `pricing.html`.
