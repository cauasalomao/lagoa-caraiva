# Blueprint Técnico — Home Boutique

**Komplexa Hotéis** — spec de construção do template. Para cada ato: markup base, CSS-chave, padrão de animação, requisitos de mídia, eventos GTM, acessibilidade e performance budget local. Doc de referência da equipe; não substitui código, complementa.

---

## Setup global

### Performance budget (não-negociável)

| Métrica | Limite | Como medir |
|---|---|---|
| LCP | < 2.5s | Lighthouse Mobile + Slow 4G throttling |
| INP | < 200ms | Web Vitals em campo (CrUX) + DevTools Performance |
| CLS | < 0.05 | Lighthouse + observação no scroll |
| JS total (gzipped) | < 80 KB | webpack-bundle-analyzer ou `du -h` em build |
| Home (página completa) | < 1.5 MB | Network panel, throttle 4G |
| Imagens individuais | < 200 KB poster, < 1.2 MB vídeo | manual, ImageOptim/Squoosh |

Estes números são **briefing**, não meta opcional. Se o cliente pede algo que estoura o budget, negocie ou recuse.

### CSS tokens

```css
:root {
  /* Stack-cards primitive */
  --card-overlap: 28px;
  --card-radius: 24px;
  --card-shadow: 0 -8px 32px rgba(0, 0, 0, 0.08);
  --card-scale-covered: 0.96;
  --card-translate-covered: -24px;

  /* Motion durations */
  --duration-fast: 200ms;
  --duration-base: 400ms;
  --duration-slow: 800ms;
  --duration-cinema: 1200ms;

  /* Easings */
  --ease-base: cubic-bezier(0.4, 0.1, 0.2, 1);
  --ease-slow: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);

  /* Tipografia (ajustar por projeto via direção criativa) */
  --font-display: "Cormorant Garamond", "GT Sectra", serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-size-xs: clamp(0.75rem, 0.7rem + 0.2vw, 0.875rem);
  --font-size-sm: clamp(0.875rem, 0.8rem + 0.3vw, 1rem);
  --font-size-base: clamp(1rem, 0.9rem + 0.4vw, 1.125rem);
  --font-size-lg: clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem);
  --font-size-display: clamp(3rem, 8vw, 8rem);
}
```

### GTM event taxonomy

```js
// Lead capture (sempre via sendToWebhook → pushLead)
dataLayer.push({ event: 'gerar_lead', tipo: 'whatsapp_modal' });
dataLayer.push({ event: 'gerar_lead', tipo: 'booking_form' });
dataLayer.push({ event: 'gerar_lead', tipo: 'contato_form' });

// Engajamento de seção
dataLayer.push({ event: 'secao_visualizada', secao: 'experiencias' });
dataLayer.push({ event: 'secao_visualizada', secao: 'acomodacoes' });

// Scroll milestones
dataLayer.push({ event: 'scroll_marco', marco: 25 }); // 25, 50, 75, 90
```

### Module map (`assets/js/`)

| Módulo | Função | Atos consumidores |
|---|---|---|
| `main.js` | constantes globais, modais, webhook, GTM | todas as páginas |
| `home.js` | bootstrap das choreografias da home | home |
| `home.js initHero` | dissolve/reveal do hero | ato 1 |
| `home.js initLineReveal` | reveal por linha via IntersectionObserver | atos 2, 7 |
| `home.js initStackCards` | overlap + scale-down entre seções | global da home |
| `home.js initExperienciasHScroll` | pinned horizontal scroll | ato 3 |
| `home.js initAcomodacoesStack` | stack-cards verticais full-bleed | ato 4 |
| `home.js initEspacosSplitSticky` | split-sticky scroll | ato 5 |
| `home.js initSocialProofReveal` | reveal estático sequencial | ato 6 |
| `gallery.js` | lightbox de galeria | `/galeria/`, subpáginas |

### Animation philosophy enforcement

- `prefers-reduced-motion: reduce` → toda animação cai para fade simples 200ms ou desliga.
- `prefers-reduced-data` → vídeo do hero não autoplay; usa poster.
- `IntersectionObserver` é a ferramenta padrão para gatilhos. `scroll-timeline` onde suportado (Chromium 115+) com fallback automático.
- Zero libs externas (sem GSAP, Lenis, AOS, etc.).

