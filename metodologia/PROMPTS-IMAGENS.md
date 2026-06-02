# Prompts de imagem — `metodologia/`

Os mockups CSS dão conta dos componentes (anúncio, site, banner, e-mail, WhatsApp, dashboard).
Mas três pontos da apresentação se beneficiam muito de imagem real custom — listo abaixo o prompt pronto, a ferramenta sugerida, a proporção e onde aplicar.

> Paleta Komplexa que entra nos prompts: navy `#0B1729` / `#14233C`, cyan `#00C6FF` / `#0099CC`, branco quente `#FAFBFC`. Tipografia interna: nada (deixar vazio para sobrepor texto via HTML).

---

## 1. Hero — atrás do título "Arquitetura de Crescimento Hoteleiro"

**Onde aplicar:** `slide--hero`, atrás dos `.slide__layer` atuais (substitui ou complementa o gradient).

**Proporção:** 16:9 (ou 21:9 se for usar full-bleed). Resolução mínima 2400×1350.

**Ferramenta recomendada:** Midjourney v6.1 (melhor para textura cinemática) ou Flux 1.1 Pro.

**Prompt (Midjourney):**
```
abstract cinematic data architecture, glowing cyan light ribbons flowing through deep navy blue space, three-dimensional network of fine threads converging into a single bright node, subtle bokeh particles, ultra-clean minimalism, no text, premium technology aesthetic, dark moody atmosphere with selective cyan #00C6FF highlights, depth of field, photographed with anamorphic lens, cinematic composition, suitable as full-bleed website hero background --ar 21:9 --style raw --stylize 200
```

**Prompt (Flux / DALL·E):**
```
A cinematic abstract background for a luxury hotel technology brand. Deep navy blue (#0B1729) gradient atmosphere with multiple thin glowing cyan light threads (#00C6FF) flowing horizontally and converging gently toward the right side. Subtle particles of light, depth of field blur, no people, no text, no logos. Ultra-clean and premium feel, like a product launch keynote backdrop. 21:9 aspect ratio, very high resolution.
```

---

## 2. Slide 04 — IA selecionando público (alternativa ao mockup CSS)

**Onde aplicar:** dentro de `.srv__visual` do slide `#etapa-0`, substituindo o `figure.demo--ai` (ou flutuando ao lado dele como reforço).

**Proporção:** 4:5 (vertical) ou 1:1.

**Ferramenta recomendada:** Midjourney v6.1 ou Imagen 3 (melhor para visualização de dados estilizada).

**Prompt:**
```
isometric data visualization illustration, large cloud of small grey-toned dots representing a wide audience, a glowing cyan ring (#00C6FF) hovering over a select cluster of dots inside the cloud highlighting them in vibrant cyan, soft shadow underneath, clean white background (#FFFFFF), minimalist editorial style, no text, no faces, premium SaaS product illustration aesthetic, depth and dimensionality, --ar 4:5 --style raw --stylize 150
```

**Prompt alternativo (estilo abstrato com pessoas):**
```
top-down minimalist illustration of a crowd of small abstract human silhouettes scattered on a white surface, a glowing cyan circle of light (#00C6FF) hovers above and selects only a small group of them, the selected silhouettes glow softly cyan while the others stay neutral grey, clean studio lighting, no text, no logos, premium tech brand aesthetic, --ar 4:5
```

---

## 3. Slide 03 — Reforço visual atrás do pipeline (opcional)

**Onde aplicar:** se quiser dar profundidade ao slide do Sistema, colocar como background-image sutil (com `opacity: 0.07`) atrás de `.pipeline__rail`.

**Proporção:** 16:7 (faixa horizontal larga).

**Prompt:**
```
extremely subtle horizontal flow diagram background, faint cyan light streams flowing left to right, suggesting connection and movement, on a clean off-white background (#FAFBFC), barely visible (5–10% opacity feel), no shapes, no text, just abstract gentle gradient of motion, premium minimalism, --ar 16:7
```

---

## 4. Hero alternativo — fotografia hoteleira aspiracional

Se o time preferir um hero mais quente (em vez do abstract tech), usar uma foto editorial de hotel com tratamento navy + cyan. **Não é prioritário** — só se decidirem reposicionar a capa para "hospitalidade premium" em vez de "engenharia comercial".

**Prompt (Midjourney):**
```
editorial wide-angle photograph of a modern hospitality interior at dusk, warm interior lights, deep navy blue sky with subtle cyan reflection on glass surfaces, anamorphic cinematic look, no people, atmospheric, premium hotel branding aesthetic, photographed with Sony A7R V, 35mm lens, --ar 21:9 --style raw
```

---

## Pipeline interno

1. Gerar 3 variantes de cada prompt (Midjourney `--repeat 3`).
2. Salvar em `metodologia/assets/img/` com nomes:
   - `hero-bg.webp` (ou `.jpg`)
   - `ia-selection.webp`
   - `pipeline-bg.webp` (opcional)
3. Otimizar com Squoosh (WebP, qualidade 78).
4. Aplicar via CSS em background-image, lazy quando off-screen.

---

## Anti-references (NÃO usar)

- Stock photo de "businessman pressing AI button". Klisché.
- 3D renders de cérebros conectados em rede.
- Imagens com texto sobreposto (todo texto entra via HTML).
- Gradients arco-íris ou sci-fi neon — Komplexa é cyan + navy, não cyberpunk.
