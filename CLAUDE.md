# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A hotel/pousada website built by **CI Digital Marketing**. This is the **studio's reusable Boutique-tier template**, currently being commissioned for Pousada Lagoa Caraíva. Future Boutique projects start from a fork of this codebase. Content, palette, and stack vary per project; the structural patterns and `hotel-config.json` shape do not.

## Stack and motion

- **Vanilla HTML5/CSS3/JS** for the prototype phase (no build, no framework). Will likely port to Astro for production.
- **Zero JS dependencies.** All animation is CSS-native + IntersectionObserver. The Solar Dona Dora lesson: weak 4G is the baseline target — heavy libs (GSAP / Lenis / three) are off the table unless code-split for one specific need.
- Each page loads `assets/css/main.css` + `assets/js/main.js`. Home additionally loads `assets/js/home.js` for scroll choreography. `/galeria/` loads `assets/js/gallery.js` for lightbox.

## Layout primitive — Stack-cards

Every section is a `.card` that overlaps the previous by `var(--card-overlap)` (≈28px), with rounded top corners (`var(--card-radius)`) and a subtle box-shadow above. JS scales down the covered card slightly (≈0.96 + translateY −24px) for the iOS-app-stack feel — this is the "pull-overlay" mobile feel the user described, but works the same way on desktop.

The first card in `<main>` is the hero and has no top radius / no overlap. Subsequent cards stack visually as the user scrolls.

This is the **signature pattern** of the Boutique template. Every interior page uses it too. Class names stay generic (`.card`, `.card--paper`, `.card--green`, etc.) so the template is brand-neutral.

## Cinematic patterns (per home section)

| Section | Pattern | File |
|---|---|---|
| Hero (`.hero`) | Animated water layers + ripples + word clip-path reveal + scroll-driven dissolve | CSS + `home.js initHeroScroll` |
| A vila (`.vila`) | Sticky image rotator, three photos cross-fade as user scrolls panels | CSS sticky + `home.js initVilaRotator` |
| A pousada (`.pousada`) | Split-sticky scroll (UXUA-style): media pinned left, text panels scroll right | Pure CSS sticky |
| Os bangalôs (`.bangalos-section`) | Pinned horizontal scroll on desktop, native overflow scroll-snap on mobile | CSS + `home.js initBangalosHScroll` |
| Bem-estar | Alternating full-width rows with hover scale | Pure CSS |
| Casamentos | Full-bleed dramatic with line-by-line reveal | CSS + `[data-line-reveal]` |
| Reservas | Editorial letter-style on textured bg | Pure CSS |

## Project tier

**Confirm the tier with the user before writing any code.** It determines the stack:

- **Standard** — vanilla HTML5/CSS3/JS, no build, no framework, light animation. For pousadas / family hotels.
- **Boutique** — modern stack (Astro / Next.js / SvelteKit), premium motion, scroll-driven animation, possible ambient sound, variable typography.

The directory name (`Agente Site Boutique`) is a strong hint of Boutique tier but is not authoritative — confirm with the user.

## Architecture invariants

These apply on **every** page of **every** hotel site. Do not deviate without explicit user approval.

### Lead capture flow (form sequence — never reorder)

`preventDefault` → `sendToWebhook(payload)` → `pushLead(tipo)` → UI action (redirect / WhatsApp / success state)

- `sendToWebhook` is a single primitive every form passes through. `WEBHOOK_URL` lives at the top of the main JS (or shared config).
- Minimum payload: `hotel`, `origem_pagina`, `url`, `timestamp` (ISO 8601), plus form fields.
- `pushLead(tipo)` does `dataLayer.push({ event: 'gerar_lead', tipo })`. Examples of `tipo`: `whatsapp_modal`, `contato_form`.

### Global modals

Two modals exist site-wide. Inject HTML into `<body>` at runtime — do **not** duplicate markup per page. Use a class prefix to avoid colliding with legacy markup.

1. **WhatsApp capture modal** — intercepts every click on `a[href*="wa.me/"]` (floating button, CTAs, social links). Captures nome / e-mail / telefone, then opens `wa.me/{WA_NUMBER}?text={WA_MESSAGE}`.
2. **Booking modal** — triggered **only** by explicit `openBooking()` call. Does not intercept links globally. Fields: check-in, check-out, adults, children, dynamic age selects (0–12). Submit builds `{MOTOR_BASE}?checkin=YYYY-MM-DD&checkout=YYYY-MM-DD&adults=N&children=N&childrenAges=A1,A2` and opens in a new tab.

