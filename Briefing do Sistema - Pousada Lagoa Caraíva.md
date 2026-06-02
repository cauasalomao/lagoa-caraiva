# Briefing do Sistema — Pousada Lagoa Caraíva

> Síntese organizada usada como contexto da LLM. Mantém coerência factual e tonal entre páginas, copy e decisões de IA.
> Esta versão é uma síntese a partir de pesquisa cruzada (site oficial, Booking, Tripadvisor, reviews) — **não substitui** a entrevista direta com a Herminia van Tol e a equipe, que ainda precisa acontecer (`Briefing do Cliente - Pousada Lagoa Caraíva.md` segue pendente).

---

## 1. Contexto geográfico e cultural — Caraíva

Caraíva é uma vila histórica no extremo sul da Bahia, dentro do município de Porto Seguro. É uma das ocupações mais antigas do Brasil (próxima dos 500 anos) e tem uma identidade que precisa ser tratada como o primeiro personagem do site.

**Marcadores de identidade da vila:**

- **Travessia obrigatória de canoa pelo Rio Caraíva** — não se chega de carro. A vila é acessível apenas por barco. É o momento que define a chegada.
- **Ruas de areia, sem veículos motorizados, fiação enterrada** — exigência da comunidade para preservar o céu estrelado e a estética. A vila é visualmente "limpa" — sem postes, sem fios.
- **Praia da Barra** — encontro do rio com o mar, banho de água doce e salgada no mesmo dia, ritual do pôr do sol.
- **Cultura Pataxó** (Aldeia Barra Velha próxima), tradição caiçara de pesca, forró pé-de-serra à noite (Forró do Pelé, Forró do Ouriço).
- **Cheiros-âncora:** maresia, dendê, coqueiro, fumaça de fogão a lenha.
- **Bebida símbolo:** o "Netuno" (cachaça com gengibre).
- **Linguagem-chave:** "pé na areia", "simplicidade sofisticada", "tempo que parou", "desconexão", "slow".

## 2. Identidade da propriedade

**Pousada Lagoa Caraíva** — gestão familiar, escala íntima, dentro da vila.

**Núcleo factual:**
- 7–8 bangalôs em material local, arquitetura rústica, janelas amplas e coloridas (azul é tema recorrente).
- **A lagoa com vitórias-régias no centro do gramado é o "personagem principal"** — citada em quase todas as reviews ("spectacular lily pond", "two lagoons", "beautiful pond").
- Cajueiros, pássaros coloridos, jardim tropical generoso. Área maior que a média das pousadas locais.
- ~50m do Rio Caraíva, ~400m da Praia da Barra. Sigilosa o suficiente para ser silenciosa.

**Diferenciais:**
- Yoga, meditação, massagem (incluindo tailandesa), em espaços de material local.
- Café da manhã vegano servido ao ar livre.
- Pet-friendly.
- Espaço para casamentos e eventos (público importante).
- Gestão familiar — Herminia van Tol (sobrenome holandês). Narrativa "estrangeira que se apaixonou por Caraíva", paralela ao Wilbert Das do UXUA Trancoso.

## 3. Três ângulos narrativos centrais

Toda decisão de copy, foto, motion ou IA deve passar por estes filtros:

1. **A lagoa como coração.** Personagem visual. Ponto de retorno do olhar. Símbolo de quietude no centro de uma vila já quieta.
2. **O oásis verde no meio da vila.** Densidade de jardim e vida tropical num ponto onde as outras pousadas são mais minerais.
3. **A hospitalidade familiar.** A "estrangeira que escolheu Caraíva". Pequena escala, atendimento direto, casa antes de hotel.

## 4. Públicos-alvo

- **Casais brasileiros 28–45**, urbanos, querendo desaceleração consciente. Vetor principal.
- **Estrangeiros** (EUA, Europa, principalmente holandeses por afinidade com a gestão) buscando "Brasil autêntico" — peso forte, evidente nas reviews em inglês. Bilíngue PT/EN é obrigatório.
- **Casamentos e eventos íntimos** — destination weddings de pequeno porte. Vetor de receita relevante, merece página própria.
- **Público wellness** (yoga / retiro) — afluente secundário.

