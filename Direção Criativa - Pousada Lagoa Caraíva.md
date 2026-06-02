# Direção Criativa — Pousada Lagoa Caraíva

> v1 — rascunho. Precisa de aprovação tua antes de virar base de produção.
> Baseado em: `Briefing do Sistema - Pousada Lagoa Caraíva.md`.

---

## 1. Conceito-âncora (1 frase)

Três rascunhos para você escolher / combinar / vetar. Nenhum é definitivo.

> **A) "A travessia continua."**
> A vila começa do outro lado do rio, mas a travessia não termina ao chegar. A pousada é o ponto onde o ritmo da canoa permanece. *Aposta forte. Captura o tempo lento sem cair em "desconexão" de marketing.*

> **B) "O coração verde de Caraíva."**
> A vila inteira é uma quietude — a Lagoa é o ponto mais quieto. Centra a propriedade como o íntimo dentro do íntimo. *Mais óbvia, mas também mais pousada-como-personagem.*

> **C) "Onde o tempo bóia."**
> Referência direta às vitórias-régias. Mais imagético, menos discursivo. *Risco: poético demais para virar argumento de venda.*

**Recomendação:** começar pelo (A) como espinha dorsal e usar (B) como subtítulo da seção "A pousada". (C) fica como nome de uma seção visual, não como conceito-mestre.

## 2. Sistema sensorial

### Paleta (proposta para refinar com fotos reais)

| Papel | Cor | Origem |
|---|---|---|
| **Base** | Areia clara — `#EDE3D2` ou similar | A rua da vila, a praia |
| **Tinta** | Verde mata profundo — `#2E4A3A` ou similar | O jardim, as vitórias-régias |
| **Acento principal** | Azul rio/mar — `#3A6B82` ou similar | Janelas dos bangalôs, a água |
| **Acento de calor** | Terracota / dendê — `#B7693A` ou similar | Telhas, o pôr do sol, o forró |
| **Texto** | Marrom-escuro / quase-preto — `#2A2118` | Tinta de jornal, fugir do preto puro |

Os valores acima são targets. **Calibrar contra o banco de fotos do cliente assim que chegar** — paleta de hotel boutique vive ou morre na coerência com a fotografia.

### Tipografia

- **Display:** **Cormorant Garamond** (peso Regular para títulos longos, Light italic para citações). Alternativas se a Cormorant ficar genérica demais nas fotos do cliente: **Tiempos Headline**, **GT Sectra**, **Canela**.
- **Corpo:** **Söhne** ou **GT America Standard** (humanist sans, peso 400 e 500). Inter é aceitável mas genérico — só se for última opção.
- **Pesos a evitar:** Black, Heavy. Tudo abaixo de 700.
- **Anti-preferência explícita:** Playfair Display. Não usar.

Tamanhos âncora (mobile → desktop):
- Hero: 40px → 88px (Cormorant Light italic em parte do título, Regular no resto — contraste interno)
- Seção: 28px → 48px
- Corpo: 17px (mobile) / 18px (desktop), line-height 1.6
- Caption: 13px, letter-spacing positivo

### Movimento

Princípio: **CSS-native primeiro.** GSAP / Lenis só se uma seção específica justificar — code-split, carga sob demanda, nunca global.

- **Scroll-driven nativo** (`animation-timeline: scroll()`) para fades e parallax suaves.
- **`prefers-reduced-motion`** sempre respeitado.
- **Fade-in com translação curta** (8–16px) ao entrar no viewport. Duração 600–900ms. Easing custom (algo próximo de `cubic-bezier(0.16, 1, 0.3, 1)`).
- **Hover em fotos:** zoom 1.03 em 800ms, nada agressivo.
- **Sem cursor customizado, sem cortina de transição entre páginas.**
- **Hero estático com vídeo silencioso** (loop curto da travessia ou da lagoa) é OK — mas com poster-image WebP e `preload="metadata"`.

### Som (Boutique permite, mas é opcional)

Se entrar, é discreto e opcional:
- Sutil sample ambiente (água, pássaros, forró distante) controlado por toggle no canto. **Off por default.** Nunca autoplay com som.
- Considerar um clipe único de 8–12s na seção da lagoa, ativável com clique numa pequena onda animada. Decidir depois das fotos/vídeos chegarem.

## 3. Mapa narrativo da home

Sequência emocional. Cada bloco é uma sensação antes de ser um conteúdo.

