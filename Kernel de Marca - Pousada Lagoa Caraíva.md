# Kernel de Marca — Pousada Lagoa Caraíva

> Artefato derivado do briefing. Codifica as decisões de marca mínimas que o site precisa pra ser coerente.
> **Não é manual de marca completo** — esse é serviço próprio. Aqui mora o irreduzível.
>
> Gerado em: 2026-05-01
> Tier: **Boutique**
> Conceito-âncora: **"A travessia continua."**
> Subordinado: "O coração verde de Caraíva." (subtítulo da seção A pousada)

---

## 1. Paleta — cor com função

| Função | Cor | Origem / racional |
|---|---|---|
| **Base** (fundo principal, áreas vazias) | `#EDE3D2` (areia clara) | A rua de areia da vila, a praia da Barra. Calor sem amarelar. |
| **Tinta** (texto, traço, áreas escuras) | `#2E4A3A` (verde mata profundo) | O jardim, as folhas das vitórias-régias. Substitui o preto puro. |
| **Acento principal** (ações, links, foco) | `#3A6B82` (azul rio/mar) | As janelas dos bangalôs, o Rio Caraíva. Dá direção à travessia. |
| **Acento de calor** (urgência calculada, destaque raro) | `#B7693A` (terracota / dendê) | As telhas, o pôr do sol da Barra, o forró à noite. |
| **Erro / alerta** | `#B7693A` (mesmo terracota, em peso baixo) | Não usar vermelho-padrão de UI — sai do sistema. |
| **Texto sobre base** | `#2A2118` (marrom-escuro, quase-preto) | Tinta de jornal — foge do `#000` puro, fica orgânico. |

**Regra:** todo elemento da home aterra em uma das funções acima. Cor que não cabe em uma função não entra.

**Calibração pendente:** valores são targets. Ajustar contra banco de fotos real do cliente quando entregue — paleta de boutique vive ou morre na coerência com a fotografia.

---

## 2. Tipografia — duas famílias, type scale nomeada

| Papel | Família | Pesos usados | Quando aparece |
|---|---|---|---|
| **Display** | **Cormorant Garamond** | 300 (Light italic), 400 (Regular), 500 (Medium) | h1 do hero, h2 das seções, frase-âncora, citações |
| **Corpo** | **Inter** _(provisório — meta: Söhne ou GT America Standard quando licença disponível)_ | 300, 400, 500, 600 | parágrafos, navegação, UI |

**Alternativas para Display** se Cormorant ficar genérica nas fotos do cliente: **Tiempos Headline**, **GT Sectra**, **Canela**.

### Type scale (mobile → desktop)

| Token | Mobile | Desktop | Uso |
|---|---|---|---|
| `--display-hero` | 40px | 88px | h1 do hero (Cormorant Light italic em parte do título, Regular no resto — contraste interno) |
| `--display-section` | 28px | 48px | h2 das seções |
| `--display-sub` | 22px | 32px | h3, subtítulos |
| `--body-lede` | 19px | 22px | parágrafo de abertura, lede |
| `--body` | 17px | 18px | corpo padrão |
| `--caption` | 13px | 13px | legendas, eyebrow, metadata (letter-spacing positivo) |

**Pesos a evitar:** Black/Heavy (800+), Thin/UltraLight (100-200). Sweet spot 300-600. Itálico apenas em 300-400.

**Anti-preferência tipográfica:** Playfair Display. Não usar — está esgotada em hospitalidade.

---

## 3. Voz — princípios

### Cinco "sim"

1. **Sensorial antes de adjetivo.** "Areia entre os pés" antes de "praia paradisíaca". Concreto vence abstrato.
2. **Frases curtas intercaladas com longas.** Nunca tudo curto (vira slogan), nunca tudo longo (vira blog). O ritmo é editorial.
3. **Verbos no presente.** "A canoa atravessa o rio." Nunca "atravessará".
4. **Primeira pessoa do plural com moderação.** "Recebemos" sim. "Nós da pousada acreditamos" não.
5. **Bilíngue real, não tradução literal.** EN tem peso editorial próprio — copywriter nativo na revisão final, sempre.

### Cinco "não"

1. **Adjetivos de marketing genérico.** "Paradisíaco", "exclusivo", "VIP", "premium" — todos opacizam o sensorial concreto.
2. **Construções corporativas.** "Nosso compromisso é...", "valorizamos cada hóspede". Não é tom de pousada de família.
3. **Clichês de hospitalidade.** "Bem-vindo ao paraíso", "Desconecte-se", "Magia". Esgotados — sinalizam estúdio que não pesquisou.
4. **Língua de venda agressiva.** "Imperdível", "última oportunidade", "garanta já". Boutique não pressiona.
5. **Tradução literal PT→EN.** "Atravesse seu próprio tempo" não vira "Cross your own time" — quebra. EN precisa de re-escrita.

---

## 4. Vocabulário — assinatura e proibido

### Vocabulário-assinatura (15 termos que o hotel usa)

`atravessar`, `chegar devagar`, `lagoa`, `vila`, `pé na areia`,
`vitória-régia`, `cajueuro`, `oásis`, `silêncio`, `manhã morna`,
`Herminia`, `Pataxó`, `forró pé-de-serra`, `Netuno`, `Barra`

### Vocabulário proibido (10 expressões que o hotel nunca usa)

