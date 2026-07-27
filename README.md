# TropicSpice Global — Static Site

A static, framework-light site built with Astro + Tailwind CSS. Originally adapted from the reference page structure, then redesigned with a premium, bespoke white/dark-green theme with red accents. No PHP, no database, no server to manage — deploys as pure static files to any CDN host in one `git push`.

---

## 1. Rebrand & Redesign Update (Latest Changes)

The site has been completely updated to match the new **TropicSpice Global** brand assets and modern web styling guidelines:

### A. Custom Color Palette (Updated)

| Token | Hex | Target Sourced From Logo | Used For |
|---|---|---|---|
| `primary` | `#125920` | Brand green | Headings, buttons, primary active/hover states, cards active highlights |
| `accent` | `#125920` | Brand green | Back-to-top button, WhatsApp CTA hover, hovers |
| `brown` | `#D21F1B` | Red pepper accent (chili/mirchi red) | Uppercase kicker/badge labels, accents |
| `cream` | `#FFFFFF` | Wiped clean for modern style | Page background (pure white) |
| `offwhite` | `#FFFFFF` | Wiped clean for modern style | Section backgrounds (pure white) |
| `testibg` | `#FFFFFF` | Wiped clean for modern style | Component cards background (pure white) |
| `muted` | `#4B5563` | Neutral dark gray | Body paragraph text |

### B. Typography & Fonts
* **Georgia Regular:** Used for serif headings (including the Hero title and page title highlights). It is styled in normal/roman bold weight (no longer italicized).
* **Montserrat:** Used for all sans-serif body text, navigation tabs, buttons, and sub-titles.
* **Montez:** Used for custom script accents.

### C. Header & Navigation Updates
* **Sticky Flow:** Changed the header position from `fixed` to `sticky top-0`. The Hero content now starts directly below the header instead of being hidden underneath it on page load.
* **Scroll Shrink & Logo Swap:** When scrolling down (`window.scrollY > 50`), the header shrinks to **approximately 65px** height (`py-2` padding), and the default square logo (`logo.png`) is dynamically replaced with the horizontal logo (`logo-horizontal.png` styled at `h-[50px] w-auto`).
* **Direct Navigation:** Linking directly from "Our Products" to the Spices catalog page (the dropdown has been removed).

### D. Reimagined Centered Hero
* Centered layout with a clean gradient and dot grid background.
* The brand logo is placed in the center, encircled by a **2.5x scaled rotating ring** carrying **8 distinct miniature cropped circular spice badges** (Cumin, Cardamom, Chili, Pepper, Star Anise, Cloves, Turmeric, Mustard).
* Replaced the word "GLOBAL" text span with a single word title: "TropicSpice" styled with green (`#125920`) and terracotta orange-red (`#C84B15`) side by side.
* Dynamic floating spice cards move organically in the background using custom CSS rotation and translations.

### E. Products Consolidation
* Removed the Mukhwas page route (`/products/mukhwas`) as the catalog is consolidated to Spices.

---

## 2. Sitemap

| Page | Route | Description |
|---|---|---|
| Home | `/` | Asymmetrical teaser section, stats grid, and Swiper testimonial deck |
| About Us | `/about` | Split values layout with custom core feature cards |
| Spices | `/products/spices` | Zoom-on-hover catalog of export-grade spices |
| Certificate | `/certificate` | Accreditation highlights card layout (APEDA, testing) |
| Contact | `/contact` | Modern split layout with contact info cards and inquiries form |

---

## 3. Verification & Local Development

### Dependencies
- **Astro** for component compiling and site routing
- **Tailwind CSS** for layout styling
- **Swiper.js** for touch-responsive slider carousels

### Commands
```bash
npm install
npm run dev      # run local development server on http://localhost:4321
npm run build    # compile static build, outputting to ./dist
npm run preview  # serve the compiled production build locally
```

---

## 4. Before Going Live — Action Items (Form & Email Configuration)

1. **Contact Form Inquiries:** The contact form in `src/pages/contact.astro` is pre-configured to use **Web3Forms** (which forwards submissions to your email) with the access key `a54ea2ae-1142-4035-b4b9-7d273332fce6`. If you need to change the recipient email in the future, simply generate a new access key at [web3forms.com](https://web3forms.com) and swap the value in the hidden input tag.
2. **Email / Domain Config:** Update `astro.config.mjs` and the contact page/footer mailto links with your real domain details.
3. **Address details:** Review and verify the location coordinates/address in `src/pages/contact.astro` and `src/layouts/BaseLayout.astro`.

---

## 5. Deploying — Cloudflare Pages (Recommended)

1. Push this project to a GitHub (or GitLab) repository.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git** → select your repository.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Deploy command:** `npx wrangler pages deploy dist`
   - **Build output directory:** `dist`
4. Deploy. Cloudflare gives you a `*.pages.dev` URL immediately.
5. Add your custom domain: **Custom domains → Set up a domain** → enter your real domain → Cloudflare shows you the DNS records to add.

Every `git push` after this auto-builds and redeploys — no FTP, no manual file uploads.

---

## 6. Connecting a GoDaddy Domain

Your domain stays registered at GoDaddy — you're only changing where its DNS points, not moving the registration.

### Option A — Move DNS management to Cloudflare (Recommended)
1. In Cloudflare: **Add a site** → enter your domain → Cloudflare scans existing DNS records and shows two nameservers.
2. In GoDaddy: **My Products → your domain → DNS → Nameservers → Change** → "Enter my own nameservers" → paste the two Cloudflare nameservers.
3. Wait for propagation (usually 15 min–a few hours, occasionally up to 24–48h).
4. In Cloudflare Pages → **Custom domains** → add your domain and `www` → Cloudflare auto-creates the correct records.

### Option B — Keep DNS at GoDaddy, point records at Cloudflare Pages
1. Cloudflare Pages → **Custom domains** → add your domain → note the `.pages.dev` CNAME target it gives you.
2. In GoDaddy DNS: add a **CNAME** record:
   - **Name:** `www`
   - **Value:** `your-app-name.pages.dev`
3. For the bare/apex domain, GoDaddy doesn't support CNAME at the root:
   - Use GoDaddy's **Forwarding** to redirect the apex (`tropicspiceglobal.com`) to `www.tropicspiceglobal.com`.
4. SSL is issued automatically by Cloudflare once the CNAME resolves.
