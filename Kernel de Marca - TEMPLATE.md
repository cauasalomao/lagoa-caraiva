# Kernel de Marca — [Nome do Hotel]

> Artefato derivado do briefing. Codifica as decisões de marca mínimas que o site precisa pra ser coerente.
> **Não é manual de marca completo** — esse é serviço próprio. Aqui mora o irreduzível.
>
> Gerado em: [data]
> Tier: [Standard | Boutique]
> Conceito-âncora: "[frase de 8–12 palavras]"

---

## 1. Paleta — cor com função

Cinco a seis cores, cada uma com função nomeada. **A função é mais importante que o valor exato** — o cliente pode trocar `#hex` desde que respeite o papel.

| Função | Cor | Origem / racional |
|---|---|---|
| **Base** (fundo principal, áreas vazias) | `#______` | [de onde vem — ex: areia da praia, parede caiada] |
| **Tinta** (texto, traço) | `#______` | [origem] |
| **Acento principal** (ações, links, foco) | `#______` | [origem] |
| **Acento de calor** (urgência calculada, destaque raro) | `#______` | [origem] |
| **Erro / alerta** (forms, validação) | `#______` | [origem; geralmente derivado da paleta, não vermelho-padrão] |
| _(opcional)_ **Acento secundário** | `#______` | [origem] |

**Regra:** todo elemento na home aterra em uma dessas funções. Se uma cor não cabe em uma das funções, ela não entra.

---

## 2. Tipografia — duas famílias, type scale nomeada

| Papel | Família | Pesos usados | Quando aparece |
|---|---|---|---|
| **Display** (títulos, hero, frase-âncora) | [família] | [ex: 300, 400, 500] | h1, h2, frases grandes |
| **Corpo** (parágrafos, UI, navegação) | [família] | [ex: 300, 400, 500, 600] | tudo o resto |

### Type scale (mobile → desktop)

| Token | Mobile | Desktop | Uso |
|---|---|---|---|
| `--display-hero` | _px | _px | h1 do hero |
| `--display-section` | _px | _px | h2 das seções |
| `--display-sub` | _px | _px | h3, frases secundárias |
| `--body-lede` | _px | _px | parágrafo de abertura, lede |
| `--body` | _px | _px | corpo padrão |
| `--caption` | _px | _px | legendas, eyebrow, metadata |

**Pesos a evitar:** [listar — ex: Black, Heavy, qualquer < 300]

**Anti-preferência tipográfica:** [família que não pode ser usada — ex: Playfair, Times New Roman]

---

## 3. Voz — princípios

### Cinco "sim"

1. **[princípio]** — [exemplo curto]
2. **[princípio]** — [exemplo]
3. **[princípio]** — [exemplo]
4. **[princípio]** — [exemplo]
5. **[princípio]** — [exemplo]

### Cinco "não"

1. **[anti-princípio]** — por que evita
2. **[anti-princípio]** — por que evita
3. **[anti-princípio]** — por que evita
4. **[anti-princípio]** — por que evita
5. **[anti-princípio]** — por que evita

---

## 4. Vocabulário — assinatura e proibido

### Vocabulário-assinatura (10 palavras / expressões que esse hotel usa)

`palavra1`, `palavra2`, `palavra3`, `palavra4`, `palavra5`,
`palavra6`, `palavra7`, `palavra8`, `palavra9`, `palavra10`

### Vocabulário proibido (10 palavras / expressões que esse hotel nunca usa)

- "[expressão proibida]" — [motivo]
- "[expressão proibida]" — [motivo]
- "[expressão proibida]" — [motivo]
- "[expressão proibida]" — [motivo]
- "[expressão proibida]" — [motivo]
- "[expressão proibida]" — [motivo]
- "[expressão proibida]" — [motivo]
- "[expressão proibida]" — [motivo]
- "[expressão proibida]" — [motivo]
- "[expressão proibida]" — [motivo]

### Microcopy âncora (CTAs, erros, confirmações)

| Contexto | PT | EN _(se Boutique bilíngue)_ |
|---|---|---|
| CTA de reserva | "[texto]" | "[texto]" |
| CTA de WhatsApp | "[texto]" | "[texto]" |
| Erro de form | "[texto humano e curto]" | "[texto]" |
| Confirmação | "[texto]" | "[texto]" |

---

## 5. Direção fotográfica — uma frase

> [Frase única que define o que entra e o que não entra. Ex: "sem stock, sem pessoas posando, primeira pessoa sempre, luz natural ou velas, nunca flash direto."]

**Anti-referências de fotografia (3-5):**

- [tipo de foto que não entra — ex: Booking.com aesthetic]
- [tipo — ex: hotel-fazenda com pessoas em roupão]
- [tipo — ex: aerial drone over-saturado de OTA]

---

## 6. Motion signature — o que se move

### Movimento próprio (1 obrigatório, 2 max)

**[Nome do movimento]** — [descrição curta]
- Por que esse movimento: [racional ligando ao conceito-âncora]
- Onde aparece: [hero, transições, leitmotiv]
- Implementação: [CSS-native, sem libs / ou exceção justificada]

### Primitivo visual recorrente (1 obrigatório)

**[Nome da forma / textura / padrão]** — [descrição]
- Origem: [sensorial — vem do quê do hotel]
- Reuso: [onde aparece — ícones, divisores, transições, lightbox]

---

## Checklist de fechamento

Antes de aprovar o kernel, todas as células acima precisam estar preenchidas. Itens marcados como `[TODO]` ou em branco bloqueiam início da produção.

- [ ] Conceito-âncora fechado e aprovado pelo cliente
- [ ] Paleta com todas as 5 funções preenchidas
- [ ] Type scale com pelo menos 4 tokens
- [ ] Pelo menos 5 "sim" + 5 "não" da voz
- [ ] 10 palavras-assinatura + 10 proibidas
- [ ] CTAs em PT (e EN se Boutique)
- [ ] 1 frase de direção fotográfica
- [ ] 1 motion signature + 1 primitivo visual

---

## Como usar

- Este kernel é o **artefato canônico** do projeto. Vive no repositório do site, não em ferramenta externa.
- Toda decisão de produção que contradiga o kernel precisa ou (a) atualizar o kernel com aprovação, ou (b) ser revertida.
- Ao final do projeto, o kernel é entregue ao cliente como referência. Se o cliente quiser estendê-lo para um manual de marca completo, aciona o serviço próprio da Komplexa.
