# Método Komplexa Hotéis

> Por que cada centímetro existe.
> A metodologia que usamos para construir sites boutique onde toda decisão pode ser explicada — da palavra do botão ao tempo da animação.

---

## Manifesto — O método

Estúdios convencionais começam pelo design. A Komplexa começa pela pergunta. Antes de uma cor, uma palavra ou uma animação, existe uma justificativa — rastreável até um princípio fundador, até a alma do hotel, até a jornada do hóspede.

O método que segue é como navegamos o hóspede do primeiro segundo ao fechamento: cinco princípios fundadores e oito atos em ordem fixa, todos servindo um único movimento — *sentir, entender, desejar, confiar, decidir, agir*.

---

# Princípios fundadores — Os cinco

São axiomas. Se uma decisão posterior não consegue ser rastreada até um deles, a decisão é arbitrária — e provavelmente errada.

---

## 01 · Conceito-âncora primeiro

**Lede.** O hóspede sai do site sabendo dizer, em uma frase, por que esse hotel é diferente — e essa repetição é a hipótese de venda mais barata que o hotel tem.

**Como aplica.** Nenhuma decisão visual ou estrutural é tomada antes da frase-âncora estar fechada. Uma frase, 8–12 palavras, que se for apagada não sobra projeto.

**Origem.** Big Idea · Ogilvy & Aaker.

**O que isso impede.**
"RESERVE AGORA" como frase do hero, slogans publicitários no lugar do conceito, ou "Bem-vindo ao paraíso". São peças promocionais, não a frase-âncora do hotel.

---

## 02 · Performance é parte da marca

**Lede.** Performance é a primeira impressão antes do primeiro pixel. Um boutique que abre devagar, rola hesitando ou gagueja ao toque comunica desleixo — por mais refinado que seja o resto.

**Como aplica.** Vídeo, som ambiente, sticky scroll, parallax entram quando o ato pede e existem para contar algo. O que não entra é animação em cada bloco e hover effect em cada elemento: isso fragmenta o ritmo e o hóspede começa a perceber o site em vez de sentir o lugar. Performance budget entra no briefing de marca como número específico, não como aspiração.

**Origem.** Core Web Vitals · RAIL · Nielsen.

**O que isso impede.**
Animação ornamental em cada bloco e hover effect que compete com o conteúdo. Bibliotecas de motion carregadas global (GSAP, Lenis) sem code-splitting. Imagens sem WebP/AVIF responsivo. Mais de três pesos por família tipográfica. Vídeo hero sem `preload="metadata"` + poster.

---

## 03 · Restrição como linguagem

**Lede.** Cada elemento que sobra é silêncio que o hóspede ouve. Boutique se constrói pelo que se subtrai, não pelo que se acumula — e essa subtração é o que faz o conceito-âncora aparecer.

**Como aplica.** Boutique não é opulência — é curadoria, ausência calculada, silêncio entre os elementos. Cada componente que o cliente quer adicionar tem que justificar por que rouba atenção do conceito-âncora.

**Origem.** Less but better · Dieter Rams · Wabi-sabi.

**O que isso impede.**
Popup de e-mail na chegada. Chat agressivo. Doze itens no menu principal. Múltiplas paletas concorrentes. Carrossel automático na seção de prova social.

---

## 04 · A jornada do hóspede é a arquitetura

**Lede.** O site é vivido como ritual de chegada — sentir, entender, desejar, confiar, decidir — exatamente nessa ordem. A arquitetura espelha a curva emocional do hóspede, não o organograma do hotel.

**Como aplica.** O hóspede atravessa cinco estados antes de reservar — **sentir → entender → desejar → confiar → decidir**. A arquitetura do site espelha esse percurso na ordem exata em que acontece. Cada seção responde a um desses estados; a home é o primeiro capítulo, não a vitrine.

**Origem.** Jornada do hóspede · Customer Journey · Jobs-to-be-Done.

**O que isso impede.**
Foto de quarto na primeira dobra. Formulário de contato no início do scroll. Página "Sobre" com história institucional antes do conceito. Reordenar os atos por preferência do cliente.

---

## 05 · Conversão é serviço, não interrupção

**Lede.** A reserva é o último gesto de uma conversa que o site começou. O CTA chega no momento em que ele já é desejo declarado, não interrupção — e a fricção até o motor é mínima porque a confiança já foi construída.

**Como aplica.** A reserva direta acontece no motor — e o site inteiro existe para levar o hóspede até lá com fricção mínima e confiança máxima. Popup invasivo, chat agressivo, formulário disparado cedo: interrompem em vez de servir. WhatsApp e e-mail apoiam quem hesita; o motor é onde o sim vira receita.