### `hotel-config.json` keys consumidas pela home

```json
{
  "hotel": { "name", "tagline", "anchor_concept" },
  "positioning": { "tipo", "destino_frase", "essencia_curta", "anfitriao_carta" },
  "experiences": [{ "slug", "name", "tagline_sensorial", "image_portrait", "video_loop" }],
  "accommodations": [{ "slug", "name", "capacity", "m2", "differentials", "image_full" }],
  "common_spaces": [{ "name", "what_happens", "image" }],
  "social_proof": { "testimonials": [...], "press": [...], "awards": [...] },
  "secondary_segment": { "type", "tagline", "image", "cta" },
  "integrations": { "booking_url", "wa_number", "wa_message", "webhook_url", "gtm_id" }
}
```

---

## Ato 1 — Hero / Seduzir

**Função.** Transferir sensação em < 5s. Big idea + sensorial. Zero CTA, zero foto de quarto, zero preço.

### Markup base

```html
<section class="card card--hero" aria-labelledby="hero-title">
  <div class="card__media card__media--ambient" aria-hidden="true">
    <video class="card__video"
           autoplay muted loop playsinline
           poster="/assets/hero-poster.jpg"
           fetchpriority="high">
      <source src="/assets/hero.webm" type="video/webm">
      <source src="/assets/hero.mp4" type="video/mp4">
    </video>
    <div class="card__layers">
      <span class="card__layer card__layer--ambient"></span>
      <span class="card__layer card__layer--ripple"></span>
    </div>
  </div>

  <div class="card__content">
    <h1 id="hero-title" class="hero__title" data-clip-reveal>
      <span>água</span>
      <span>travessia</span>
      <span>casa</span>
    </h1>
  </div>

  <div class="hero__scroll-hint" aria-hidden="true"></div>
</section>
```

### CSS-chave

```css
.card--hero {
  min-height: 100svh; /* svh evita CLS no mobile com URL bar dinâmica */
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  overflow: hidden;
  position: relative;
}

.hero__title {
  font-family: var(--font-display);
  font-size: var(--font-size-display);
  line-height: 0.95;
  font-weight: 300;
}

.hero__title span {
  display: block;
  clip-path: inset(0 100% 0 0);
  animation: reveal-clip var(--duration-cinema) var(--ease-slow) forwards;
}

.hero__title span:nth-child(2) { animation-delay: 200ms; }
.hero__title span:nth-child(3) { animation-delay: 400ms; }

@keyframes reveal-clip {
  to { clip-path: inset(0 0 0 0); }
}

@media (prefers-reduced-motion: reduce) {
  .hero__title span { animation: none; clip-path: none; opacity: 1; }
}
```

### Animação

- **Reveal tipográfico:** clip-path sequencial, 1200ms, easing slow. Atrasos escalonados de 200ms.
- **Vídeo ambient:** loop 8–15s, sem áudio. Pausa em `prefers-reduced-motion` ou `prefers-reduced-data`.
- **Dissolve no scroll:** opacidade do hero decai conforme o usuário rola — `scroll-timeline` se suportado, fallback IntersectionObserver no `initHero`.
- **Reduced-motion:** título aparece sem animação; vídeo congela no poster.

### Mídia

| Item | Especificação |
|---|---|
| Vídeo (WebM VP9) | 1920×1080, 8–15s loop, max 800 KB, sem áudio |
| Vídeo (MP4 H.264) | mesmo, max 1.2 MB, fallback Safari |
| Poster (JPEG) | 1920×1080, q80 progressivo, max 200 KB. **É o LCP element.** |
| Versão mobile | poster legível sem vídeo; vídeo opcional em conexão rápida |

### Eventos GTM

```js
// disparado quando hero deixa 50% da viewport
dataLayer.push({ event: 'scroll_marco', marco: 25 });
```

### Acessibilidade

- `<h1>` único da página. Demais seções usam `<h2>`.
- Mídia decorativa marcada com `aria-hidden="true"`.
- Contraste do título sobre o vídeo: AA (4.5:1) — usar gradient overlay se necessário.
- Sem elementos interativos no hero (não roubar foco do skip-link / nav).

### Budget local

- LCP element: poster do vídeo, < 2.5s.
- Peso seção: < 1.4 MB (vídeo + poster + fonte display).
- INP: N/A (zero interação).

---

