# AirportsCIP marketing site

Static HTML site for **airportscip.com** (apex). Deployed on Vercel; pushing to `main` auto-deploys. `vercel.json` enables `cleanUrls` (`/demo` → `demo.html`) and a `/pricing` rewrite.

- `index.html` — homepage
- `pricing.html` — pricing page with NPIAS-based dynamic pricing (see below)
- `demo.html` — demo scheduling page (Cal.com embed)
- `footer.js` — shared footer injected on every page (edit the footer here, not per-page)

## NPIAS airport data (`data/npias-airports.json`)

Generated from the **FAA NPIAS 2025–2029 Report, Appendix A** (`ARP-NPIAS-2025-2029-AppendixA.xlsx`, downloaded 2026-06-10 from <https://www.faa.gov/airports/planning_capacity/npias>). One record per airport: `locid`, `name`, `city`, `state`, `role`.

Roles are derived from Appendix A's Service Level + Hub columns: P/L → Large Hub, P/M → Medium Hub, P/S → Small Hub, P/N → Nonhub Primary, CS → Nonprimary Commercial Service, R → Reliever, GA → General Aviation.

⚠️ **The NPIAS refreshes biennially** — regenerate this file when the 2027–2031 edition is published. The pricing bucket mapping and all prices live in one `PRICING` config object in the inline script at the bottom of `pricing.html`.