**Origem.** Reserva direta · Friction audit · Roger Dooley.

**O que isso impede.**
Timer de "promoção acaba em 5 minutos". Pedir cadastro antes de acessar o motor. CTA cintilante em cor saturada. Popup de oferta na entrada do site.

---

# Os oito atos — Mesma ordem

> Sentir → Compreender → Querer → Imaginar-me → Habitar → Confirmar → Expandir → Aceitar.
> A curva emocional de qualquer decisão de compra de alto valor.

| # | Ato | Verbo |
|---|---|---|
| 01 | Hero | Seduzir |
| 02 | Dobra de Apoio | Ancorar |
| 03 | Experiências | Convidar |
| 04 | Acomodações | Projetar |
| 05 | Espaços Comuns | Habitar |
| 06 | Prova Social *(opcional)* | Validar |
| 07 | Segmento Secundário *(condicional)* | Amplificar |
| 08 | Reserva | Encontrar |

---

## Ato 01 · Hero — Seduzir

**Função.** Os primeiros segundos. *Sentir*, antes de qualquer informação. Big idea + sensorial.

**Demo de referência.** Reveal por `clip-path` em cadência editorial · vídeo ambient · zero CTA.

### O que entra
- Movimento ambiente do elemento-marca (água, mata, luz).
- Conceito-âncora ou nome do hotel em cadência lenta.
- Zero CTA. Zero foto de quarto. Zero preço.

### O que entrega
- Hóspede está sonhando, não pesquisando.
- Primeira mensagem comunicada em < 5 segundos.
- Posiciona como experiência, não commodity.

### Animação
- Camadas em movimento sutil.
- Reveal tipográfico via `clip-path`.
- Dissolve no início do scroll.

### Pedido comum que viola este ato
"Quero RESERVE AGORA bem grande no topo" — pedido legítimo, mas pertence ao Ato 8. No Ato 1, o site está vendendo o lugar, não a transação.

---

## Ato 02 · Dobra de Apoio — Ancorar

**Função.** A primeira rolagem. Onde estamos, que tipo de lugar é, qual a alma — em uma respiração.

**Demo de referência.** Stack-card overlap · line-reveal em cadência decrescente · três blocos: destino, hotel, essência.

### O que entra
- Frase do destino com sensação (não endereço).
- Posicionamento do hotel dentro do destino.
- Pequena história da essência (não a longa, que vai em `/sobre/`).

### O que entrega
- Sem moldura, todo o resto vira ornamento solto.
- O hóspede precisa de uma frase para repetir ao parceiro.
- Confiança nasce na primeira rolagem.

### Animação
- Stack-card primário entra sobre o hero.
- Line-reveal em cadência decrescente por bloco.
- Foto larga do território com art direction por breakpoint.

### Pedido comum que viola este ato
"Coloca aqui a história completa do hotel" — pertence à página Sobre. Aqui é apenas a frase que o hóspede repete pro parceiro. História institucional cedo afasta antes de envolver.

---

## Ato 03 · Experiências — Convidar

**Função.** Plantar o desejo da estadia *antes* do quarto. Aqui mora a inversão que separa boutique de hotel comum.

**Demo de referência.** Carrossel · drag-to-scroll · pinned horizontal (desktop) · scroll-snap nativo (mobile) · proporção retrato.

### O que entra
- 4–7 experiências com nome próprio.
- Foto retrato cinematográfica por experiência.
- Frases sensoriais curtas (1–2 linhas cada).

### O que entrega
- Boutique vende estadia, não diária.
- Quando chega no quarto, já está convertido em frequentador.
- Inversão que diferencia de Booking.com.

### Animação
- Pinned horizontal: site assume controle por alguns segundos.
- Snap-points por experiência (cada uma respira).
- Mobile: scroll-snap nativo, gesto natural.

### Pedido comum que viola este ato
"Aqui poderia ter a tabela de preços por noite" — pertence ao motor de reservas (Ato 8). Aqui o desejo é plantado, não vendido. Preço cedo trava a imaginação no orçamento.

---

## Ato 04 · Acomodações — Projetar

**Função.** Onde dormir. Já está convertido — agora *escolhe*.

**Demo de referência.** Stack-cards verticais full-bleed · cada tipologia é seu próprio card cinema.

### O que entra
- Tipologias com nome próprio (nunca "quarto standard").
- Foto principal full-bleed, cinema-grade.
- 2–3 elementos sensoriais distintivos por tipologia.

### O que entrega
- Quarto vem depois do desejo plantado, nunca antes.
- Catálogo de arquitetura, não de hotel.
- Decisão é vista, não vendida.

### Animação
- Stack-cards verticais full-bleed.
- Volta ao batimento do template após o pinned horizontal.
- Reveal interno do conteúdo na entrada do card.

