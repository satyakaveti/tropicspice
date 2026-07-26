# Authentic Spice Export — Static Site Rebuild

A static, framework-light rebuild of **authenticspiceexport.com**, built with
Astro + Tailwind CSS. Same pages, same images, same colors and fonts as the
original — no PHP, no database, no server to manage. Deploys as pure static
files to any CDN host in one `git push`.

---

## 1. Original Site — Analysis Summary

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

### Exact design tokens (pulled from the live `style.css`)

| Token | RGB (source) | Hex | Used for |
|---|---|---|---|
| `primary` | rgb(255,40,42) | `#FF282A` | Headings, links, nav hover |
| `accent` | rgb(255,76,78) | `#FF4C4E` | Back-to-top button, social hover, testimonial names |
| `dark` | rgb(31,33,38) | `#1F2126` | Header bg, footer bg, testimonial card bg |
| `darker` | rgb(25,27,31) | `#191B1F` | Copyright bar |
| `cream` | rgb(248,244,240) | `#F8F4F0` | About section background |
| `offwhite` | rgb(247,247,246) | `#F7F7F6` | Products section background |
| `testibg` | rgb(251,248,245) | `#FBF8F5` | Testimonials section background |
| `brown` | rgb(65,29,0) | `#411D00` | Uppercase kicker labels ("ABOUT US", "WHAT WE OFFER") |
| `muted` | rgb(147,129,110) | `#93816E` | Body paragraph text |
| `footertext` | rgb(181,181,181) | `#B5B5B5` | Footer paragraph text |
| `copytext` | rgb(107,107,107) | `#6B6B6B` | Copyright bar text |

### Fonts (exact, via Google Fonts)
```
Montserrat  — body text, nav, buttons (weights 300–900)
Montez      — script headings ("Authentic Spice Export", "Our Products")
Suranna     — serif hero title ("AUTHENTIC SPICE EXPORT")
```

### Real assets recovered
All **39 original images** were extracted byte-exact from the `.mht` page
archives you provided (not re-downloaded or re-created) — same filenames as
the live site: logo, hero banners, floating spice photos, decorative shape
PNGs, all 8 homepage product photos, all 10 additional spice photos on the
Spices page, section background textures, and footer graphics.

One asset was **not** recoverable: `fav.ico` wasn't embedded in any of the
saved archives (browsers often fetch favicons out-of-band). A replacement
favicon was auto-generated from `logo.png` — swap it for your real one if you
have it.

---

## 2. What Changed vs. the Original

| Concern | Original | Rebuild |
|---|---|---|
| Backend | PHP mailer | None — static form POST to Formspree |
| Carousel | Slick (jQuery) | Swiper.js (no jQuery dependency) |
| Pages | Flat `.html` files | Astro components, shared layout |
| Hosting | Traditional web hosting + FTP | Git-based static hosting (Cloudflare Pages) |
| Logo file | 4.2MB uncompressed PNG | Resized/compressed to ~440KB |

Visual design, copy, page order, and image content are unchanged.

---

## 3. Verification & Debug Pass (completed)

Before handing this off, the project was checked for:

- ✅ **package.json** — valid JSON
- ✅ **All `.astro` files** — frontmatter fences and `{}` braces balanced (no syntax breaks)
- ✅ **Image references** — every image path used in components/pages resolves to a real file in `public/images/` (38/38 matched; `fav.ico` was regenerated as noted above)
- ✅ **Internal navigation** — every `href` in the header/footer/pages (`/`, `/about`, `/products/spices`, `/products/mukhwas`, `/certificate`, `/contact`) matches an actual page route — no dead links
- ✅ **Unused asset flagged** — `abt-shp1.png` is in `public/images/` but not currently referenced in any component; harmless, kept in case you want to use it as a decorative accent later
- ⚠️ **Not yet run**: `npm install && npm run build` — this sandbox has no network access, so the build itself must be run on your machine or in CI (GitHub Actions / Cloudflare's own build runner) the first time. The checks above catch the errors most likely to break that build; a first local `npm run dev` before deploying is still recommended.

### To verify locally before deploying
```bash
npm install
npm run dev      # check localhost:4321 in your browser
npm run build    # should complete with no errors, outputs to ./dist
npm run preview  # serve the production build locally to double-check
```

---

## 4. Before Going Live — Action Items

1. **Contact form** — open `src/pages/contact.astro`, replace `YOUR_FORM_ID`
   with your real Formspree form ID (free at formspree.io, no backend
   required). Netlify Forms or Web3Forms are drop-in alternatives.
2. **Mukhwas photos** — `src/pages/products/mukhwas.astro` currently shows
   placeholder tiles; the archived pages didn't include Mukhwas product
   photography. Add real photos when available.
3. **Favicon** — replace the auto-generated `public/images/fav.ico` with your
   original if you can recover it.
4. **Phone/WhatsApp number** — confirm `+919825700048` is still current in
   `src/layouts/BaseLayout.astro`.

---

## 5. Deploying — Cloudflare Pages (recommended)

1. Push this project to a GitHub (or GitLab) repository.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git** → select your repo.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. Cloudflare gives you a `*.pages.dev` URL immediately.
5. Add your custom domain: **Custom domains → Set up a domain** → enter
   `authenticspiceexport.com` → Cloudflare shows you the DNS records to add.

Every `git push` after this auto-builds and redeploys — no FTP, no manual file uploads.

## 6. Connecting Your GoDaddy Domain

Your domain stays registered at GoDaddy — you're only changing where its DNS
points, not moving the registration. Two ways to do this:

### Option A — Move DNS management to Cloudflare (recommended, also gives you free CDN/SSL for the whole domain)
1. In Cloudflare: **Add a site** → enter `authenticspiceexport.com` → Cloudflare scans existing DNS records and shows two nameservers (e.g. `xxx.ns.cloudflare.com`, `yyy.ns.cloudflare.com`).
2. In GoDaddy: **My Products → your domain → DNS → Nameservers → Change** → select "Enter my own nameservers" → paste the two Cloudflare nameservers.
3. Wait for propagation (GoDaddy shows "Pending" — usually 15 min to a few hours, occasionally up to 24–48h).
4. Back in Cloudflare Pages → **Custom domains** → add `authenticspiceexport.com` and `www.authenticspiceexport.com` → Cloudflare auto-creates the correct records since it now controls DNS directly.

### Option B — Keep DNS at GoDaddy, just point records at Cloudflare Pages
1. In Cloudflare Pages → **Custom domains** → add your domain → Cloudflare shows you a CNAME target (e.g. `your-project.pages.dev`).
2. In GoDaddy: **DNS → Manage Zones** for your domain, add/edit:
   - Type **CNAME**, Name `www`, Value → the `.pages.dev` target Cloudflare gave you
   - For the bare/apex domain (`authenticspiceexport.com` with no `www`), GoDaddy doesn't support CNAME at the root — use GoDaddy's **"Forwarding"** to redirect the apex to `www`, or use an **A/ALIAS record** if your GoDaddy plan supports it, pointing to Cloudflare's provided IP.
3. SSL: Cloudflare Pages issues a free certificate automatically once the CNAME resolves — no separate GoDaddy SSL purchase needed.

**Recommendation:** Option A (moving nameservers to Cloudflare) is simpler and avoids the apex-domain CNAME limitation entirely — it's the standard path most Cloudflare Pages users take.

---

## 7. Project Structure

```
asx-site/
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── public/
│   └── images/            # 39 real site assets + generated fav.ico
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