## 5. Paralelos internacionais (referencial sensorial e operacional)

| Referência | Por que estudar |
|---|---|
| **UXUA Trancoso** (uxua.com) | **Benchmark absoluto.** Mesma região, "rustic-modernism", fundação por estrangeiro, narrativa de comunidade e Pataxó, site bilíngue. **Estudar primeiro.** |
| Casa Las Tortugas (Holbox, MX) | Paralelo mais direto — vila de pescadores sem carros, ruas de areia, virou destino boutique. DNA quase 1:1. |
| Bambu Indah (Ubud, Bali) | Bangalôs em meio a lagoas + jardim tropical, arquitetura vernacular, fundadora estrangeira. Melhor referência mundial para a relação bangalô + lagoa. |
| Nômade (Tulum/Holbox) | Copy poética, fotografia em mood quente. |
| Fasano Trancoso | Outro extremo: minimalismo limpo, fotografia editorial. |
| Txai Itacaré | Eco-luxo na Bahia, mesmo público. |
| Aldea Kuká (Holbox), Be Tulum, Habitas Tulum | Variantes de "barefoot sofisticado". |
| Capella Ubud, Wild Coast Tented Lodge (SL) | Bangalô-tenda em natureza. |
| Es Ram / Gecko (Formentera), Folegandros boutique | Hippie-chic mediterrâneo, tipografia e paleta mineral. |

## 6. Restrições técnicas (não-negociáveis)

- **Bilíngue PT/EN** desde o primeiro deploy — não fazer "tradução automática depois".
- **Performance crítica.** Público chega navegando do celular já em Porto Seguro/Trancoso, em 4G fraco. Sem libs pesadas de animação. Aprendizado explícito do Solar Dona Dora.
- **Mobile-first real**, não responsivo-pintado.
- **Imagens otimizadíssimas** — WebP/AVIF, responsive, lazy below the fold.

## 7. Estrutura narrativa proposta (substitui a IA padrão)

A home replica o ritual real da chegada — **não** começa por "Sobre / Acomodações / Galeria":

```
1. Como chegar      — a travessia de canoa
2. A vila           — Caraíva: ruas de areia, cultura, pôr do sol na Barra
3. A pousada        — a lagoa, o oásis, a história da Herminia
4. Os bangalôs      — quartos, fotos, capacidades
5. Bem-estar        — yoga, meditação, massagem, café vegano
6. Casamentos       — espaço para eventos íntimos
7. Reservas         — CTA principal (modal HQBeds)
```

A IA do site segue dessa lógica. Proposta:

```
/                  Home (narrativa em 7 atos, scroll único)
/a-vila/           Caraíva: vila, cultura, atrações, como chegar
/a-pousada/        História + a lagoa + filosofia
/os-bangalos/      Catálogo de quartos
/bem-estar/        Yoga, meditação, massagem, alimentação
/casamentos/       Eventos íntimos
/galeria/          Lightbox (opcional — pode embutir em /os-bangalos/ e /a-pousada/)
/contato/          Form + mapa + canais
```

## 8. O que ainda precisa ser confirmado com o cliente

- Faixa de preço por bangalô e variação de tarifa.
- Política exata de pet, crianças, café da manhã, cancelamento, formas de pagamento.
- Existe motor de reservas próprio (HQBeds / Omnibees / outro) ou o cliente está em Booking only?
- WhatsApp oficial (número formato `5541999999999`), perfil oficial no Instagram.
- GTM container ID, endpoint do webhook (n8n / Zapier).
- Domínio definitivo.
- Banco de fotos disponível, direitos de uso.
- Logo + favicon em vetor.
- Existe CNPJ formal e razão social a usar em rodapé/JSON-LD.
- Coordenadas exatas (lat/lng) e CEP da pousada.
- Se há retiros agendados / pacotes de wellness / preço de eventos a serem listados ou se isso é só "sob consulta".
