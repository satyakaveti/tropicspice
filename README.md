# TropicSpice Global — Static Site

A static, framework-light site built with Astro + Tailwind CSS. Originally adapted from the reference page structure, then redesigned with a premium, bespoke white/dark-green theme with red accents. No PHP, no database, no server to manage — deploys as pure static files to any CDN host in one `git push`.

---

## 1. Rebrand & Redesign Update (Latest Changes)

The site has been completely updated to match the new **TropicSpice Global** brand assets and modern web styling guidelines:

### A. Custom Color Palette (Updated)

| Token | Hex | Target Sourced From Logo | Used For |
|---|---|---|---|
| `primary` | `#21550A` | "Tropic" wordmark (dark forest green) | Headings, buttons, primary active/hover states |
| `accent` | `#1B4D0A` | Globe icon/highlights (deeper forest green) | Back-to-top button, WhatsApp CTA hover |
| `brown` | `#D21F1B` | Red pepper accent (chili/mirchi red) | Uppercase kicker/badge labels, accents |
| `cream` | `#FFFFFF` | Wiped clean for modern style | Page background (pure white) |
| `offwhite` | `#FFFFFF` | Wiped clean for modern style | Section backgrounds (pure white) |
| `testibg` | `#FFFFFF` | Wiped clean for modern style | Component cards background (pure white) |
| `muted` | `#4B5563` | Neutral dark gray | Body paragraph text |

### B. Typography & Fonts
* **Georgia Regular:** Used for serif headings (including `"Premium Quality Spices Globally"` in the Hero and inner page title highlights). It is styled in normal/roman weight (no longer italicized).
* **Montserrat:** Used for all sans-serif body text, navigation tabs, buttons, and sub-titles.
* **Montez:** Used for custom script accents.

### C. Header & Navigation Updates
* **Sticky Flow:** Changed the header position from `fixed` to `sticky top-0`. The Hero content now starts directly below the header instead of being hidden underneath it on page load.
* **Scroll Shrink & Logo Swap:** When scrolling down (`window.scrollY > 50`), the header shrinks to **approximately 65px** height (`py-2` padding), and the default square logo (`logo.png`) is dynamically replaced with the horizontal logo (`logo-horizontal.png` styled at `h-[50px] w-auto`).
* **Direct Navigation:** Linking directly from "Our Products" to the Spices catalog page (the dropdown has been removed).

### D. Reimagined Centered Hero
* Centered layout with a clean gradient and dot grid background.
* The brand logo is placed in the center, encircled by a **2.5x scaled rotating ring** carrying **8 distinct miniature cropped circular spice badges** (Cumin, Cardamom, Chili, Pepper, Star Anise, Cloves, Turmeric, Mustard).
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

## 4. Launch Checklist

1. **Email / Domain Config:** Update `astro.config.mjs` and the contact page/footer mailto links with your real domain details.
2. **Contact Form Inquiries:** In `src/pages/contact.astro`, update the `<form action="...">` endpoint with your active **Formspree Form ID** (or Netlify/Web3Forms endpoint).
3. **Address details:** Review and verify the location coordinates/address in `src/pages/contact.astro` and `src/layouts/BaseLayout.astro`.