- "Paradisíaco" — virou cliché de OTA. Substitui com sensorial concreto.
- "Experiência única" — toda experiência é única. Sem informação.
- "Exclusivo" / "VIP" / "Premium" — boutique não é hierarquia, é curadoria.
- "Imperdível" — pressão de venda incompatível com tom.
- "Diferenciado" — palavra-curinga vazia.
- "Desconecte-se" — cliché de hotel rural; usar variantes concretas ("celular pode ficar guardado", "céu sem fios").
- "Magia" / "mágico" — preguiçoso quando o lugar tem fato suficiente.
- "Bem-vindo ao paraíso" — banido.
- "Nosso compromisso é..." — qualquer construção corporativa.
- "Completo" / "completa" — aplicado a "experiência completa", "vista completa". Vazio.

### Microcopy âncora

| Contexto | PT | EN |
|---|---|---|
| CTA de reserva | **"Reservar Agora"** | **"Book Your Stay"** |
| CTA de WhatsApp | **"Falar conosco"** | **"Talk to us"** |
| Erro de form | "Esqueceu o e-mail." (humano, curto) | "You forgot the email." |
| Confirmação de envio | "Recebemos. A Herminia ou alguém da família responde em breve." | "Got it. Herminia or someone from the family will reply shortly." |
| 404 | "A travessia se perdeu. Voltar pra home?" | "The crossing got lost. Back to the home?" |

---

## 5. Direção fotográfica — uma frase

> **Sem stock, sem pessoas posando, primeira pessoa sempre. Luz natural ou velas, nunca flash direto. A imagem precede a palavra — se a foto não existe, a seção não existe ainda.**

### Anti-referências de fotografia

- **Booking.com / OTA aesthetic** — denso, comercial, drone over-saturado. Caraíva não é commodity.
- **Hotel-fazenda genérico** — pessoas posando de roupão branco, café da manhã estilizado em mesa redonda. Não é o tom da vila.
- **Casamento-de-revista** — flores em arco, vestidos de gala, tipografia em script. Casamento aqui é pé-na-areia, à luz de velas.
- **Hotel-spa "purificante"** — saturação branca, modelos meditando em deck infinito. Lagoa Caraíva é tropical, não asséptico.
- **Drone aéreo dramático sobre azul-cyan** — cliché de Caribe. A Bahia tem cor própria, mais terrosa.

---

## 6. Motion signature — o que se move

### Movimento próprio

**Travessia em água — ripples concêntricos.**

- **Por que esse movimento:** o conceito-âncora é "A travessia continua." A água é o leitmotiv literal — o hóspede atravessa o Rio Caraíva pra chegar, e a lagoa de vitórias-régias é o coração visual da pousada. O movimento da água como tempo passando é o gesto exato da marca.
- **Onde aparece:** hero (camadas de água + ripples concêntricos infinitos), transições entre seções (subtle ripple no fundo), 404 (água parada que ondula no hover).
- **Implementação:** CSS-native — `radial-gradient` animado + `transform: scale()` em pseudoelementos. Sem GSAP, sem Lenis. Gestão de `prefers-reduced-motion` obrigatória.

### Primitivo visual recorrente

**Vitória-régia — silhueta de folha redonda como leitmotiv.**

- **Origem:** "personagem principal" do jardim da pousada, citada em quase todas as reviews. Forma circular, com recorte característico de fenda lateral.
- **Reuso:**
  - Ícone do logotipo (já existe a forma `~` como sugestão de água; vitória-régia entra como variante / favicon)
  - Divisor entre seções (silhueta sutil em watermark)
  - Indicador do lightbox da galeria
  - Loading spinner (folha girando lenta, em vez do spinner padrão)
  - Marcador de bullet em listas editoriais

A vitória-régia é a forma; a água é o movimento. Os dois compõem o sistema visual exclusivo da Lagoa — outro hotel Komplexa não os usa.

---

## Checklist de fechamento

- [x] Conceito-âncora fechado e aprovado pelo cliente _(provisório — entrevistar Herminia para confirmar/refinar)_
- [x] Paleta com todas as 5 funções preenchidas _(calibrar contra fotos reais do cliente)_
- [x] Type scale com 6 tokens
- [x] 5 "sim" + 5 "não" da voz
- [x] 15 palavras-assinatura + 10 proibidas
- [x] CTAs em PT e EN
- [x] 1 frase de direção fotográfica + 5 anti-referências
- [x] 1 motion signature (ripples) + 1 primitivo visual (vitória-régia)

### Pendências de calibração final

- Entrevistar Herminia para validar conceito-âncora "A travessia continua" e extrair quote autêntica.
- Banco de fotos real do cliente, com direitos de uso, para calibrar valores exatos da paleta.
- Confirmar licenças tipográficas se Söhne / GT America entrarem no lugar de Inter.
- Definir SVG final da vitória-régia como ícone (decisão de produção, não de kernel).

---

## Como usar este kernel

- Vive em `/Kernel de Marca - Pousada Lagoa Caraíva.md`, no repositório do site, junto com os briefings.
- Toda decisão de produção que contradiga este kernel precisa ou (a) atualizar o kernel com aprovação documentada, ou (b) ser revertida.
- Ao final do projeto, o kernel é entregue à Herminia como referência. Se a pousada quiser estender para um manual de marca completo (extensões para impressos, signage, papelaria, redes sociais), aciona o serviço próprio da Komplexa.