## Ato 2 — Dobra de Apoio / Ancorar

**Função.** Onde + que tipo de lugar + alma, em uma respiração. Stack-card primário entra sobre o hero.

### Markup base

```html
<section class="card card--paper" aria-labelledby="apoio-title">
  <div class="apoio__layout">
    <figure class="apoio__media">
      <picture>
        <source srcset="/assets/territorio.avif" type="image/avif">
        <source srcset="/assets/territorio.webp" type="image/webp">
        <img src="/assets/territorio.jpg"
             alt="Vista do território onde a pousada se inscreve"
             width="1600" height="1000" loading="lazy">
      </picture>
    </figure>

    <div class="apoio__content">
      <p class="apoio__destino" data-line-reveal>
        Caraíva, onde o rio encontra o mar e os carros não chegam.
      </p>
      <h2 id="apoio-title" class="apoio__hotel" data-line-reveal>
        Uma pousada de oito bangalôs, à beira da lagoa.
      </h2>
      <p class="apoio__essencia" data-line-reveal>
        Construída em 2018 por uma família que descobriu o lugar
        em uma travessia de canoa — e nunca mais saiu.
      </p>
    </div>
  </div>
</section>
```

### CSS-chave

```css
.card--paper {
  background: var(--color-paper);
  margin-top: calc(-1 * var(--card-overlap));
  border-top-left-radius: var(--card-radius);
  border-top-right-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
  padding: clamp(4rem, 10vw, 8rem) 0;
}

.apoio__layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
}

@media (min-width: 900px) {
  .apoio__layout { grid-template-columns: 1.1fr 1fr; align-items: center; }
}

[data-line-reveal] {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity var(--duration-base) var(--ease-out),
              transform var(--duration-base) var(--ease-out);
}
[data-line-reveal].is-visible {
  opacity: 1;
  transform: none;
}
```

### Animação

- **Stack-card:** entra sobre o hero via overlap CSS. JS (`initStackCards`) escala o card coberto (hero) em 0.96 e translateY -24px.
- **Line-reveal:** três blocos textuais entram em cadência decrescente. JS (`initLineReveal`) adiciona `.is-visible` quando entra na viewport (root margin -10%).
- **Reduced-motion:** linhas aparecem instantaneamente em opacidade 1.

### Mídia

| Item | Especificação |
|---|---|
| Foto territorial | 1600×1000 mínimo, AVIF/WebP/JPEG, max 280 KB JPEG |
| Loading | `lazy` (abaixo da dobra inicial em alguns dispositivos) |
| Art direction | crop diferente em portrait vs landscape (via `<picture>` e media queries) |

### Eventos GTM

```js
dataLayer.push({ event: 'secao_visualizada', secao: 'apoio' });
```

### Acessibilidade

- `<h2>` é o segundo nível, abaixo do `<h1>` do hero.
- Alt da foto: descritivo, contextual ("vista do território onde a pousada se inscreve").
- Hierarquia leitura: destino → hotel → essência (visualmente também nessa ordem).

### Budget local

- LCP candidate (se hero falhar): foto territorial.
- Peso: < 320 KB (foto + texto).

---

## Ato 3 — Experiências / Convidar

**Função.** Plantar desejo da estadia *antes* do quarto. Pinned horizontal scroll desktop / scroll-snap mobile.

### Markup base

```html
<section class="card card--experiencias" aria-labelledby="exp-title">
  <header class="experiencias__header">
    <h2 id="exp-title">Os dias na pousada</h2>
  </header>

  <div class="experiencias__viewport"
       data-pin-horizontal
       role="region"
       aria-label="Carrossel de experiências">
    <div class="experiencias__track">
      <article class="experiencia">
        <picture>
          <source srcset="/assets/exp-cafe-portrait.avif" type="image/avif">
          <img src="/assets/exp-cafe-portrait.jpg"
               alt="Mesa de café da manhã na varanda sobre a lagoa"
               width="900" height="1200" loading="lazy">
        </picture>
        <div class="experiencia__content">
          <h3>O café na varanda</h3>
          <p>Antes do sol, antes das vozes — só o cheiro do pão e o vapor sobre a água.</p>
          <a href="/experiencia/cafe/" class="experiencia__link">conhecer →</a>
        </div>
      </article>

      <!-- repete 4-7x -->
    </div>
  </div>

  <div class="experiencias__progress" aria-hidden="true">
    <span class="experiencias__progress-bar"></span>
  </div>
</section>
```

