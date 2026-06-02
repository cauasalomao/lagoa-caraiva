# Revisão Completa — Pousada Lagoa Caraíva
**Data:** 26/05/2026

---

## BUGS E ERROS ENCONTRADOS

### CRÍTICOS (impedir publicação)

| # | Página | Problema | Ação |
|---|--------|----------|------|
| ~~1~~ | ~~`index.html`~~ | ~~Footer~~ | Footer correto — "Komplexa Hotéis" é o nome certo |
| 2 | `a-vila/index.html` | Página antiga com menu errado, logo texto, footer com TODO, créditos errados | Deletar (não está no menu atual) |
| 3 | `bem-estar/index.html` | Página duplicada da experiências — nav aponta para si mesma, footer com TODO e créditos errados | Deletar (conteúdo já existe em `/experiencias/`) |
| 4 | `contato/index.html` | Página antiga de contato — não está no menu atual | Deletar ou redirecionar para `/a-pousada/` |
| 5 | `bangalo-amarelo.html` | 14 placeholders "Aguardando foto" na galeria strip | Adicionar fotos reais ou remover strip |
| 6 | `bangalo-laranja.html` | 14 placeholders "Aguardando foto" na galeria strip | Adicionar fotos reais ou remover strip |
| 7 | `bangalo-lilas.html` | Placeholders "Aguardando foto" no photo-trio e na strip | Adicionar fotos reais ou remover |
| 8 | `bangalo-branco.html` | Placeholders "Aguardando foto" no photo-trio e na strip | Adicionar fotos reais ou remover |

### ALTOS (corrigir antes de publicar)

| # | Página | Problema | Ação |
|---|--------|----------|------|
| 9 | Bangalôs (4 páginas) | Meta descriptions idênticas (copiadas do Azul) | Criar meta descriptions únicas para cada |
| 10 | `bangalo-amarelo.html` | Meta description diz "bangalô mais próximo da lagoa" — texto do Azul | Corrigir para texto do Amarelo |
| 11 | `bangalo-laranja.html` | Meta description genérica | Personalizar |
| 12 | `bangalo-lilas.html` | Meta description genérica | Personalizar |
| 13 | `bangalo-branco.html` | Meta description genérica | Personalizar |

---

## INFORMAÇÕES QUE FALTAM PARA PUBLICAR

### Do cliente (pendente)

| # | Item | Onde é usado | Status |
|---|------|-------------|--------|
| 1 | **Logo PNG original** com transparência limpa | Todas as páginas (header + footer) | Logo atual tem artefatos da conversão JPG→PNG |
| 2 | **Fotos dos bangalôs Amarelo** (interior, banheiro) | `bangalo-amarelo.html` — strip de galeria | Tem hero + 5 fotos, faltam ~9 para galeria |
| 3 | **Fotos do bangalô Laranja** (mais interiores) | `bangalo-laranja.html` — strip de galeria | Tem hero + 5 fotos, faltam ~9 |
| 4 | **Fotos do bangalô Lilás** (interiores, banheiro) | `bangalo-lilas.html` — photo-trio + strip | Tem só hero, faltam todas as interiores |
| 5 | **Fotos do bangalô Branco** (interiores, banheiro) | `bangalo-branco.html` — photo-trio + strip | Tem só hero, faltam todas as interiores |
| 6 | **Vídeo do hero** (`hero.mp4`) | `index.html` — hero da home | Referenciado no HTML mas arquivo não confirmado |
| 7 | **Áudio ambiente** (`hero-ambient.mp3`) | `index.html` — toggle de som | Referenciado no HTML mas arquivo não confirmado |
| 8 | **Domínio final** | Canonical, sitemap, JSON-LD, OG tags | Ainda não definido |
| 9 | **Facebook URL real** | Menu overlay (todas as páginas) | Atualmente aponta para facebook.com/pousadalagoacaraiva (não verificado) |

### Técnicas (a fazer)

| # | Item | Descrição |
|---|------|-----------|
| 10 | **JSON-LD Schema.org** | LodgingBusiness na home, WebPage nas internas — não implementado |
| 11 | **Open Graph + Twitter Cards** | Meta tags para compartilhamento em redes sociais — não implementado |
| 12 | **Canonical URLs** | `<link rel="canonical">` — depende do domínio final |
| 13 | **sitemap.xml** | Mapa do site para SEO — não criado |
| 14 | **robots.txt** | Atualmente todas as páginas têm noindex,nofollow — trocar para produção |
| 15 | **Favicon** | Não implementado |
| 16 | **Webhook do formulário de contato** | URL configurada (webhook.cidigitalmarketing.com) mas formulário não implementado na página de contato atual |
| 17 | **WhatsApp capture modal** | Definido no CLAUDE.md como obrigatório — não implementado |
| 18 | **Booking modal** | Definido no CLAUDE.md — atualmente abre Cloudbeds direto em nova aba (funciona, mas sem modal de captura) |

