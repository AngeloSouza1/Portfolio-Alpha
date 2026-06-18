# Explicacao do codigo

Este documento serve como guia de estudo e manutencao dos tres arquivos
principais do projeto: `index.html`, `assets/css/styles.css` e `assets/js/script.js`.

## index.html

### Inicio do arquivo: base do documento

- `<!DOCTYPE html>` informa ao navegador que a pagina usa HTML5.
- `<html lang="pt-BR">` define o idioma principal como portugues do Brasil.
- `<head>` guarda informacoes tecnicas que nao aparecem diretamente no corpo.
- `charset="UTF-8"` permite acentos e caracteres especiais.
- `viewport` faz o layout responder corretamente no celular.
- `description` melhora o resumo da pagina para buscadores.
- `<title>` define o texto da aba do navegador.
- O script curto do tema le o `localStorage` antes do CSS carregar para evitar piscada visual.
- `preload` antecipa o carregamento da imagem principal do hero.
- `stylesheet` conecta o arquivo `assets/css/styles.css`.

### Header e navegacao

- `<header class="site-header" id="topo">` cria o topo fixo da pagina.
- `.brand` e o link da marca; ao clicar, volta para `#topo`.
- `.brand__mark` cria o quadrado com a inicial `A`.
- `.header-actions` agrupa o botao de tema e o botao hamburguer.
- `.theme-toggle` alterna entre modo claro e modo escuro.
- `.nav-toggle` e o botao hamburguer usado no mobile.
- `aria-expanded="false"` informa que o menu comeca fechado.
- `aria-controls="site-nav"` aponta qual menu esse botao controla.
- `.sr-only` guarda um texto acessivel para leitores de tela.
- `<nav class="site-nav">` agrupa os links principais.
- Cada `<a href="#...">` leva para uma secao com o mesmo `id`.

### Hero

- `<main>` contem o conteudo principal da pagina.
- `.hero` e a primeira secao visual.
- `aria-labelledby="hero-title"` liga a secao ao titulo principal.
- `.hero__media` guarda a imagem decorativa de fundo.
- `aria-hidden="true"` impede que leitores de tela anunciem essa imagem decorativa.
- `alt=""` reforca que a imagem nao precisa de descricao textual.
- `.hero__content` guarda o texto e os botoes.
- `.section-shell` limita a largura do conteudo.
- `.eyebrow` e um rotulo pequeno acima do titulo.
- `<h1>` e o titulo mais importante da pagina.
- Os `<span>` dentro do titulo ajudam a controlar as quebras de linha.
- `.hero__actions` agrupa os botoes principais.

### Sobre

- `.section` aplica espacamento vertical padrao.
- `.section--intro` diferencia o fundo dessa area.
- `id="sobre"` permite o link do menu.
- `.about-layout` organiza o titulo em cima e, abaixo, foto e texto lado a lado no desktop.
- `.about-heading` guarda o rotulo e o titulo da secao.
- `.about-media` exibe a foto de perfil na area "Sobre mim".
- O `alt` da imagem descreve a foto para leitores de tela.
- `.about-copy` concentra os paragrafos de apresentacao.

### Habilidades

- `id="habilidades"` conecta a secao ao menu.
- `.section-heading` padroniza titulo e rotulo da secao.
- `.skills-grid` organiza os cards em grade.
- Cada `.skill-card` e um bloco independente.
- `.skill-card__top` alinha o numero do card com o icone.
- Os `svg` dos cards sao icones decorativos e usam `aria-hidden="true"`.
- `<article>` e usado porque cada habilidade tem conteudo proprio.

### Projetos

- `.section--projects` muda o fundo da area de projetos.
- `.projects-grid` distribui os cards.
- `.project-card` representa um projeto.
- `.reveal` marca o card para animacao via JavaScript.
- `.project-card__visual` guarda a imagem/thumbnail do projeto.
- O `alt` de cada imagem descreve visualmente o projeto.
- `.project-card__body` guarda texto, tags e links.
- A lista `<ul>` mostra tecnologias usadas.
- Cada card possui um link direto para o respectivo repositório no GitHub.

### Contato

- `.contact-layout` cria duas colunas: texto e cards de contato.
- `<address>` agrupa canais de contato com significado semantico.
- `target="_blank"` abre LinkedIn/GitHub em nova aba.
- `rel="noreferrer"` melhora seguranca e privacidade ao abrir nova aba.
- `.contact-link` representa cada canal clicavel.
- Os icones SVG identificam e-mail, GitHub e LinkedIn.

### Footer e script

- `<footer>` fecha a pagina com creditos.
- O link `#topo` volta para o header.
- `<script src="assets/js/script.js"></script>` carrega o JavaScript no fim do body.
- Carregar no fim evita buscar elementos antes de eles existirem no DOM.

## styles.css

### Design tokens

- `:root` define variaveis CSS acessiveis no projeto inteiro.
- Cores, sombra, fonte, raio de borda, altura do header e espacamento ficam centralizados.
- `clamp()` permite valores responsivos sem muitas media queries.
- `var(--nome-da-variavel)` reutiliza esses valores em qualquer seletor.

### Reset e base

- `box-sizing: border-box` deixa largura e padding mais previsiveis.
- `scroll-behavior: smooth` suaviza o scroll dos links internos.
- `body` define fundo, cor, fonte e altura de linha.
- `body.nav-open` trava a rolagem quando o menu mobile esta aberto.
- `img` evita espaco extra e impede estouro horizontal.
- `a` remove sublinhado padrao.
- `button, input, textarea` herdam a fonte do site.
- `.sr-only` esconde texto visualmente, mas mantem para leitores de tela.
- `.section-shell` centraliza o conteudo e limita largura.