### CSS-chave

```css
.experiencias__viewport {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
}

.experiencias__track {
  display: flex;
  height: 100%;
  gap: 2rem;
  padding: 4rem 8vw;
  will-change: transform; /* JS aplica translateX baseado em scroll */
}

.experiencia {
  flex: 0 0 auto;
  width: clamp(280px, 30vw, 480px);
  aspect-ratio: 3 / 4;
  display: flex;
  flex-direction: column;
}

/* Mobile: native scroll-snap horizontal */
@media (max-width: 899px) {
  .experiencias__viewport {
    position: static;
    height: auto;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
  }
  .experiencias__track { transform: none !important; }
  .experiencia { scroll-snap-align: center; }
}
```

### Animação

- **Desktop:** seção fixa-se na viewport (sticky 100vh). JS (`initExperienciasHScroll`) traduz o `.experiencias__track` em X conforme o usuário rola Y. Snap-points calculados pela posição de cada `.experiencia`.
- **Mobile:** scroll-snap horizontal nativo. CSS puro, sem JS.
- **Progress bar:** preenche conforme o scroll horizontal avança.
- **Reduced-motion:** desktop degrada para scroll-snap horizontal igual ao mobile.

### Mídia

| Item | Especificação |
|---|---|
| Foto retrato por experiência | 900×1200 (3:4), AVIF/WebP/JPEG, max 220 KB |
| Vídeo curto (opcional, premium) | 5–10s loop, sem áudio, max 600 KB, autoplay no hover desktop |
| Loading | `lazy` em todas exceto a primeira |

### Eventos GTM

```js
dataLayer.push({ event: 'secao_visualizada', secao: 'experiencias' });
dataLayer.push({ event: 'experiencia_visualizada', exp_slug: 'cafe' }); // por card
dataLayer.push({ event: 'clique_cta', cta_id: 'exp_cafe', cta_section: 'experiencias' });
```

### Acessibilidade

- `role="region"` no viewport com `aria-label`.
- Cada `<article>` tem `<h3>` próprio.
- Navegação por teclado: setas left/right movem entre experiências (JS).
- Touch: scroll-snap nativo no mobile preserva gesto natural.

### Budget local

- Peso: < 1.6 MB (4–7 fotos retrato + vídeos opcionais lazy).
- INP: < 100ms no scroll horizontal (transform GPU-accelerated).

---

## Ato 4 — Acomodações / Projetar

**Função.** Onde dormir. Stack-cards verticais full-bleed — cada tipologia é seu próprio card cinematográfico que empilha.

### Markup base

```html
<section class="acomodacoes" aria-labelledby="acom-title">
  <header class="acomodacoes__header card card--paper">
    <h2 id="acom-title">As acomodações</h2>
  </header>

  <article class="card card--acomodacao"
           data-acomodacao-slug="bangalo-lagoa">
    <picture class="card__media card__media--full">
      <source srcset="/assets/bangalo-lagoa.avif" type="image/avif">
      <img src="/assets/bangalo-lagoa.jpg"
           alt="Bangalô da Lagoa visto do deck externo"
           width="2400" height="1600" loading="lazy">
    </picture>
    <div class="card__content card__content--cinema">
      <h3>Bangalô da Lagoa</h3>
      <ul class="acomodacao__highlights">
        <li>Varanda suspensa sobre a água</li>
        <li>Banheira de cobre voltada para a mata</li>
        <li>Até 2 adultos + 1 criança</li>
      </ul>
      <a href="/acomodacoes/bangalo-lagoa/" class="btn-secondary">ver acomodação</a>
    </div>
  </article>

  <!-- repete por tipologia -->
</section>
```

### CSS-chave

```css
.card--acomodacao {
  position: relative;
  margin-top: calc(-1 * var(--card-overlap));
  border-top-left-radius: var(--card-radius);
  border-top-right-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
  min-height: 90vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 1fr auto;
}

.card__media--full img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card__content--cinema {
  padding: 3rem 6vw;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  color: white;
  position: absolute;
  bottom: 0; left: 0; right: 0;
}
```

### Animação

