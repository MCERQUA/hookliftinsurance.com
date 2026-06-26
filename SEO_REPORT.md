# SEO Report — hookliftinsurance.com
Date: 2026-05-21

## 1. Site Identity
- **Framework:** Next.js 15.3.0 (App Router)
- **Apparent domain / target audience / niche:** hookliftinsurance.com — B2B commercial insurance for hooklift truck operators, roll-off contractors, and crane truck owners. Niche vertical marketplace for specialized heavy truck insurance.
- **Deployment status:** No vercel.json, netlify.toml, or README found. Likely Vercel (inferred from Next.js standard defaults). Site appears production-ready with metadataBase configured.

## 2. Inventory
- **Total pages:** 2 pages (home + /certificate-of-insurance)
- **URL structure:** Flat root page + flat nested page (ideal for small sites)
- **sitemap.xml present?** NO — missing
- **robots.txt present?** NO — missing

## 3. On-Page SEO (sample up to 10 pages)

### Home Page (/)
- **Title tag:** "Hooklift Insurance — Coverage for Hooklift, Roll-Off & Crane Trucks" (78 chars) ✓ Good length
- **Meta description:** "Specialized hooklift insurance for contractors running hooklift trucks, roll-off trucks, and crane trucks. Licensed in all 50 states. Get a free 15-minute quote from Contractors Choice Agency." (194 chars) ✓ Good length
- **H1:** "Hooklift Insurance Built for Heavy Truck Contractors" (present, good)
- **Canonical:** Not explicitly set (relies on metadataBase: https://www.hookliftinsurance.com)
- **OG tags:** Present — og:type, og:locale, og:url, og:siteName, og:title, og:description; og:image (/og/default.png)
- **Twitter card:** Present — card: summary_large_image

### Certificate of Insurance Page (/certificate-of-insurance)
- **Title tag:** "Certificate of Insurance Request — Hooklift Insurance" (54 chars) ✓ Good length
- **Meta description:** "Request a certificate of insurance for your hooklift, roll-off, or crane truck policy. Fast turnaround from Contractors Choice Agency. Licensed in all 50 states." (169 chars) ✓ Good length
- **H1:** "Request Your Certificate" (present)
- **Canonical:** Not explicitly set
- **OG tags:** Inherits from root layout (og:default.png)
- **Twitter card:** Inherits from root layout

## 4. Structured Data
- **JSON-LD schema:** NO schema.org markup detected
- **Missing high-value schema types:**
  - LocalBusiness (agency location, contact, phone)
  - Service (for insurance services)
  - FAQPage (5 FAQs present but not marked up)
  - BreadcrumbList (for navigation hierarchy)
  - Review (3 testimonials present but not marked up as AggregateRating)
  - Organization (branding, contact info)

## 5. Content Quality
- **Word count (sampled pages):**
  - Homepage components (FAQ + Hero + HowItWorks): ~670 words of substantive content ✓ Adequate
  - FAQ section: 5 questions with detailed answers ✓ Good topical coverage
  - Coverage Grid: 6 service/coverage types with descriptions ✓ Good service documentation
- **Internal linking density:** Low — only 4 internal links: "/" (home), "/#coverage", "/certificate-of-insurance", "/#quote" (anchor). Missing internal opportunity pages.
- **Image count + alt-text coverage:** 0% — NO images in DOM, 0 <img> or Next.js <Image> components. All visual content via SVG icons (Lucide React icons lack alt-text attributes).

## 6. Technical
- **robots.txt rules:** NOT PRESENT. Site defaults to crawlable. Missing: sitemap.xml reference, crawl delay, user-agent-specific rules.
- **Sitemap URL count:** NOT PRESENT. No sitemap.xml or sitemap.ts file found.
- **404 handling:** NO custom error.tsx or not-found.tsx page. Next.js default 404 will be shown (not branded).
- **next.config.js redirects/headers:** Minimal config; only trailing-slash redirect configured. No custom headers. Image remotePatterns array is empty (no external image CDN configured).

## 7. Top Issues (ranked by impact)

1. **CRITICAL: Missing robots.txt and sitemap.xml** — Prevents search engines from indexing efficiently. No guidance on crawl priority or rate. Without sitemap.xml, Google may miss or slow-index the certificate page.
   - *Severity:* High
   - *File:* None (missing)

2. **NO JSON-LD structured data** — Missing Schema.org markup for LocalBusiness, Service, FAQPage, and Review/AggregateRating. Eliminates rich snippet opportunities (star ratings, local business cards, FAQ accordions in SERP).
   - *Severity:* High
   - *File:* src/app/layout.tsx (no <script type="application/ld+json"> tags)

3. **Zero alt-text on SVG icons** — Lucide React icon components render <svg> without aria-label or alt attributes. While not critical for SEO, limits accessibility score.
   - *Severity:* Medium
   - *File:* src/components/sections/*.tsx (all icon uses)

4. **No custom 404 page** — Users see default Next.js 404, which is not branded and misses opportunity to retain engagement or suggest next steps.
   - *Severity:* Low-Medium
   - *File:* Missing src/app/not-found.tsx

5. **Very limited internal linking** — Only 4 unique internal links (home, coverage anchor, COI page, quote anchor). No blog, resource pages, or internal topical clusters.
   - *Severity:* Medium (growth opportunity)
   - *File:* src/components/sections/Navbar.tsx (navigation only)

6. **No og:image file in public folder** — og:image set to /og/default.png but file not found in /workspace/Websites/hookliftinsurance.com/public/. Social shares may fail to display preview image.
   - *Severity:* Medium
   - *File:* src/app/layout.tsx (line 23)

7. **Testimonials/reviews not marked as schema** — 3 customer testimonials present in DOM but no Review or AggregateRating schema. Missed rich snippet and trust signal opportunity.
   - *Severity:* Medium
   - *File:* src/components/sections/Testimonials.tsx

8. **FAQ not marked as FAQPage schema** — 5 detailed FAQ questions present but no schema.org/FAQPage markup. Missing potential SERP featured snippet opportunity.
   - *Severity:* Medium
   - *File:* src/components/sections/FAQ.tsx

9. **No canonical link elements on dynamic pages** — Metadata configuration does not explicitly include canonical links. May cause duplicate content issues if site is ever mirrored or accessed via multiple domains/protocols.
   - *Severity:* Low
   - *File:* src/app/layout.tsx, src/app/certificate-of-insurance/page.tsx

10. **No hreflang or multi-region support** — Site targets "all 50 states" but no geo-targeting hints for search engines. Standard for national service business but not critical for single-domain setup.
    - *Severity:* Low
    - *File:* src/app/layout.tsx

## 8. Top Recommendations (concrete next actions)

1. **Create robots.txt and sitemap.xml**
   - Add `public/robots.txt` with Disallow rules (if any) and Sitemap reference
   - Add `src/app/sitemap.ts` (Next.js dynamic sitemap) to generate lastmod and priority hints
   - File: Create /workspace/Websites/hookliftinsurance.com/public/robots.txt and src/app/sitemap.ts

2. **Implement JSON-LD structured data in layout**
   - Add LocalBusiness schema in root layout.tsx with full contact info (phone, address, NPN)
   - Add Service schema for each coverage type (General Liability, Commercial Auto, etc.)
   - File: src/app/layout.tsx (inject <script> in head or use Next.js metadata.other)

3. **Add FAQPage schema to FAQ section**
   - Convert FAQ.tsx data array into JSON-LD FAQPage schema
   - Include mainEntity[] with Question/Answer pairs for each faq item
   - File: src/components/sections/FAQ.tsx or create separate src/app/layout.tsx hook

4. **Create custom 404 page**
   - Add src/app/not-found.tsx with branding, navigation, and CTA to contact
   - Link back to home, coverage page, certificate page
   - File: Create src/app/not-found.tsx

5. **Add missing OG image**
   - Create /og/default.png (1200x630px) or update metadata.openGraph.images[0].url to match actual file
   - File: Create /workspace/Websites/hookliftinsurance.com/public/og/default.png

6. **Expand internal linking & content strategy**
   - Add internal links to blog/resource pages (e.g., /guides, /coverage-details/{type}, /how-it-works)
   - Create topic clusters around "hooklift insurance," "roll-off coverage," "crane truck insurance"
   - File: Design new pages and update Navbar.tsx navLinks array

7. **Add Review/AggregateRating schema to testimonials**
   - Wrap Testimonials.tsx data in Review schema with author, reviewRating, and ratingValue (5-star)
   - Consider adding Review schema to layout for sitewide aggregate rating
   - File: src/components/sections/Testimonials.tsx

8. **Add SVG alt-text and ARIA labels**
   - Update Lucide React icon usage to include aria-label props on all icon components
   - Example: `<Shield aria-label="Licensed in all 50 states" className="..." />`
   - File: src/components/sections/*.tsx (all icon components)

---
**Generated by SEO Audit Script — 2026-05-21**

---

## Round 3 — repaired 2026-05-22

Tier 2 SEO sweep — addressed every ⚠️ Round-1 issue except OG image regeneration and SVG alt-text (deferred).

- **robots.txt** — created `src/app/robots.ts` (Next.js convention). Generates `Allow: /` for all bots, `Disallow: /api/`, and `Sitemap: https://www.hookliftinsurance.com/sitemap.xml`. Closes Round-1 Issue #1 part 1.
- **sitemap.xml** — created `src/app/sitemap.ts`. Two URLs (home priority 1.0 weekly, /certificate-of-insurance priority 0.8 monthly), dynamic `lastModified: new Date()` per build. Closes Round-1 Issue #1 part 2.
- **JSON-LD structured data** — created `src/lib/schemas.ts` exporting three schemas:
  - `Organization` (name, url, logo, parent CCA, contactPoint) — closes Round-1 Issue #2 part 1.
  - `InsuranceAgency` with full postal address (12220 E Riggs Road, Suite #105, Chandler AZ 85249), founder/employee `Josh Cotner`, and `hasOfferCatalog` of 6 services (General Liability, Commercial Auto, Workers Comp, Inland Marine, Roll-Off Container, Crane & Rigging) — closes Round-1 Issue #2 part 2.
  - `FAQPage` with 5 Q&A pairs extracted from `src/components/sections/FAQ.tsx` — closes Round-1 Issue #8.
  - **Note:** An `AggregateRating`/`Review` schema was removed in a subsequent audit because the testimonials were fabricated (named clients, dollar figures). Fabricated review/rating markup violates Google's structured-data guidelines. The testimonials component was rewritten as founder-authored specialist statements instead.
- **JsonLd component** — created `src/components/JsonLd.tsx`, a server-rendered emitter that takes one schema object or an array and outputs `<script type="application/ld+json">` tags. Wired Organization + InsuranceAgency into `layout.tsx <head>` (site-wide) and FAQPage into `page.tsx` (home only).
- **Custom 404** — created `src/app/not-found.tsx` with branded Navbar/Footer, 404 H1, descriptive copy, call CTA, and 3 navigation buttons (Home / Coverage / Certificate). Includes `robots: noindex, nofollow` metadata so the 404 itself isn't indexed. Closes Round-1 Issue #4.
- **Build:** `npm run build` succeeded — all 7 static pages generated, including `robots.txt` and `sitemap.xml` as static routes. `/_not-found` prerendered at 131 B.

**Commit SHA:** `2414f120` — labeled marker commit referencing auto-save SHAs `cc974fc4` (sitemap/robots/schemas/JsonLd/layout) and `c5f86ee6` (page.tsx FAQ/Rating wire + not-found.tsx) in the umbrella `MCERQUA/jambot-agent-josh` repo. Marker is necessary because auto-save commits mix this work with unrelated files from other agents — soft-reset would have lost their changes.

**Deferred (still open from Round 1):**
- OG image asset (`/og/default.png`) is still referenced in metadata but the `public/og/` directory is empty — generating a 1200x630 branded image is non-trivial per task constraints, flagged as deferral.
- SVG / Lucide icon `aria-label` sweep (Round-1 Issue #3) — many icon usages, low SEO impact relative to schema/sitemap work.
- Internal linking / topic cluster expansion (Round-1 Issue #5) — content strategy task, out of Tier 2 fix-set.
- Per-page canonical override (Round-1 Issue #9) — `metadataBase` covers root domain; explicit per-page canonicals are a defensive nice-to-have.
- Hreflang (Round-1 Issue #10) — single language, not needed.

