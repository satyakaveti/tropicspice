# TropicSpice Global — Static Site

A static, framework-light site built with Astro + Tailwind CSS. Originally
adapted from **authenticspiceexport.com**'s page structure and layout, then
**rebranded to TropicSpice Global** using the colors from the new logo. No
PHP, no database, no server to manage — deploys as pure static files to any
CDN host in one `git push`.

---

## 1. Rebrand Update (latest change)

The site was re-skinned to match the new **TropicSpice Global** logo:

- **Logo swapped** — `public/images/logo.png` now uses the uploaded
  TropicSpice Global wordmark (trimmed of its outer whitespace, resized to
  400px wide, ~170KB).
- **Brand name replaced** throughout every page, the header, footer, meta
  titles, and image alt text: "Authentic Spice Export" → "TropicSpice
  Global".
- **Color palette recolored** to match the new logo (green + terracotta +
  brown instead of the old brand's red/charcoal):

| Token | Hex | Sampled from logo | Used for |
|---|---|---|---|
| `primary` | `#B14000` | "Spice" wordmark (burnt terracotta) | Headings, links, nav hover |
| `accent` | `#1B4D0A` | "Tropic" wordmark + globe icon (forest green) | Back-to-top button, social hover, buttons |
| `dark` | `#2B1B0F` | Deep brown-black (new, ties to logo's brown) | Header / footer / testimonial card bg |
| `darker` | `#1C110A` | Darker shade of the above | Copyright bar |
| `brown` | `#502400` | "GLOBAL" wordmark | Uppercase kicker labels |
| `cream` | `#F8F5EF` | Neutral, slightly warmed | About section bg |
| `offwhite` | `#F6F5F0` | Neutral | Products section bg |
| `testibg` | `#FBF9F4` | Neutral | Testimonials section bg |
| `muted` | `#7A6A58` | Neutral warm grey-brown | Body paragraph text |

- **Tagline added** — "Exporting Nature's Finest Spices" (from the logo) now
  appears under the About section heading in `accent` green, uppercase,
  letter-spaced.
- **Layout/structure unchanged** — same sections, same pages, same images
  (spice photography untouched) — only the logo, brand name, and color
  tokens changed, per "slightly align the design."

### ⚠️ Needs your confirmation before launch
`info@authenticspiceexport.com` and `authenticspiceexport.com` were
mechanically replaced with `info@tropicspiceglobal.com` /
`tropicspiceglobal.com` as placeholders wherever the old domain appeared.
**Confirm your real domain/email** and update:
- `astro.config.mjs` → `site:` field
- `src/layouts/BaseLayout.astro` → footer email link
- Address and phone numbers in the footer are untouched (still the original
  Vadodara address/numbers) — update these if TropicSpice Global operates
  from a different location or has new contact numbers.

---

## 2. Original Site — Analysis Summary (for reference)

### Original tech stack
- Plain multi-page HTML (`index.html`, `aboutus.html`, `spices.html`,
  `mukhwas.html`, `certificate.html`)
- **Bootstrap 5** for grid/layout
- **Slick Carousel** (jQuery) for the hero banner, product grid, and testimonials
- **Font Awesome 5 Pro** for icons
- **`contactus.php`** — the only backend code, used solely to email the contact form

### Sitemap (unchanged in the rebuild)

| Page | Original URL | New route |
|---|---|---|
| Home | `index.html` | `/` |
| About Us | `aboutus.html` | `/about` |
| Spices | `spices.html` | `/products/spices` |
| Mukhwas | `mukhwas.html` | `/products/mukhwas` |
| Certificate | `certificate.html` | `/certificate` |
| Contact | `contactus.php` | `/contact` |

### Fonts (unchanged, still active via Google Fonts)
```
Montserrat  — body text, nav, buttons (weights 300–900)
Montez      — script headings ("TropicSpice Global", "Our Products")
Suranna     — serif hero title
```

### Real assets recovered from the original site
All 38 original spice/section images were extracted byte-exact from the
`.mht` page archives (not re-downloaded or re-created) — same filenames as
the live site: hero banners, floating spice photos, decorative shape PNGs,
all homepage and Spices-page product photos, section background textures,
footer graphics. Only the **logo** and **favicon** have been replaced for
the rebrand.

---

## 3. What Changed vs. the Original Site

| Concern | Original | Current |
|---|---|---|
| Brand | Authentic Spice Export | TropicSpice Global |
| Colors | Red/charcoal | Terracotta/forest-green/brown |
| Backend | PHP mailer | None — static form POST to Formspree |
| Carousel | Slick (jQuery) | Swiper.js (no jQuery dependency) |
| Pages | Flat `.html` files | Astro components, shared layout |
| Hosting | Traditional web hosting + FTP | Git-based static hosting (Cloudflare Pages) |

---

## 4. Verification & Debug Pass (completed)

- ✅ **package.json** — valid JSON
- ✅ **All `.astro` files** — frontmatter fences and `{}` braces balanced
- ✅ **Image references** — every image path used in components/pages resolves to a real file in `public/images/`
- ✅ **Internal navigation** — every `href` matches an actual page route — no dead links
- ✅ **Brand sweep** — zero remaining "Authentic Spice Export" / "AUTHENTIC SPICE EXPORT" mentions anywhere in `src/`, config, or docs
- ✅ **Color tokens** — no hardcoded old hex values (`#FF282A`, `#FF4C4E`, `#1F2126`, `#191B1F`) left outside `tailwind.config.mjs`; every component references the named tokens, so the whole site recolors from one file
- ⚠️ **Unused asset flagged** — `abt-shp1.png` sits in `public/images/` but isn't referenced by any component
- ⚠️ **Not yet run**: `npm install && npm run build` — this sandbox has no network access, so run this once locally or let Cloudflare's build runner do it on first deploy

### To verify locally before deploying
```bash
npm install
npm run dev      # check localhost:4321 in your browser
npm run build    # should complete with no errors, outputs to ./dist
npm run preview  # serve the production build locally to double-check
```

---

## 5. Before Going Live — Action Items

1. **Confirm domain/email** — see the rebrand warning above; replace the
   `tropicspiceglobal.com` placeholders with your real domain.
2. **Contact form** — open `src/pages/contact.astro`, replace `YOUR_FORM_ID`
   with your real Formspree form ID (free at formspree.io, no backend
   required). Netlify Forms or Web3Forms are drop-in alternatives.
3. **Mukhwas photos** — `src/pages/products/mukhwas.astro` currently shows
   placeholder tiles; add real product photography when available.
4. **Address/phone** — confirm whether TropicSpice Global keeps the same
   Vadodara address and phone numbers as the old brand, or needs new ones.
5. **Favicon** — `public/images/fav.ico` is currently generated from the old
   logo; regenerate it from the new TropicSpice Global logo (crop to a
   square icon, e.g. just the globe+leaf mark, before converting to `.ico`).

---

## 6. Deploying — Cloudflare Pages (recommended)

1. Push this project to a GitHub (or GitLab) repository.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git** → select your repo.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. Cloudflare gives you a `*.pages.dev` URL immediately.
5. Add your custom domain: **Custom domains → Set up a domain** → enter your
   real domain → Cloudflare shows you the DNS records to add.

Every `git push` after this auto-builds and redeploys — no FTP, no manual file uploads.

## 7. Connecting a GoDaddy Domain

Your domain stays registered at GoDaddy — you're only changing where its DNS
points, not moving the registration.

### Option A — Move DNS management to Cloudflare (recommended)
1. In Cloudflare: **Add a site** → enter your domain → Cloudflare scans
   existing DNS records and shows two nameservers.
2. In GoDaddy: **My Products → your domain → DNS → Nameservers → Change** →
   "Enter my own nameservers" → paste the two Cloudflare nameservers.
3. Wait for propagation (usually 15 min–a few hours, occasionally up to 24–48h).
4. In Cloudflare Pages → **Custom domains** → add your domain and `www` →
   Cloudflare auto-creates the correct records.

### Option B — Keep DNS at GoDaddy, point records at Cloudflare Pages
1. Cloudflare Pages → **Custom domains** → add your domain → note the
   `.pages.dev` CNAME target it gives you.
2. In GoDaddy DNS: add a **CNAME** record, Name `www`, Value → that target.
3. For the bare/apex domain, GoDaddy doesn't support CNAME at the root — use
   GoDaddy's **Forwarding** to redirect the apex to `www`, or an
   **A/ALIAS record** if your plan supports it.
4. SSL is issued automatically by Cloudflare once the CNAME resolves.

**Recommendation:** Option A is simpler and avoids the apex-domain CNAME
limitation — the standard path most Cloudflare Pages users take.

---

## 8. Project Structure

```
asx-site/
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── public/
│   └── images/            # 38 real site assets + new TropicSpice Global logo + fav.ico
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro     # header, footer, WhatsApp + back-to-top buttons
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── AboutTeaser.astro
│   │   ├── ProductGrid.astro    # Swiper carousel
│   │   ├── Testimonials.astro   # Swiper carousel
│   │   └── InnerBanner.astro    # shared banner for inner pages
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── certificate.astro
│   │   ├── contact.astro
│   │   └── products/
│   │       ├── spices.astro
│   │       └── mukhwas.astro
│   └── styles/
│       └── global.css
```