- **Stack-cards verticais:** cada `.card--acomodacao` herda o overlap padrão. JS aplica scale 0.96 + translateY -24px no card coberto pelo seguinte.
- **Reveal interno:** o conteúdo (`<h3>`, lista, CTA) entra com line-reveal quando o card chega na viewport.
- **Reduced-motion:** sem scale, sem translate; cards encostam um no outro sem "afundar".

### Mídia

| Item | Especificação |
|---|---|
| Foto principal por tipologia | 2400×1600 (3:2), AVIF/WebP/JPEG, max 320 KB |
| Galeria (subpágina) | 6–10 fotos, idem peso |
| Planta baixa estilizada | SVG, max 80 KB, opcional |

### Eventos GTM

```js
dataLayer.push({ event: 'secao_visualizada', secao: 'acomodacoes' });
dataLayer.push({ event: 'acomodacao_visualizada', acom_slug: 'bangalo-lagoa' });
dataLayer.push({ event: 'clique_cta', cta_id: 'ver_acomodacao', cta_section: 'acomodacoes' });
```

### Acessibilidade

- Cada acomodação como `<article>` semântico.
- `<h3>` interno, hierarquia mantida (h2 do header, h3 das acomodações).
- Alt das fotos: descritivo, evocando o atributo principal ("Bangalô da Lagoa visto do deck externo").
- Contraste de texto sobre foto: gradient overlay garante AA.

### Budget local

- Peso: < 1.8 MB (3–5 tipologias × foto principal).
- LCP do scroll: primeira foto de tipologia.

---

## Ato 5 — Espaços Comuns / Habitar

**Função.** Os lugares entre os momentos. Split-sticky scroll: imagem pinada à esquerda, texto rola à direita, com cross-fade de imagens conforme o usuário avança.

### Markup base

```html
<section class="card card--espacos" aria-labelledby="espacos-title">
  <h2 id="espacos-title" class="visually-hidden">Os espaços comuns</h2>

  <div class="espacos__split">
    <div class="espacos__media" aria-hidden="true">
      <picture data-espaco-image="0" class="is-active">
        <img src="/assets/espaco-deck.jpg" alt="" width="1200" height="1500" loading="lazy">
      </picture>
      <picture data-espaco-image="1">
        <img src="/assets/espaco-bar.jpg" alt="" width="1200" height="1500" loading="lazy">
      </picture>
      <!-- ... -->
    </div>

    <div class="espacos__panels">
      <article class="espaco-panel" data-espaco-index="0">
        <h3>Deck do amanhecer</h3>
        <p>Onde se toma café antes de todo mundo acordar.</p>
      </article>
      <article class="espaco-panel" data-espaco-index="1">
        <h3>Bar da lua</h3>
        <p>O drink que vem depois do banho frio, antes do jantar.</p>
      </article>
      <!-- ... -->
    </div>
  </div>
</section>
```

### CSS-chave

```css
.espacos__split {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 900px) {
  .espacos__split { grid-template-columns: 1fr 1fr; }
}

.espacos__media {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
}

.espacos__media picture {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity var(--duration-slow) var(--ease-base);
}
.espacos__media picture.is-active { opacity: 1; }

.espaco-panel {
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 8vw;
}
```

### Animação

- **Sticky media:** coluna esquerda fica pinada na viewport (sticky 100vh).
- **Cross-fade:** JS (`initEspacosSplitSticky`) observa qual painel textual está mais centralizado na viewport e adiciona `.is-active` na imagem correspondente.
- **Mobile:** stack vertical normal, cada espaço é uma seção full-width com sua imagem acima do texto.
- **Reduced-motion:** cross-fade vira swap instantâneo.

### Mídia

| Item | Especificação |
|---|---|
| Foto por espaço comum | 1200×1500 (4:5 retrato), AVIF/WebP/JPEG, max 250 KB |
| Sem pessoas posando | regra editorial — silhueta de costas ou espaço vazio |
| Loading | `lazy` em todas (seção fica abaixo da dobra inicial) |

### Eventos GTM

```js
dataLayer.push({ event: 'secao_visualizada', secao: 'espacos_comuns' });
```

### Acessibilidade

- Imagens decorativas (`alt=""` + `aria-hidden`) — o texto narra o conteúdo.
- Painéis textuais como `<article>` com `<h3>`.
- No mobile (sem split-sticky), imagens recebem alt descritivo (ex.: "Deck de madeira voltado para a lagoa ao amanhecer").