### Pedido comum que viola este ato
"Quero chamar de Quarto Standard, Quarto Superior e Suíte Master" — boutique não tem categoria hierárquica. Cada tipologia é seu próprio personagem, com nome próprio. Hierarquia de "melhor / pior" deprecia tudo abaixo do topo.

---

## Ato 05 · Espaços Comuns — Habitar

**Função.** Os lugares *entre* os momentos. Onde o hóspede está quando não está no quarto e não está numa atividade.

**Demo de referência.** Split-sticky scroll · imagem pinada à esquerda, texto rola à direita · cross-fade.

### O que entra
- 3–5 espaços onde o hóspede naturalmente para.
- Foto sem pessoas posando ("respirando").
- Texto curto, quase legenda. Sem CTA.

### O que entrega
- Boutique vende tempo morto elegante.
- Fecha o ciclo de imaginação física.
- Sem este ato, há lacuna que o cliente sente sem nomear.

### Animação
- Split-sticky scroll (técnica UXUA / Aesop).
- Animação mais lenta e contemplativa do template.
- Cross-fade entre imagens em ritmo de leitura.

### Pedido comum que viola este ato
"Pode pular essa seção, é redundante com a galeria" — sem ela, o hóspede não consegue se imaginar habitando o lugar fora dos momentos pré-agendados. É o ato mais subestimado e o que mais impacta retenção.

---

## Ato 06 · Prova Social — Validar  *(opcional)*

**Função.** Confirmação externa. Outros viveram, outros aprovam.

**Demo de referência.** Reveal estático sequencial · sem carrossel automático · nome inteiro & procedência.

### O que entra
- 2–4 depoimentos reais, autorização documentada.
- Imprensa relevante (Condé Nast, Casa Vogue, NYT).
- Selos / prêmios apenas se honrosos.

### O que entrega
- Confirmação externa antes do salto da reserva.
- Tarde no scroll, não cedo (não soa defensivo).
- Nunca preencher com fake — quebra retroativamente.

### Animação
- Reveal estático sequencial.
- Sem carrossel automático (clichê hospitality).
- Substância, não movimento.

### Pedido comum que viola este ato
"Inventa três depoimentos só pra preencher" — quebra retroativamente todo o método. Sem depoimento real autorizado, este ato se omite. Vazio é melhor que falsidade — o leitor sente.

---

## Ato 07 · Segmento Secundário — Amplificar  *(condicional)*

**Função.** Se o hotel atende um segundo público com decisão de compra distinta — casamentos, retiros, eventos.

**Demo de referência.** Tom dramaticamente diferente · line-by-line reveal · copy-driven.

### O que entra
- Casamentos, retiros, eventos privativos.
- Foto âncora dramática, full-bleed.
- CTA específico para subpágina.

### O que entrega
- Segundo público tem jornada de compra própria.
- Penúltimo no scroll: quem busca casamento começa aqui.
- Omitir se não for ≥ 15% do faturamento.

### Animação
- Line-by-line reveal copy-driven.
- Tom dramaticamente diferente do resto.
- Motion serve à leitura.

### Pedido comum que viola este ato
"O hotel também faz festa de 15 anos, podemos colocar?" — só entra se for ≥ 15% do faturamento e tiver curadoria distinta. Caso contrário, polui a navegação principal e dilui o segmento que de fato sustenta o ato.

---

## Ato 08 · Reserva — Encontrar

**Função.** A passagem do digital para o humano. O hóspede está pronto; o site se afasta.

**Demo de referência.** Tom epistolar · três canais (motor, WhatsApp, e-mail) · motion = ruído.

### O que entra
- Carta do anfitrião em primeira pessoa.
- Três canais: motor, WhatsApp, e-mail.
- Convite, não venda.

### O que entrega
- Hóspede chegou aqui realmente pronto.
- CTA cedo é interrupção; CTA aqui é serviço.
- Última seção cede atenção para a ação.

### Animação
- Reveal único na entrada.
- Sem mais nada.
- Na seção que converte, motion = ruído.

### Pedido comum que viola este ato
"Aqui pode ter formulário longo, com data de aniversário, profissão, etc." — fricção máxima no momento da decisão. Três canais (motor, WhatsApp, e-mail) e nada mais. Cada campo extra reduz reserva.

---

# Encerramento — O encontro

**Vamos construir o seu?**

Se você chegou até aqui, alguma coisa do método já te tocou. Conta sobre o seu hotel — a Komplexa devolve um caminho.

- Escrever para a Komplexa: contato@komplexahoteis.com
- Conversar no WhatsApp.

---

*© Komplexa Hotéis · Arquitetura de crescimento para reservas diretas.*