| # | Bloco | Sensação | Conteúdo |
|---|---|---|---|
| 1 | **A travessia** | *Você entrou em outro tempo.* | Vídeo loop silencioso da canoa cruzando o rio. Logo aparece sutilmente. Frase única em Cormorant italic. CTA discreto: "Descer". |
| 2 | **A vila** | *Aqui não há pressa.* | 2 fotos lado-a-lado (rua de areia + Praia da Barra ao pôr do sol). Texto curto: o que é Caraíva, em 3 frases. Link para `/a-vila/`. |
| 3 | **A pousada** | *Um respiro dentro do respiro.* | Foto larga da lagoa com vitórias-régias. Quote curta da Herminia (quando confirmada). Texto: o oásis verde, a história da família. |
| 4 | **Os bangalôs** | *Sua casa por uns dias.* | Carrossel/grid de 3–4 bangalôs com janela colorida em destaque. Capacidade, faixa de preço (se confirmada), CTA por bangalô. |
| 5 | **Bem-estar** | *O corpo desacelera junto.* | Yoga / meditação / massagem / café vegano. 4 fotos quadradas em grid. Copy curta, sensorial. |
| 6 | **Casamentos** | *Casa cheia, sem barulho.* | Foto de evento real (quando disponível). Copy direta sobre capacidade e o tipo de casamento que cabe ali. CTA para `/casamentos/`. |
| 7 | **Reservas** | *Comece a sua travessia.* | CTA principal `openBooking()`. Atrás dele, foto da lagoa ao crepúsculo. |

A sequência **deve** ser preservada — é a tradução do ritual real de chegada.

## 4. Bíblia de voz

### Princípios

- **Sensorial antes de adjetivo.** "Areia entre os pés" antes de "praia paradisíaca".
- **Frases curtas** intercaladas com frases longas. Nunca tudo curto (vira slogan), nunca tudo longo (vira blog).
- **Verbos no presente.** "A canoa atravessa o rio." Não "A canoa atravessará".
- **Primeira pessoa do plural com moderação.** "Recebemos" sim. "Nós da pousada acreditamos" não.
- **Bilíngue real**, não tradução literal. EN tem peso editorial próprio; usar copywriter EN nativo na revisão final.

### Vocabulário-assinatura

`atravessar`, `chegar devagar`, `lagoa`, `vila`, `pé na areia`, `vitória-régia`, `cajueiro`, `oásis`, `silêncio`, `manhã morna`, `Herminia`, `Pataxó`, `forró pé-de-serra`, `Netuno`, `Barra`.

### Vocabulário proibido

- "Paradisíaco", "experiência única", "exclusivo", "luxo" (puro), "VIP", "premium", "completo", "imperdível", "diferenciado".
- "Desconecte-se" — virou cliché de hotel rural; usar variantes mais concretas.
- "Magia", "mágico" — preguiçoso quando o lugar tem fato suficiente.
- "Bem-vindo ao paraíso" — banido.
- "Nosso compromisso é..." — qualquer construção corporativa.

### Microcopy âncora

- CTA reservar: **"Reservar Agora"** (PT) / **"Book Your Stay"** (EN).
- CTA WhatsApp: **"Falar conosco"** (PT) / **"Talk to us"** (EN). NÃO "fale agora!".
- Erro de form: humano, curto. "Esqueceu o e-mail." não "Por favor, preencha todos os campos obrigatórios.".

## 5. Anti-referências (o que **não** queremos parecer)

- Sites de resort all-inclusive — banners rotativos, "ofertas imperdíveis", azul-cyan saturado.
- Booking.com / Trivago aesthetic — denso, comercial, pressão de venda.
- Hotel-fazenda genérico — Playfair, marrom escuro, fotos com pessoas posando de roupão.
- Casamento-de-revista — flores e tipografia em script. Casamentos aqui são pé-na-areia, não Vila Olímpia.
- Hotel-spa wellness "purificante" — saturação branca, copy esotérica, lavanda.
- Sites com cursor customizado, cortina-de-página em transições, parallax dramático. Excesso de motion lê como inseguro.

## 6. Princípios de design (5 regras inegociáveis)

1. **A imagem precede a palavra.** Cada seção é decidida pela foto antes da copy. Se a foto não existe, a seção não existe ainda.
2. **Mobile real, 4G real.** Toda decisão visual passa pelo teste de carregar em 3G simulado + CPU 4× throttle. Se quebra, troca.
3. **A lagoa é recorrente.** Vitória-régia, reflexo, verde-da-água aparecem em pelo menos 4 das 7 seções da home. É o leitmotiv visual.
4. **Bilíngue desde o primeiro pixel.** Toda string editorial nasce em PT + EN, simultaneamente. Não há "v1 só em português".
5. **Silêncio é tipográfico.** Espaço em branco generoso, fontes em peso baixo, line-height alto. O site precisa parecer respirar — porque a vila respira.

---

## Pendências antes de fechar v2

- Banco de fotos real do cliente (calibrar paleta e tipografia contra ele).
- Aprovação ou troca do conceito-âncora.
- Confirmar se há licenças para vídeo na Praia da Barra ou se é stock.
- Entrevistar a Herminia para uma quote-âncora autêntica.
- Decidir se o som ambiente entra ou não (depende das fotos/vídeos disponíveis).