### Budget local

- Peso: < 1.5 MB (3–5 espaços).
- INP do cross-fade: < 50ms (CSS transition).

---

## Ato 6 — Prova Social / Validar  *(opcional)*

**Função.** Confirmação externa. Reveal estático sequencial; sem carrossel automático.

### Markup base

```html
<section class="card card--paper" aria-labelledby="prova-title">
  <h2 id="prova-title" class="prova__heading">O que dizem</h2>

  <div class="prova__grid">
    <blockquote class="depoimento" data-line-reveal>
      <p>"Saímos com a certeza de que voltaríamos antes mesmo de chegar em casa."</p>
      <footer>
        <cite>Mariana Coelho</cite>
        <span>São Paulo · janeiro 2026</span>
      </footer>
    </blockquote>
    <!-- repete 2-4x -->
  </div>

  <div class="prova__imprensa" data-line-reveal>
    <p>Mencionados em:</p>
    <ul>
      <li><a href="...">Condé Nast Traveler</a></li>
      <li><a href="...">Casa Vogue</a></li>
    </ul>
  </div>
</section>
```

### CSS-chave

```css
.prova__grid {
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr;
}

@media (min-width: 700px) {
  .prova__grid { grid-template-columns: repeat(2, 1fr); }
}

.depoimento p {
  font-family: var(--font-display);
  font-size: var(--font-size-lg);
  line-height: 1.3;
}

.depoimento cite {
  font-style: normal;
  font-weight: 500;
}
```

### Animação

- Reveal estático sequencial via `data-line-reveal` + IntersectionObserver. Cada depoimento entra com 100ms de delay em relação ao anterior.
- **Sem carrossel.** Sem auto-play. Sem rotação. Decisão editorial.

### Mídia

- Sem imagens obrigatórias. Foto opcional do hóspede só com autorização explícita escrita.

### Eventos GTM

```js
dataLayer.push({ event: 'secao_visualizada', secao: 'prova_social' });
```

### Acessibilidade

- `<blockquote>` semântico com `<cite>` e `<footer>`.
- Links de imprensa abrem em nova aba (`target="_blank" rel="noopener"`).

### Budget local

- Peso: < 100 KB (texto + tipografia).

---

## Ato 7 — Segmento Secundário / Amplificar  *(condicional)*

**Função.** Segundo público. Tom dramaticamente diferente — full-bleed, line-by-line reveal copy-driven.

### Markup base

```html
<section class="card card--segmento" aria-labelledby="seg-title">
  <picture class="card__media card__media--full">
    <img src="/assets/segmento-casamentos.jpg"
         alt="Cerimônia ao por do sol no deck principal"
         width="2400" height="1600" loading="lazy">
  </picture>
  <div class="segmento__content">
    <h2 id="seg-title" data-line-reveal>Casamentos à beira da lagoa</h2>
    <p data-line-reveal>Cerimônias para até 60 convidados. Estadia exclusiva. Curadoria de fornecedores locais.</p>
    <a href="/casamentos/" class="btn-primary" data-line-reveal>Saber mais</a>
  </div>
</section>
```

### CSS-chave

```css
.card--segmento {
  position: relative;
  min-height: 80vh;
  overflow: hidden;
  color: white;
}

.card--segmento .card__media--full img {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
}

.segmento__content {
  position: relative;
  padding: 6rem 8vw;
  background: linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2));
  max-width: 720px;
}
```

### Animação

- Line-by-line reveal sequencial com 200ms de delay entre h2, p e CTA.
- **Reduced-motion:** elementos visíveis sem transição.

### Mídia

| Item | Especificação |
|---|---|
| Foto âncora | 2400×1600 (3:2), AVIF/WebP/JPEG, max 320 KB |

### Eventos GTM

```js
dataLayer.push({ event: 'secao_visualizada', secao: 'segmento_secundario' });
dataLayer.push({ event: 'clique_cta', cta_id: 'segmento_saber_mais', cta_section: 'casamentos' });
```

### Acessibilidade

- Contraste WCAG AA garantido pelo gradient overlay.
- Alt evoca o produto-âncora ("cerimônia ao por do sol").

### Budget local

- Peso: < 360 KB.

---

## Ato 8 — Reserva / Encontrar