### Header

- `.site-header` fica fixo no topo.
- `z-index: 10` coloca o header acima das secoes.
- `display: flex` alinha marca e navegacao.
- `.is-scrolled` e `.nav-active` mudam o fundo do header.
- `.brand` alinha inicial e nome.
- `.header-actions` mantem o botao de tema e o menu mobile juntos no header.
- `.site-nav` organiza links em linha no desktop.
- `.site-nav a::after` cria o sublinhado animado no hover.
- `.theme-toggle` estiliza o botao de alternancia de tema.
- `[data-theme="dark"]` troca os icones e as variaveis do modo escuro.
- `.nav-toggle` comeca escondido e aparece em telas menores.
- Os `nth-child` transformam as barras do hamburguer em `X`.

### Hero e botoes

- `.hero` define a primeira dobra com altura quase total da tela.
- `.hero::after` cria o overlay escuro sobre a imagem.
- `.hero__media` posiciona a imagem no fundo.
- `object-fit: cover` faz a imagem preencher sem distorcer.
- `.hero__content` fica acima da imagem com `z-index`.
- O grupo de seletores de `h1/h2` padroniza titulos grandes.
- `.hero h1 span` forca quebras de linha controladas.
- `.button` define o estilo base dos botoes.
- `.button--primary` e o botao principal.
- `.button--ghost` e o botao secundario vazado.

### Secoes e cards

- `.section` aplica espacamento vertical.
- `.section--intro` e `.section--projects` mudam fundos por contexto.
- `.about-layout` usa areas de grid para alinhar titulo, foto e texto.
- `.contact-layout` cria uma grade de duas colunas para texto e links de contato.
- `.about-media` define tamanho, borda, sombra e recorte da foto de perfil.
- `.skills-grid` e `.projects-grid` usam CSS Grid.
- `.skill-card` e `.project-card` compartilham borda, fundo e sombra.
- `.skill-card::before` cria a faixa colorida no topo do card.
- `.skill-card:hover` eleva o card e reforca borda/sombra para mostrar interacao.
- `.skill-card__icon` estiliza os icones SVG com borda, fundo e transicao.
- `.project-card` comeca invisivel e deslocado.
- `.project-card.is-visible` aparece quando o JavaScript adiciona a classe.
- `.project-card.is-visible:hover` eleva o card, reforca sombra e muda a borda.
- `.project-card__visual` define a area superior onde a thumbnail do projeto aparece.
- `.project-card__visual img` faz a imagem preencher o topo do card sem distorcer.
- No hover, a thumbnail ganha leve escala, contraste e saturacao.
- `.project-card ul/li` formatam tags de tecnologia.

### Contato

- `.contact-copy` usa `position: sticky` para permanecer visivel no desktop.
- `.contact-links` organiza links profissionais.
- `.contact-links` empilha os cards de contato.
- `.contact-link` cria cada card clicavel com icone e texto.
- `.contact-link:hover` muda borda, sombra e icone para reforcar interacao.

### Footer, animacoes e responsividade

- `.site-footer` define o rodape escuro.
- `@keyframes heroEnter` cria entrada suave do texto do hero.
- `prefers-reduced-motion` reduz animacoes para quem configurou isso no sistema.
- `@media (max-width: 900px)` transforma a navegacao em menu mobile.
- Tambem muda grids de multiplas colunas para uma coluna.
- `@media (max-width: 560px)` ajusta altura do header, hero, titulo, botoes e cards.

## script.js

### Seletores

- `document.querySelector` pega um unico elemento.
- `document.querySelectorAll` pega uma lista de elementos.
- As constantes guardam header, botao do menu, botao de tema, nav, links, cards animados e o link de voltar ao topo.

### Funcoes auxiliares

- `syncHeaderState` adiciona ou remove `.is-scrolled` conforme a rolagem passa de 16px.
- `syncThemeToggle` sincroniza texto acessivel e estado visual do botao de tema.
- `classList.toggle("classe", condicao)` adiciona se a condicao for verdadeira e remove se for falsa.
- `closeMenu` fecha o menu mobile removendo classes visuais.
- `aria-expanded="false"` informa tecnologias assistivas que o menu esta fechado.

### Menu e header

- O clique no botao verifica se o menu ja esta aberto.
- As classes `.nav-open`, `.is-open` e `.nav-active` controlam corpo, nav e header.
- `String(!isOpen)` converte `true/false` para texto exigido pelo atributo HTML.
- Cada link do menu recebe um listener para fechar a nav ao navegar.
- O listener de `scroll` atualiza o header durante a rolagem.
- `{ passive: true }` informa que o listener nao bloqueia o scroll.
- `syncHeaderState()` roda uma vez no carregamento para definir o estado inicial.
- O clique em `.theme-toggle` alterna `data-theme` entre `light` e `dark`.
- `localStorage` guarda o tema escolhido para manter a preferencia ao recarregar.
- O link `.back-to-top` usa `window.scrollTo` para subir ao topo com rolagem suave.

### Animacao dos projetos

- `IntersectionObserver` observa quando elementos entram na tela.
- `entries` contem informacoes dos elementos observados.
- `entry.isIntersecting` fica verdadeiro quando o card aparece no viewport.
- `.is-visible` ativa a transicao definida no CSS.
- `unobserve` evita observar novamente depois da primeira animacao.
- `threshold: 0.18` exige que 18% do card esteja visivel antes de animar.