---

## PÁGINAS OBSOLETAS (candidatas a deletar)

| Pasta | Conteúdo | Recomendação |
|-------|----------|--------------|
| `a-vila/` | Página antiga "A Vila" — menu errado, footer com TODO | **Deletar** |
| `bem-estar/` | Cópia antiga da página de experiências | **Deletar** (conteúdo em `/experiencias/`) |
| `contato/` | Página antiga de contato | **Deletar** (contato agora em `/a-pousada/`) |
| `variacoes-acomodacoes/` | Variações de teste | **Deletar** antes de publicar |
| `variacoes-bangalo/` | Variações de teste | **Deletar** |
| `variacoes-dobra2/` | Variações de teste | **Deletar** |
| `variacoes-entres/` | Variações de teste | **Deletar** |
| `variacoes-experiencias/` | Variações de teste | **Deletar** |
| `variacoes-galeria/` | Variações de teste | **Deletar** |
| `variacoes-bangalos-lista/` | Variações de teste | **Deletar** |
| `variacoes-transicao/` | Variações de teste | **Deletar** |
| `triagem-galeria/` | Fotos duplicadas para triagem | **Deletar** |
| `metodo/` | Página de metodologia | **Deletar** (não está no menu) |
| `metodologia/` | Página de metodologia | **Deletar** |

---

## STATUS POR PÁGINA (páginas oficiais)

| Página | URL | Desktop | Mobile | Status |
|--------|-----|---------|--------|--------|
| Home | `/` | OK | OK | 95% — falta footer credit |
| Bangalôs (lista) | `/os-bangalos/` | OK | OK | 100% |
| Bangalô Azul | `/os-bangalos/bangalo-azul.html` | OK | OK | 100% |
| Bangalô Amarelo | `/os-bangalos/bangalo-amarelo.html` | OK | OK | 70% — faltam fotos galeria |
| Bangalô Laranja | `/os-bangalos/bangalo-laranja.html` | OK | OK | 70% — faltam fotos galeria |
| Bangalô Lilás | `/os-bangalos/bangalo-lilas.html` | OK | OK | 50% — faltam fotos trio+galeria |
| Bangalô Branco | `/os-bangalos/bangalo-branco.html` | OK | OK | 50% — faltam fotos trio+galeria |
| Experiências | `/experiencias/` | OK | OK | 100% |
| Galeria | `/galeria/` | OK | OK | 100% |
| Eventos | `/casamentos/` | OK | OK | 100% |
| Contato | `/a-pousada/` | OK | OK | 100% |

---

## INTEGRAÇÕES IMPLEMENTADAS

| Integração | Status | Detalhes |
|------------|--------|----------|
| GTM | ✅ Implementado | GTM-TS2X8Z5L em todas as páginas |
| Cloudbeds | ✅ Implementado | openBooking() em todas as páginas |
| WhatsApp | ✅ Implementado | 557399856862 em links, botão float e contato |
| Instagram | ✅ Implementado | @lagoacaraiva no menu overlay e footer |
| Webhook | ⚠️ Configurado mas sem form | URL definida, formulário não implementado |

---

## CHECKLIST PRÉ-PUBLICAÇÃO

- [x] Footer "Komplexa Hotéis" está correto
- [ ] Deletar páginas obsoletas (a-vila, bem-estar, contato, variações, triagem)
- [ ] Receber fotos dos bangalôs Lilás e Branco (interiores)
- [ ] Completar fotos das galerias dos bangalôs Amarelo e Laranja
- [ ] Atualizar meta descriptions dos bangalôs (únicas por página)
- [ ] Receber logo PNG original com transparência limpa
- [ ] Confirmar vídeo hero e áudio ambiente
- [ ] Definir domínio final
- [ ] Implementar JSON-LD, OG tags, canonical, sitemap
- [ ] Trocar robots de noindex para index
- [ ] Adicionar favicon
- [ ] Confirmar Facebook URL
- [ ] Testar todos os links de WhatsApp
- [ ] Testar Cloudbeds em produção
- [ ] Testar GTM events