**Função.** Convite carta-do-anfitrião. Animação mínima — motion = ruído na conversão.

### Markup base

```html
<section class="card card--reserva" aria-labelledby="reserva-title">
  <div class="reserva__layout">
    <div class="reserva__carta">
      <h2 id="reserva-title">Venha</h2>
      <p>
        Se você chegou até aqui, alguma coisa do lugar já te tocou.
        Escreva, ligue, ou marque a data.
      </p>
      <p class="reserva__assinatura">Mariana, anfitriã.</p>
    </div>

    <div class="reserva__canais">
      <a href="#" onclick="openBooking();return false" class="btn-primary">
        Reservar agora
      </a>
      <a href="https://wa.me/5573999999999"
         class="btn-secondary"
         data-cta-id="reserva_whatsapp">
        Conversar no WhatsApp
      </a>
      <a href="/contato/" class="btn-link">Escrever um e-mail</a>
    </div>
  </div>
</section>
```

### CSS-chave

```css
.card--reserva {
  background: var(--color-paper);
  padding: clamp(4rem, 12vw, 10rem) 0;
}

.reserva__layout {
  display: grid;
  gap: 4rem;
  align-items: center;
}

@media (min-width: 900px) {
  .reserva__layout { grid-template-columns: 1.2fr 1fr; }
}

.reserva__carta p {
  font-family: var(--font-display);
  font-size: var(--font-size-lg);
  line-height: 1.4;
}

.reserva__canais {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
```

### Animação

- Reveal único na entrada da seção. Sem mais nada.
- **Princípio:** na seção que converte, motion = ruído.

### Mídia

- Sem foto obrigatória. Pode ter foto sutil do anfitrião como aside, opcional.

### Eventos GTM

```js
// Booking modal abre — registrado em main.js
dataLayer.push({ event: 'clique_cta', cta_id: 'reserva_principal', cta_section: 'reserva' });

// WhatsApp modal intercepta — fluxo padrão de captura
// (preventDefault → sendToWebhook → pushLead('whatsapp_modal') → wa.me)
```

### Acessibilidade

- Botões com texto descritivo (não "clique aqui").
- Foco visível em todos os CTAs.
- Tab order: Reservar → WhatsApp → E-mail.

### Budget local

- Peso: < 50 KB (só texto e CSS).

---

## Apêndices

### Checklist de performance pré-publicação

- [ ] Lighthouse Mobile com Slow 4G throttling: LCP < 2.5s, INP < 200ms, CLS < 0.05
- [ ] Bundle JS gzipped < 80 KB
- [ ] Total da home (network panel) < 1.5 MB
- [ ] Hero vídeo: WebM + MP4 + poster, todos abaixo do limite
- [ ] Todas as imagens: AVIF + WebP + JPEG fallback
- [ ] Todas as imagens abaixo da dobra inicial: `loading="lazy"`
- [ ] Hero poster: `fetchpriority="high"`
- [ ] Fontes: `display=swap` + preload da fonte display crítica
- [ ] `<picture>` com art direction onde o crop muda em mobile

### Checklist WCAG AA

- [ ] Contraste de texto: 4.5:1 (normal), 3:1 (large)
- [ ] Hierarquia de headings: h1 único no hero, h2 nas seções, h3 nos itens internos
- [ ] Todas as imagens com alt apropriado (descritivo ou vazio se decorativa)
- [ ] Todos os interativos navegáveis por teclado
- [ ] Foco visível em todos os interativos
- [ ] Modais: trap de foco + ESC fecha + retorno de foco ao trigger
- [ ] `prefers-reduced-motion` respeitado em todas as animações
- [ ] `lang="pt-BR"` no `<html>` (ou `lang` correspondente em multilingue)
- [ ] Skip-link no topo de cada página

### Checklist GTM

- [ ] Container ID injetado no `<head>` (script) e no topo do `<body>` (noscript)
- [ ] `gerar_lead` disparado em cada captura (whatsapp_modal, booking_form, contato_form)
- [ ] `secao_visualizada` para cada ato da home
- [ ] `clique_cta` em todos os CTAs trackeáveis
- [ ] `scroll_marco` em 25/50/75/90
- [ ] Preview mode validado antes do publicar
- [ ] Eventos chegam no GA4 com payload completo

---

*Komplexa Hotéis — Metodologia Boutique*