Standard reservation CTA markup:
```html
<a href="#" onclick="openBooking();return false" class="btn-primary">Reservar Agora</a>
```

### Required constants (top of main JS or shared config)

`HOTEL_NAME`, `WA_NUMBER` (format `5541999999999`), `WA_MESSAGE`, `BOOKING_URL`, `MOTOR_BASE`, `WEBHOOK_URL`, plus GTM container ID injected in `<head>` and at top of `<body>` on every page.

### Default vendors

- **Booking engine:** HQBeds (default). Validate parameter names with HQBeds before publishing — they vary by integration. Alternates: Omnibees, Asksuite.
- **Webhook:** n8n or Zapier endpoint.
- **Analytics:** Google Tag Manager.
- **Maps:** Google Maps embed iframe queried by **business name**, not address (`https://maps.google.com/maps?q={NOME+URL+ENCODED}&output=embed`). Address renders as a route; name renders as a pin.

## Source of truth

`hotel-config.json` at project root is the authoritative source for all hotel content. Every page reads from it. Unconfirmed values stay as `"TODO"` (string) or `null` with a `_note` field — these become the pre-publish checklist.

Top-level keys: `hotel`, `contact`, `address`, `business`, `positioning`, `accommodations`, `amenities_property`, `differentials`, `policies`, `nearby_attractions`, `objectives`, `integrations`, `design`.

## Briefings (factual ground truth, in markdown at project root)

- `Briefing do Cliente - <Hotel>.md` — raw client interview. Do not "embellish".
- `Briefing do Sistema - <Hotel>.md` — organized synthesis used as LLM context to keep factual / tonal coherence.
- `Direção Criativa - <Hotel>.md` (Boutique only) — anchor concept, sensorial system, narrative map, voice bible, anti-references, design principles.

Treat these as authoritative for hotel facts. If code or copy contradicts the briefing, the briefing wins.

## Page architecture (default IA)

```
/                Home (hero + narrative + CTAs)
/sobre/          History and differentials
/experiencia/    Structure, leisure, surroundings  (boutique may rename: /territorio/, /vida-no-hotel/)
/acomodacoes/    Rooms/suites catalog
/galeria/        Gallery with lightbox
/localizacao/    Map + attractions + how to get there
/contato/        Form + map + channels
```

Optional subpages (only if the hotel justifies): `/restaurante/`, `/spa/`, `/eventos/`, `/casamentos/`. Blog only with a real SEO argument (rare).

Every page must include: JSON-LD Schema.org (`LodgingBusiness` on home, `WebPage` + `BreadcrumbList` on internals, `ContactPage` on `/contato/`), Open Graph + Twitter cards, `<link rel="canonical">`, listing in `sitemap.xml`.

## Conventions

- **Language:** Brazilian Portuguese unless multilingual is explicitly requested.
- **Paths:** absolute (`/assets/...`) for resources referenced from JS, so they resolve from any page depth.
- **Images:** lazy-load below-the-fold, WebP when feasible, `alt` on every image.
- **Fonts:** load with `display=swap`.
- **Accessibility:** AA contrast minimum, keyboard navigation in modals, visible focus.

## Git policy (critical)

- One repo per client/project. `main` is production.
- Local commits OK after confirmed changes.
- **Never run `git push`, `gh repo create`, or any remote-mutating command on your own initiative.** Push only with the repo URL **and** explicit order in the same instruction. There has been a prior incident of overwriting a client repo in production.
- Before any authorized push: run `git remote -v` and confirm the destination with the user.
- Never use `--no-verify`, `--force`, `reset --hard`, or other destructive operations without explicit instruction.

## Pre-publish checklist

- `WEBHOOK_URL` real (no placeholder)
- `BOOKING_URL` / `MOTOR_BASE` correct, parameters validated by HQBeds
- GTM ID injected on every page
- Final domain in JSON-LD, OG, sitemap, canonical
- `hotel-config.json` with no TODOs
- CEP, lat/lng, CNPJ filled
- Policies (pet, food, children, payment, cancellation) confirmed
- Client photos integrated (no placeholders)
- Client logo + favicon
- `sitemap.xml` lists every real page
- `robots.txt` allows indexing

## Commands

The current vanilla prototype has no build step. To preview:

```bash
# open index.html directly (file:// works because all paths are relative)
start "C:\Users\igors\OneDrive\Área de Trabalho\Agente Site Boutique\index.html"

# or serve locally with any static server, e.g. python:
python -m http.server 8000
```

When porting to Astro for production, expect the standard `npm run dev` / `npm run build` / `npm run preview`.
